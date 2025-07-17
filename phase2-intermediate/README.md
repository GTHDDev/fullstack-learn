# Phase 2: Backend Fundamentals - Practice Challenges

## 🎯 Learning Goals
Master Node.js, Express.js, MongoDB, REST API design, authentication, and backend architecture patterns

## 📚 Prerequisites
- Completed Phase 1: Core Programming Foundations
- Understanding of HTTP protocol and web fundamentals
- Basic database concepts

---

## Challenge 1: Node.js Core Concepts

### 🚀 Task 1.1: Event Loop & Asynchronous Programming
**Objective**: Master Node.js's event-driven architecture

```typescript
// TODO: Create a custom event emitter with proper error handling
import { EventEmitter } from 'events';

class CustomEventEmitter extends EventEmitter {
  private maxListeners: number = 10;

  // TODO: Implement rate limiting for events
  emitWithRateLimit(event: string, data: any, rateLimit: number): void {
    // Your implementation here
  }

  // TODO: Implement event replay mechanism
  replayEvents(events: Array<{ event: string; data: any }>): void {
    // Your implementation here
  }

  // TODO: Add event analytics
  getEventStats(): Record<string, { count: number; lastEmitted: Date }> {
    // Your implementation here
  }
}

// TODO: Create a stream processor
import { Transform } from 'stream';

class DataProcessor extends Transform {
  private processedCount = 0;

  constructor(options?: any) {
    super(options);
  }

  // TODO: Implement data transformation
  _transform(chunk: any, encoding: BufferEncoding, callback: Function): void {
    // Requirements:
    // 1. Parse JSON data
    // 2. Validate data structure
    // 3. Transform data format
    // 4. Handle backpressure
    // 5. Emit metrics
  }

  // TODO: Implement cleanup
  _flush(callback: Function): void {
    // Your implementation here
  }
}
```

### 🚀 Task 1.2: File System Operations
**Objective**: Master file operations and security

```typescript
import fs from 'fs/promises';
import path from 'path';

class FileManager {
  private basePath: string;

  constructor(basePath: string) {
    this.basePath = basePath;
  }

  // TODO: Implement secure file operations
  async readFile(filename: string): Promise<string> {
    // Requirements:
    // 1. Validate file path (prevent path traversal)
    // 2. Check file permissions
    // 3. Handle file not found
    // 4. Implement file size limits
    // 5. Add logging
  }

  // TODO: Implement atomic file writes
  async writeFile(filename: string, data: string): Promise<void> {
    // Requirements:
    // 1. Use temporary file for atomic writes
    // 2. Validate data before writing
    // 3. Handle concurrent writes
    // 4. Implement backup strategy
    // 5. Add error recovery
  }

  // TODO: Implement file watcher
  watchDirectory(callback: (event: string, filename: string) => void): void {
    // Requirements:
    // 1. Watch for file changes
    // 2. Debounce rapid changes
    // 3. Handle watcher errors
    // 4. Implement cleanup
  }

  // TODO: Implement file search
  async findFiles(pattern: string): Promise<string[]> {
    // Requirements:
    // 1. Support glob patterns
    // 2. Recursive directory search
    // 3. Ignore hidden files
    // 4. Handle permissions errors
    // 5. Implement caching
  }
}
```

---

## Challenge 2: Express.js Mastery

### 🚀 Task 2.1: Middleware Architecture
**Objective**: Build robust middleware system

```typescript
import express, { Request, Response, NextFunction } from 'express';

// TODO: Create authentication middleware
interface AuthRequest extends Request {
  user?: {
    id: string;
    email: string;
    role: string;
  };
}

function authMiddleware(req: AuthRequest, res: Response, next: NextFunction): void {
  // Requirements:
  // 1. Extract JWT token from headers
  // 2. Validate token signature
  // 3. Check token expiration
  // 4. Attach user to request
  // 5. Handle refresh tokens
  // 6. Rate limiting per user
}

// TODO: Create request validation middleware
function validateRequest(schema: any) {
  return (req: Request, res: Response, next: NextFunction): void => {
    // Requirements:
    // 1. Validate request body
    // 2. Validate query parameters
    // 3. Validate path parameters
    // 4. Sanitize input data
    // 5. Handle validation errors
  };
}

// TODO: Create error handling middleware
function errorHandler(error: any, req: Request, res: Response, next: NextFunction): void {
  // Requirements:
  // 1. Log errors appropriately
  // 2. Don't expose sensitive info
  // 3. Handle different error types
  // 4. Send appropriate HTTP status
  // 5. Format error response
}

// TODO: Create logging middleware
function requestLogger(req: Request, res: Response, next: NextFunction): void {
  // Requirements:
  // 1. Log request details
  // 2. Track response time
  // 3. Log response status
  // 4. Handle sensitive data
  // 5. Implement log rotation
}

// TODO: Create compression middleware
function compressionMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Requirements:
  // 1. Detect client support
  // 2. Compress response body
  // 3. Handle different content types
  // 4. Set appropriate headers
  // 5. Skip compression for small responses
}
```

