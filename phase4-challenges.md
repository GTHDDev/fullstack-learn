# Phase 4: Advanced Frontend + Next.js - Practice Challenges

## 🎯 Learning Goals
Master Next.js App Router, server-side rendering (SSR/SSG), content management integration, advanced animations, and modern web features like Progressive Web Apps

## 📚 Prerequisites
- Completed Phase 1: Core Programming Foundations
- Completed Phase 2: Backend Fundamentals
- Completed Phase 3: Frontend Architecture
- Understanding of React, TypeScript, and modern web APIs

---

## Challenge 1: Next.js App Router Mastery

### 🚀 Task 1.1: App Router Architecture
**Objective**: Master Next.js 13+ App Router with layouts, routing, and data fetching

```typescript
// TODO: Create a nested layout system
// app/layout.tsx - Root layout
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Requirements:
  // 1. Include global providers (theme, auth, etc.)
  // 2. Set up HTML structure with proper meta tags
  // 3. Include global CSS and fonts
  // 4. Handle loading states
  // 5. Implement error boundaries
}

// app/(dashboard)/layout.tsx - Dashboard layout
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Requirements:
  // 1. Create sidebar navigation
  // 2. Handle responsive breakpoints
  // 3. Include breadcrumbs
  // 4. Add user profile section
  // 5. Implement search functionality
}

// TODO: Implement dynamic routing with type safety
// app/blog/[slug]/page.tsx
interface BlogPostPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function BlogPostPage({
  params,
  searchParams,
}: BlogPostPageProps) {
  // Requirements:
  // 1. Fetch blog post data
  // 2. Handle not found cases
  // 3. Implement SEO metadata
  // 4. Add structured data
  // 5. Handle loading and error states
}

// TODO: Create parallel routes for complex layouts
// app/dashboard/@analytics/page.tsx
export default function AnalyticsSlot() {
  // Requirements:
  // 1. Fetch analytics data independently
  // 2. Handle loading states
  // 3. Implement error boundaries
  // 4. Support real-time updates
}

// app/dashboard/@notifications/page.tsx
export default function NotificationsSlot() {
  // Requirements:
  // 1. Fetch notification data
  // 2. Handle unread counts
  // 3. Implement real-time updates
  // 4. Support infinite scrolling
}

// TODO: Implement intercepting routes for modals
// app/dashboard/photos/(..)photo/[id]/page.tsx
export default function PhotoModal({
  params,
}: {
  params: { id: string };
}) {
  // Requirements:
  // 1. Display photo in modal overlay
  // 2. Handle browser navigation
  // 3. Support keyboard navigation
  // 4. Implement image optimization
  // 5. Handle close interactions
}
```

### 🚀 Task 1.2: Server Components & Data Fetching
**Objective**: Implement efficient server-side data fetching patterns

```typescript
// TODO: Create server components with data fetching
// app/posts/page.tsx
async function getPosts(): Promise<Post[]> {
  // Requirements:
  // 1. Implement caching strategies
  // 2. Handle API errors gracefully
  // 3. Support pagination
  // 4. Add request deduplication
  // 5. Implement retry logic
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  // Requirements:
  // 1. Render posts on the server
  // 2. Handle empty states
  // 3. Implement SEO optimization
  // 4. Add structured data
  // 5. Support social sharing
}

// TODO: Implement streaming with Suspense
// app/dashboard/page.tsx
export default function DashboardPage() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Suspense fallback={<AnalyticsSkeleton />}>
        <AnalyticsWidget />
      </Suspense>
      <Suspense fallback={<RecentActivitySkeleton />}>
        <RecentActivity />
      </Suspense>
    </div>
  );
}

async function AnalyticsWidget() {
  // Requirements:
  // 1. Fetch analytics data
  // 2. Handle slow queries
  // 3. Implement error boundaries
  // 4. Support real-time updates
  // 5. Cache expensive computations
}

// TODO: Create server actions for mutations
// app/actions/posts.ts
'use server';

export async function createPost(formData: FormData) {
  // Requirements:
  // 1. Validate form data
  // 2. Handle authentication
  // 3. Perform database operations
  // 4. Revalidate cache
  // 5. Handle errors gracefully
  // 6. Return appropriate responses
}

export async function updatePost(id: string, formData: FormData) {
  // Requirements:
  // 1. Validate authorization
  // 2. Implement optimistic updates
  // 3. Handle partial updates
  // 4. Manage cache invalidation
  // 5. Log audit trail
}

// TODO: Implement middleware for request handling
// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Requirements:
  // 1. Handle authentication
  // 2. Implement rate limiting
  // 3. Add security headers
  // 4. Handle redirects
  // 5. Log requests
  // 6. Support A/B testing
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
```

