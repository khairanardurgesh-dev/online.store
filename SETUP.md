# 🚀 Digital Store Setup Guide

A complete guide to setting up your digital product e-commerce platform.

## 📋 Prerequisites

Before you begin, make sure you have the following installed:

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git** - [Download here](https://git-scm.com/)
- **Code Editor** (VS Code recommended)

## 🔧 Step 1: Project Setup

### Clone/Download the Project

If you have the project files, navigate to the `online.store` directory.

### Install Backend Dependencies

```bash
cd backend
npm install
```

### Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## 🗄️ Step 2: Database Setup

### Option A: Local MongoDB

1. Install MongoDB on your system
2. Start MongoDB service
3. Default connection string: `mongodb://localhost:27017/digitalstore`

### Option B: MongoDB Atlas (Cloud)

1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a new cluster
3. Get your connection string
4. Add your IP address to the whitelist

## 🔐 Step 3: Environment Configuration

### Backend Environment Variables

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/digitalstore
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
NODE_ENV=development
```

### Frontend Environment Variables

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id_here
```

## 💳 Step 4: Razorpay Setup

1. Create a [Razorpay account](https://razorpay.com/)
2. Go to Dashboard → Settings → API Keys
3. Generate Test API Keys
4. Copy Key ID and Key Secret to your environment variables

## 🗂️ Step 5: Seed the Database

Run the seeding script to populate your database with sample products:

```bash
cd backend
npm run seed
```

This will create:
- 1 admin user (email: `admin@digitalstore.com`, password: `admin123`)
- 6 sample products

## 🚀 Step 6: Start the Development Servers

### Start Backend Server

```bash
cd backend
npm run dev
```

The backend will run on `http://localhost:5000`

### Start Frontend Server

Open a new terminal and run:

```bash
cd frontend
npm start
```

The frontend will run on `http://localhost:3000`

## 🌐 Step 7: Access Your Application

1. **Frontend**: http://localhost:3000
2. **Backend API**: http://localhost:5000
3. **Health Check**: http://localhost:5000/health

## 👤 Step 8: Test the Application

### Admin Login

1. Navigate to http://localhost:3000/login
2. Use admin credentials:
   - Email: `admin@digitalstore.com`
   - Password: `admin123`

### Create a Regular User

1. Go to http://localhost:3000/signup
2. Create a new user account
3. Verify you can login

### Test Product Management

1. Login as admin
2. Navigate to Admin Panel
3. Add/edit/delete products

### Test Purchase Flow

1. Login as regular user
2. Browse products
3. Add to cart
4. Complete checkout (test mode)

## 📁 Project Structure Overview

```
online.store/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/       # Reusable components
│   │   ├── pages/           # Page components
│   │   ├── contexts/        # React contexts
│   │   ├── services/        # API services
│   │   ├── types/           # TypeScript types
│   │   └── utils/           # Utility functions
│   ├── public/              # Static assets
│   └── package.json
├── backend/                  # Node.js backend API
│   ├── config/              # Configuration files
│   ├── controllers/         # Route controllers
│   ├── middleware/         # Express middleware
│   ├── models/              # Database models
│   ├── routes/              # API routes
│   ├── utils/               # Utility functions
│   ├── uploads/             # File upload directory
│   └── package.json
├── README.md                # Main project documentation
└── SETUP.md                 # This setup guide
```

## 🛠️ Available Scripts

### Backend Scripts

```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run seed       # Seed database with sample data
```

### Frontend Scripts

```bash
npm start          # Start development server
npm run build      # Build for production
npm test           # Run tests
```

## 🔧 Common Issues & Solutions

### MongoDB Connection Issues

**Problem**: `MongoNetworkError: failed to connect to server`
**Solution**: 
- Ensure MongoDB is running
- Check connection string in `.env`
- Verify IP whitelist (MongoDB Atlas)

### Port Already in Use

**Problem**: `Error: listen EADDRINUSE :::5000`
**Solution**: 
- Kill the process: `taskkill /F /IM node.exe` (Windows)
- Or change port in `.env` file

### CORS Issues

**Problem**: CORS errors in browser console
**Solution**: 
- Check frontend API_URL in `.env`
- Verify CORS configuration in backend

### Razorpay Issues

**Problem**: Payment integration not working
**Solution**: 
- Verify Razorpay keys in environment variables
- Ensure test mode is enabled
- Check API key permissions

## 🚀 Deployment Guide

### Frontend Deployment (Vercel)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Backend Deployment (Render)

1. Connect your GitHub repository to Render
2. Set environment variables in Render dashboard
3. Deploy automatically on push to main branch

### Production Environment Variables

**Backend**:
```env
NODE_ENV=production
MONGODB_URI=your_production_mongodb_uri
JWT_SECRET=your_production_jwt_secret
RAZORPAY_KEY_ID=your_production_razorpay_key
RAZORPAY_KEY_SECRET=your_production_razorpay_secret
```

**Frontend**:
```env
REACT_APP_API_URL=your_production_backend_url
REACT_APP_RAZORPAY_KEY_ID=your_production_razorpay_key
```

## 🤝 Support

If you encounter any issues:

1. Check the console for error messages
2. Verify all environment variables are set
3. Ensure MongoDB is accessible
4. Check that both servers are running

## 📚 Additional Resources

- [React Documentation](https://reactjs.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Razorpay Documentation](https://razorpay.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

🎉 **Congratulations!** Your digital product store is now ready to use.
