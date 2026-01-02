import { sendEmail, sendCalculatorReportEmail, sendDiscoveryCallConfirmation } from '../sendgrid';

// Mock fetch globally
global.fetch = jest.fn();

describe('SendGrid Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.SENDGRID_API_KEY = 'test-api-key';
    process.env.SENDGRID_FROM_EMAIL = 'noreply@test.com';
    process.env.SENDGRID_FROM_NAME = 'Test Sender';
  });

  afterEach(() => {
    delete process.env.SENDGRID_API_KEY;
    delete process.env.SENDGRID_FROM_EMAIL;
    delete process.env.SENDGRID_FROM_NAME;
  });

  describe('sendEmail', () => {
    it('should send email successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      const result = await sendEmail({
        to: 'recipient@example.com',
        subject: 'Test Subject',
        html: '<p>Test content</p>',
      });

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return false when API key is not configured', async () => {
      delete process.env.SENDGRID_API_KEY;

      const result = await sendEmail({
        to: 'recipient@example.com',
        subject: 'Test',
        html: '<p>Test</p>',
      });

      expect(result).toBe(false);
    });

    it('should handle API errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ errors: [{ message: 'Invalid email' }] }),
      });

      const result = await sendEmail({
        to: 'invalid-email',
        subject: 'Test',
        html: '<p>Test</p>',
      });

      expect(result).toBe(false);
    });

    it('should handle network errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      const result = await sendEmail({
        to: 'recipient@example.com',
        subject: 'Test',
        html: '<p>Test</p>',
      });

      expect(result).toBe(false);
    });

    it('should use default from email when not provided', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await sendEmail({
        to: 'recipient@example.com',
        subject: 'Test',
        html: '<p>Test</p>',
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.from.email).toBe('noreply@test.com');
    });

    it('should include attachments when provided', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await sendEmail({
        to: 'recipient@example.com',
        subject: 'Test',
        html: '<p>Test</p>',
        attachments: [
          {
            content: 'base64content',
            filename: 'report.pdf',
            type: 'application/pdf',
          },
        ],
      });

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.attachments).toHaveLength(1);
      expect(callBody.attachments[0].filename).toBe('report.pdf');
    });
  });

  describe('sendCalculatorReportEmail', () => {
    it('should send calculator report email', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      const result = await sendCalculatorReportEmail(
        'user@example.com',
        'Operational Health Diagnostic',
        'https://example.com/report.pdf',
        'John Doe'
      );

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.personalizations[0].to[0].email).toBe('user@example.com');
      expect(callBody.subject).toContain('Operational Health Diagnostic');
    });

    it('should handle email without user name', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await sendCalculatorReportEmail(
        'user@example.com',
        'Test Calculator',
        'https://example.com/report.pdf'
      );

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.content[0].value).toContain('Hi there');
    });
  });

  describe('sendDiscoveryCallConfirmation', () => {
    it('should send discovery call confirmation', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      const result = await sendDiscoveryCallConfirmation(
        'user@example.com',
        '2025-12-25',
        '10:00 AM',
        'https://zoom.us/meeting',
        'John Doe'
      );

      expect(result).toBe(true);
      expect(global.fetch).toHaveBeenCalledTimes(1);

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.subject).toContain('Discovery Call Confirmed');
      expect(callBody.content[0].value).toContain('2025-12-25');
      expect(callBody.content[0].value).toContain('10:00 AM');
    });

    it('should handle email without meeting link', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await sendDiscoveryCallConfirmation(
        'user@example.com',
        '2025-12-25',
        '10:00 AM',
        undefined,
        'John Doe'
      );

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.content[0].value).not.toContain('Meeting Link');
    });

    it('should handle email without user name', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await sendDiscoveryCallConfirmation(
        'user@example.com',
        '2025-12-25',
        '10:00 AM'
      );

      const callBody = JSON.parse((global.fetch as jest.Mock).mock.calls[0][1].body);
      expect(callBody.content[0].value).toContain('Hi there');
    });
  });
});

