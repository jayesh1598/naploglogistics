import { ShoppingCart, Package, Truck, CheckCircle } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: ShoppingCart,
    title: 'Order Received',
    description: 'Order Received From Clients'
  },
  {
    number: '02',
    icon: Package,
    title: 'Package Pickup',
    description: 'Package Pickup'
  },
  {
    number: '03',
    icon: Truck,
    title: 'Goods Forwarding',
    description: 'Goods Forwarding'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Goods Delivered',
    description: 'Delivered'
  }
];

export function WorkProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-orange-500 font-semibold mb-2">OUR WORK PROCESS</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            How We Work
          </h2>
          <p className="text-gray-600 text-lg">
            Our streamlined process ensures efficient handling of your shipments from order to delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                      <Icon className="w-12 h-12 text-blue-600" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                {/* Connection line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-gray-300">
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-l-8 border-l-gray-300 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
