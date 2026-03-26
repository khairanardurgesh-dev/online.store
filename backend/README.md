# Digital Store Backend API

A robust Node.js backend API for the digital product e-commerce platform.

## 🚀 Features

- **Authentication**: JWT-based user authentication with role-based access control
- **Product Management**: CRUD operations for digital products with file uploads
- **Order Processing**: Complete order management with Razorpay payment integration
- **File Security**: Secure file delivery system with download tracking
- **Admin Panel**: Full admin access for product and order management
- **Rate Limiting**: API protection with configurable rate limits
- **Error Handling**: Comprehensive error handling and logging

## 📁 Project Structure

```
backend/
├── config/
│   └── database.js          # MongoDB connection configuration
├── controllers/
│   ├── authController.js    # Authentication logic
│   ├── productController.js # Product CRUD operations
│   ├── orderController.js   # Order management
│   └── razorpayController.js # Payment processing
├── middleware/
│   ├── auth.js             # JWT authentication middleware
│   ├── upload.js           # File upload middleware
│   └── errorHandler.js     # Error handling middleware
├── models/
│   ├── User.js             # User model
│   ├── Product.js          # Product model
│   └── Order.js            # Order model
├── routes/
│   ├── auth.js             # Authentication routes
│   ├── products.js         # Product routes
│   ├── orders.js           # Order routes
│   └── razorpay.js         # Payment routes
├── utils/
│   └── seedDatabase.js     # Database seeding script
├── uploads/                # File upload directory
├── .env                    # Environment variables
├── index.js                # Main application file
└── package.json            # Dependencies and scripts
```

## 🛠 Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication tokens
- **Razorpay** - Payment processing
- **Multer** - File uploads
- **Bcryptjs** - Password hashing
- **Helmet** - Security headers
- **CORS** - Cross-origin resource sharing
- **Rate Limiting** - API protection

## 📋 API Endpoints

### Authentication

- `POST /api/auth/signup` - Register new user
- `POST /api/auth/login` - User login
- `GET /api/auth/profile` - Get user profile (protected)

### Products

- `GET /api/products` - Get all products (public)
- `GET /api/products/:id` - Get single product (public)
- `POST /api/products` - Create product (admin only)
- `PUT /api/products/:id` - Update product (admin only)
- `DELETE /api/products/:id` - Delete product (admin only)

### Orders

- `POST /api/orders` - Create order (protected)
- `POST /api/orders/verify` - Verify payment (protected)
- `GET /api/orders/user` - Get user orders (protected)
- `GET /api/orders` - Get all orders (admin only)
- `GET /api/orders/download/:orderId` - Download file (protected)

### Razorpay

- `POST /api/razorpay/create-order` - Create Razorpay order (protected)
- `POST /api/razorpay/verify` - Verify Razorpay payment (protected)
- `GET /api/razorpay/payment/:paymentId` - Get payment details (protected)

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/digitalstore
JWT_SECRET=your_super_secret_jwt_key_here_change_in_production
RAZORPAY_KEY_ID=your_razorpay_key_id_here
RAZORPAY_KEY_SECRET=your_razorpay_key_secret_here
NODE_ENV=development
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Razorpay account for payment processing

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. Start MongoDB server

5. Seed the database (optional):
   ```bash
   npm run seed
   ```

6. Start the development server:
   ```bash
   npm run dev
   ```

### Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run seed` - Seed database with sample data

## 📊 Database Models

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String ('user' | 'admin'),
  timestamps: true
}
```

### Product Model
```javascript
{
  title: String,
  description: String,
  price: Number,
  thumbnail: String,
  fileUrl: String,
  fileName: String,
  features: [String],
  category: String,
  isActive: Boolean,
  timestamps: true
}
```

### Order Model
```javascript
{
  userId: ObjectId (ref: User),
  productId: ObjectId (ref: Product),
  amount: Number,
  razorpayOrderId: String,
  razorpayPaymentId: String,
  razorpaySignature: String,
  status: String ('pending' | 'completed' | 'failed'),
  downloadCount: Number,
  lastDownloadedAt: Date,
  timestamps: true
}
```

## 🔒 Security Features

- **JWT Authentication**: Secure token-based authentication
- **Password Hashing**: Bcrypt for secure password storage
- **Rate Limiting**: Protection against API abuse
- **File Upload Security**: File type and size validation
- **CORS Configuration**: Proper cross-origin setup
- **Helmet**: Security headers implementation
- **Input Validation**: Comprehensive input sanitization

## 📁 File Upload Structure

```
uploads/
├── products/          # Product files (ZIP, PDF, DOC)
└── thumbnails/        # Product thumbnails (JPG, PNG)
```

## 🚨 Error Handling

The API uses consistent error responses:

```javascript
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message (development only)"
}
```

## 📝 Logging

- Error logging for debugging
- Request logging for monitoring
- Database connection logging

## 🔄 Development vs Production

### Development
- Detailed error messages
- CORS enabled for localhost
- MongoDB connection logging

### Production
- Sanitized error messages
- Restricted CORS domains
- Optimized performance settings

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.