### 🚀 Task 1.3: Route Handlers & API Routes
**Objective**: Build robust API endpoints with Next.js Route Handlers

```typescript
// TODO: Create RESTful API endpoints
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  // Requirements:
  // 1. Parse query parameters
  // 2. Implement pagination
  // 3. Add filtering and sorting
  // 4. Handle authentication
  // 5. Implement caching headers
  // 6. Add rate limiting
  // 7. Return proper HTTP status codes
}

export async function POST(request: NextRequest) {
  // Requirements:
  // 1. Validate request body
  // 2. Handle file uploads
  // 3. Implement authorization
  // 4. Perform database operations
  // 5. Handle errors gracefully
  // 6. Return created resource
}

// app/api/posts/[id]/route.ts
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Requirements:
  // 1. Validate parameters
  // 2. Handle not found cases
  // 3. Implement caching
  // 4. Add security checks
  // 5. Support conditional requests
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Requirements:
  // 1. Validate ownership
  // 2. Handle partial updates
  // 3. Implement optimistic locking
  // 4. Add audit logging
  // 5. Return updated resource
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // Requirements:
  // 1. Validate authorization
  // 2. Handle cascade deletes
  // 3. Implement soft deletes
  // 4. Add confirmation checks
  // 5. Clean up related data
}

// TODO: Implement file upload handling
// app/api/upload/route.ts
export async function POST(request: NextRequest) {
  // Requirements:
  // 1. Validate file types
  // 2. Check file size limits
  // 3. Handle multiple files
  // 4. Implement virus scanning
  // 5. Generate thumbnails
  // 6. Store in cloud storage
  // 7. Return upload results
}

// TODO: Create WebSocket-like functionality
// app/api/realtime/route.ts
export async function GET(request: NextRequest) {
  // Requirements:
  // 1. Implement Server-Sent Events
  // 2. Handle client connections
  // 3. Broadcast updates
  // 4. Handle disconnections
  // 5. Implement reconnection logic
}
```

---

## Challenge 2: Server-Side Rendering & Static Generation

### 🚀 Task 2.1: SSG with Dynamic Content
**Objective**: Implement static site generation with dynamic data

```typescript
// TODO: Create static pages with generateStaticParams
// app/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // Requirements:
  // 1. Fetch all possible blog post slugs
  // 2. Handle large datasets efficiently
  // 3. Implement incremental static regeneration
  // 4. Support draft content filtering
  // 5. Handle internationalization
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  // Requirements:
  // 1. Generate dynamic meta tags
  // 2. Include OpenGraph data
  // 3. Add Twitter Card metadata
  // 4. Support structured data
  // 5. Handle fallback cases
}

// TODO: Implement Incremental Static Regeneration
export const revalidate = 3600; // 1 hour

export default async function BlogPost({
  params,
}: {
  params: { slug: string };
}) {
  // Requirements:
  // 1. Fetch post data at build time
  // 2. Handle revalidation triggers
  // 3. Implement fallback pages
  // 4. Support draft previews
  // 5. Add build-time optimizations
}

// TODO: Create dynamic sitemaps
// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Requirements:
  // 1. Generate sitemap from dynamic content
  // 2. Include last modified dates
  // 3. Set appropriate priorities
  // 4. Handle large sitemaps
  // 5. Support multilingual sites
}

// TODO: Implement robots.txt generation
// app/robots.ts
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Requirements:
  // 1. Configure crawling rules
  // 2. Handle environment-specific rules
  // 3. Include sitemap references
  // 4. Support custom user agents
}
```

