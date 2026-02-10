import { ArrowRight, Package, Globe, Zap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 md:pt-32">
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
            <button 
              onClick={scrollToContact}
              className="bg-orange-500 text-white px-8 py-4 rounded-md hover:bg-orange-600 transition-colors flex items-center gap-2 text-lg"
            >
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white px-8 py-4 rounded-md hover:bg-white hover:text-blue-900 transition-colors text-lg"
            >
              Our Services
            </button>
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
              <div className="text-3xl font-bold text-white mb-1">50+</div>
              <div className="text-gray-200">Countries Served</div>
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
  );
}