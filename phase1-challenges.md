# Phase 1: Core Programming Foundations - Practice Challenges

## 🎯 Learning Goals
Master JavaScript + TypeScript fundamentals, clean code principles, SOLID design, and algorithmic thinking

## 📚 Prerequisites
- Basic HTML, CSS, React knowledge
- Understanding of variables, functions, and basic programming concepts

---

## Challenge 1: JavaScript Fundamentals Deep Dive

### 🚀 Task 1.1: Closures & Scope Mastery
**Objective**: Understand closure behavior and scope chain

```typescript
// Create a function factory that demonstrates closure
// Requirements:
// 1. Return a function that remembers its creation context
// 2. Show how lexical scoping works
// 3. Demonstrate practical use cases

// TODO: Implement createCounter function
function createCounter(initialValue: number): () => number {
  // Your implementation here
}

// TODO: Implement createMultiplier function
function createMultiplier(factor: number): (num: number) => number {
  // Your implementation here
}

// TODO: Implement createSecretKeeper function
function createSecretKeeper(secret: string): {
  getSecret: () => string;
  updateSecret: (newSecret: string) => void;
} {
  // Your implementation here
}
```

**🎓 Reflection Questions**:
1. How does closure help in data privacy?
2. When might closures cause memory leaks?
3. How do closures relate to module patterns?

### 🚀 Task 1.2: Hoisting & Temporal Dead Zone
**Objective**: Understand JavaScript's execution model

```typescript
// Analyze and fix the following code snippets
// Explain what happens during execution

// Example 1: Variable hoisting
console.log(myVar); // What happens here?
var myVar = 5;

// Example 2: Function hoisting
sayHello(); // What happens here?
function sayHello() {
  console.log("Hello!");
}

// Example 3: Temporal dead zone
console.log(myLet); // What happens here?
let myLet = 10;

// TODO: Create examples that demonstrate:
// 1. The difference between var, let, and const hoisting
// 2. Function declaration vs function expression hoisting
// 3. Class hoisting behavior
```

### 🚀 Task 1.3: Prototypes & Inheritance
**Objective**: Master JavaScript's prototype-based inheritance

```typescript
// TODO: Create a prototype-based inheritance system
function Animal(name: string) {
  // Your implementation here
}

function Dog(name: string, breed: string) {
  // Your implementation here
}

// TODO: Implement proper prototype chain
// Requirements:
// 1. Dog should inherit from Animal
// 2. Dog should have its own methods
// 3. Demonstrate instanceof behavior
// 4. Show how to call parent methods
```

---

## Challenge 2: Async JavaScript Mastery

### 🚀 Task 2.1: Promise Patterns
**Objective**: Master Promise API and async patterns

```typescript
// TODO: Implement these promise utilities
class PromiseUtils {
  // Implement Promise.all alternative
  static all<T>(promises: Promise<T>[]): Promise<T[]> {
    // Your implementation here
  }

  // Implement Promise.race alternative
  static race<T>(promises: Promise<T>[]): Promise<T> {
    // Your implementation here
  }

  // Implement Promise.allSettled alternative
  static allSettled<T>(promises: Promise<T>[]): Promise<Array<{
    status: 'fulfilled' | 'rejected';
    value?: T;
    reason?: any;
  }>> {
    // Your implementation here
  }

  // Implement retry mechanism
  static retry<T>(
    fn: () => Promise<T>,
    maxRetries: number,
    delay: number = 1000
  ): Promise<T> {
    // Your implementation here
  }
}
```

### 🚀 Task 2.2: Async/Await Error Handling
**Objective**: Master error handling in async code

```typescript
// TODO: Create a robust async data fetcher
class DataFetcher {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  // TODO: Implement with proper error handling
  async fetchUserData(userId: number): Promise<User | null> {
    // Requirements:
    // 1. Handle network errors
    // 2. Handle HTTP errors (404, 500, etc.)
    // 3. Implement timeout
    // 4. Add retry logic
    // 5. Log errors appropriately
  }

  // TODO: Implement batch fetching
  async fetchMultipleUsers(userIds: number[]): Promise<User[]> {
    // Requirements:
    // 1. Fetch users concurrently
    // 2. Handle partial failures
    // 3. Return successful results even if some fail
  }
}
```

---

## Challenge 3: TypeScript Type System Deep Dive

### 🚀 Task 3.1: Advanced Type Patterns
**Objective**: Master TypeScript's type system for better code safety

