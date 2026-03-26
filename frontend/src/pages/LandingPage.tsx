import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  StarIcon,
  UserGroupIcon,
  CpuChipIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/solid';
import { 
  PlayIcon,
  CheckBadgeIcon,
  SparklesIcon,
  FireIcon
} from '@heroicons/react/24/outline';

import { Hero } from '../components/Hero/Hero';
import { ProblemSection } from '../components/ProblemSection/ProblemSection';
import { SolutionSection } from '../components/SolutionSection/SolutionSection';
import { TestimonialSection } from '../components/TestimonialSection/TestimonialSection';
import { HowItWorksWorking } from '../components/HowItWorks/HowItWorksWorking';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <ProblemSection />

      {/* Solution Section */}
      <SolutionSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* How It Works */}
      {/* <HowItWorksWorking /> */}

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Skills into Income?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 100+ developers who are already using our system to build profitable digital businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                <span className="flex items-center">
                  Start Your 7-Day Transformation
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Watch Demo First
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <p className="text-gray-400">Complete digital solution for developers</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <p className="text-gray-400">Built by developers, for developers</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <p className="text-gray-400">24/7 customer service</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">
              © 2024 Digital Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