### 🚀 Task 2.2: Performance Optimization
**Objective**: Optimize Next.js applications for maximum performance

```typescript
// TODO: Implement image optimization
// components/OptimizedImage.tsx
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
}: OptimizedImageProps) {
  // Requirements:
  // 1. Implement responsive images
  // 2. Generate blur placeholders
  // 3. Handle loading states
  // 4. Support art direction
  // 5. Optimize for Core Web Vitals
}

// TODO: Create font optimization
// app/fonts.ts
import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

// TODO: Implement bundle analysis
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    domains: ['example.com'],
    formats: ['image/avif', 'image/webp'],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
};

// TODO: Create performance monitoring
// components/PerformanceMonitor.tsx
'use client';

import { useEffect } from 'react';

export default function PerformanceMonitor() {
  useEffect(() => {
    // Requirements:
    // 1. Monitor Core Web Vitals
    // 2. Track custom metrics
    // 3. Report to analytics
    // 4. Handle errors gracefully
    // 5. Implement sampling
  }, []);

  return null;
}
```

### 🚀 Task 2.3: Caching Strategies
**Objective**: Implement comprehensive caching for optimal performance

```typescript
// TODO: Implement request-level caching
// lib/cache.ts
import { unstable_cache } from 'next/cache';

export const getCachedPosts = unstable_cache(
  async () => {
    // Requirements:
    // 1. Implement cache key generation
    // 2. Handle cache invalidation
    // 3. Support cache warming
    // 4. Add cache statistics
    // 5. Handle cache failures
  },
  ['posts'],
  {
    tags: ['posts'],
    revalidate: 3600,
  }
);

// TODO: Create cache invalidation system
// lib/revalidation.ts
import { revalidateTag, revalidatePath } from 'next/cache';

export async function invalidatePostsCache() {
  // Requirements:
  // 1. Selective cache invalidation
  // 2. Batch invalidation operations
  // 3. Handle distributed caching
  // 4. Log invalidation events
  // 5. Support rollback scenarios
}

// TODO: Implement client-side caching
// hooks/useCache.ts
import { useState, useEffect } from 'react';

export function useCache<T>(
  key: string,
  fetcher: () => Promise<T>,
  options: {
    ttl?: number;
    staleWhileRevalidate?: boolean;
    errorRetryCount?: number;
  } = {}
) {
  // Requirements:
  // 1. Implement SWR pattern
  // 2. Handle background updates
  // 3. Support optimistic updates
  // 4. Add error handling
  // 5. Implement deduplication
}

// TODO: Create Redis caching integration
// lib/redis-cache.ts
import Redis from 'ioredis';

class RedisCache {
  private redis: Redis;

  constructor() {
    this.redis = new Redis(process.env.REDIS_URL);
  }

  async get<T>(key: string): Promise<T | null> {
    // Requirements:
    // 1. Handle serialization
    // 2. Implement compression
    // 3. Add error handling
    // 4. Support TTL
    // 5. Handle connection failures
  }

  async set<T>(key: string, value: T, ttl?: number): Promise<void> {
    // Requirements:
    // 1. Handle serialization
    // 2. Implement compression
    // 3. Support atomic operations
    // 4. Add expiration
    // 5. Handle write failures
  }

  async invalidate(pattern: string): Promise<void> {
    // Requirements:
    // 1. Pattern-based invalidation
    // 2. Batch operations
    // 3. Handle large datasets
    // 4. Add logging
    // 5. Support rollback
  }
}
```

---

## Challenge 3: Content Management & Integrations

### 🚀 Task 3.1: Headless CMS Integration
**Objective**: Integrate with headless CMS platforms for dynamic content