### 🚀 Task 2.2: RESTful API Design
**Objective**: Implement REST best practices

```typescript
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  metadata?: {
    page?: number;
    limit?: number;
    total?: number;
  };
}

class RestController {
  // TODO: Implement CRUD operations for resources
  async createResource(req: Request, res: Response): Promise<void> {
    // Requirements:
    // 1. Validate input data
    // 2. Check permissions
    // 3. Handle duplicate resources
    // 4. Return created resource
    // 5. Set proper HTTP status
  }

  async getResource(req: Request, res: Response): Promise<void> {
    // Requirements:
    // 1. Validate resource ID
    // 2. Check permissions
    // 3. Handle not found
    // 4. Support field selection
    // 5. Implement caching headers
  }

  async updateResource(req: Request, res: Response): Promise<void> {
    // Requirements:
    // 1. Support partial updates
    // 2. Handle optimistic locking
    // 3. Validate permissions
    // 4. Return updated resource
    // 5. Handle not found
  }

  async deleteResource(req: Request, res: Response): Promise<void> {
    // Requirements:
    // 1. Validate resource ID
    // 2. Check permissions
    // 3. Handle not found
    // 4. Support soft delete
    // 5. Clean up related data
  }

  async listResources(req: Request, res: Response): Promise<void> {
    // Requirements:
    // 1. Implement pagination
    // 2. Support filtering
    // 3. Support sorting
    // 4. Implement search
    // 5. Handle large datasets
  }
}

// TODO: Implement API versioning
class ApiVersionManager {
  private routes: Map<string, express.Router> = new Map();

  // TODO: Register versioned routes
  registerVersion(version: string, router: express.Router): void {
    // Your implementation here
  }

  // TODO: Route requests to appropriate version
  getVersionedRouter(req: Request): express.Router {
    // Requirements:
    // 1. Extract version from headers
    // 2. Support URL versioning
    // 3. Handle deprecated versions
    // 4. Default to latest version
    // 5. Log version usage
  }
}
```

---

## Challenge 3: MongoDB Integration

### 🚀 Task 3.1: Schema Design & Validation
**Objective**: Design efficient MongoDB schemas

```typescript
import mongoose, { Schema, Document, Model } from 'mongoose';

// TODO: Create user schema with validation
interface IUser extends Document {
  email: string;
  password: string;
  profile: {
    firstName: string;
    lastName: string;
    avatar?: string;
  };
  roles: string[];
  isActive: boolean;
  lastLogin?: Date;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>({
  // TODO: Implement schema with:
  // 1. Proper validation rules
  // 2. Unique constraints
  // 3. Default values
  // 4. Pre/post hooks
  // 5. Virtual properties
  // 6. Instance methods
  // 7. Static methods
});

// TODO: Create blog post schema with references
interface IBlogPost extends Document {
  title: string;
  content: string;
  author: mongoose.Types.ObjectId;
  tags: string[];
  status: 'draft' | 'published' | 'archived';
  publishedAt?: Date;
  comments: Array<{
    author: mongoose.Types.ObjectId;
    content: string;
    createdAt: Date;
  }>;
  metadata: {
    views: number;
    likes: number;
    shares: number;
  };
}

const blogPostSchema = new Schema<IBlogPost>({
  // TODO: Implement schema with:
  // 1. Population setup
  // 2. Embedded documents
  // 3. Text indexing
  // 4. Compound indexes
  // 5. TTL indexes
});
```

