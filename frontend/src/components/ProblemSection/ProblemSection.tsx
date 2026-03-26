import React from 'react';
import { motion } from 'framer-motion';
import { 
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  QuestionMarkCircleIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: ExclamationTriangleIcon,
      title: "No Real Income",
      description: "Your coding skills aren't making you money despite hours of work"
    },
    {
      icon: ClockIcon,
      title: "Wasted Time",
      description: "Spending months on projects that never generate revenue"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Inconsistent Revenue",
      description: "Freelance work is unpredictable and hard to scale"
    },
    {
      icon: QuestionMarkCircleIcon,
      title: "No System",
      description: "No proven process to turn skills into consistent income"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            className="inline-flex items-center bg-red-100 text-red-600 rounded-full px-4 py-2 mb-8"
          >
            <ExclamationTriangleIcon className="w-6 h-6 mr-2" />
            <span className="font-semibold">The Reality Most Developers Face</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Are You Tired of Trading Time for Money?
          </motion.h2>

          {/* Problems Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-red-100 p-3 rounded-lg text-red-600">
                    <problem.icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {problem.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {problem.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Transition Arrow */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex justify-center my-8"
          >
            <div className="flex flex-col items-center">
              <motion.div
                animate={{ x: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
              />
              <ArrowRightIcon className="w-6 h-6 text-purple-600" />
            </div>
          </motion.div>

          {/* Solution Teaser */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              What If You Could Systematically Turn Every Skill Into a Revenue Stream?
            </h3>
            <p className="text-lg text-gray-700 mb-6">
              Imagine having a proven system that automatically transforms your development expertise into profitable digital products - 
              <span className="font-semibold text-purple-600">while you sleep.</span>
            </p>
            <div className="flex items-center justify-center">
              <div className="w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
