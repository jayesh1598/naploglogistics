import { useState } from 'react';
import { MapPin, Mail, Clock } from 'lucide-react';

const offices = [
  {
    city: 'Kolkata',
    type: 'Reg Office',
    address: '7, Babulal Lane, 1st Floor, Kolkata - 700007.'
  },
  {
    city: 'Mumbai',
    type: 'Corp Office',
    address: 'Godiwala Banglow, Gala No.6, Azad Road, Vile Parle (e), Mumbai - 400057.'
  },
  {
    city: 'Surat',
    type: 'Office',
    address: '103, Vaikunth Appartment, Ghiya Sheri, Mahidharpura, Surat - 395003.'
  },
  {
    city: 'Jaipur',
    type: 'Office',
    address: 'G9, Heera Panna, Derewala Complex, Partaniyon Ka Rasta, Johari Bazar, Jaipur - 302003.'
  },
  {
    city: 'Ahmedabad',
    type: 'Office',
    address: 'Shop no.06, 24 Caret, Near Rock Regency Hotel, Swagat Char Rasta, Opp Lal Banglow, C.G Road, Ahmedabad - 380009.'
  },
  {
    city: 'New Delhi',
    type: 'Office',
    address: '2656-57, 2nd Floor, Gali no.8, Chuna Mandi, Paharganj, New Delhi - 110055.'
  },
  {
    city: 'Chennai',
    type: 'Office',
    address: 'Old no.241, Wall Tax Road, (Inside Ottavadai Street), Near Blue Star Hotel, Chennai - 600003.'
  },
  {
    city: 'Hyderabad',
    type: 'Office',
    address: 'Sri Mahalakshmi Niwas, Building H no.3-3-310, Rangrej Bazar, Subhash Road, Hyderabad - 500003.'
  },
  {
    city: 'Bangalore',
    type: 'Office',
    address: 'No.06, 4th Main, 1st Cross, S.R. Nagar, Bangalore - 560027.'
  }
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send data to a backend
    alert('Thank you for your inquiry! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-orange-500 font-semibold mb-2">GET IN TOUCH</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us Today
          </h2>
          <p className="text-gray-600 text-lg">
            Have a question or need a quote? Our team is here to help you with all your logistics needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Mail className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Email Us</h3>
              <div className="space-y-1 text-gray-600 text-sm">
                <p><a href="mailto:support@naploglogistics.com" className="hover:text-orange-500">support@naploglogistics.com</a></p>
                <p><a href="mailto:info@naploglogistics.com" className="hover:text-orange-500">info@naploglogistics.com</a></p>
                <p><a href="mailto:sales@naploglogistics.com" className="hover:text-orange-500">sales@naploglogistics.com</a></p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="font-semibold text-gray-900 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                Monday - Saturday: 10:00 am - 9:00 pm<br />
                24*7 Customer Support
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="+91 1234567890"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 font-semibold mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    >
                      <option value="">Select a service</option>
                      <option value="air-freight">Air Freight</option>
                      <option value="sea-freight">Sea Freight</option>
                      <option value="road-transport">Road Transport</option>
                      <option value="warehousing">Warehousing</option>
                      <option value="custom-clearance">Custom Clearance</option>
                      <option value="global-logistics">Global Logistics</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="Tell us about your logistics needs..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-lg font-semibold"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Office Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">{office.city}</h4>
                    <p className="text-xs text-orange-600 mb-2">{office.type}</p>
                    <p className="text-sm text-gray-600">{office.address}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}