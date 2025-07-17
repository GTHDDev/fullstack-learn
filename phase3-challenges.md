# Phase 3: Frontend Architecture - Practice Challenges

## 🎯 Learning Goals
Master React component architecture, state management with Zustand, reusable UI systems, accessibility best practices, and performance optimization

## 📚 Prerequisites
- Completed Phase 1: Core Programming Foundations
- Completed Phase 2: Backend Fundamentals
- Solid understanding of HTML, CSS, and basic React
- Understanding of TypeScript and modern JavaScript

---

## Challenge 1: React Component Architecture

### 🚀 Task 1.1: Advanced Component Composition
**Objective**: Master component composition patterns and props flow

```typescript
// TODO: Create a flexible Card component system
interface CardProps {
  variant?: 'default' | 'outlined' | 'elevated';
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ variant = 'default', size = 'medium', children, className }) => {
  // Requirements:
  // 1. Support multiple variants with different styling
  // 2. Implement size variations
  // 3. Allow custom className override
  // 4. Use compound components pattern
  // 5. Support ref forwarding
};

// TODO: Create compound components for Card
const CardHeader: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Your implementation here
};

const CardContent: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Your implementation here
};

const CardFooter: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Your implementation here
};

// TODO: Create a higher-order component for loading states
function withLoadingState<T extends object>(
  Component: React.ComponentType<T>
): React.ComponentType<T & { isLoading?: boolean; loadingComponent?: React.ReactNode }> {
  // Requirements:
  // 1. Show loading component when isLoading is true
  // 2. Preserve all original props
  // 3. Handle display name for debugging
  // 4. Support custom loading components
}

// TODO: Create render props pattern for data fetching
interface DataFetcherProps<T> {
  url: string;
  children: (data: {
    data: T | null;
    loading: boolean;
    error: Error | null;
    refetch: () => void;
  }) => React.ReactNode;
}

function DataFetcher<T>({ url, children }: DataFetcherProps<T>) {
  // Requirements:
  // 1. Fetch data on mount and when URL changes
  // 2. Handle loading states
  // 3. Handle error states
  // 4. Provide refetch capability
  // 5. Cleanup on unmount
}
```

### 🚀 Task 1.2: Custom Hooks Architecture
**Objective**: Create reusable custom hooks for common patterns

```typescript
// TODO: Create a custom hook for local storage with TypeScript
function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((prev: T) => T)) => void] {
  // Requirements:
  // 1. Sync with localStorage
  // 2. Handle JSON serialization/deserialization
  // 3. Support function updates
  // 4. Handle storage events for sync across tabs
  // 5. Error handling for invalid JSON
}

// TODO: Create a custom hook for API calls with caching
interface UseApiOptions<T> {
  enabled?: boolean;
  cacheTime?: number;
  staleTime?: number;
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
}

function useApi<T>(
  url: string,
  options: UseApiOptions<T> = {}
): {
  data: T | null;
  loading: boolean;
  error: Error | null;
  refetch: () => void;
  mutate: (data: T) => void;
} {
  // Requirements:
  // 1. Implement caching with expiration
  // 2. Support conditional fetching
  // 3. Handle loading and error states
  // 4. Provide optimistic updates
  // 5. Support query invalidation
}

// TODO: Create a custom hook for debounced values
function useDebounce<T>(value: T, delay: number): T {
  // Requirements:
  // 1. Debounce value changes
  // 2. Support any value type
  // 3. Handle cleanup on unmount
  // 4. Support delay changes
}

// TODO: Create a custom hook for previous value tracking
function usePrevious<T>(value: T): T | undefined {
  // Requirements:
  // 1. Track previous value across renders
  // 2. Handle initial render (undefined)
  // 3. Support any value type
  // 4. Use ref for performance
}

// TODO: Create a custom hook for intersection observer
interface UseIntersectionObserverOptions {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

function useIntersectionObserver(
  options: UseIntersectionObserverOptions = {}
): [React.RefObject<HTMLElement>, boolean] {
  // Requirements:
  // 1. Observe element intersection
  // 2. Support all IntersectionObserver options
  // 3. Handle cleanup
  // 4. Support trigger once functionality
  // 5. Return ref and intersection state
}
```