```typescript
// TODO: Create a type-safe API response handler
type ApiResponse<T> = {
  data: T;
  status: 'success' | 'error';
  message: string;
  timestamp: Date;
};

// TODO: Implement conditional types
type UnwrapApiResponse<T> = T extends ApiResponse<infer U> ? U : never;

// TODO: Create a type-safe event system
interface EventMap {
  'user-login': { userId: number; timestamp: Date };
  'user-logout': { userId: number };
  'data-updated': { entityId: string; changes: Record<string, any> };
}

class TypedEventEmitter<T extends Record<string, any>> {
  private listeners: Map<string, Function[]> = new Map();

  // TODO: Implement type-safe event emission
  emit<K extends keyof T>(event: K, data: T[K]): void {
    // Your implementation here
  }

  // TODO: Implement type-safe event listening
  on<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    // Your implementation here
  }

  // TODO: Implement type-safe event removal
  off<K extends keyof T>(event: K, listener: (data: T[K]) => void): void {
    // Your implementation here
  }
}
```

### 🚀 Task 3.2: Utility Types & Mapped Types
**Objective**: Create reusable utility types

```typescript
// TODO: Implement these utility types from scratch
type MyPartial<T> = {
  // Your implementation here
};

type MyRequired<T> = {
  // Your implementation here
};

type MyPick<T, K extends keyof T> = {
  // Your implementation here
};

type MyOmit<T, K extends keyof T> = {
  // Your implementation here
};

// TODO: Create domain-specific utility types
type DeepReadonly<T> = {
  // Make all properties deeply readonly
};

type DeepPartial<T> = {
  // Make all properties deeply optional
};

type Flatten<T> = {
  // Flatten nested object types
};

// TODO: Create a type-safe form builder
interface FormField<T> {
  value: T;
  error?: string;
  touched: boolean;
  validator?: (value: T) => string | undefined;
}

type FormState<T> = {
  [K in keyof T]: FormField<T[K]>;
};

class FormBuilder<T> {
  private state: FormState<T>;

  constructor(initialData: T) {
    // TODO: Initialize form state
  }

  // TODO: Implement type-safe field updates
  updateField<K extends keyof T>(field: K, value: T[K]): void {
    // Your implementation here
  }

  // TODO: Implement validation
  validate(): boolean {
    // Your implementation here
  }

  // TODO: Get form data
  getData(): T {
    // Your implementation here
  }
}
```

---

## Challenge 4: Advanced Algorithm Implementations

### 🚀 Task 4.1: Search Algorithms
**Objective**: Implement and optimize search algorithms

```typescript
// TODO: Implement binary search with TypeScript generics
function binarySearch<T>(
  array: T[],
  target: T,
  compareFn: (a: T, b: T) => number
): number {
  // Requirements:
  // 1. Generic implementation
  // 2. Custom comparison function
  // 3. Return index or -1
  // 4. O(log n) time complexity
  // 5. Handle edge cases
}

// TODO: Implement depth-first search for tree structures
interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
}

function dfs<T>(
  root: TreeNode<T>,
  predicate: (value: T) => boolean
): TreeNode<T> | null {
  // Your implementation here
}

// TODO: Implement breadth-first search
function bfs<T>(
  root: TreeNode<T>,
  predicate: (value: T) => boolean
): TreeNode<T> | null {
  // Your implementation here
}
```

### 🚀 Task 4.2: Dynamic Programming
**Objective**: Master optimization techniques

```typescript
// TODO: Implement memoization decorator
function memoize<Args extends any[], Return>(
  fn: (...args: Args) => Return
): (...args: Args) => Return {
  // Your implementation here
}

// TODO: Solve classic DP problems
class DynamicProgramming {
  // Fibonacci with memoization
  static fibonacci(n: number): number {
    // Your implementation here
  }

  // Longest common subsequence
  static lcs(str1: string, str2: string): number {
    // Your implementation here
  }

  // Coin change problem
  static coinChange(coins: number[], amount: number): number {
    // Your implementation here
  }

  // Maximum subarray sum (Kadane's algorithm)
  static maxSubarraySum(nums: number[]): number {
    // Your implementation here
  }
}
```

---

## Challenge 5: Clean Code & Design Patterns

### 🚀 Task 5.1: Factory Pattern Implementation
**Objective**: Create flexible object creation patterns

```typescript
// TODO: Implement Abstract Factory pattern
interface Button {
  render(): string;
  onClick(): void;
}

interface Dialog {
  render(): string;
  show(): void;
}

interface UIFactory {
  createButton(): Button;
  createDialog(): Dialog;
}

// TODO: Implement concrete factories for different themes
class DarkThemeFactory implements UIFactory {
  // Your implementation here
}

class LightThemeFactory implements UIFactory {
  // Your implementation here
}

// TODO: Create a factory registry
class FactoryRegistry {
  private factories: Map<string, UIFactory> = new Map();

  register(theme: string, factory: UIFactory): void {
    // Your implementation here
  }

  create(theme: string): UIFactory {
    // Your implementation here
  }
}
```

