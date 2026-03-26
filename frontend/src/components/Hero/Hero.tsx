import React from 'react';
import { motion } from 'framer-motion';
import { PlayIcon, SparklesIcon, CheckCircleIcon, ShieldCheckIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-500/20" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.2, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.1, 0.2],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute top-40 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            y: [0, -10, 0],
            opacity: [0.1, 0.05, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute bottom-20 left-20 w-64 h-64 bg-pink-500/20 rounded-full blur-xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.3 }}
            className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <SparklesIcon className="w-5 h-5 text-yellow-500 mr-2" />
            <span className="text-sm font-semibold text-gray-700">🔥 NEW 2024 UPDATE</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Turn Your Skills into
            <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Income in 7 Days
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            The complete AI-powered system that transforms your development skills into a profitable digital business - 
            <span className="text-white font-semibold">automatically.</span>
          </motion.p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center group"
            >
              <PlayIcon className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              Start Now - $97
              <span className="absolute -top-8 -right-8 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                Save 60%
              </span>
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.3, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center"
            >
              Watch Demo
              <PlayIcon className="w-5 h-5 ml-2" />
            </motion.button>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex items-center justify-center space-x-8 text-gray-400"
          >
            <div className="flex items-center">
              <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-sm">30-Day Money Back</span>
            </div>
            <div className="flex items-center">
              <ShieldCheckIcon className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-sm">Secure Payment</span>
            </div>
            <div className="flex items-center">
              <UserGroupIcon className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-sm">100+ Active Users</span>
            </div>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.7, duration: 0.5 }}
            className="text-gray-500 text-sm"
          >
            Join <span className="font-semibold text-white">127+</span> developers who started this month
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
