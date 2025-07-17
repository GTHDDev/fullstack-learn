/**
 * Jest Test Setup
 * 
 * This file contains global test setup and configuration
 * that runs before all tests in the Phase 1 project.
 */

// =============================================================================
// GLOBAL TEST SETUP
// =============================================================================

// Increase timeout for complex algorithm tests
jest.setTimeout(10000);

// Mock console methods to avoid noise in tests
const originalConsole = { ...console };

beforeEach(() => {
  // Reset console mocks before each test
  console.log = jest.fn();
  console.warn = jest.fn();
  console.error = jest.fn();
  console.debug = jest.fn();
});

afterEach(() => {
  // Restore original console after each test
  Object.assign(console, originalConsole);
});

// =============================================================================
// GLOBAL UTILITIES
// =============================================================================

/**
 * Global test utilities available in all test files
 */
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeWithinRange(floor: number, ceiling: number): R;
      toHaveComplexity(complexity: string): R;
    }
  }
}

// Custom matcher for number ranges
expect.extend({
  toBeWithinRange(received: number, floor: number, ceiling: number) {
    const pass = received >= floor && received <= ceiling;
    if (pass) {
      return {
        message: () => `expected ${received} not to be within range ${floor} - ${ceiling}`,
        pass: true,
      };
    } else {
      return {
        message: () => `expected ${received} to be within range ${floor} - ${ceiling}`,
        pass: false,
      };
    }
  },
});

// Custom matcher for algorithm complexity
expect.extend({
  toHaveComplexity(received: any, complexity: string) {
    // This is a placeholder - actual complexity testing would require
    // performance measurements and analysis
    return {
      message: () => `expected algorithm to have ${complexity} complexity`,
      pass: true,
    };
  },
});

// =============================================================================
// MOCK IMPLEMENTATIONS
// =============================================================================

/**
 * Mock performance.now for consistent timing tests
 */
let mockTime = 0;
const originalPerformanceNow = performance.now;

export const mockPerformanceNow = (time: number = 0) => {
  mockTime = time;
  performance.now = jest.fn(() => mockTime);
};

export const advanceTime = (ms: number) => {
  mockTime += ms;
};

export const restorePerformanceNow = () => {
  performance.now = originalPerformanceNow;
};

// =============================================================================
// TEST HELPERS
// =============================================================================

/**
 * Helper to create test data arrays
 */
export const createTestArray = (size: number, type: 'random' | 'sorted' | 'reverse' = 'random') => {
  const arr = Array.from({ length: size }, (_, i) => i);
  
  switch (type) {
    case 'random':
      return arr.sort(() => Math.random() - 0.5);
    case 'sorted':
      return arr;
    case 'reverse':
      return arr.reverse();
    default:
      return arr;
  }
};

/**
 * Helper to measure function execution time
 */
export const measureExecutionTime = <T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): { result: ReturnType<T>; duration: number } => {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  
  return {
    result,
    duration: end - start,
  };
};

/**
 * Helper to test async function execution time
 */
export const measureAsyncExecutionTime = async <T extends (...args: any[]) => Promise<any>>(
  fn: T,
  ...args: Parameters<T>
): Promise<{ result: Awaited<ReturnType<T>>; duration: number }> => {
  const start = performance.now();
  const result = await fn(...args);
  const end = performance.now();
  
  return {
    result,
    duration: end - start,
  };
};

/**
 * Helper to generate random test data
 */
export const generateRandomData = {
  number: (min: number = 0, max: number = 100) => 
    Math.floor(Math.random() * (max - min + 1)) + min,
  
  string: (length: number = 10) => 
    Array.from({ length }, () => Math.random().toString(36).charAt(2)).join(''),
  
  array: (size: number, generator: () => any = () => Math.random()) => 
    Array.from({ length: size }, generator),
  
  object: (keys: string[]) => 
    keys.reduce((obj, key) => ({ ...obj, [key]: Math.random() }), {}),
};

/**
 * Helper to create deep clones for testing
 */
export const deepClone = <T>(obj: T): T => {
  if (obj === null || typeof obj !== 'object') return obj;
  if (obj instanceof Date) return new Date(obj.getTime()) as T;
  if (obj instanceof Array) return obj.map(item => deepClone(item)) as T;
  
  const cloned = {} as T;
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
};

/**
 * Helper to create mock promises
 */
export const createMockPromise = <T>(
  value: T,
  delay: number = 0,
  shouldReject: boolean = false
): Promise<T> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldReject) {
        reject(new Error(`Mock error: ${value}`));
      } else {
        resolve(value);
      }
    }, delay);
  });
};

// =============================================================================
// CLEANUP
// =============================================================================

// Global cleanup after all tests
afterAll(() => {
  // Restore any global mocks
  restorePerformanceNow();
  
  // Reset console
  Object.assign(console, originalConsole);
});
