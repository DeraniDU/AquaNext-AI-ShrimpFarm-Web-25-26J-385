import type { Metadata } from 'next';
import Link from 'next/link';
import ContactMessageForm from './ContactMessageForm';

export const metadata: Metadata = {
  title: 'Send a Message',
  description: 'Share your inquiry with the AquaNext team.',
};

export default function ContactMessagePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 px-5 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-medium text-cyan-700 hover:text-cyan-800 mb-6"
        >
          <span aria-hidden="true">←</span>
          Back to Contact
        </Link>

        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 sm:p-8">
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-2">Send Us a Message</h1>
          <p className="text-sm sm:text-base text-slate-600 mb-8">
            Fill out the form below and our team will get back to you soon.
          </p>

          <ContactMessageForm />
        </div>
      </div>
    </div>
  );
}
