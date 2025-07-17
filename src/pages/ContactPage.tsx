import ContactForm from '../components/ContactForm';

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 pt-28 pb-16">
      <h1 className="text-3xl font-bold text-navy-900 mb-2 text-center">Let's Start the Conversation</h1>
      <p className="text-center text-gray-700 mb-8">
        Ready to take the next step? Reach out for a no-obligation consultation.
      </p>
      <ContactForm />
    </div>
  );
}
