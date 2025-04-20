import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">MotoHub</h3>
            <p className="mb-4">Your premier destination for motorcycles, parts, and expert service.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/motorcycles" className="hover:text-red-500 transition-colors">Motorcycles</Link></li>
              <li><Link to="/parts" className="hover:text-red-500 transition-colors">Parts & Accessories</Link></li>
              <li><Link to="/service" className="hover:text-red-500 transition-colors">Service & Maintenance</Link></li>
              <li><Link to="/search" className="hover:text-red-500 transition-colors">Find Your Bike</Link></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">Financing</a></li>
              <li><a href="#" className="hover:text-red-500 transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>123 Motorcycle Avenue, Bike City, BC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-red-500" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-red-500" />
                <a href="mailto:info@motohub.com" className="hover:text-red-500 transition-colors">info@motohub.com</a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">Hours</h3>
            <ul className="space-y-2">
              <li className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9AM - 7PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10AM - 6PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>11AM - 4PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} MotoHub. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <a href="#" className="hover:text-red-500 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;