### 🚀 Task 1.3: Performance Optimization Patterns
**Objective**: Implement React performance optimizations

```typescript
// TODO: Create a memoized component with proper prop comparison
interface ExpensiveComponentProps {
  data: ComplexData[];
  onItemClick: (id: string) => void;
  sortBy: string;
  filterBy: string;
}

const ExpensiveComponent: React.FC<ExpensiveComponentProps> = React.memo(
  ({ data, onItemClick, sortBy, filterBy }) => {
    // Requirements:
    // 1. Use React.memo with custom comparison
    // 2. Implement expensive calculations with useMemo
    // 3. Use useCallback for event handlers
    // 4. Implement virtual scrolling for large lists
    // 5. Use React.lazy for code splitting
  },
  (prevProps, nextProps) => {
    // TODO: Implement custom comparison logic
    // Compare only relevant props for re-rendering
  }
);

// TODO: Create a virtual scrolling component
interface VirtualScrollProps<T> {
  items: T[];
  itemHeight: number;
  containerHeight: number;
  renderItem: (item: T, index: number) => React.ReactNode;
  overscan?: number;
}

function VirtualScroll<T>({
  items,
  itemHeight,
  containerHeight,
  renderItem,
  overscan = 5
}: VirtualScrollProps<T>) {
  // Requirements:
  // 1. Render only visible items
  // 2. Handle scroll events efficiently
  // 3. Support overscan for smoother scrolling
  // 4. Handle dynamic item heights
  // 5. Optimize for large datasets
}

// TODO: Create a component for lazy loading images
interface LazyImageProps {
  src: string;
  alt: string;
  placeholder?: string;
  className?: string;
  onLoad?: () => void;
  onError?: () => void;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholder,
  className,
  onLoad,
  onError
}) => {
  // Requirements:
  // 1. Load image only when in viewport
  // 2. Show placeholder while loading
  // 3. Handle loading and error states
  // 4. Support fade-in transition
  // 5. Cleanup on unmount
};
```

---

## Challenge 2: State Management with Zustand

### 🚀 Task 2.1: Zustand Store Architecture
**Objective**: Design scalable state management architecture

```typescript
// TODO: Create a user authentication store
interface User {
  id: string;
  email: string;
  name: string;
  avatar?: string;
  role: 'admin' | 'user' | 'moderator';
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
}

interface AuthActions {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  refreshToken: () => Promise<void>;
  clearError: () => void;
}

type AuthStore = AuthState & AuthActions;

const useAuthStore = create<AuthStore>((set, get) => ({
  // State
  user: null,
  token: null,
  isAuthenticated: false,
  loading: false,
  error: null,

  // Actions
  login: async (email: string, password: string) => {
    // Requirements:
    // 1. Set loading state
    // 2. Call authentication API
    // 3. Store token and user data
    // 4. Handle errors appropriately
    // 5. Persist to localStorage
  },

  logout: () => {
    // Requirements:
    // 1. Clear user and token
    // 2. Remove from localStorage
    // 3. Reset authentication state
    // 4. Redirect to login page
  },

  updateProfile: async (updates: Partial<User>) => {
    // Requirements:
    // 1. Optimistic updates
    // 2. API call with error handling
    // 3. Revert on error
    // 4. Update local state
  },

  refreshToken: async () => {
    // Requirements:
    // 1. Call refresh token API
    // 2. Update token in store
    // 3. Handle refresh failure
    // 4. Maintain user session
  },

  clearError: () => set({ error: null }),
}));

// TODO: Create a shopping cart store with complex state
interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
  variant?: string;
}

interface CartState {
  items: CartItem[];
  total: number;
  itemCount: number;
  isOpen: boolean;
  loading: boolean;
  error: string | null;
}

interface CartActions {
  addItem: (item: Omit<CartItem, 'quantity'>, quantity?: number) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
  applyDiscount: (code: string) => Promise<void>;
  checkout: () => Promise<void>;
}

type CartStore = CartState & CartActions;

const useCartStore = create<CartStore>((set, get) => ({
  // TODO: Implement cart store with computed values
  // Requirements:
  // 1. Calculate total and item count automatically
  // 2. Persist cart to localStorage
  // 3. Handle optimistic updates
  // 4. Support discount codes
  // 5. Implement checkout process
}));
```

