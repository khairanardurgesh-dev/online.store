# 🔧 **EXACT DATABASE.JS FIX**

## 🚨 **Current Issue**
Your `backend/config/database.js` file still has deprecated options that need to be removed.

## 📁 **File: `backend/config/database.js`**

### **Current Code (Lines 5-8):**
```javascript
const conn = await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

### **Replace With (Lines 5-6):**
```javascript
const conn = await mongoose.connect(process.env.MONGODB_URI);
```

## 📋 **Complete Fixed File**

**Your entire `backend/config/database.js` should look like this:**
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
```

## 🔧 **How to Apply Fix**

### **Option 1: GitHub Web Editor**
1. Go to: https://github.com/khairanardurgesh-dev/online.store
2. Navigate to: `backend/config/database.js`
3. Click **pencil icon** to edit
4. **Delete lines 6-8 completely** (the options object)
5. **Save** and **Commit changes**

### **Option 2: Local Fix**
1. Open `backend/config/database.js` in your editor
2. Delete the options object completely
3. Save the file
4. Push to GitHub

## 🎯 **Expected Result**

After this fix:
```
✅ Server starts: "Server is running on port 5000"
✅ Database connects: "MongoDB Connected"
✅ Backend live: https://online-store-cdhf.onrender.com
```

## 🎊 **Why This Works**

- ❌ `useNewUrlParser: true` - Deprecated
- ❌ `useUnifiedTopology: true` - Deprecated  
- ✅ `mongoose.connect(uri)` - Modern syntax

---

## 🚀 **Final Success**

**Remove those 3 lines (6, 7, 8) completely and your backend will work!**
