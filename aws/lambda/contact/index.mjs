import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';

const ses = new SESClient({ region: process.env.AWS_REGION });

export const handler = async (event) => {
  const method = getHttpMethod(event);
  if (method === 'OPTIONS') {
    return response(200, { ok: true });
  }

  if (method !== 'POST') {
    return response(405, { error: 'Method not allowed' });
  }

  try {
    const body = JSON.parse(event?.body ?? '{}');
    const name = sanitize(body.name, 120);
    const email = sanitize(body.email, 180);
    const message = sanitize(body.message, 3000);

    if (!name || !email || !message) {
      return response(400, { error: 'name, email, and message are required' });
    }

    if (!isValidEmail(email)) {
      return response(400, { error: 'Invalid email format' });
    }

    const fromEmail = requiredEnv('SES_FROM_EMAIL');
    const toEmail = requiredEnv('TO_EMAIL');

    const command = new SendEmailCommand({
      Source: fromEmail,
      Destination: { ToAddresses: [toEmail] },
      ReplyToAddresses: [email],
      Message: {
        Subject: { Data: `New contact message from ${name}` },
        Body: {
          Text: {
            Data: [
              `Name: ${name}`,
              `Email: ${email}`,
              '',
              'Message:',
              message,
            ].join('\n'),
          },
        },
      },
    });

    await ses.send(command);
    return response(200, { ok: true });
  } catch (error) {
    console.error('Lambda error:', error);
    return response(500, { error: 'Failed to send message' });
  }
};

function getHttpMethod(event) {
  return event?.requestContext?.http?.method || event?.httpMethod || 'POST';
}

function sanitize(value, maxLength) {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLength);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function response(statusCode, body) {
  return {
    statusCode,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': process.env.CORS_ORIGIN || '*',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'OPTIONS,POST',
    },
    body: JSON.stringify(body),
  };
}