```typescript
// TODO: Create Prismic CMS integration
// lib/prismic.ts
import * as prismic from '@prismicio/client';

export const client = prismic.createClient('your-repo-name', {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  routes: [
    {
      type: 'page',
      path: '/:uid',
    },
    {
      type: 'blog_post',
      path: '/blog/:uid',
    },
  ],
});

// TODO: Implement content fetching utilities
// lib/content.ts
export async function getPageByUID(uid: string) {
  // Requirements:
  // 1. Fetch page content
  // 2. Handle preview mode
  // 3. Implement caching
  // 4. Support localization
  // 5. Handle missing content
}

export async function getAllPages() {
  // Requirements:
  // 1. Fetch all published pages
  // 2. Handle pagination
  // 3. Support filtering
  // 4. Implement sorting
  // 5. Handle large datasets
}

// TODO: Create content type definitions
// types/prismic.ts
export interface BlogPost {
  uid: string;
  data: {
    title: prismic.KeyTextField;
    content: prismic.RichTextField;
    featured_image: prismic.ImageField;
    publish_date: prismic.DateField;
    tags: prismic.GroupField<{
      tag: prismic.KeyTextField;
    }>;
  };
}

// TODO: Implement rich text rendering
// components/RichText.tsx
import { PrismicRichText } from '@prismicio/react';

const components = {
  heading1: ({ children }) => <h1 className="text-4xl font-bold mb-4">{children}</h1>,
  heading2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
  paragraph: ({ children }) => <p className="mb-4 leading-relaxed">{children}</p>,
  // Requirements:
  // 1. Style all rich text elements
  // 2. Handle custom components
  // 3. Support code blocks
  // 4. Add image optimization
  // 5. Implement responsive design
};

export default function RichText({ content }: { content: prismic.RichTextField }) {
  return <PrismicRichText field={content} components={components} />;
}

// TODO: Create preview mode functionality
// app/api/preview/route.ts
export async function GET(request: NextRequest) {
  // Requirements:
  // 1. Validate preview tokens
  // 2. Set preview cookies
  // 3. Redirect to preview content
  // 4. Handle authorization
  // 5. Support multiple CMS types
}
```

### 🚀 Task 3.2: Search & Filtering
**Objective**: Implement advanced search and filtering capabilities

```typescript
// TODO: Implement Algolia search integration
// lib/search.ts
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID!,
  process.env.NEXT_PUBLIC_ALGOLIA_SEARCH_API_KEY!
);

export const searchIndex = searchClient.initIndex('posts');

// TODO: Create search components
// components/SearchBox.tsx
'use client';

import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const debouncedQuery = useDebounce(query, 300);

  useEffect(() => {
    // Requirements:
    // 1. Implement debounced search
    // 2. Handle search suggestions
    // 3. Support faceted search
    // 4. Add search analytics
    // 5. Handle search errors
  }, [debouncedQuery]);

  // Implementation here
}

// TODO: Implement full-text search
// lib/full-text-search.ts
export class FullTextSearch {
  private index: Map<string, Set<string>> = new Map();

  buildIndex(documents: Array<{ id: string; content: string }>) {
    // Requirements:
    // 1. Tokenize content
    // 2. Remove stop words
    // 3. Handle stemming
    // 4. Support multiple languages
    // 5. Implement ranking
  }

  search(query: string): Array<{ id: string; score: number }> {
    // Requirements:
    // 1. Parse search query
    // 2. Calculate relevance scores
    // 3. Support Boolean operators
    // 4. Handle phrase searches
    // 5. Implement fuzzy matching
  }
}

// TODO: Create advanced filtering
// components/FilterPanel.tsx
interface FilterPanelProps {
  filters: {
    categories: string[];
    tags: string[];
    dateRange: { from: Date; to: Date };
    authors: string[];
  };
  onFiltersChange: (filters: any) => void;
}

export default function FilterPanel({ filters, onFiltersChange }: FilterPanelProps) {
  // Requirements:
  // 1. Multi-select filters
  // 2. Date range filtering
  // 3. Real-time filter updates
  // 4. Filter persistence
  // 5. Filter count badges
}
```

### 🚀 Task 3.3: Multi-language Support
**Objective**: Implement internationalization and localization

