import React from 'react';
import { motion } from 'framer-motion';
import { 
  PlayIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  CreditCardIcon,
} from '@heroicons/react/24/outline';

export const HowItWorksWorking: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Sign Up & Connect",
      description: "Create your account and connect your existing tools and repositories",
      icon: PlayIcon
    },
    {
      number: "02", 
      title: "AI Analysis",
      description: "Our AI analyzes your skills and identifies profitable digital product opportunities",
      icon: RocketLaunchIcon
    },
    {
      number: "03",
      title: "Create & Deploy", 
      description: "Build and launch your digital products with our one-click deployment system",
      icon: CheckCircleIcon
    },
    {
      number: "04",
      title: "Earn & Scale",
      description: "Start generating revenue from day one with built-in marketing and payment processing",
      icon: CurrencyDollarIcon
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
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12"
          >
            From Zero to Profitable Digital Business in Under 7 Days
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-100 text-blue-600">
                    <step.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

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
