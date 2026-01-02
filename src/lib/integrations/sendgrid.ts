/**
 * SendGrid Email Integration
 * Sends transactional emails (calculator reports, booking confirmations)
 */

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
  from?: string;
  fromName?: string;
  attachments?: Array<{
    content: string;
    filename: string;
    type: string;
  }>;
}

/**
 * Send email via SendGrid
 */
export async function sendEmail(options: EmailOptions): Promise<boolean> {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    console.warn('SendGrid API key not configured');
    return false;
  }

  try {
    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: options.to }],
            subject: options.subject,
          },
        ],
        from: {
          email: options.from || process.env.SENDGRID_FROM_EMAIL || 'noreply@twelfthkey.com',
          name: options.fromName || process.env.SENDGRID_FROM_NAME || 'TwelfthKey Consulting',
        },
        content: [
          {
            type: 'text/html',
            value: options.html,
          },
        ],
        attachments: options.attachments,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`SendGrid error: ${errorData.errors?.[0]?.message || response.statusText}`);
    }

    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Send calculator report email
 */
export async function sendCalculatorReportEmail(
  to: string,
  calculatorType: string,
  reportUrl: string,
  userName?: string
): Promise<boolean> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E3A5F;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1E3A5F; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">TwelfthKey Consulting</h1>
          </div>
          <div style="background: #FAFAFA; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1E3A5F;">Your ${calculatorType} Report is Ready</h2>
            ${userName ? `<p>Hi ${userName},</p>` : '<p>Hi there,</p>'}
            <p>Thank you for using our ${calculatorType} calculator. Your personalized report is ready for download.</p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${reportUrl}" style="background: #C7A566; color: white; padding: 12px 32px; text-decoration: none; border-radius: 8px; display: inline-block; font-weight: bold;">
                Download Report
              </a>
            </div>
            <p style="color: #6B7280; font-size: 14px;">
              If you have any questions or would like to discuss your results, please don't hesitate to reach out.
            </p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
            <p style="color: #6B7280; font-size: 12px; text-align: center;">
              © 2025 TwelfthKey Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: `Your ${calculatorType} Report - TwelfthKey Consulting`,
    html,
  });
}

/**
 * Send discovery call confirmation email
 */
export async function sendDiscoveryCallConfirmation(
  to: string,
  bookingDate: string,
  bookingTime: string,
  meetingLink?: string,
  userName?: string
): Promise<boolean> {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #1E3A5F;">
        <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #1E3A5F; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">TwelfthKey Consulting</h1>
          </div>
          <div style="background: #FAFAFA; padding: 30px; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1E3A5F;">Discovery Call Confirmed</h2>
            ${userName ? `<p>Hi ${userName},</p>` : '<p>Hi there,</p>'}
            <p>Your discovery call has been scheduled:</p>
            <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #C7A566;">
              <p style="margin: 0;"><strong>Date:</strong> ${bookingDate}</p>
              <p style="margin: 5px 0;"><strong>Time:</strong> ${bookingTime}</p>
              ${meetingLink ? `<p style="margin: 5px 0;"><strong>Meeting Link:</strong> <a href="${meetingLink}">${meetingLink}</a></p>` : ''}
            </div>
            <p>We're excited to learn about your business and discuss how TwelfthKey can help you achieve operational excellence.</p>
            <p style="color: #6B7280; font-size: 14px;">
              If you need to reschedule, please let us know at least 24 hours in advance.
            </p>
            <hr style="border: none; border-top: 1px solid #E5E7EB; margin: 30px 0;">
            <p style="color: #6B7280; font-size: 12px; text-align: center;">
              © 2025 TwelfthKey Consulting. All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;

  return sendEmail({
    to,
    subject: 'Discovery Call Confirmed - TwelfthKey Consulting',
    html,
  });
}

