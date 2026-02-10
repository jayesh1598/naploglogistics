import { Clock, Shield, HeadphonesIcon, TrendingUp, MapPin, DollarSign } from 'lucide-react';

const features = [
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'We pride ourselves on our 99.8% on-time delivery rate, ensuring your shipments arrive when expected.'
  },
  {
    icon: Shield,
    title: 'Safe & Secure',
    description: 'Comprehensive insurance coverage and secure handling protocols protect your cargo throughout its journey.'
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Round-the-clock customer support team ready to assist you with any queries or concerns.'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Solutions',
    description: 'Flexible logistics solutions that grow with your business needs, from small parcels to bulk shipments.'
  },
  {
    icon: MapPin,
    title: 'Real-Time Tracking',
    description: 'Advanced GPS tracking systems provide real-time visibility of your shipments at every stage.'
  },
  {
    icon: DollarSign,
    title: 'Competitive Pricing',
    description: 'Cost-effective logistics solutions without compromising on quality or reliability.'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-orange-400 font-semibold mb-2">WHY CHOOSE US</div>
          <h2 className="text-4xl font-bold mb-4">
            Experience the Naplog Advantage
          </h2>
          <p className="text-blue-200 text-lg">
            We combine industry expertise, cutting-edge technology, and a customer-first approach to deliver exceptional logistics services.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <Icon className="w-12 h-12 text-orange-400 mb-4" />
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-blue-100">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-orange-500 rounded-lg p-8 md:p-12 inline-block">
            <h3 className="text-3xl font-bold mb-4">Ready to Ship with Confidence?</h3>
            <p className="text-lg mb-6 text-orange-100">
              Join thousands of satisfied customers who trust Naplog Logistics for their shipping needs.
            </p>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-orange-500 px-8 py-4 rounded-md hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Request a Quote Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