### 🚀 Task 3.2: Advanced Queries & Aggregation
**Objective**: Master MongoDB query optimization

```typescript
class BlogService {
  // TODO: Implement complex queries
  async getBlogPosts(filters: {
    author?: string;
    tags?: string[];
    status?: string;
    dateRange?: { start: Date; end: Date };
    search?: string;
    page?: number;
    limit?: number;
  }): Promise<{ posts: IBlogPost[]; total: number }> {
    // Requirements:
    // 1. Build dynamic query
    // 2. Implement text search
    // 3. Handle pagination
    // 4. Optimize performance
    // 5. Use aggregation pipeline
  }

  // TODO: Implement analytics aggregation
  async getAnalytics(authorId: string): Promise<{
    totalPosts: number;
    totalViews: number;
    avgViews: number;
    topTags: Array<{ tag: string; count: number }>;
    monthlyStats: Array<{ month: string; posts: number; views: number }>;
  }> {
    // Requirements:
    // 1. Use aggregation pipeline
    // 2. Group by multiple fields
    // 3. Calculate statistics
    // 4. Handle time-based grouping
    // 5. Optimize pipeline stages
  }

  // TODO: Implement real-time updates
  async subscribeToUpdates(callback: (post: IBlogPost) => void): Promise<void> {
    // Requirements:
    // 1. Use change streams
    // 2. Filter relevant changes
    // 3. Handle connection errors
    // 4. Implement reconnection
    // 5. Clean up resources
  }
}

// TODO: Create caching layer
class CachedBlogService {
  private cache: Map<string, { data: any; expiry: number }> = new Map();
  private blogService: BlogService;

  constructor(blogService: BlogService) {
    this.blogService = blogService;
  }

  // TODO: Implement cache-aside pattern
  async getBlogPost(id: string): Promise<IBlogPost | null> {
    // Requirements:
    // 1. Check cache first
    // 2. Implement cache miss handling
    // 3. Set cache expiry
    // 4. Handle cache invalidation
    // 5. Monitor cache hit ratio
  }

  // TODO: Implement write-through cache
  async updateBlogPost(id: string, updates: Partial<IBlogPost>): Promise<IBlogPost> {
    // Requirements:
    // 1. Update database
    // 2. Update cache
    // 3. Handle cache failures
    // 4. Maintain consistency
    // 5. Implement rollback
  }
}
```

---

## Challenge 4: Authentication & Authorization

### 🚀 Task 4.1: JWT Implementation
**Objective**: Implement secure authentication system

```typescript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

interface JWTPayload {
  userId: string;
  email: string;
  role: string;
  iat: number;
  exp: number;
}

class AuthService {
  private jwtSecret: string;
  private refreshTokenSecret: string;

  constructor(jwtSecret: string, refreshTokenSecret: string) {
    this.jwtSecret = jwtSecret;
    this.refreshTokenSecret = refreshTokenSecret;
  }

  // TODO: Implement user registration
  async register(userData: {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }): Promise<{ user: IUser; tokens: { access: string; refresh: string } }> {
    // Requirements:
    // 1. Validate input data
    // 2. Check for existing user
    // 3. Hash password securely
    // 4. Create user record
    // 5. Generate tokens
    // 6. Send welcome email
  }

  // TODO: Implement user login
  async login(email: string, password: string): Promise<{
    user: IUser;
    tokens: { access: string; refresh: string };
  }> {
    // Requirements:
    // 1. Validate credentials
    // 2. Check account status
    // 3. Implement rate limiting
    // 4. Generate tokens
    // 5. Log login event
    // 6. Handle 2FA if enabled
  }

  // TODO: Implement token refresh
  async refreshToken(refreshToken: string): Promise<{ access: string; refresh: string }> {
    // Requirements:
    // 1. Validate refresh token
    // 2. Check token blacklist
    // 3. Generate new tokens
    // 4. Invalidate old refresh token
    // 5. Handle token rotation
  }

  // TODO: Implement logout
  async logout(refreshToken: string): Promise<void> {
    // Requirements:
    // 1. Blacklist refresh token
    // 2. Clear user sessions
    // 3. Log logout event
    // 4. Clean up resources
  }

  // TODO: Implement password reset
  async requestPasswordReset(email: string): Promise<void> {
    // Requirements:
    // 1. Validate email
    // 2. Generate reset token
    // 3. Store token securely
    // 4. Send reset email
    // 5. Implement rate limiting
  }

  async resetPassword(token: string, newPassword: string): Promise<void> {
    // Requirements:
    // 1. Validate reset token
    // 2. Check token expiry
    // 3. Hash new password
    // 4. Update user record
    // 5. Invalidate token
    // 6. Notify user
  }
}
```

