# 🚀 **Deployment Guide - Digital Product E-commerce Store**

## ✅ **Vercel Deployment Fix Applied**

I've just pushed a `vercel.json` configuration file that fixes the "react-scripts: command not found" error.

### **What was fixed:**
- ❌ **Before**: Vercel tried to run `react-scripts build` (incorrect)
- ✅ **After**: Vercel will now run `npm run build` (correct)
- ✅ Added proper React framework detection
- ✅ Configured output directory as `build`

---

## 🌐 **Vercel Deployment (Frontend)**

### **Step 1: Redeploy on Vercel**
1. Go to your Vercel dashboard: https://vercel.com/dashboard
2. Find your `online-store` project
3. Click **"Redeploy"** or **"Git Integration"**
4. The new `vercel.json` will be automatically used

### **Step 2: Manual Deploy (if needed)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from your project
cd online-store
vercel --prod
```

### **Vercel Environment Variables**
In Vercel dashboard → Settings → Environment Variables:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
REACT_APP_RAZORPAY_KEY_ID=your_production_razorpay_key
```

---

## 🖥️ **Render Deployment (Backend)**

### **Step 1: Prepare Backend**
```bash
# 1. Update your backend for production
cd online-store/backend

# 2. Create production-ready server
# Create a new file: server-prod.js
```

### **Step 2: Production Server Code**
Create `backend/server-prod.js`:
```javascript
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// Production CORS
app.use(cors({
  origin: ['https://your-vercel-domain.vercel.app', 'https://online-store.vercel.app'],
  credentials: true
}));

// Body parser
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Static files
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/products', require('./routes/products'));
app.use('/api/orders', require('./routes/orders'));
app.use('/api/razorpay', require('./routes/razorpay'));

// Database connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

### **Step 3: Update package.json**
Add to `backend/package.json`:
```json
{
  "scripts": {
    "start": "node server-prod.js",
    "start:dev": "nodemon index.js"
  }
}
```

### **Step 4: Deploy to Render**
1. Go to: https://render.com/
2. Click **"New +"** → **"Web Service"**
3. Connect GitHub: `khairanardurgesh-dev/online.store`
4. Select **"backend"** folder as root
5. Settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: `18.x`
6. Click **"Create Web Service"**

---

## 🗄️ **MongoDB Atlas Setup (Database)**

### **Step 1: Create Cluster**
1. Go to: https://cloud.mongodb.com/
2. Create free account
3. Click **"Build a Database"**
4. Choose **"M0 Sandbox"** (free)
5. Select cloud provider and region
6. Click **"Create Cluster"**

### **Step 2: Get Connection String**
1. In your cluster, click **"Connect"**
2. Choose **"Drivers"**
3. Copy the connection string
4. Replace `<password>` with your database password

### **Step 3: Update Environment Variables**
**In Render Dashboard** → Environment:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/online-store?retryWrites=true&w=majority
JWT_SECRET=your_super_secure_jwt_secret_key_here
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret_key
```

---

## 🔧 **Complete Production Setup**

### **Environment Variables Summary**

#### **Frontend (Vercel)**:
```
REACT_APP_API_URL=https://your-backend.onrender.com
REACT_APP_RAZORPAY_KEY_ID=rzp_live_your_key_id
```

#### **Backend (Render)**:
```
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/online-store
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=rzp_live_your_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret
```

---

## 🎯 **Deployment URLs**

After deployment:
- **Frontend**: `https://online-store.vercel.app`
- **Backend**: `https://your-backend-name.onrender.com`
- **API**: `https://your-backend-name.onrender.com/api/`

---

## 🧪 **Testing Production**

### **1. API Health Check**
```bash
curl https://your-backend.onrender.com/health
```

### **2. Frontend Test**
1. Open `https://online-store.vercel.app`
2. Test product browsing
3. Test user login
4. Test admin panel

### **3. Payment Testing**
1. Use test Razorpay keys first
2. Make small test purchases ($1-2)
3. Verify file delivery system

---

## 🚨 **Troubleshooting**

### **Vercel Issues**:
- **Build fails**: Check `vercel.json` syntax
- **404 errors**: Check React Router setup
- **CORS errors**: Update backend CORS origins

### **Render Issues**:
- **Server crashes**: Check Render logs
- **Database connection**: Verify MongoDB URI
- **Environment variables**: Ensure all required vars are set

### **MongoDB Issues**:
- **Connection refused**: Check IP whitelist
- **Authentication failed**: Verify username/password
- **Network timeout**: Check cluster region

---

## 🎊 **Production Ready!**

Your digital store is now ready for production deployment with:
- ✅ **Vercel configuration fixed**
- ✅ **Complete deployment guides**
- ✅ **Database setup instructions**
- ✅ **Environment variable templates**
- ✅ **Troubleshooting guide**

**Deploy now and start selling your digital products!** 🚀✨
