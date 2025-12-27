# Vercel Deployment Guide for Shopkart

## 📋 Prerequisites

1. Vercel account (sign up at https://vercel.com)
2. MongoDB Atlas account (for production database)
3. Environment variables ready

## 🚀 Deployment Steps

### 1. Install Vercel CLI (Optional but Recommended)
```bash
npm i -g vercel
```

### 2. Set Environment Variables in Vercel

Go to your Vercel project settings and add these environment variables:

```
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
CLIENT_URL=https://your-app-name.vercel.app
NODE_ENV=production
```

### 3. Deploy to Vercel

**Option A: Using Vercel Dashboard**
1. Go to https://vercel.com/new
2. Import your Git repository
3. Vercel will automatically detect the configuration
4. Add environment variables in the project settings
5. Deploy

**Option B: Using Vercel CLI**
```bash
vercel
```

### 4. Build Configuration

The project is configured with:
- **API Routes**: Handled by Express server via serverless function (`api/index.js`)
- **Static Files**: React build served from `Shopkart/client/build`
- **Routing**: API calls go to `/api/*`, everything else serves React app

## 📁 Project Structure for Vercel

```
.
├── api/
│   └── index.js          # Serverless function wrapper
├── vercel.json           # Vercel configuration
├── package.json          # Root package.json
└── Shopkart/
    ├── server/
    │   ├── server.js     # Express app (exported, not listening)
    │   └── package.json
    └── client/
        ├── build/        # React build (generated)
        └── package.json
```

## ⚠️ Important Notes

1. **MongoDB**: Make sure to use MongoDB Atlas (cloud) connection string, not localhost
2. **Build**: The React app will be built automatically by Vercel
3. **API Routes**: All `/api/*` routes are handled by the Express server
4. **Static Files**: React app is served as static files by Vercel
5. **Environment Variables**: Must be set in Vercel dashboard

## 🔧 Troubleshooting

### Issue: API routes not working
- Check that environment variables are set correctly
- Verify MongoDB connection string is correct
- Check Vercel function logs

### Issue: React app not loading
- Ensure `Shopkart/client/build` directory exists after build
- Check that `vercel-build` script is in client/package.json
- Verify routes in vercel.json

### Issue: MongoDB connection fails
- Use MongoDB Atlas (cloud) connection string
- Check IP whitelist in MongoDB Atlas
- Verify connection string format

## 📝 Local Development

For local development, the server still works normally:
```bash
cd Shopkart/server
npm install
npm run dev
```

The server will detect it's not running on Vercel and serve static files normally.

## ✅ Deployment Checklist

- [ ] MongoDB Atlas database created
- [ ] Environment variables set in Vercel
- [ ] Git repository connected to Vercel
- [ ] Build successful
- [ ] API routes tested
- [ ] Frontend loads correctly
- [ ] Database connection working

Happy Deploying! 🎉