### 🚀 Task 2.2: Advanced Zustand Patterns
**Objective**: Implement advanced state management patterns

```typescript
// TODO: Create middleware for logging and persistence
const loggerMiddleware = <T>(
  config: StateCreator<T, [], [], T>
): StateCreator<T, [], [], T> => (set, get, api) =>
  config(
    (args) => {
      // Requirements:
      // 1. Log state changes
      // 2. Include timestamps
      // 3. Support different log levels
      // 4. Filter sensitive data
      // 5. Only log in development
    },
    get,
    api
  );

const persistMiddleware = <T>(
  config: StateCreator<T, [], [], T>,
  options: {
    key: string;
    storage?: Storage;
    blacklist?: string[];
    whitelist?: string[];
  }
): StateCreator<T, [], [], T> => (set, get, api) =>
  config(
    (args) => {
      // Requirements:
      // 1. Persist state to storage
      // 2. Support blacklist/whitelist
      // 3. Handle storage errors
      // 4. Rehydrate on load
      // 5. Support different storage types
    },
    get,
    api
  );

// TODO: Create a notification system store
interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  actions?: Array<{
    label: string;
    action: () => void;
  }>;
  timestamp: Date;
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (notification: Omit<Notification, 'id' | 'timestamp'>) => void;
  removeNotification: (id: string) => void;
  clearAll: () => void;
  updateNotification: (id: string, updates: Partial<Notification>) => void;
}

const useNotificationStore = create<NotificationStore>((set, get) => ({
  // TODO: Implement notification store with auto-dismiss
  // Requirements:
  // 1. Auto-generate IDs
  // 2. Auto-dismiss after duration
  // 3. Support notification queuing
  // 4. Handle duplicate notifications
  // 5. Support undo functionality
}));

// TODO: Create a theme store with CSS variables
interface Theme {
  mode: 'light' | 'dark';
  primaryColor: string;
  secondaryColor: string;
  fontSize: 'small' | 'medium' | 'large';
  borderRadius: 'none' | 'small' | 'medium' | 'large';
}

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Partial<Theme>) => void;
  toggleMode: () => void;
  resetToDefault: () => void;
  applyTheme: () => void;
}

const useThemeStore = create<ThemeStore>((set, get) => ({
  // TODO: Implement theme store with CSS variable updates
  // Requirements:
  // 1. Update CSS custom properties
  // 2. Persist theme preferences
  // 3. Support system theme detection
  // 4. Handle theme transitions
  // 5. Support theme validation
}));
```

### 🚀 Task 2.3: State Composition and Selectors
**Objective**: Create efficient state selectors and composition patterns

```typescript
// TODO: Create efficient selectors for complex state
const useCartItems = () => useCartStore((state) => state.items);
const useCartTotal = () => useCartStore((state) => state.total);
const useCartItemCount = () => useCartStore((state) => state.itemCount);

// TODO: Create computed selectors with memoization
const useCartSummary = () => useCartStore(
  useShallow((state) => ({
    items: state.items,
    total: state.total,
    itemCount: state.itemCount,
    subtotal: state.items.reduce((sum, item) => sum + (item.price * item.quantity), 0),
    hasItems: state.items.length > 0,
  }))
);

// TODO: Create a selector factory for filtering
const createCartItemSelector = (predicate: (item: CartItem) => boolean) =>
  (state: CartStore) => state.items.filter(predicate);

const useCartItemsByCategory = (category: string) =>
  useCartStore(createCartItemSelector(item => item.category === category));

// TODO: Create a unified app state interface
interface AppState {
  auth: AuthState;
  cart: CartState;
  notifications: Notification[];
  theme: Theme;
  ui: {
    sidebarOpen: boolean;
    modalOpen: boolean;
    loading: boolean;
  };
}

// TODO: Create a state composition utility
const useAppState = (): AppState => ({
  auth: useAuthStore(useShallow((state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
  }))),
  cart: useCartStore(useShallow((state) => ({
    items: state.items,
    total: state.total,
    itemCount: state.itemCount,
    isOpen: state.isOpen,
    loading: state.loading,
    error: state.error,
  }))),
  notifications: useNotificationStore((state) => state.notifications),
  theme: useThemeStore((state) => state.theme),
  ui: useUIStore(useShallow((state) => ({
    sidebarOpen: state.sidebarOpen,
    modalOpen: state.modalOpen,
    loading: state.loading,
  }))),
});
```

