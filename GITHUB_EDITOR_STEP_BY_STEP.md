# 🔧 **GitHub Web Editor - Step by Step**

## 📋 **Do This Exact Process**

### **Step 1: Open GitHub**
1. Go to: https://github.com/khairanardurgesh-dev/online.store

### **Step 2: Navigate to Database File**
1. Click on **"backend"** folder
2. Click on **"config"** folder
3. Click on **"database.js"** file

### **Step 3: Edit the File**
1. Click the **pencil icon** (Edit) in the top right corner
2. You'll see the file content in the editor

### **Step 4: Make the Fix**
**Find this section:**
```javascript
const conn = await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
```

**Replace it with:**
```javascript
const conn = await mongoose.connect(process.env.MONGODB_URI);
```

### **Step 5: Commit Changes**
1. Scroll down to the bottom of the page
2. **Title**: "Remove deprecated MongoDB options"
3. **Description**: "Fix MongoDB connection for newer versions"
4. Click **"Commit changes"** button

### **Step 6: Redeploy on Render**
1. Go to: https://dashboard.render.com
2. Find your `online-store-cdhf` service
3. Click **"Manual Deploy"**
4. Select **"Deploy Latest Commit"**

## 🎯 **Expected Result**

After this fix:
```
✅ Server starts: "Server is running on port 5000"
✅ Database connects: "MongoDB Connected"
✅ Backend live: https://online-store-cdhf.onrender.com
```

## 🎊 **Success**

**This GitHub web editor approach will fix the issue immediately!**