```typescript
// TODO: Set up Next.js internationalization
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n: {
    locales: ['en', 'es', 'fr', 'de'],
    defaultLocale: 'en',
    localeDetection: false,
  },
};

// TODO: Create translation utilities
// lib/i18n.ts
import { useRouter } from 'next/router';

export function useTranslation() {
  const router = useRouter();
  const { locale } = router;

  const t = (key: string, params?: Record<string, string>) => {
    // Requirements:
    // 1. Load translation files
    // 2. Handle parameter interpolation
    // 3. Support pluralization
    // 4. Implement fallback handling
    // 5. Add missing translation warnings
  };

  return { t, locale };
}

// TODO: Implement dynamic content localization
// app/[locale]/blog/[slug]/page.tsx
export async function generateStaticParams() {
  // Requirements:
  // 1. Generate params for all locales
  // 2. Handle content availability
  // 3. Support fallback locales
  // 4. Implement content relationships
}

export default async function LocalizedBlogPost({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  // Requirements:
  // 1. Fetch localized content
  // 2. Handle missing translations
  // 3. Support RTL languages
  // 4. Implement SEO metadata
  // 5. Add language switching
}

// TODO: Create language switching component
// components/LanguageSwitcher.tsx
export default function LanguageSwitcher() {
  // Requirements:
  // 1. Display available languages
  // 2. Handle route preservation
  // 3. Support keyboard navigation
  // 4. Add loading states
  // 5. Implement smooth transitions
}
```

---

## Challenge 4: Animations & Interactive Features

### 🚀 Task 4.1: GSAP Animation System
**Objective**: Implement sophisticated animations with GSAP

```typescript
// TODO: Create animation utilities
// lib/animations.ts
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export class AnimationManager {
  static fadeIn(element: Element, options: gsap.TweenVars = {}) {
    // Requirements:
    // 1. Implement smooth fade in
    // 2. Support custom duration
    // 3. Handle multiple elements
    // 4. Add easing options
    // 5. Support callback functions
  }

  static slideInFromLeft(element: Element, options: gsap.TweenVars = {}) {
    // Requirements:
    // 1. Animate from left position
    // 2. Support staggered animations
    // 3. Handle responsive behavior
    // 4. Add physics-based easing
    // 5. Support interruption
  }

  static morphShape(fromElement: Element, toElement: Element) {
    // Requirements:
    // 1. Morph between shapes
    // 2. Handle path interpolation
    // 3. Support color transitions
    // 4. Add progress callbacks
    // 5. Optimize performance
  }
}

// TODO: Implement scroll-triggered animations
// components/ScrollAnimations.tsx
'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function ScrollAnimations({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Requirements:
    // 1. Animate elements on scroll
    // 2. Handle parallax effects
    // 3. Support pin animations
    // 4. Implement progress indicators
    // 5. Optimize for performance
    // 6. Handle cleanup on unmount
  }, []);

  return <div ref={containerRef}>{children}</div>;
}

// TODO: Create page transition animations
// components/PageTransition.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    // Requirements:
    // 1. Animate page transitions
    // 2. Handle route changes
    // 3. Support custom transitions
    // 4. Maintain accessibility
    // 5. Optimize performance
  }, [pathname]);

  return <>{children}</>;
}
```

### 🚀 Task 4.2: Framer Motion Integration
**Objective**: Create fluid animations with Framer Motion

```typescript
// TODO: Implement layout animations
// components/AnimatedLayout.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// TODO: Create interactive components
// components/AnimatedCard.tsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

// TODO: Implement shared layout animations
// components/SharedLayout.tsx
'use client';

import { motion, AnimateSharedLayout } from 'framer-motion';

export default function SharedLayout() {
  // Requirements:
  // 1. Animate between layouts
  // 2. Handle shared elements
  // 3. Support complex transitions
  // 4. Maintain performance
  // 5. Handle interruptions
}

// TODO: Create gesture-based interactions
// components/GestureHandler.tsx
'use client';

import { motion, PanInfo } from 'framer-motion';

export default function GestureHandler() {
  const handlePan = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    // Requirements:
    // 1. Handle pan gestures
    // 2. Support touch interactions
    // 3. Implement momentum
    // 4. Add boundaries
    // 5. Handle multi-touch
  };

  return (
    <motion.div
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      onPan={handlePan}
    />
  );
}
```