---

## Challenge 3: Design System & UI Components

### 🚀 Task 3.1: Design System Foundation
**Objective**: Create a scalable design system architecture

```typescript
// TODO: Create a design token system
export const designTokens = {
  colors: {
    primary: {
      50: '#f0f9ff',
      100: '#e0f2fe',
      500: '#06b6d4',
      600: '#0891b2',
      900: '#164e63',
    },
    semantic: {
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
      info: '#3b82f6',
    },
    neutral: {
      50: '#f8fafc',
      100: '#f1f5f9',
      500: '#64748b',
      900: '#0f172a',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      mono: ['JetBrains Mono', 'Consolas', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
  },
};

// TODO: Create a styled-components theme provider
const theme = {
  ...designTokens,
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  zIndex: {
    dropdown: 1000,
    overlay: 1010,
    modal: 1020,
    tooltip: 1030,
  },
};

// TODO: Create base component primitives
interface BoxProps {
  as?: React.ElementType;
  padding?: keyof typeof designTokens.spacing;
  margin?: keyof typeof designTokens.spacing;
  backgroundColor?: string;
  borderRadius?: keyof typeof designTokens.borderRadius;
  children: React.ReactNode;
}

const Box: React.FC<BoxProps> = ({
  as: Component = 'div',
  padding,
  margin,
  backgroundColor,
  borderRadius,
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support all HTML elements via 'as' prop
  // 2. Apply design tokens consistently
  // 3. Support responsive props
  // 4. Handle prop forwarding
  // 5. Optimize for performance
};

// TODO: Create a flexible Button component
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  onClick,
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support all button variants
  // 2. Handle loading states with spinner
  // 3. Support icons with proper spacing
  // 4. Implement focus management
  // 5. Support keyboard navigation
};
```

### 🚀 Task 3.2: Form Components & Validation
**Objective**: Create robust form components with validation

```typescript
// TODO: Create a form validation hook
interface ValidationRule<T> {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: T) => string | undefined;
}

interface FormField<T> {
  value: T;
  error?: string;
  touched: boolean;
  dirty: boolean;
}

interface UseFormOptions<T> {
  initialValues: T;
  validationRules?: Partial<Record<keyof T, ValidationRule<T[keyof T]>>>;
  onSubmit?: (values: T) => void | Promise<void>;
  validateOnChange?: boolean;
  validateOnBlur?: boolean;
}

function useForm<T extends Record<string, any>>({
  initialValues,
  validationRules = {},
  onSubmit,
  validateOnChange = true,
  validateOnBlur = true,
}: UseFormOptions<T>) {
  // Requirements:
  // 1. Track field states (value, error, touched, dirty)
  // 2. Validate on change and blur
  // 3. Support async validation
  // 4. Handle form submission
  // 5. Support field arrays
  // 6. Provide helper functions
}

// TODO: Create flexible Input component
interface InputProps {
  label?: string;
  placeholder?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  helperText?: string;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  onBlur,
  error,
  disabled = false,
  required = false,
  leftIcon,
  rightIcon,
  helperText,
  autoComplete,
  ...props
}) => {
  // Requirements:
  // 1. Support all input types
  // 2. Handle validation states
  // 3. Support icons with proper positioning
  // 4. Implement accessibility features
  // 5. Support controlled and uncontrolled modes
};

// TODO: Create Select component with search
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
  group?: string;
}

interface SelectProps {
  options: SelectOption[];
  value: string | string[];
  onChange: (value: string | string[]) => void;
  placeholder?: string;
  searchable?: boolean;
  multiple?: boolean;
  disabled?: boolean;
  error?: string;
  loading?: boolean;
  onSearch?: (query: string) => void;
  renderOption?: (option: SelectOption) => React.ReactNode;
}

const Select: React.FC<SelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  searchable = false,
  multiple = false,
  disabled = false,
  error,
  loading = false,
  onSearch,
  renderOption,
  ...props
}) => {
  // Requirements:
  // 1. Support single and multiple selection
  // 2. Implement search functionality
  // 3. Support option groups
  // 4. Handle keyboard navigation
  // 5. Support virtual scrolling for large lists
  // 6. Implement proper ARIA attributes
};
```

