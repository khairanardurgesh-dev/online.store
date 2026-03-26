import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  RocketLaunchIcon,
  CreditCardIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';

export const HowItWorksFinal: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Connect",
      description: "Create your account and connect your existing tools and repositories",
      icon: PlayIcon,
      color: "blue"
    },
    {
      number: "02",
      title: "AI Analysis",
      description: "Our AI analyzes your skills and identifies profitable digital product opportunities",
      icon: RocketLaunchIcon,
      color: "purple"
    },
    {
      number: "03",
      title: "Create & Deploy",
      description: "Build and launch your digital products with our one-click deployment system",
      icon: CheckCircleIcon,
      color: "green"
    },
    {
      number: "04",
      title: "Earn & Scale",
      description: "Start generating revenue from day one with built-in marketing and payment processing",
      icon: CurrencyDollarIcon,
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Section Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="inline-flex items-center bg-orange-100 text-orange-600 rounded-full px-4 py-2 mb-8"
          >
            <RocketLaunchIcon className="w-6 h-6 mr-2" />
            <span className="font-semibold">How It Works in 4 Simple Steps</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          >
            From Zero to Profitable Digital Business in Under 7 Days
          </motion.h2>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-${step.color}-100 text-${step.color}-600`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="mt-4">
                    {index < steps.length - 1 && (
                      <div className="absolute top-8 left-1/2 w-16">
                        <ArrowRightIcon className="w-6 h-6 text-gray-400" />
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="text-center mt-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.3 }}
              className="inline-flex items-center bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl"
            >
              <CreditCardIcon className="w-5 h-5 mr-2" />
              Start Your Journey Today - Only $97
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
