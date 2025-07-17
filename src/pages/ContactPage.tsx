// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-b from-teal-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Let’s Start the Conversation
          </h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Ready to take the next step in your financial journey? Reach out for a no-obligation consultation.
          </p>
        </div>
      </section>

      {/* Two-Column Layout */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-teal-600 mt-1" />
                <div>
                  <p className="font-semibold">Office Address</p>
                  <p className="text-gray-700">
                    Office No.106, Shyamkamal 'C' Building, Agarwal Market,
                    <br />
                    Vile Parle (E), Mumbai - 400 057, Maharashtra, India
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <a href="tel:+919820507696" className="text-gray-700 hover:text-teal-600">
                    +91 98205 07696
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <a href="mailto:contact@mozno.in" className="text-gray-700 hover:text-teal-600">
                    contact@mozno.in
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-teal-600" />
                <div>
                  <p className="font-semibold">Office Hours</p>
                  <p className="text-gray-700">Monday – Saturday: 10:00 AM – 7:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold text-navy-900 mb-6">Send Us a Message</h2>
            <ContactForm onStatusChange={setFormStatus} />
            {formStatus === 'success' && (
              <p className="mt-4 text-green-600">Thank you! We’ll be in touch shortly.</p>
            )}
            {formStatus === 'error' && (
              <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
            )}
          </div>
        </div>
      </section>

      {/* Map Embed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-navy-900 mb-6 text-center">Find Us</h2>
          <div className="aspect-w-16 aspect-h-9 rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7!2d72.8!3d19.1!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA2JzAwLjAiTiA3MsKwNDgnMDAuMCJF!5e0!3m2!1sen!2sin!4v1670000000000"
              width="100%"
              height="400"
              allowFullScreen=""
              loading="lazy"
              title="Mozno Advisory Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