### 🚀 Task 3.3: Layout Components & Responsive Design
**Objective**: Create flexible layout components with responsive design

```typescript
// TODO: Create a responsive Grid system
interface GridProps {
  columns?: number | Record<string, number>;
  gap?: keyof typeof designTokens.spacing;
  alignItems?: 'start' | 'center' | 'end' | 'stretch';
  justifyContent?: 'start' | 'center' | 'end' | 'between' | 'around';
  children: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap = 'md',
  alignItems = 'stretch',
  justifyContent = 'start',
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support responsive column counts
  // 2. Handle gap spacing with design tokens
  // 3. Support CSS Grid alignment properties
  // 4. Auto-fit and auto-fill behavior
  // 5. Support nested grids
};

interface GridItemProps {
  span?: number | Record<string, number>;
  start?: number | Record<string, number>;
  end?: number | Record<string, number>;
  children: React.ReactNode;
}

const GridItem: React.FC<GridItemProps> = ({
  span = 1,
  start,
  end,
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support responsive span values
  // 2. Handle grid positioning
  // 3. Support fractional spans
  // 4. Auto-placement behavior
};

// TODO: Create a flexible Stack component
interface StackProps {
  direction?: 'row' | 'column';
  spacing?: keyof typeof designTokens.spacing;
  align?: 'start' | 'center' | 'end' | 'stretch';
  justify?: 'start' | 'center' | 'end' | 'between' | 'around';
  wrap?: boolean;
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = 'column',
  spacing = 'md',
  align = 'stretch',
  justify = 'start',
  wrap = false,
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support horizontal and vertical stacking
  // 2. Handle spacing between items
  // 3. Support flexbox alignment
  // 4. Handle wrapping behavior
  // 5. Support responsive direction changes
};

// TODO: Create a responsive Container component
interface ContainerProps {
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  padding?: keyof typeof designTokens.spacing;
  centered?: boolean;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  maxWidth = 'lg',
  padding = 'md',
  centered = true,
  children,
  ...props
}) => {
  // Requirements:
  // 1. Support responsive max-widths
  // 2. Center content when needed
  // 3. Handle consistent padding
  // 4. Support fluid containers
  // 5. Integrate with grid system
};
```

---

## Challenge 4: Accessibility & Performance

### 🚀 Task 4.1: Accessibility Implementation
**Objective**: Implement comprehensive accessibility features

```typescript
// TODO: Create accessible Modal component
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  closeOnOverlayClick = true,
  closeOnEscape = true,
  ...props
}) => {
  // Requirements:
  // 1. Implement focus trap
  // 2. Handle keyboard navigation
  // 3. Support screen readers
  // 4. Manage body scroll
  // 5. Handle escape key
  // 6. Proper ARIA attributes
  // 7. Return focus to trigger element
};

// TODO: Create accessible Dropdown component
interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  disabled?: boolean;
  closeOnSelect?: boolean;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  children,
  placement = 'bottom-start',
  disabled = false,
  closeOnSelect = true,
  ...props
}) => {
  // Requirements:
  // 1. Handle keyboard navigation (arrow keys)
  // 2. Support ARIA menu pattern
  // 3. Handle focus management
  // 4. Support hover and click interactions
  // 5. Handle outside clicks
  // 6. Position dropdown correctly
};

// TODO: Create accessible Toast notification system
interface ToastProps {
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  onClose: () => void;
  actions?: Array<{
    label: string;
    onClick: () => void;
  }>;
}

const Toast: React.FC<ToastProps> = ({
  type,
  title,
  message,
  duration = 5000,
  onClose,
  actions,
  ...props
}) => {
  // Requirements:
  // 1. Announce to screen readers
  // 2. Support keyboard interaction
  // 3. Auto-dismiss with pause on hover
  // 4. Handle focus management
  // 5. Support action buttons
  // 6. Proper color contrast
};

// TODO: Create accessibility testing utilities
const a11yTestUtils = {
  // Check color contrast
  checkColorContrast: (foreground: string, background: string): boolean => {
    // Requirements:
    // 1. Calculate contrast ratio
    // 2. Check WCAG AA compliance
    // 3. Support different color formats
    // 4. Handle transparency
  },

  // Check focus management
  checkFocusManagement: (element: HTMLElement): boolean => {
    // Requirements:
    // 1. Verify focus visibility
    // 2. Check focus order
    // 3. Validate focus trap
    // 4. Check skip links
  },

  // Check ARIA attributes
  checkARIAAttributes: (element: HTMLElement): string[] => {
    // Requirements:
    // 1. Validate ARIA attributes
    // 2. Check required attributes
    // 3. Verify attribute values
    // 4. Check relationships
  },
};
```

