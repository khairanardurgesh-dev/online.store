import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { StarIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import { productsAPI } from '../services/api';
import { Product } from '../types';

export const Home: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await productsAPI.getAll();
        if (response.success && response.data) {
          // Get first 3 products as featured
          setFeaturedProducts(response.data.slice(0, 3));
        }
      } catch (err: any) {
        console.log('Error fetching products:', err);
        
        // Add fallback products for demo
        setFeaturedProducts([
          {
            _id: '1',
            title: 'Professional Portfolio Template Pack',
            description: 'A stunning collection of 5 modern portfolio templates perfect for developers.',
            price: 29.99,
            thumbnail: '/uploads/thumbnails/portfolio-thumb.jpg',
            features: ['5 Unique Templates', 'Fully Responsive', 'SEO Optimized'],
            category: 'portfolio',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            _id: '2',
            title: 'Ultimate Resume Kit 2024',
            description: 'Stand out from the crowd with our comprehensive resume kit.',
            price: 19.99,
            thumbnail: '/uploads/thumbnails/resume-thumb.jpg',
            features: ['10 Templates', 'ATS Friendly', 'Interview Guide'],
            category: 'resume',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          },
          {
            _id: '3',
            title: 'Freelancing Business Starter Kit',
            description: 'Everything you need to start your freelancing career.',
            price: 49.99,
            thumbnail: '/uploads/thumbnails/freelancing-thumb.jpg',
            features: ['20 Contracts', '15 Proposals', 'Pricing Guide'],
            category: 'freelancing',
            isActive: true,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString()
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const benefits = [
    {
      title: 'Premium Quality',
      description: 'Carefully crafted digital products by industry experts',
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      title: 'Instant Access',
      description: 'Download your products immediately after purchase',
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      title: 'Lifetime Updates',
      description: 'Get free updates and improvements for all purchased products',
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
    {
      title: 'Secure Transactions',
      description: 'Your payment information is always safe and encrypted',
      icon: <CheckCircleIcon className="w-6 h-6" />,
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Frontend Developer',
      content: 'Amazing portfolio templates! Helped me land my dream job in just 2 weeks.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Freelancer',
      content: 'The freelancing starter kit is incredible. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Emily Davis',
      role: 'UI/UX Designer',
      content: 'High-quality resources and excellent customer support. Highly recommended!',
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Build, Launch & Earn with
              <span className="text-primary-600"> Digital Products</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover premium developer resources, portfolio templates, and freelancing kits 
              that accelerate your career and boost your income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products" className="btn-primary inline-flex items-center justify-center">
                Browse Products
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link to="#features" className="btn-secondary inline-flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hand-picked digital resources to kickstart your journey
            </p>
          </motion.div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="card animate-pulse">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <div className="h-4 bg-gray-200 rounded mb-2"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                    <div className="h-8 bg-gray-200 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product._id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="card hover:shadow-xl transition-shadow duration-300">
                    <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-50 flex items-center justify-center">
                      <div className="w-16 h-16 bg-primary-600 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-2xl">
                          {product.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-primary-600">
                          ${product.price}
                        </span>
                        <Link
                          to={`/product/${product._id}`}
                          className="btn-primary text-sm px-4 py-2"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          <div className="text-center mt-8">
            <Link to="/products" className="btn-secondary inline-flex items-center">
              View All Products
              <ArrowRightIcon className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="features" className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose DigitalStore?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide the best digital resources to help you succeed
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  {benefit.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied customers who have transformed their careers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <div className="card p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