### 🚀 Task 4.3: Interactive Data Visualizations
**Objective**: Create engaging data visualizations with animations

```typescript
// TODO: Implement animated charts
// components/AnimatedChart.tsx
'use client';

import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

interface AnimatedChartProps {
  data: Array<{ name: string; value: number }>;
  animate?: boolean;
}

export default function AnimatedChart({ data, animate = true }: AnimatedChartProps) {
  // Requirements:
  // 1. Animate chart entrance
  // 2. Support data transitions
  // 3. Handle hover interactions
  // 4. Implement tooltips
  // 5. Support real-time updates
}

// TODO: Create interactive dashboard components
// components/InteractiveDashboard.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function InteractiveDashboard() {
  const [activeWidget, setActiveWidget] = useState<string | null>(null);

  // Requirements:
  // 1. Animate widget transitions
  // 2. Handle drag and drop
  // 3. Support resizing
  // 4. Implement state persistence
  // 5. Add touch support
}

// TODO: Implement 3D animations
// components/ThreeDScene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';

export default function ThreeDScene() {
  // Requirements:
  // 1. Render 3D scenes
  // 2. Handle user interactions
  // 3. Implement lighting
  // 4. Support animations
  // 5. Optimize performance
}
```

---

## 🎯 Success Criteria

### Phase 4 Completion Checklist:
- [ ] Next.js App Router implemented with advanced patterns
- [ ] SSR/SSG strategies optimized for performance
- [ ] Headless CMS integration functional
- [ ] Multi-language support implemented
- [ ] Advanced animations and interactions working
- [ ] Progressive Web App features implemented
- [ ] Performance optimizations applied
- [ ] SEO and accessibility standards met
- [ ] Comprehensive test coverage (>85%)
- [ ] Documentation includes architecture decisions

### 📚 Study Resources:
- [Next.js Documentation](https://nextjs.org/docs) - Official Next.js guide
- [React Server Components](https://react.dev/blog/2023/03/22/react-labs-what-we-have-been-working-on-march-2023) - Server Components deep dive
- [GSAP Documentation](https://greensock.com/docs/) - Animation library guide
- [Framer Motion](https://www.framer.com/motion/) - React animation library
- [Web Performance](https://web.dev/performance/) - Performance optimization guide

### 🎓 Reflection Questions:
1. How do Server Components change the React development model?
2. What are the trade-offs between SSR, SSG, and client-side rendering?
3. How do you optimize Next.js applications for Core Web Vitals?
4. What considerations are important for international applications?
5. How do animations affect user experience and performance?
6. What caching strategies work best for different content types?
7. How do you balance interactivity with performance?
8. What are the key factors in choosing between different animation libraries?

---

## 🚀 Integration Project: Content-Rich Platform

### Final Challenge: Build a Modern Content Platform
Create a comprehensive content platform that demonstrates all Phase 4 concepts:

**Requirements:**
- Multi-language blog with CMS integration
- Advanced search and filtering
- Smooth page transitions and animations
- Progressive Web App capabilities
- Server-side rendering optimization
- Real-time features with WebSockets
- Advanced SEO and social sharing
- Performance monitoring and analytics

**Features to Implement:**
- Dynamic content management
- Interactive data visualizations
- Advanced animation sequences
- Offline reading capabilities
- Push notifications
- Social authentication
- Content recommendation engine
- Advanced analytics dashboard

**Success Metrics:**
- Lighthouse performance score > 95
- Core Web Vitals in green
- First Contentful Paint < 1.5s
- Time to Interactive < 2.5s
- Cumulative Layout Shift < 0.1
- Multi-language content support
- PWA installation capability

---

👉 **Remember**: Phase 4 focuses on creating production-ready applications with advanced features. Emphasize performance, user experience, and scalability in all implementations.

👉 Always check the correctness of AI-generated responses.
