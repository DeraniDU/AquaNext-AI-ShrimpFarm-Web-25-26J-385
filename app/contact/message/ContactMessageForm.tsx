'use client';

import { FormEvent, useMemo, useState } from 'react';

type Status = 'idle' | 'sending' | 'success' | 'error';

export default function ContactMessageForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorText, setErrorText] = useState('');

  const apiUrl = useMemo(() => process.env.NEXT_PUBLIC_CONTACT_API_URL?.trim() ?? '', []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorText('');
    const form = event.currentTarget;

    if (!apiUrl) {
      setStatus('error');
      setErrorText('Contact API is not configured. Please set NEXT_PUBLIC_CONTACT_API_URL.');
      return;
    }

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    };

    if (!payload.name || !payload.email || !payload.message) {
      setStatus('error');
      setErrorText('Please fill in all fields.');
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorBody = await response.json().catch(() => null);
        const message =
          errorBody && typeof errorBody.error === 'string'
            ? errorBody.error
            : `Request failed with status ${response.status}`;
        throw new Error(message);
      }

      form.reset();
      setStatus('success');
    } catch (error) {
      console.error('Failed to submit contact form:', error);
      setStatus('error');
      setErrorText(
        error instanceof Error ? error.message : 'Unable to send your message right now. Please try again.',
      );
    }
  }

  return (
    <form className="space-y-5" onSubmit={onSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-semibold mb-2">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          placeholder="Enter your full name"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold mb-2">
          Email Address
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="Enter your email"
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="Type your message here..."
          className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
        />
      </div>

      {status === 'success' ? (
        <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
          Message sent successfully. We will contact you soon.
        </p>
      ) : null}

      {status === 'error' ? (
        <p className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
          {errorText}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all text-sm disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === 'sending' ? 'Sending...' : 'Submit Message'}
      </button>
    </form>
  );
}
