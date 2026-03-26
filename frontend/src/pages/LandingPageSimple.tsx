import React from 'react';

export const LandingPageSimple: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-sm font-semibold text-gray-700">🔥 NEW 2024 UPDATE</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              Turn Your Skills into
              <span className="block text-3xl sm:text-4xl lg:text-5xl bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                Income in 7 Days
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The complete AI-powered system that transforms your development skills into a profitable digital business - 
              <span className="text-white font-semibold">automatically.</span>
            </p>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-xl">
                Start Now - $97
              </button>
              
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300">
                Watch Demo
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center justify-center space-x-8 text-gray-400">
              <div className="flex items-center">
                <span className="text-sm">30-Day Money Back</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">Secure Payment</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm">100+ Active Users</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-12">
              Are You Tired of Trading Time for Money?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No Real Income</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your coding skills aren't making you money despite hours of work
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Wasted Time</h3>
                <p className="text-gray-600 leading-relaxed">
                  Spending months on projects that never generate revenue
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">No System</h3>
                <p className="text-gray-600 leading-relaxed">
                  No proven process to turn skills into consistent income
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-slate-900">
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Skills into Income?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join 100+ developers who are already using our system to build profitable digital businesses
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg">
                Start Your 7-Day Transformation
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-200">
                Watch Demo First
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 Digital Store. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
