import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRightIcon, 
  CheckCircleIcon, 
  StarIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  RocketLaunchIcon,
  PlayIcon,
  ExclamationTriangleIcon,
  ClockIcon,
  CurrencyDollarIcon,
  CpuChipIcon,
  SparklesIcon,
  UserGroupIcon
} from '@heroicons/react/24/solid';

export const HighConvertingLandingPage: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 mb-8 border border-white/20"
            >
              <SparklesIcon className="w-5 h-5 mr-2 text-yellow-400" />
              <span className="text-sm font-semibold text-white">🔥 NEW 2024 AI SYSTEM</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              Turn Your Skills into
              <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-bold">
                Income in 7 Days
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              The complete AI-powered system that transforms your development skills into a profitable digital business - 
              <span className="text-white font-semibold">automatically.</span>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('product')}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl flex items-center group"
              >
                <span className="flex items-center">
                  Start Now - $97
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('how-it-works')}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center"
              >
                <PlayIcon className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex items-center justify-center space-x-8 text-gray-400"
            >
              <div className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm">30-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <CreditCardIcon className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-sm">1,247+ Active Users</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section id="problem" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Are You Tired of Trading Time for Money?
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              You have valuable skills, but they're not making you the income you deserve
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: ExclamationTriangleIcon,
                  title: "No Real Income",
                  description: "Your coding skills aren't making you money despite hours of work and learning",
                  color: "red"
                },
                {
                  icon: ClockIcon,
                  title: "Wasted Time",
                  description: "Spending months on projects that never generate revenue or build wealth",
                  color: "orange"
                },
                {
                  icon: CurrencyDollarIcon,
                  title: "No System",
                  description: "No proven process to turn skills into consistent, scalable income",
                  color: "yellow"
                }
              ].map((problem, index) => (
                <motion.div
                  key={problem.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${problem.color}-100 mb-6`}>
                    <problem.icon className={`w-8 h-8 text-${problem.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{problem.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section id="solution" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The AI-Powered Solution That Actually Works
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Our proven system transforms your skills into automated income streams
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: CpuChipIcon,
                  title: "AI Analysis Engine",
                  description: "Our AI analyzes your skills and identifies profitable digital product opportunities you can create",
                  color: "blue"
                },
                {
                  icon: RocketLaunchIcon,
                  title: "One-Click Deployment",
                  description: "Launch your digital products instantly with our automated deployment system",
                  color: "purple"
                },
                {
                  icon: SparklesIcon,
                  title: "Smart Automation",
                  description: "Automated marketing, sales, and delivery so you can focus on creating value",
                  color: "green"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-${feature.color}-200`}
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${feature.color}-100 mb-6`}>
                    <feature.icon className={`w-8 h-8 text-${feature.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PRODUCT SECTION */}
      <section id="product" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Complete Digital Business System
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Everything you need to turn your skills into a profitable digital business
            </p>
            
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 shadow-2xl text-white">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4">
                    <span className="text-sm font-semibold">LIMITED TIME OFFER</span>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    Just $97
                  </div>
                  <div className="text-xl opacity-90 line-through mb-2">
                    Normally $497
                  </div>
                  <div className="text-sm opacity-75">
                    Save $400 (80% off)
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-xl font-bold mb-4">What You Get:</h3>
                    <ul className="space-y-3">
                      {[
                        "AI-powered skill analysis system",
                        "Complete digital product templates",
                        "One-click deployment tools",
                        "Automated marketing system",
                        "Payment processing integration",
                        "Customer support automation",
                        "Analytics dashboard",
                        "Private community access"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircleIcon className="w-5 h-5 mr-2 text-green-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4">Benefits:</h3>
                    <ul className="space-y-3">
                      {[
                        "Start earning in 7 days",
                        "Build multiple income streams",
                        "Work from anywhere",
                        "Scale without limits",
                        "No technical skills needed",
                        "24/7 automated income",
                        "Financial freedom",
                        "Time freedom"
                      ].map((item, index) => (
                        <li key={index} className="flex items-start">
                          <StarIcon className="w-5 h-5 mr-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl"
                  >
                    Get Instant Access - $97
                  </motion.button>
                  <div className="mt-4 text-sm opacity-75">
                    30-day money-back guarantee • No questions asked
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOCIAL PROOF SECTION */}
      <section id="social-proof" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Join 1,247+ Successful Developers
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              Real results from real people just like you
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {[
                {
                  name: "Sarah Chen",
                  role: "Full Stack Developer",
                  content: "I was making $0 from my coding skills. After 7 days with this system, I made my first $1,200. Now I'm earning $5,000+ monthly!",
                  rating: 5,
                  avatar: "👩‍💻"
                },
                {
                  name: "Mike Rodriguez",
                  role: "React Developer",
                  content: "This system changed everything. I went from freelance hustle to automated income. Best investment I've ever made!",
                  rating: 5,
                  avatar: "👨‍💻"
                },
                {
                  name: "Emily Johnson",
                  role: "Frontend Developer",
                  content: "I was skeptical but tried it anyway. Made $800 in my first week. Now I have 3 digital products making money while I sleep!",
                  rating: 5,
                  avatar: "👩‍💻"
                },
                {
                  name: "David Kim",
                  role: "JavaScript Developer",
                  content: "The AI analysis alone is worth the price. It found opportunities I never would have considered. Game changer!",
                  rating: 5,
                  avatar: "👨‍💻"
                },
                {
                  name: "Lisa Wang",
                  role: "Vue Developer",
                  content: "Finally, a system that works! I've tried so many courses. This actually delivers results. Highly recommend!",
                  rating: 5,
                  avatar: "👩‍💻"
                },
                {
                  name: "James Taylor",
                  role: "Python Developer",
                  content: "From $0 to $3,000/month in 2 months. The automation features are incredible. This is the future!",
                  rating: 5,
                  avatar: "👨‍💻"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-4">
                    <div className="text-3xl mr-3">{testimonial.avatar}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                  <div className="flex mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 leading-relaxed">{testimonial.content}</p>
                </motion.div>
              ))}
            </div>
            
            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: "1,247+", label: "Active Users" },
                { number: "$2.4M+", label: "Revenue Generated" },
                { number: "4.9★", label: "Average Rating" },
                { number: "30-Day", label: "Money Back" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold text-purple-600 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works in 3 Simple Steps
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-3xl mx-auto">
              From zero to profitable digital business in less than a week
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  step: "01",
                  title: "Sign Up & Connect",
                  description: "Create your account and connect your existing tools and repositories. Our AI analyzes your skills in minutes.",
                  icon: PlayIcon,
                  color: "blue"
                },
                {
                  step: "02",
                  title: "Use The System",
                  description: "Follow our proven framework to create and launch your first digital product. No technical skills required.",
                  icon: RocketLaunchIcon,
                  color: "purple"
                },
                {
                  step: "03",
                  title: "Earn & Scale",
                  description: "Start generating revenue from day one. Scale to multiple products and build your digital empire.",
                  icon: CurrencyDollarIcon,
                  color: "green"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`absolute -top-4 -left-4 w-8 h-8 bg-${step.color}-600 text-white rounded-full flex items-center justify-center font-bold text-lg`}>
                    {step.step}
                  </div>
                  <div className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-200">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${step.color}-100 mb-6`}>
                      <step.icon className={`w-8 h-8 text-${step.color}-600`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  </div>
                  {index < 2 && (
                    <div className="absolute top-8 right-0 w-8 text-gray-400">
                      <ArrowRightIcon className="w-6 h-6" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Skills into Income?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 1,247+ developers who are already using our system to build profitable digital businesses
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-200 shadow-xl"
              >
                <span className="flex items-center">
                  Start Your 7-Day Transformation - $97
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-200"
              >
                Watch Demo First
              </motion.button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-gray-300">
              <div className="flex items-center">
                <ShieldCheckIcon className="w-5 h-5 mr-2 text-green-400" />
                <span className="text-sm">30-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <CreditCardIcon className="w-5 h-5 mr-2 text-blue-400" />
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <UserGroupIcon className="w-5 h-5 mr-2 text-purple-400" />
                <span className="text-sm">1,247+ Success Stories</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Product</h3>
              <p className="text-gray-400">Complete digital business system for developers</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
              <p className="text-gray-400">24/7 customer support via email and chat</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
              <p className="text-gray-400">Built by developers, for developers worldwide</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-slate-800 text-center">
            <p className="text-gray-400">
              © 2024 Digital Business System. All rights reserved. | 
              <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a> | 
              <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
