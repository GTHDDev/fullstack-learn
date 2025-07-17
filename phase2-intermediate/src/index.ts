import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import compression from 'compression';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Import routes
// import authRoutes from './routes/auth';
// import blogRoutes from './routes/blog';
// import userRoutes from './routes/user';

// Import middleware
// import { errorHandler } from './middleware/errorHandler';
// import { notFound } from './middleware/notFound';

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet());
app.use(cors());
app.use(compression());

// Logging middleware
app.use(morgan('combined'));

// Body parsing middleware
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Database connection
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/phase2-backend';
    await mongoose.connect(mongoURI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Phase 2: Backend Fundamentals API',
    version: '1.0.0',
    endpoints: {
      auth: '/api/v1/auth',
      blogs: '/api/v1/blogs',
      users: '/api/v1/users',
      docs: '/api/v1/docs'
    }
  });
});

// API Routes
// app.use('/api/v1/auth', authRoutes);
// app.use('/api/v1/blogs', blogRoutes);
// app.use('/api/v1/users', userRoutes);

// Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

// Start server
const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📚 Environment: ${process.env.NODE_ENV || 'development'}`);
      console.log(`🌐 Base URL: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error('Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

export default app;