### 🚀 Task 4.2: Performance Optimization
**Objective**: Implement advanced performance optimization techniques

```typescript
// TODO: Create performance monitoring hooks
function usePerformanceMonitor() {
  const [metrics, setMetrics] = useState({
    renderTime: 0,
    memoryUsage: 0,
    componentCount: 0,
    updateCount: 0,
  });

  // Requirements:
  // 1. Track render times
  // 2. Monitor memory usage
  // 3. Count component updates
  // 4. Measure interaction responsiveness
  // 5. Report performance metrics
}

// TODO: Create bundle size optimization utilities
const bundleOptimization = {
  // Lazy load components
  lazyLoad: <T extends React.ComponentType<any>>(
    importFunc: () => Promise<{ default: T }>
  ): React.LazyExoticComponent<T> => {
    // Requirements:
    // 1. Implement code splitting
    // 2. Handle loading states
    // 3. Support preloading
    // 4. Handle errors gracefully
  },

  // Tree shake utilities
  treeShake: (modules: string[]): void => {
    // Requirements:
    // 1. Analyze bundle size
    // 2. Identify unused code
    // 3. Suggest optimizations
    // 4. Generate reports
  },

  // Optimize images
  optimizeImages: (images: string[]): void => {
    // Requirements:
    // 1. Compress images
    // 2. Generate responsive images
    // 3. Convert to modern formats
    // 4. Implement lazy loading
  },
};

// TODO: Create caching strategies
const cacheStrategies = {
  // Memory cache for expensive computations
  memoryCache: new Map<string, { data: any; timestamp: number; ttl: number }>(),

  // Service worker cache
  serviceWorkerCache: {
    register: (): void => {
      // Requirements:
      // 1. Register service worker
      // 2. Handle updates
      // 3. Cache static assets
      // 4. Implement offline support
    },

    update: (): void => {
      // Requirements:
      // 1. Update cached assets
      // 2. Handle version changes
      // 3. Notify users of updates
      // 4. Manage cache size
    },
  },

  // Browser cache optimization
  optimizeBrowserCache: (): void => {
    // Requirements:
    // 1. Set appropriate cache headers
    // 2. Implement cache busting
    // 3. Use ETags effectively
    // 4. Handle cache invalidation
  },
};
```

### 🚀 Task 4.3: Testing Strategy
**Objective**: Implement comprehensive testing for React components

