// src/components/ContactForm.tsx
import React, { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbyxvZo8p3oGVQg4GuOy0Ug47FWyA7gEl-IT1PWTuOqZUVxmxjWWkrNVh7Ejl4RzO8Y2/exec";

interface FormData {
  name: string;
  email: string;
  mobile: string;
  message: string;
  consent: boolean;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    mobile: "",
    message: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    setForm((prev) => ({ ...prev, [name]: checked !== undefined ? checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consent) return alert("Please accept the terms.");
    setStatus("submitting");
    try {
      const res = await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        body: new URLSearchParams(form as any),
      });
      const text = await res.text();
      if (text.includes("success")) {
        setStatus("success");
        setForm({ name: "", email: "", mobile: "", message: "", consent: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-navy-700">Name *</label>
        <input
          type="text"
          name="name"
          required
          value={form.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">Email *</label>
        <input
          type="email"
          name="email"
          required
          value={form.email}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">Mobile</label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-navy-700">Message *</label>
        <textarea
          name="message"
          rows={4}
          required
          value={form.message}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
        />
      </div>

      <div className="flex items-start space-x-2">
        <input
          type="checkbox"
          name="consent"
          checked={form.consent}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-teal-600 focus:ring-teal-500"
        />
        <span className="text-xs text-gray-600">
          By submitting this form, I agree to the{" "}
          <a href="/terms-conditions" className="underline">Terms & Conditions</a> and{" "}
          <a href="/privacy-policy" className="underline">Privacy Policy</a>.
        </span>
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-sm text-green-600">Thank you! We’ll be in touch shortly.</p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-600">Something went wrong. Please try again.</p>
      )}
    </form>
  );
};

export default ContactForm;