### 🚀 Task 4.2: Role-Based Access Control
**Objective**: Implement flexible authorization system

```typescript
enum Permission {
  READ_POSTS = 'read:posts',
  WRITE_POSTS = 'write:posts',
  DELETE_POSTS = 'delete:posts',
  MANAGE_USERS = 'manage:users',
  ADMIN_ACCESS = 'admin:access',
}

enum Role {
  GUEST = 'guest',
  USER = 'user',
  MODERATOR = 'moderator',
  ADMIN = 'admin',
}

class RoleBasedAccessControl {
  private rolePermissions: Map<Role, Permission[]> = new Map();

  constructor() {
    this.setupDefaultRoles();
  }

  // TODO: Setup default role-permission mappings
  private setupDefaultRoles(): void {
    // Your implementation here
  }

  // TODO: Check if user has permission
  hasPermission(userRole: Role, permission: Permission): boolean {
    // Your implementation here
  }

  // TODO: Create authorization middleware
  authorize(permission: Permission) {
    return (req: AuthRequest, res: Response, next: NextFunction): void => {
      // Requirements:
      // 1. Check user authentication
      // 2. Validate user role
      // 3. Check permission
      // 4. Handle unauthorized access
      // 5. Log access attempts
    };
  }

  // TODO: Implement resource-based access control
  authorizeResource(resourceType: string, action: string) {
    return async (req: AuthRequest, res: Response, next: NextFunction): Promise<void> => {
      // Requirements:
      // 1. Check resource ownership
      // 2. Validate action permissions
      // 3. Handle hierarchical access
      // 4. Support dynamic permissions
      // 5. Log access decisions
    };
  }
}
```

---

## Challenge 5: API Testing & Documentation

### 🚀 Task 5.1: Comprehensive API Testing
**Objective**: Implement thorough testing strategy

```typescript
import request from 'supertest';
import express from 'express';

describe('Blog API Tests', () => {
  let app: express.Application;
  let authToken: string;
  let testUser: IUser;

  beforeAll(async () => {
    // TODO: Setup test database
    // TODO: Create test application
    // TODO: Create test user
    // TODO: Generate auth token
  });

  afterAll(async () => {
    // TODO: Cleanup test database
    // TODO: Close connections
  });

  beforeEach(async () => {
    // TODO: Reset test data
  });

  describe('Authentication', () => {
    it('should register a new user', async () => {
      // TODO: Test user registration
      // 1. Valid registration data
      // 2. Password hashing
      // 3. Token generation
      // 4. Response structure
    });

    it('should login existing user', async () => {
      // TODO: Test user login
      // 1. Valid credentials
      // 2. Token generation
      // 3. User data response
    });

    it('should handle invalid credentials', async () => {
      // TODO: Test login failures
      // 1. Wrong password
      // 2. Non-existent user
      // 3. Rate limiting
    });

    it('should refresh tokens', async () => {
      // TODO: Test token refresh
      // 1. Valid refresh token
      // 2. New token generation
      // 3. Token rotation
    });
  });

  describe('Blog Posts', () => {
    it('should create a blog post', async () => {
      // TODO: Test post creation
      // 1. Valid post data
      // 2. Authentication required
      // 3. Response structure
    });

    it('should get paginated blog posts', async () => {
      // TODO: Test post listing
      // 1. Pagination parameters
      // 2. Filter options
      // 3. Sort options
      // 4. Response format
    });

    it('should update owned blog post', async () => {
      // TODO: Test post updates
      // 1. Valid update data
      // 2. Authorization checks
      // 3. Partial updates
    });

    it('should delete owned blog post', async () => {
      // TODO: Test post deletion
      // 1. Authorization checks
      // 2. Soft delete
      // 3. Cleanup
    });
  });

  describe('Error Handling', () => {
    it('should handle validation errors', async () => {
      // TODO: Test input validation
      // 1. Required fields
      // 2. Data types
      // 3. Format validation
    });

    it('should handle not found errors', async () => {
      // TODO: Test 404 responses
      // 1. Non-existent resources
      // 2. Proper error format
    });

    it('should handle server errors', async () => {
      // TODO: Test error recovery
      // 1. Database errors
      // 2. External service failures
      // 3. Error logging
    });
  });
});

// TODO: Create integration tests
describe('Integration Tests', () => {
  it('should handle complete user workflow', async () => {
    // TODO: Test end-to-end scenarios
    // 1. User registration
    // 2. Login
    // 3. Create/edit/delete posts
    // 4. View analytics
    // 5. Logout
  });
});
```

