import { CheckCircle, Target, Users, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
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

          {/* Right - Content */}
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

            {/* Vision & Mission */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Vision</h4>
                  <p className="text-gray-600">To deliver a positive, reliable experience to each and every one of our clients. We do this by helping them get their products to market quickly, efficiently, and safely.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-gray-900">Our Mission</h4>
                  <p className="text-gray-600">To provide complete logistics solutions that are not only efficient but also reliable & affordable.</p>
                </div>
              </div>
            </div>

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
  );
}