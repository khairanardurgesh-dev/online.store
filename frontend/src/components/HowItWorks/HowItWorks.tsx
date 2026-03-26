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

export const HowItWorks: React.FC = () => {
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
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className={`absolute -top-4 -left-4 w-8 h-8 bg-${
                    step.color === 'blue' ? 'blue' : 
                    step.color === 'purple' ? 'purple' : 
                    step.color === 'green' ? 'green' : 
                    'orange'
                  }-600 text-white rounded-full flex items-center justify-center font-bold text-lg`}
                >
                  {step.number}
                </motion.div>

                {/* Content */}
                <div className="ml-12">
                  <div className={`bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                    step.color === 'blue' ? 'border-blue-200' : 
                    step.color === 'purple' ? 'border-purple-200' : 
                    step.color === 'green' ? 'border-green-200' : 
                    'border-orange-200'
                  }`}>
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-lg ${
                        step.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                        step.color === 'purple' ? 'bg-purple-100 text-purple-600' : 
                        step.color === 'green' ? 'bg-green-100 text-green-600' : 
                        'bg-orange-100 text-orange-600'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      animate={{ y: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-8 left-1/2 w-16"
                    >
                      <ArrowRightIcon className="w-6 h-6 text-gray-400" />
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
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
      </div>
    </section>
    </section>
  );
};
