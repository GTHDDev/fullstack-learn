/**
 * Utility functions for Phase 1 Challenges
 * 
 * This file contains reusable utility functions that can be used
 * across multiple challenges to promote code reuse and consistency.
 */

import { PerformanceMetrics, BenchmarkResult } from '../types';

// =============================================================================
// PERFORMANCE UTILITIES
// =============================================================================

/**
 * Measures execution time of a function
 */
export function measureExecutionTime<T extends (...args: any[]) => any>(
  fn: T,
  ...args: Parameters<T>
): { result: ReturnType<T>; executionTime: number } {
  const start = performance.now();
  const result = fn(...args);
  const end = performance.now();
  
  return {
    result,
    executionTime: end - start,
  };
}

/**
 * Measures execution time of an async function
 */
export async function measureAsyncExecutionTime<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  ...args: Parameters<T>
): Promise<{ result: Awaited<ReturnType<T>>; executionTime: number }> {
  const start = performance.now();
  const result = await fn(...args);
  const end = performance.now();
  
  return {
    result,
    executionTime: end - start,
  };
}

/**
 * Benchmarks a function with multiple iterations
 */
export function benchmark<T extends (...args: any[]) => any>(
  name: string,
  fn: T,
  iterations: number = 1000,
  ...args: Parameters<T>
): BenchmarkResult {
  const durations: number[] = [];
  
  for (let i = 0; i < iterations; i++) {
    const { executionTime } = measureExecutionTime(fn, ...args);
    durations.push(executionTime);
  }
  
  const totalDuration = durations.reduce((sum, duration) => sum + duration, 0);
  const avgDuration = totalDuration / iterations;
  
  return {
    name,
    duration: avgDuration,
    iterations,
    opsPerSecond: 1000 / avgDuration, // Convert ms to ops/sec
  };
}

/**
 * Creates a performance monitoring decorator
 */
export function withPerformanceMonitoring<T extends (...args: any[]) => any>(
  fn: T,
  name?: string
): T {
  return ((...args: Parameters<T>) => {
    const { result, executionTime } = measureExecutionTime(fn, ...args);
    console.log(`[Performance] ${name || fn.name}: ${executionTime.toFixed(2)}ms`);
    return result;
  }) as T;
}

// =============================================================================
// ARRAY UTILITIES
// =============================================================================

/**
 * Generates an array of random numbers
 */
export function generateRandomArray(size: number, min: number = 0, max: number = 100): number[] {
  return Array.from({ length: size }, () => Math.floor(Math.random() * (max - min + 1)) + min);
}

/**
 * Generates a sorted array
 */
export function generateSortedArray(size: number, ascending: boolean = true): number[] {
  const arr = Array.from({ length: size }, (_, i) => i);
  return ascending ? arr : arr.reverse();
}

/**
 * Shuffles an array using Fisher-Yates algorithm
 */
export function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

/**
 * Checks if an array is sorted
 */
export function isSorted<T>(array: T[], compareFn?: (a: T, b: T) => number): boolean {
  const compare = compareFn || ((a, b) => (a as any) - (b as any));
  
  for (let i = 1; i < array.length; i++) {
    if (compare(array[i - 1], array[i]) > 0) {
      return false;
    }
  }
  return true;
}

// =============================================================================
// STRING UTILITIES
// =============================================================================

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Converts string to camelCase
 */
export function toCamelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => 
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');
}

/**
 * Converts string to kebab-case
 */
export function toKebabCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts string to snake_case
 */
export function toSnakeCase(str: string): string {
  return str
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

// =============================================================================
// OBJECT UTILITIES
// =============================================================================

/**
 * Deep clones an object
 */
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  if (obj instanceof Date) {
    return new Date(obj.getTime()) as T;
  }
  
  if (obj instanceof Array) {
    return obj.map(item => deepClone(item)) as T;
  }
  
  if (typeof obj === 'object') {
    const cloned = {} as T;
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        cloned[key] = deepClone(obj[key]);
      }
    }
    return cloned;
  }
  
  return obj;
}

/**
 * Deep merges two objects
 */
export function deepMerge<T, U>(target: T, source: U): T & U {
  const result = { ...target } as T & U;
  
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      const sourceValue = source[key];
      const targetValue = (result as any)[key];
      
      if (
        typeof sourceValue === 'object' &&
        sourceValue !== null &&
        typeof targetValue === 'object' &&
        targetValue !== null
      ) {
        (result as any)[key] = deepMerge(targetValue, sourceValue);
      } else {
        (result as any)[key] = sourceValue;
      }
    }
  }
  
  return result;
}