```typescript
// TODO: Create testing utilities for React components
const testUtils = {
  // Custom render function with providers
  renderWithProviders: (
    ui: React.ReactElement,
    options?: {
      initialState?: any;
      theme?: any;
      router?: any;
    }
  ) => {
    // Requirements:
    // 1. Wrap with necessary providers
    // 2. Setup initial state
    // 3. Configure theme
    // 4. Handle routing
    // 5. Cleanup after tests
  },

  // User interaction utilities
  userInteraction: {
    // Click with accessibility checks
    click: async (element: HTMLElement): Promise<void> => {
      // Requirements:
      // 1. Verify element is clickable
      // 2. Check accessibility
      // 3. Trigger click event
      // 4. Wait for updates
    },

    // Type with validation
    type: async (element: HTMLElement, text: string): Promise<void> => {
      // Requirements:
      // 1. Verify element is editable
      // 2. Clear existing text
      // 3. Type new text
      // 4. Trigger change events
    },

    // Navigation simulation
    navigate: async (path: string): Promise<void> => {
      // Requirements:
      // 1. Update router state
      // 2. Trigger navigation
      // 3. Wait for component updates
      // 4. Verify navigation
    },
  },

  // Performance testing
  performanceTest: {
    // Measure render time
    measureRenderTime: (component: React.ComponentType): number => {
      // Requirements:
      // 1. Measure initial render
      // 2. Measure re-renders
      // 3. Calculate averages
      // 4. Compare with benchmarks
    },

    // Test memory leaks
    checkMemoryLeaks: (component: React.ComponentType): boolean => {
      // Requirements:
      // 1. Mount and unmount component
      // 2. Check for memory leaks
      // 3. Verify cleanup
      // 4. Test with different props
    },
  },
};

// TODO: Create comprehensive test examples
describe('Component Testing Examples', () => {
  describe('Button Component', () => {
    it('should render with correct attributes', () => {
      // TODO: Test button rendering
      // 1. Verify correct HTML structure
      // 2. Check accessibility attributes
      // 3. Test different variants
      // 4. Verify event handling
    });

    it('should handle loading state', () => {
      // TODO: Test loading state
      // 1. Show loading spinner
      // 2. Disable interaction
      // 3. Maintain accessibility
      // 4. Test loading completion
    });

    it('should meet accessibility standards', () => {
      // TODO: Test accessibility
      // 1. Check color contrast
      // 2. Verify ARIA attributes
      // 3. Test keyboard navigation
      // 4. Test screen reader compatibility
    });
  });

  describe('Form Component', () => {
    it('should handle form submission', async () => {
      // TODO: Test form submission
      // 1. Fill form fields
      // 2. Trigger submission
      // 3. Verify validation
      // 4. Check success/error states
    });

    it('should validate fields correctly', async () => {
      // TODO: Test field validation
      // 1. Test required fields
      // 2. Test format validation
      // 3. Test custom validation
      // 4. Test async validation
    });
  });
});
```

---

## 🎯 Success Criteria

### Phase 3 Completion Checklist:
- [ ] Component architecture follows React best practices
- [ ] State management implemented with Zustand patterns
- [ ] Design system provides consistent UI components
- [ ] Accessibility standards met (WCAG 2.1 AA)
- [ ] Performance optimizations implemented
- [ ] Comprehensive test coverage (>90%)
- [ ] Responsive design works across devices
- [ ] Code follows TypeScript strict mode
- [ ] Documentation includes usage examples
- [ ] Performance benchmarks established

### 📚 Study Resources:
- [React Documentation](https://react.dev/) - Official React documentation
- [Zustand Documentation](https://zustand-demo.pmnd.rs/) - State management patterns
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/) - WCAG 2.1 reference
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) - Testing best practices
- [Web Performance](https://web.dev/performance/) - Performance optimization guide

### 🎓 Reflection Questions:
1. How does component composition improve code reusability?
2. What are the trade-offs between prop drilling and global state?
3. How do you balance component flexibility with consistency?
4. What accessibility patterns are essential for modern web apps?
5. How do you measure and optimize React application performance?
6. When should you use memoization vs. component restructuring?
7. How do design systems improve development team efficiency?
8. What testing strategies provide the best confidence in UI components?

---

## 🚀 Integration Project: Dashboard Application

### Final Challenge: Build a Complete Dashboard
Create a comprehensive dashboard application that demonstrates all Phase 3 concepts:

**Requirements:**
- User authentication with Zustand
- Responsive grid layout with data visualization
- Accessible form components with validation
- Performance-optimized data tables
- Dark/light theme switching
- Real-time notifications
- Comprehensive test coverage
- Progressive Web App features

**Features to Implement:**
- User management interface
- Data visualization charts
- File upload with progress
- Search and filtering
- Export functionality
- Mobile-responsive design
- Offline support
- Performance monitoring

**Success Metrics:**
- Lighthouse score > 90 in all categories
- WAVE accessibility scan passes
- Bundle size < 1MB gzipped
- First Contentful Paint < 2s
- Time to Interactive < 3s
- 100% test coverage on critical paths

---

👉 **Remember**: Focus on building scalable, maintainable, and accessible user interfaces. The patterns you learn in Phase 3 will form the foundation for complex frontend applications.

👉 Always check the correctness of AI-generated responses.
