# Network Error Fix Guide

## ✅ Changes Made:

1. **Updated `api.js`** - Now uses `http://localhost:5000` as base URL
2. **Updated CORS** - Server now allows requests from `http://localhost:3000`
3. **Server is running** on port 5000

## 🔧 Steps to Fix Network Error:

### Step 1: Restart React Client
The client needs to be restarted to pick up the new API configuration:

1. **Stop the current client** (if running):
   - Press `Ctrl+C` in the terminal where React is running
   - Or close the PowerShell window

2. **Start the client again**:
   ```bash
   cd Shopkart\client
   npm start
   ```

### Step 2: Verify Server is Running
Check if server is accessible:
- Open browser and go to: `http://localhost:5000/api/health`
- You should see: `{"status":"✅ Server is running!","users":1,"products":12}`

### Step 3: Clear Browser Cache
1. Press `Ctrl+Shift+Delete` in your browser
2. Clear cache and cookies
3. Or use Incognito/Private window

### Step 4: Check Browser Console
1. Open browser DevTools (F12)
2. Go to Console tab
3. Look for any error messages
4. Go to Network tab and check if API calls are being made

## 🐛 Troubleshooting:

### If server stops:
```bash
cd Shopkart\server
node server.js
```

### If client won't start:
```bash
cd Shopkart\client
npm install
npm start
```

### If still getting Network Error:
1. Check firewall settings - allow Node.js
2. Make sure no other app is using port 5000 or 3000
3. Try accessing `http://127.0.0.1:5000/api/health` instead of `localhost`

## 📝 Current Configuration:

- **Server URL**: `http://localhost:5000`
- **Client URL**: `http://localhost:3000`
- **API Base URL**: `http://localhost:5000` (configured in `api.js`)
- **CORS**: Enabled for `http://localhost:3000`

## ✅ Expected Behavior:

After restarting the client:
1. Open `http://localhost:3000` in browser
2. Network errors should be gone
3. API calls should work properly
4. You should be able to login, view products, etc.

