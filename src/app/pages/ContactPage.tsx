import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100">Get in touch with our team for all your logistics needs</p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />
    </div>
  );
}
