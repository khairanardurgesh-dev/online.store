import React from 'react';
import { motion } from 'framer-motion';
import { 
  CpuChipIcon,
  RocketLaunchIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const SolutionSection: React.FC = () => {
  const features = [
    {
      icon: CpuChipIcon,
      title: "AI-Powered System",
      description: "Automatically identifies profitable niches based on your skills",
      color: "blue"
    },
    {
      icon: RocketLaunchIcon,
      title: "One-Click Deployment",
      description: "Launch digital products to multiple marketplaces instantly",
      color: "purple"
    },
    {
      icon: CheckCircleIcon,
      title: "Built-in Analytics",
      description: "Track sales, customers, and revenue in real-time",
      color: "green"
    },
    {
      icon: SparklesIcon,
      title: "Template Library",
      description: "Professional templates for every digital product type",
      color: "yellow"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
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
            className="inline-flex items-center bg-green-100 text-green-600 rounded-full px-4 py-2 mb-8"
          >
            <RocketLaunchIcon className="w-6 h-6 mr-2" />
            <span className="font-semibold">Introducing: The Digital Income Machine</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            The Complete System That Turns Your Skills Into Profitable Digital Products
          </motion.h2>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${
                  feature.color === 'blue' ? 'border-blue-200' : 
                  feature.color === 'purple' ? 'border-purple-200' : 
                  feature.color === 'green' ? 'border-green-200' : 
                  'border-yellow-200'
                }`}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${
                    feature.color === 'blue' ? 'bg-blue-100 text-blue-600' : 
                    feature.color === 'purple' ? 'bg-purple-100 text-purple-600' : 
                    feature.color === 'green' ? 'bg-green-100 text-green-600' : 
                    'bg-yellow-100 text-yellow-600'
                  }`}>
                    <feature.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  className={`mt-4 inline-flex items-center text-${
                    feature.color === 'blue' ? 'blue' : 
                    feature.color === 'purple' ? 'purple' : 
                    feature.color === 'green' ? 'green' : 
                    'yellow'
                  }-600 font-semibold hover:opacity-80`}
                >
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 ml-1" />
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Product Preview */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">What You Get</h3>
                <ul className="text-left space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Complete digital product creation system</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>AI-powered niche identification</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Multi-platform deployment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span>Built-in payment processing</span>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-4">Transform Your Future</h3>
                <p className="text-lg mb-6 opacity-90">
                  Stop trading time for money and start building scalable digital assets that generate income while you sleep
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg"
                >
                  Get Started Today
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
