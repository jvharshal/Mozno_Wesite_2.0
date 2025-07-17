import { useState } from 'react';
const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyxvZo8p3oGVQg4GuOy0Ug47FWyA7gEl-IT1PWTuOqZUVxmxjWWkrNVh7Ejl4RzO8Y2/exec';

export default function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', mobile: '', message: '', consent: false });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!values.consent) return alert('Please agree to the terms.');
    setStatus('sending');
    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        body: new URLSearchParams(values as any),
      });
      setStatus('success');
      setValues({ name: '', email: '', mobile: '', message: '', consent: false });
    } catch {
      setStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-xl mx-auto">
      <input required name="name" placeholder="Name" value={values.name} onChange={handleChange}
             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500" />
      <input required name="email" type="email" placeholder="Email" value={values.email} onChange={handleChange}
             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500" />
      <input name="mobile" placeholder="Mobile" value={values.mobile} onChange={handleChange}
             className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500" />
      <textarea required name="message" placeholder="Message" rows={4} value={values.message} onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-teal-500 focus:border-teal-500" />
      <label className="flex items-start space-x-2 text-sm">
        <input required name="consent" type="checkbox" checked={values.consent} onChange={(e) => setValues({...values, consent: e.target.checked})} />
        <span>I agree to the <a href="/terms-conditions" className="text-teal-600 underline">Terms & Conditions</a> and <a href="/privacy-policy" className="text-teal-600 underline">Privacy Policy</a>.</span>
      </label>
      <button type="submit" disabled={status === 'sending'}
              className="w-full bg-teal-600 text-white font-semibold py-2 rounded-md hover:bg-teal-700 disabled:opacity-60">
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
      {status === 'success' && <p className="text-green-600 text-center">Thank you! We’ll be in touch soon.</p>}
      {status === 'error' && <p className="text-red-600 text-center">Something went wrong. Please try again.</p>}
    </form>
  );
}
