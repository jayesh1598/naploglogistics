import { CheckCircle, Target, Users, Award, ShoppingCart, Package, Truck } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 mb-12">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100">Learn more about Naplog Logistics and our commitment to excellence</p>
        </div>
      </section>

      {/* Company Profile */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtb2Rlcm4lMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcwNjUyNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Naplog warehouse"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-8 rounded-lg shadow-xl">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>

            <div>
              <div className="text-orange-500 font-semibold mb-2">ABOUT NAPLOG LOGISTICS</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Company Profile
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Naplog Logistics Pvt.Ltd, customer experience will always be the heart of our operations. We strive to achieve excellence for all our customer's needs. We combine our deep understanding of the customer's internal & external requirement with our strategic approach.
              </p>
              <p className="text-gray-600 mb-8">
                Our greatest strength is our personnel. Also our commitment to hard work ensures delivering of the highest standard of service in the logistics industry.
              </p>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Excellence</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Personnel</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-semibold text-gray-900">Commitment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg">
              <Target className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                Our Vision is to deliver a positive, reliable experience to each and every one of our clients. We do this by helping them get their products to market quickly, efficiently, and safely.
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-lg">
              <Award className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                Our Mission is to provide complete logistics solutions that are not only efficient but also reliable & affordable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-12 bg-gray-50">
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
            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <ShoppingCart className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  01
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Order Received</h3>
              <p className="text-gray-600">Order Received From Clients</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Package className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  02
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Package Pickup</h3>
              <p className="text-gray-600">Package Pickup</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Truck className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  03
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Goods Forwarding</h3>
              <p className="text-gray-600">Goods Forwarding</p>
            </div>

            <div className="text-center">
              <div className="relative inline-block mb-6">
                <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle className="w-12 h-12 text-blue-600" />
                </div>
                <div className="absolute -top-2 -right-2 w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                  04
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Goods Delivered</h3>
              <p className="text-gray-600">Delivered</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