### 🚀 Task 5.2: Observer Pattern
**Objective**: Implement reactive programming patterns

```typescript
// TODO: Implement Observable pattern
interface Observer<T> {
  update(data: T): void;
}

interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): void;
}

class Subject<T> implements Observable<T> {
  private observers: Observer<T>[] = [];

  // TODO: Implement subscription management
  subscribe(observer: Observer<T>): void {
    // Your implementation here
  }

  unsubscribe(observer: Observer<T>): void {
    // Your implementation here
  }

  notify(data: T): void {
    // Your implementation here
  }
}

// TODO: Create practical example - Stock price monitor
class StockPriceMonitor extends Subject<{ symbol: string; price: number; timestamp: Date }> {
  private prices: Map<string, number> = new Map();

  updatePrice(symbol: string, price: number): void {
    // Your implementation here
  }

  getPrice(symbol: string): number | undefined {
    // Your implementation here
  }
}
```

---

## Challenge 6: Testing & Quality Assurance

### 🚀 Task 6.1: Test-Driven Development
**Objective**: Practice TDD methodology

```typescript
// TODO: Write tests FIRST, then implement the solution
describe('StringUtils', () => {
  describe('camelCase', () => {
    it('should convert snake_case to camelCase', () => {
      // TODO: Write test
    });

    it('should convert kebab-case to camelCase', () => {
      // TODO: Write test
    });

    it('should handle edge cases', () => {
      // TODO: Write test
    });
  });

  describe('truncate', () => {
    it('should truncate long strings', () => {
      // TODO: Write test
    });

    it('should add ellipsis when truncating', () => {
      // TODO: Write test
    });
  });
});

// TODO: NOW implement the StringUtils class
class StringUtils {
  static camelCase(str: string): string {
    // Your implementation here
  }

  static truncate(str: string, length: number): string {
    // Your implementation here
  }
}
```

### 🚀 Task 6.2: Mock & Spy Testing
**Objective**: Master testing with external dependencies

```typescript
// TODO: Create a service with external dependencies
interface HttpClient {
  get(url: string): Promise<any>;
  post(url: string, data: any): Promise<any>;
}

interface Cache {
  get(key: string): any;
  set(key: string, value: any): void;
}

class UserService {
  constructor(
    private httpClient: HttpClient,
    private cache: Cache
  ) {}

  async getUser(id: number): Promise<User> {
    // TODO: Implement with caching
  }

  async createUser(userData: CreateUserRequest): Promise<User> {
    // TODO: Implement
  }
}

// TODO: Write tests with mocks
describe('UserService', () => {
  let userService: UserService;
  let mockHttpClient: jest.Mocked<HttpClient>;
  let mockCache: jest.Mocked<Cache>;

  beforeEach(() => {
    // TODO: Setup mocks
  });

  it('should return cached user if available', async () => {
    // TODO: Test caching behavior
  });

  it('should fetch user from API if not cached', async () => {
    // TODO: Test API call behavior
  });

  it('should handle API errors gracefully', async () => {
    // TODO: Test error handling
  });
});
```

---

## 🎯 Success Criteria

### Phase 1 Completion Checklist:
- [ ] All JavaScript fundamental concepts implemented correctly
- [ ] TypeScript advanced features used appropriately
- [ ] Clean code principles applied consistently
- [ ] SOLID principles demonstrated in practice
- [ ] Algorithm implementations optimized for performance
- [ ] Comprehensive test coverage (>80%)
- [ ] Code passes linting and formatting checks
- [ ] Documentation includes complexity analysis
- [ ] Reflection questions answered thoughtfully

### 📚 Study Resources:
- [JavaScript.info](https://javascript.info/) - Complete modern JavaScript tutorial
- [TypeScript Deep Dive](https://basarat.gitbook.io/typescript/) - Advanced TypeScript patterns
- [Clean Code JavaScript](https://github.com/ryanmcdermott/clean-code-javascript) - Best practices
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS) - JavaScript fundamentals
- [Algorithms in JavaScript](https://github.com/trekhleb/javascript-algorithms) - Implementation reference

### 🎓 Reflection Questions:
1. How do closures enable functional programming patterns?
2. When should you use Promises vs async/await?
3. How does TypeScript's type system improve code maintainability?
4. What are the trade-offs between different algorithm approaches?
5. How do clean code principles impact team collaboration?
6. When might SOLID principles add unnecessary complexity?
7. How does TDD influence your design decisions?
8. What patterns emerge when handling asynchronous operations?

---

👉 Always check the correctness of AI-generated responses.
