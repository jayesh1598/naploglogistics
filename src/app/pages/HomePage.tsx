import { Link } from 'react-router-dom';
import { ArrowRight, Package, Globe, Zap, CheckCircle, Plane, Ship, Truck, Warehouse } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-24 md:pt-32">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1632517306067-b54ab4d1f98d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJnbyUyMHNoaXAlMjBsb2dpc3RpY3MlMjBvY2VhbnxlbnwxfHx8fDE3NzA1OTMzNTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Logistics background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/70"></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Your Trusted Partner in
              <span className="text-orange-400"> Complete Logistics Solutions</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8">
              Efficient, reliable & affordable logistics solutions. We help you get your products to market quickly, efficiently, and safely with our 24*7 customer support.
            </p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link 
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2 text-lg"
              >
                Get a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-900 transition-colors text-lg"
              >
                Our Services
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Package className="w-10 h-10 text-orange-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">10,000+</div>
                <div className="text-gray-200">Shipments Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Globe className="w-10 h-10 text-orange-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">9+</div>
                <div className="text-gray-200">Office Locations</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
                <Zap className="w-10 h-10 text-orange-400 mb-3" />
                <div className="text-3xl font-bold text-white mb-1">99.8%</div>
                <div className="text-gray-200">On-Time Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1619070284836-e850273d69ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YXJlaG91c2UlMjBtb2Rlcm4lMjBsb2dpc3RpY3N8ZW58MXx8fHwxNzcwNjUyNjkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Naplog warehouse"
                className="rounded-lg shadow-2xl"
              />
            </div>

            <div>
              <div className="text-orange-500 font-semibold mb-2">ABOUT NAPLOG LOGISTICS</div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Company Profile
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Naplog Logistics Pvt.Ltd, customer experience will always be the heart of our operations. We strive to achieve excellence for all our customer's needs.
              </p>
              <p className="text-gray-600 mb-6">
                Our greatest strength is our personnel. Also our commitment to hard work ensures delivering of the highest standard of service in the logistics industry.
              </p>
              
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-orange-500 font-semibold mb-2">OUR SERVICES</div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Logistics Solutions
            </h2>
            <p className="text-gray-600 text-lg">
              From air freight to warehousing, we offer a complete range of logistics services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-orange-500 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Plane className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Air Freight</h3>
              <p className="text-gray-600 text-sm">Fast and reliable air cargo services for urgent shipments worldwide.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-orange-500 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Ship className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sea Freight</h3>
              <p className="text-gray-600 text-sm">Cost-effective ocean freight solutions for large-volume shipments.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-orange-500 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Road Transport</h3>
              <p className="text-gray-600 text-sm">Comprehensive ground transportation services across the country.</p>
            </div>

            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-xl hover:border-orange-500 transition-all">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                <Warehouse className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Warehousing</h3>
              <p className="text-gray-600 text-sm">Modern storage facilities with advanced inventory management.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/services"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-lg"
            >
              View All Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Overview */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-orange-400 font-semibold mb-2">WHY CHOOSE US</div>
            <h2 className="text-4xl font-bold mb-4">
              Experience the Naplog Advantage
            </h2>
            <p className="text-blue-200 text-lg">
              We combine industry expertise, cutting-edge technology, and a customer-first approach.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-orange-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">On-Time Delivery</h3>
              <p className="text-blue-100">99.8% on-time delivery rate ensuring your shipments arrive when expected.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-orange-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">24/7 Support</h3>
              <p className="text-blue-100">Round-the-clock customer support ready to assist you anytime.</p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
              <CheckCircle className="w-10 h-10 text-orange-400 mb-3" />
              <h3 className="text-xl font-bold mb-2">Competitive Pricing</h3>
              <p className="text-blue-100">Cost-effective solutions without compromising quality or reliability.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/why-choose-us"
              className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-lg"
            >
              Learn Why Choose Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 to-blue-700 rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready to Ship with Confidence?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Join thousands of satisfied customers who trust Naplog Logistics for their shipping needs.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link 
                to="/contact"
                className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors text-lg"
              >
                Get Started Today
              </Link>
              <a 
                href="https://b2b.naploglogistics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-900 transition-colors text-lg"
              >
                Track Your Shipment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
