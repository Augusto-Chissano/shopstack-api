# ShopStack

A full-stack e-commerce platform built with Node.js/Express backend and Next.js frontend.

## 🚀 Features

- **User Authentication** - Secure login/register with JWT tokens
- **Product Catalog** - Browse, search, and filter products
- **Shopping Cart** - Add, remove, and manage cart items
- **Order Management** - Place orders and track order history
- **Payment Integration** - Secure payments via MPesa
- **Admin Panel** - Manage products, orders, and users
- **Responsive Design** - Mobile-first responsive UI
- **RESTful API** - Well-structured API endpoints

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB
- **JWT** - Authentication
- **bcryptjs** - Password hashing
- **MPesa** - Payment processing
- **Multer** - File uploads
- **Nodemailer** - Email notifications

## 📁 Project Structure

```
shopstack-api/
├── src/
│   │  ├── controllers/    # Route handlers
│   │  ├── models/         # Database models
│   │  ├── routes/         # API routes
│   │  ├── middleware/     # Custom middleware
│   │  ├── services/       # Business logic
│   │  ├── utils/          # Utility functions
│   │  └── config/         # Configuration files
└── uploads/               # File uploads
└── server.js              # Entry point that starts the server and handles uncaught exceptions

```

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)
- MPesa credentials for payments

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/ecommerce-app.git
   cd ecommerce-app
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Set up environment variables**
   
   Create `.env` in the backend directory:
   ```env
   PORT=5000
   NODE_ENV=development
   MONGODB_URI=mongodb://localhost:27017/ecommerce
   JWT_SECRET=your-jwt-secret-key
   JWT_EXPIRE=7d
   STRIPE_SECRET_KEY=your-stripe-secret-key
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

   Create `.env.local` in the frontend directory:
   ```env
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
   ```

4. **Start the development servers**
   
   Backend:
   ```bash
   cd backend
   npm run dev
   ```

   Frontend:
   ```bash
   cd frontend
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

## 📚 API Documentation

### Authentication Endpoints
```
POST /api/auth/register    # Register new user
POST /api/auth/login       # User login
POST /api/auth/logout      # User logout
POST /api/auth/refresh     # Refresh access token
```

### Product Endpoints
```
GET    /api/products       # Get all products
GET    /api/products/:id   # Get product by ID
POST   /api/products       # Create product (admin)
PUT    /api/products/:id   # Update product (admin)
DELETE /api/products/:id   # Delete product (admin)
```

### Cart Endpoints
```
GET    /api/cart          # Get user cart
POST   /api/cart/add      # Add item to cart
PUT    /api/cart/update   # Update cart item
DELETE /api/cart/remove   # Remove item from cart
```

### Order Endpoints
```
GET  /api/orders          # Get user orders
POST /api/orders          # Create new order
GET  /api/orders/:id      # Get order by ID
PUT  /api/orders/:id      # Update order status (admin)
```

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### E2E Tests
```bash
npm run test:e2e
```

## 📦 Deployment

### Backend Deployment (Railway/Heroku)
1. Set up production environment variables
2. Configure database connection
3. Deploy using platform-specific commands

### Frontend Deployment (Vercel/Netlify)
1. Connect repository to deployment platform
2. Set environment variables
3. Configure build settings

## 🔧 Scripts

### Backend
```bash
npm run dev          # Start development server
npm run start        # Start production server
npm run build        # Build for production
npm test             # Run tests
npm run lint         # Run ESLint
```

### Frontend
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript compiler
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Live Demo](https://your-app.vercel.app)
- [Frontend Repository](https://github.com/yourusername/ecommerce-web)
- [Backend Repository](https://github.com/yourusername/ecommerce-api)

---