### 🚀 Task 5.2: API Documentation
**Objective**: Create comprehensive API documentation

```typescript
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// TODO: Configure Swagger/OpenAPI documentation
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Blog API',
      version: '1.0.0',
      description: 'A comprehensive blog API with authentication and CRUD operations',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Development server',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
  },
  apis: ['./src/routes/*.ts'], // Path to API files
};

// TODO: Create comprehensive API documentation
/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Authentication]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *               - firstName
 *               - lastName
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *                 example: user@example.com
 *               password:
 *                 type: string
 *                 minLength: 8
 *                 example: SecurePassword123!
 *               firstName:
 *                 type: string
 *                 example: John
 *               lastName:
 *                 type: string
 *                 example: Doe
 *     responses:
 *       201:
 *         description: User registered successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   type: object
 *                   properties:
 *                     user:
 *                       $ref: '#/components/schemas/User'
 *                     tokens:
 *                       type: object
 *                       properties:
 *                         access:
 *                           type: string
 *                         refresh:
 *                           type: string
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       409:
 *         description: User already exists
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */

// TODO: Create schema definitions
/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           example: 507f1f77bcf86cd799439011
 *         email:
 *           type: string
 *           format: email
 *           example: user@example.com
 *         profile:
 *           type: object
 *           properties:
 *             firstName:
 *               type: string
 *               example: John
 *             lastName:
 *               type: string
 *               example: Doe
 *             avatar:
 *               type: string
 *               format: uri
 *               example: https://example.com/avatar.jpg
 *         roles:
 *           type: array
 *           items:
 *             type: string
 *           example: [user]
 *         isActive:
 *           type: boolean
 *           example: true
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: 2023-01-01T00:00:00.000Z
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: 2023-01-01T00:00:00.000Z
 */

// TODO: Document all API endpoints
// Add similar documentation for:
// - Authentication endpoints
// - Blog post CRUD operations
// - User management
// - Error responses
// - Rate limiting
// - Pagination
```

---

## 🎯 Success Criteria

### Phase 2 Completion Checklist:
- [ ] Node.js core concepts implemented correctly
- [ ] Express.js middleware system working properly
- [ ] MongoDB schemas and queries optimized
- [ ] Authentication system secure and functional
- [ ] Authorization system flexible and maintainable
- [ ] API follows REST conventions
- [ ] Comprehensive test coverage (>85%)
- [ ] API documentation complete and accurate
- [ ] Error handling robust and user-friendly
- [ ] Performance optimization implemented
- [ ] Security best practices followed
- [ ] Code passes all linting and formatting checks

### 📚 Study Resources:
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices) - Production-ready practices
- [Express.js Guide](https://expressjs.com/en/guide/routing.html) - Official documentation
- [MongoDB University](https://university.mongodb.com/) - Database optimization
- [JWT.io](https://jwt.io/) - Token authentication guide
- [REST API Design](https://restfulapi.net/) - Best practices
- [API Security](https://owasp.org/www-project-api-security/) - Security guidelines

### 🎓 Reflection Questions:
1. How does Node.js's event loop affect application performance?
2. What are the trade-offs between different authentication strategies?
3. How do you design APIs for both current and future requirements?
4. When should you use NoSQL vs SQL databases?
5. How do you balance security with usability in authentication?
6. What are the implications of different caching strategies?
7. How do you handle API versioning and backwards compatibility?
8. What testing strategies provide the best confidence in API reliability?

---

👉 Always check the correctness of AI-generated responses.
