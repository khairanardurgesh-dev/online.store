import React from 'react';
import { motion } from 'framer-motion';
import { 
  StarIcon,
  UserGroupIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

export const TestimonialSection: React.FC = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      avatar: "SC",
      content: "I was struggling to sell my coding skills until I found this system. Now I make $5,000/month from digital products while focusing on what I love.",
      rating: 5,
      result: "Generated $47,320 in 3 months"
    },
    {
      name: "Mike Rodriguez",
      role: "UI/UX Designer",
      avatar: "MR",
      content: "As a designer, I never thought I could create scalable income. This platform helped me turn my design templates into a profitable business.",
      rating: 5,
      result: "Built 6-figure design business"
    },
    {
      name: "Emily Johnson",
      role: "Mobile Developer",
      avatar: "EJ",
      content: "The AI features are incredible! It found niches I didn't even know existed. My first product made $2,000 in the first week.",
      rating: 5,
      result: "Launched 3 successful apps"
    },
    {
      name: "David Kim",
      role: "Data Scientist",
      avatar: "DK",
      content: "I automated what used to take me weeks of work. Now I can analyze markets and create products in days, not months.",
      rating: 4,
      result: "10x productivity increase"
    },
    {
      name: "Lisa Thompson",
      role: "Content Creator",
      avatar: "LT",
      content: "Finally, a platform that understands content creators! I turned my tutorials into multiple income streams.",
      rating: 5,
      result: "Multiple revenue streams established"
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
            className="inline-flex items-center bg-purple-100 text-purple-600 rounded-full px-4 py-2 mb-8"
          >
            <UserGroupIcon className="w-6 h-6 mr-2" />
            <span className="font-semibold">Join 100+ Successful Entrepreneurs</span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Real Results from Real People
          </motion.h2>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-6 mb-12 text-white"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">127+</div>
                <div className="text-sm opacity-80">Active Users</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$2.4M+</div>
                <div className="text-sm opacity-80">Revenue Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm opacity-80">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold">98%</div>
                <div className="text-sm opacity-80">Success Rate</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200"
              >
                <div className="flex items-start mb-4">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-purple-600 font-medium">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  {/* Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-4">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <p className="text-sm text-gray-500">Result:</p>
                    <p className="font-semibold text-gray-900">{testimonial.result}</p>
                  </div>
                  <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex flex-wrap justify-center gap-8 text-gray-500"
          >
            <div className="flex items-center">
              <CheckBadgeIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">Secure Payment Processing</span>
            </div>
            <div className="flex items-center">
              <CheckBadgeIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">30-Day Guarantee</span>
            </div>
            <div className="flex items-center">
              <CheckBadgeIcon className="w-5 h-5 mr-2" />
              <span className="text-sm">24/7 Support</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
