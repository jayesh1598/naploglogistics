import { Plane, Ship, Truck, Warehouse, Package, Globe } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Air Freight',
    description: 'Fast and reliable air cargo services for urgent shipments. We partner with leading airlines to ensure your goods reach their destination quickly.',
    features: ['Express delivery', 'Door-to-door service', 'Customs clearance', 'Real-time tracking']
  },
  {
    icon: Ship,
    title: 'Sea Freight',
    description: 'Cost-effective ocean freight solutions for large-volume shipments. We handle FCL and LCL containers with complete documentation support.',
    features: ['FCL & LCL services', 'Port-to-port delivery', 'Cargo insurance', 'Documentation handling']
  },
  {
    icon: Truck,
    title: 'Road Transport',
    description: 'Comprehensive ground transportation services across the country. Our fleet ensures safe and timely delivery to any location.',
    features: ['Full truckload (FTL)', 'Less than truckload (LTL)', 'Temperature-controlled', 'Last-mile delivery']
  },
  {
    icon: Warehouse,
    title: 'Warehousing',
    description: 'Modern storage facilities with advanced inventory management systems. Secure your goods in our climate-controlled warehouses.',
    features: ['Climate control', 'Inventory management', 'Pick & pack services', '24/7 security']
  },
  {
    icon: Package,
    title: 'Custom Clearance',
    description: 'Expert customs brokerage services to ensure smooth clearance of your shipments. We handle all documentation and compliance requirements.',
    features: ['Import/export clearance', 'Documentation support', 'Duty calculation', 'Compliance management']
  },
  {
    icon: Globe,
    title: 'Global Logistics',
    description: 'End-to-end international logistics solutions tailored to your business needs. We manage the entire supply chain from origin to destination.',
    features: ['Multi-modal transport', 'Supply chain consulting', 'Risk management', 'Quality assurance']
  }
];

export function ServicesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-blue-100">Comprehensive logistics solutions tailored to your business needs</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-orange-500 font-semibold mb-2">OUR SERVICES</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Complete Range of Logistics Services
            </h2>
            <p className="text-gray-600 text-lg">
              From air freight to warehousing, we offer a complete range of logistics services designed to meet your unique business requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="group bg-white border border-gray-200 rounded-lg p-8 hover:shadow-2xl hover:border-orange-500 transition-all duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Need a Custom Logistics Solution?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Our team of experts can create a tailored logistics plan for your specific requirements.
            </p>
            <a 
              href="/contact"
              className="inline-block bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-lg font-semibold"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
