import { Clock, Shield, HeadphonesIcon, TrendingUp, MapPin, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on our 99.8% on-time delivery rate, ensuring your shipments arrive when expected.',
    details: 'Our advanced logistics management system and dedicated team ensure that your shipments are tracked and delivered on schedule. We understand the importance of timely delivery in your business operations.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Comprehensive insurance coverage and secure handling protocols protect your cargo throughout its journey.',
    details: 'We implement strict security measures at every stage of the logistics process. From secure warehousing to GPS-tracked vehicles, your cargo is protected 24/7.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support team ready to assist you with any queries or concerns.',
    details: 'Our dedicated support team is available around the clock to answer your questions, provide updates, and resolve any issues promptly.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Flexible logistics solutions that grow with your business needs, from small parcels to bulk shipments.',
    details: 'Whether you\'re a startup or an established enterprise, our scalable solutions adapt to your changing requirements without compromising quality or efficiency.'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Advanced GPS tracking systems provide real-time visibility of your shipments at every stage.',
    details: 'Track your shipments in real-time through our advanced tracking portal. Get instant notifications and updates on your cargo\'s location and status.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Cost-effective logistics solutions without compromising on quality or reliability.',
    details: 'Our efficient operations and strong network of partners enable us to offer competitive rates while maintaining the highest standards of service.'
  }
];

export function WhyChooseUsPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Why Choose Us</h1>
          <p className="text-xl text-blue-100">Discover the Naplog Logistics advantage</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <div className="text-orange-500 font-semibold mb-2">THE NAPLOG ADVANTAGE</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Experience the Difference
            </h2>
            <p className="text-gray-600 text-lg">
              We combine industry expertise, cutting-edge technology, and a customer-first approach to deliver exceptional logistics services. Here's why thousands of businesses trust us with their logistics needs.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-8 hover:shadow-xl transition-all duration-300"
                >
                  <Icon className="w-12 h-12 text-orange-500 mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-700 mb-4 text-lg">{feature.description}</p>
                  <p className="text-gray-600">{feature.details}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Track Record</h2>
            <p className="text-blue-200 text-lg">Numbers that speak for themselves</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-orange-400 mb-2">10,000+</div>
              <div className="text-blue-100">Shipments Delivered</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-orange-400 mb-2">9+</div>
              <div className="text-blue-100">Office Locations</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-orange-400 mb-2">99.8%</div>
              <div className="text-blue-100">On-Time Delivery</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20">
              <div className="text-5xl font-bold text-orange-400 mb-2">15+</div>
              <div className="text-blue-100">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-orange-500 rounded-2xl p-12 text-center text-white">
            <h3 className="text-4xl font-bold mb-4">Ready to Ship with Confidence?</h3>
            <p className="text-xl mb-8 text-orange-100">
              Join thousands of satisfied customers who trust Naplog Logistics for their shipping needs.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-white text-orange-500 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Request a Quote Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