/**
 * Gets a nested property value safely
 */
export function getNestedProperty<T = any>(obj: any, path: string): T | undefined {
  return path.split('.').reduce((current, key) => current?.[key], obj);
}

/**
 * Sets a nested property value safely
 */
export function setNestedProperty(obj: any, path: string, value: any): void {
  const keys = path.split('.');
  const lastKey = keys.pop();
  
  if (!lastKey) return;
  
  const target = keys.reduce((current, key) => {
    if (current[key] === undefined) {
      current[key] = {};
    }
    return current[key];
  }, obj);
  
  target[lastKey] = value;
}

// =============================================================================
// VALIDATION UTILITIES
// =============================================================================

/**
 * Validates if value is a valid email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates if value is a valid URL
 */
export function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates if value is a valid JSON string
 */
export function isValidJson(str: string): boolean {
  try {
    JSON.parse(str);
    return true;
  } catch {
    return false;
  }
}

// =============================================================================
// ASYNC UTILITIES
// =============================================================================

/**
 * Creates a delay using Promise
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Creates a timeout wrapper for promises
 */
export function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<never>((_, reject) => {
      setTimeout(() => reject(new Error(`Operation timed out after ${timeoutMs}ms`)), timeoutMs);
    }),
  ]);
}

/**
 * Retries a promise-returning function
 */
export async function retry<T>(
  fn: () => Promise<T>,
  maxRetries: number = 3,
  delayMs: number = 1000
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      
      if (attempt === maxRetries) {
        throw lastError;
      }
      
      await delay(delayMs * Math.pow(2, attempt)); // Exponential backoff
    }
  }
  
  throw lastError!;
}

// =============================================================================
// TESTING UTILITIES
// =============================================================================

/**
 * Creates a mock function with call tracking
 */
export function createMockFunction<T extends (...args: any[]) => any>(): jest.MockedFunction<T> {
  return jest.fn() as jest.MockedFunction<T>;
}

/**
 * Asserts that a function throws an error
 */
export function assertThrows<T>(fn: () => T, expectedError?: string | RegExp): void {
  let didThrow = false;
  let actualError: Error | undefined;
  
  try {
    fn();
  } catch (error) {
    didThrow = true;
    actualError = error as Error;
  }
  
  if (!didThrow) {
    throw new Error('Expected function to throw an error');
  }
  
  if (expectedError && actualError) {
    if (typeof expectedError === 'string' && !actualError.message.includes(expectedError)) {
      throw new Error(`Expected error message to contain "${expectedError}", but got "${actualError.message}"`);
    }
    
    if (expectedError instanceof RegExp && !expectedError.test(actualError.message)) {
      throw new Error(`Expected error message to match ${expectedError}, but got "${actualError.message}"`);
    }
  }
}

/**
 * Asserts that an async function throws an error
 */
export async function assertThrowsAsync<T>(
  fn: () => Promise<T>,
  expectedError?: string | RegExp
): Promise<void> {
  let didThrow = false;
  let actualError: Error | undefined;
  
  try {
    await fn();
  } catch (error) {
    didThrow = true;
    actualError = error as Error;
  }
  
  if (!didThrow) {
    throw new Error('Expected async function to throw an error');
  }
  
  if (expectedError && actualError) {
    if (typeof expectedError === 'string' && !actualError.message.includes(expectedError)) {
      throw new Error(`Expected error message to contain "${expectedError}", but got "${actualError.message}"`);
    }
    
    if (expectedError instanceof RegExp && !expectedError.test(actualError.message)) {
      throw new Error(`Expected error message to match ${expectedError}, but got "${actualError.message}"`);
    }
  }
}

// =============================================================================
// LOGGING UTILITIES
// =============================================================================

/**
 * Logger with different levels
 */
export const logger = {
  info: (message: string, ...args: any[]) => {
    console.log(`[INFO] ${message}`, ...args);
  },
  warn: (message: string, ...args: any[]) => {
    console.warn(`[WARN] ${message}`, ...args);
  },
  error: (message: string, ...args: any[]) => {
    console.error(`[ERROR] ${message}`, ...args);
  },
  debug: (message: string, ...args: any[]) => {
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[DEBUG] ${message}`, ...args);
    }
  },
};
