require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const Product = require('../models/Product');

// Sample products data
const sampleProducts = [
  {
    title: 'Professional Portfolio Template Pack',
    description: 'A stunning collection of 5 modern portfolio templates perfect for developers, designers, and creatives. Each template is fully responsive, optimized for performance, and includes multiple color schemes.',
    price: 29.99,
    thumbnail: 'uploads/thumbnails/portfolio-thumb.jpg',
    fileUrl: 'uploads/products/portfolio-templates.zip',
    fileName: 'portfolio-templates.zip',
    features: [
      '5 Unique Portfolio Templates',
      'Fully Responsive Design',
      'Multiple Color Schemes',
      'SEO Optimized',
      'Clean & Modern Code',
      'Free Updates for Life'
    ],
    category: 'portfolio'
  },
  {
    title: 'Ultimate Resume Kit 2024',
    description: 'Stand out from the crowd with our comprehensive resume kit. Includes 10 professional resume templates, cover letter templates, and interview preparation guides.',
    price: 19.99,
    thumbnail: 'uploads/thumbnails/resume-thumb.jpg',
    fileUrl: 'uploads/products/resume-kit.zip',
    fileName: 'resume-kit.zip',
    features: [
      '10 Professional Resume Templates',
      '5 Cover Letter Templates',
      'Interview Preparation Guide',
      'ATS-Friendly Formats',
      'MS Word & PDF Included',
      'Video Tutorial Included'
    ],
    category: 'resume'
  },
  {
    title: 'Freelancing Business Starter Kit',
    description: 'Everything you need to start your freelancing career. Includes contract templates, proposal templates, pricing guides, and client management tools.',
    price: 49.99,
    thumbnail: 'uploads/thumbnails/freelancing-thumb.jpg',
    fileUrl: 'uploads/products/freelancing-starter.zip',
    fileName: 'freelancing-starter.zip',
    features: [
      '20 Contract Templates',
      '15 Proposal Templates',
      'Pricing Strategy Guide',
      'Client Management System',
      'Invoice Templates',
      'Business Growth Checklist'
    ],
    category: 'freelancing'
  },
  {
    title: 'AI Prompt Engineering Master Pack',
    description: 'Master the art of prompt engineering with our comprehensive collection of 500+ optimized prompts for ChatGPT, Claude, and other AI models.',
    price: 39.99,
    thumbnail: 'uploads/thumbnails/ai-prompts-thumb.jpg',
    fileUrl: 'uploads/products/ai-prompts.zip',
    fileName: 'ai-prompts.zip',
    features: [
      '500+ Optimized Prompts',
      '10 Different Categories',
      'Prompt Engineering Guide',
      'Best Practices Handbook',
      'Regular Updates',
      'Community Access'
    ],
    category: 'ai-prompts'
  },
  {
    title: 'React Component Library',
    description: 'A comprehensive collection of 50+ reusable React components built with TypeScript and Tailwind CSS. Perfect for rapid development.',
    price: 34.99,
    thumbnail: 'uploads/thumbnails/react-components-thumb.jpg',
    fileUrl: 'uploads/products/react-components.zip',
    fileName: 'react-components.zip',
    features: [
      '50+ Reusable Components',
      'TypeScript Support',
      'Tailwind CSS Styled',
      'Comprehensive Documentation',
      'Dark Mode Support',
      'Storybook Integration'
    ],
    category: 'templates'
  },
  {
    title: 'Web Development Checklist Pro',
    description: 'Never miss a deployment step again with our comprehensive web development checklist. Includes security, performance, and SEO checklists.',
    price: 14.99,
    thumbnail: 'uploads/thumbnails/checklist-thumb.jpg',
    fileUrl: 'uploads/products/dev-checklist.zip',
    fileName: 'dev-checklist.zip',
    features: [
      'Pre-Deployment Checklist',
      'Security Best Practices',
      'Performance Optimization Guide',
      'SEO Checklist',
      'Testing Strategies',
      'Monitoring Setup Guide'
    ],
    category: 'other'
  }
];

// Seed database function
const seedDatabase = async () => {
  try {
    // Connect to database
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Product.deleteMany({});
    console.log('Cleared existing data');

    // Create admin user
    const adminUser = new User({
      name: 'Admin User',
      email: 'admin@digitalstore.com',
      password: 'admin123',
      role: 'admin'
    });
    await adminUser.save();
    console.log('Created admin user');

    // Create sample products
    for (const productData of sampleProducts) {
      const product = new Product(productData);
      await product.save();
    }
    console.log('Created sample products');

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

// Run the seed function
seedDatabase();
