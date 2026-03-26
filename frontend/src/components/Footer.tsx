import React from 'react';
import { Link } from 'react-router-dom';
import { 
  EnvelopeIcon, 
  PhoneIcon, 
  MapPinIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">DigitalStore</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your trusted marketplace for premium digital products. 
              Build, launch, and earn with our carefully curated collection 
              of developer resources and tools.
            </p>
            <div className="flex space-x-4">
              <button className="text-gray-400 hover:text-white transition-colors">
                <EnvelopeIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <PhoneIcon className="w-5 h-5" />
              </button>
              <button className="text-gray-400 hover:text-white transition-colors">
                <MapPinIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-300 hover:text-white transition-colors">
                  All Products
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-gray-300 hover:text-white transition-colors">
                  Admin Panel
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Features */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center space-x-3">
              <CreditCardIcon className="w-8 h-8 text-primary-500" />
              <div>
                <h4 className="font-semibold">Secure Payment</h4>
                <p className="text-gray-400 text-sm">Safe encrypted transactions</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <ShieldCheckIcon className="w-8 h-8 text-primary-500" />
              <div>
                <h4 className="font-semibold">Instant Download</h4>
                <p className="text-gray-400 text-sm">Get your products immediately</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <TruckIcon className="w-8 h-8 text-primary-500" />
              <div>
                <h4 className="font-semibold">24/7 Support</h4>
                <p className="text-gray-400 text-sm">Always here to help</p>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 DigitalStore. All rights reserved. Built with ❤️ for creators.
          </p>
        </div>
      </div>
    </footer>
  );
};
