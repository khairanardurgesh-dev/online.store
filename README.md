# Digital Product E-commerce Store

A modern, fast, and minimal digital product e-commerce web app built with React, Node.js, and MongoDB.

## 🚀 Features

- **Frontend**: React with Tailwind CSS
- **Backend**: Node.js + Express
- **Database**: MongoDB
- **Payment**: Razorpay (India)
- **Authentication**: JWT
- **File Delivery**: Secure download after payment
- **Admin Panel**: Product and order management
- **User Dashboard**: Purchase history and downloads
- **Dark/Light Mode**: Toggle support
- **Responsive**: Mobile-first design

## 📁 Project Structure

```
online.store/
├── frontend/          # React frontend application
├── backend/           # Node.js backend API
└── README.md          # This file
```

## 🛠 Tech Stack

### Frontend
- React 18
- Tailwind CSS
- React Router
- Axios
- Framer Motion (optional)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Razorpay
- Multer (file uploads)
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Razorpay account

### Installation

1. Clone the repository
2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```
3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```
4. Set up environment variables (see .env.example files)
5. Start the development servers:
   ```bash
   # Backend (port 5000)
   cd backend && npm run dev
   
   # Frontend (port 3000)
   cd frontend && npm start
   ```

## 📝 Environment Variables

### Backend (.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000
REACT_APP_RAZORPAY_KEY_ID=your_razorpay_key_id
```

## 🎯 Pages

- **Home**: Hero section, featured products, testimonials
- **Products**: Grid of all available products
- **Product Detail**: Individual product information
- **Checkout**: Razorpay payment integration
- **Dashboard**: User purchases and downloads
- **Admin**: Product and order management

## 🔐 Security Features

- JWT-based authentication
- Secure file access (only after purchase)
- Environment variable protection
- Input validation and sanitization

## 📦 Deployment

- **Frontend**: Vercel
- **Backend**: Render/Node server
- **Database**: MongoDB Atlas

## 🤝 Contributing

This project is designed to be modular and beginner-friendly with comprehensive comments for easy understanding and modification.

## 📄 License

MIT License
