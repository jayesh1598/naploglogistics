import { Facebook, Twitter, Linkedin, Instagram, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              {/* ✅ FIXED LOGO */}
              <img
                src="assets/c8fae6d8b72b096580232544c5f16dc08c1c047a.png"
                alt="Naplog Logistics"
                className="h-12 w-12 object-contain"
              />
              <div>
                <h3 className="text-white text-xl font-bold">NAPLOG</h3>
                <p className="text-xs text-gray-400">Logistics Pvt. Ltd.</p>
              </div>
            </div>

            <p className="text-gray-400 mb-4">
              Your trusted partner in complete logistics solutions. Efficient, reliable & affordable.
            </p>

            <div className="flex gap-3">
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-orange-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-md hover:bg-orange-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-orange-500 transition-colors">Services</Link></li>
              <li><Link to="/contact" className="hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Air Freight</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Sea Freight</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Road Transport</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Warehousing</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Custom Clearance</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Global Logistics</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-white">Registered Office:</p>
                  <span className="text-sm">7, Babulal Lane, 1st Floor, Kolkata - 700007</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm font-semibold text-white">Corporate Office:</p>
                  <span className="text-sm">Godiwala Banglow, Gala No.6, Azad Road, Vile Parle (e), Mumbai - 400057</span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href="mailto:info@naploglogistics.com" className="hover:text-orange-500 transition-colors text-sm">
                  info@naploglogistics.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Naplog Logistics Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-orange-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-500 transition-colors">Terms of Service</a>
              <a href="https://b2b.naploglogistics.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Login</a>
              <a href="https://b2b.naploglogistics.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition-colors">Tracking</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
