import { upsertHubSpotContact, createHubSpotDeal, associateContactWithDeal } from '../hubspot';

// Mock fetch globally
global.fetch = jest.fn();

describe('HubSpot Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    process.env.HUBSPOT_API_KEY = 'test-api-key';
  });

  afterEach(() => {
    delete process.env.HUBSPOT_API_KEY;
  });

  describe('upsertHubSpotContact', () => {
    it('should create a new contact when contact does not exist', async () => {
      (global.fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ results: [] }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ id: 'contact-123' }),
        });

      const result = await upsertHubSpotContact({
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
      });

      expect(result).toBe('contact-123');
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    it('should update existing contact when contact exists', async () => {
      (global.fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ results: [{ id: 'contact-456' }] }),
        })
        .mockResolvedValueOnce({
          ok: true,
        });

      const result = await upsertHubSpotContact({
        email: 'existing@example.com',
        firstName: 'Jane',
      });

      expect(result).toBe('contact-456');
      expect(global.fetch).toHaveBeenCalledTimes(2);
    });

    it('should return null when API key is not configured', async () => {
      delete process.env.HUBSPOT_API_KEY;

      const result = await upsertHubSpotContact({
        email: 'test@example.com',
      });

      expect(result).toBeNull();
    });

    it('should handle API errors gracefully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        statusText: 'Bad Request',
      });

      await expect(
        upsertHubSpotContact({
          email: 'test@example.com',
        })
      ).rejects.toThrow();
    });

    it('should handle network errors', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      await expect(
        upsertHubSpotContact({
          email: 'test@example.com',
        })
      ).rejects.toThrow('Network error');
    });

    it('should send correct contact data', async () => {
      (global.fetch as jest.Mock)
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ results: [] }),
        })
        .mockResolvedValueOnce({
          ok: true,
          json: async () => ({ id: 'contact-123' }),
        });

      await upsertHubSpotContact({
        email: 'test@example.com',
        firstName: 'John',
        lastName: 'Doe',
        phone: '+1234567890',
        company: 'Acme Corp',
      });

      const createCall = (global.fetch as jest.Mock).mock.calls[1];
      expect(createCall[0]).toContain('/crm/v3/objects/contacts');
      expect(JSON.parse(createCall[1].body)).toMatchObject({
        properties: {
          email: 'test@example.com',
          firstName: 'John',
          lastName: 'Doe',
          phone: '+1234567890',
          company: 'Acme Corp',
        },
      });
    });
  });

  describe('createHubSpotDeal', () => {
    it('should create a deal successfully', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: async () => ({ id: 'deal-123' }),
      });

      const result = await createHubSpotDeal({
        dealName: 'Test Deal',
        pipeline: 'default',
        dealStage: 'appointmentscheduled',
        amount: 100000,
      });

      expect(result).toBe('deal-123');
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    it('should return null when API key is not configured', async () => {
      delete process.env.HUBSPOT_API_KEY;

      const result = await createHubSpotDeal({
        dealName: 'Test Deal',
        pipeline: 'default',
        dealStage: 'appointmentscheduled',
      });

      expect(result).toBeNull();
    });

    it('should handle API errors', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: async () => ({ message: 'Invalid data' }),
      });

      await expect(
        createHubSpotDeal({
          dealName: 'Test Deal',
          pipeline: 'default',
          dealStage: 'appointmentscheduled',
        })
      ).rejects.toThrow();
    });
  });

  describe('associateContactWithDeal', () => {
    it('should associate contact with deal', async () => {
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
      });

      await associateContactWithDeal('contact-123', 'deal-456');

      expect(global.fetch).toHaveBeenCalledTimes(1);
      expect(global.fetch).toHaveBeenCalledWith(
        expect.stringContaining('/crm/v4/objects/contacts/contact-123/associations/deals/deal-456'),
        expect.objectContaining({
          method: 'PUT',
        })
      );
    });

    it('should handle errors silently', async () => {
      (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));

      // Should not throw
      await expect(associateContactWithDeal('contact-123', 'deal-456')).resolves.toBeUndefined();
    });

    it('should return early when API key is not configured', async () => {
      delete process.env.HUBSPOT_API_KEY;

      await associateContactWithDeal('contact-123', 'deal-456');

      expect(global.fetch).not.toHaveBeenCalled();
    });
  });
});

