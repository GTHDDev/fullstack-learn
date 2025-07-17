/**
 * Shared TypeScript types for Phase 1 Challenges
 * 
 * This file contains common types used across multiple challenges
 * to promote consistency and reusability.
 */

// =============================================================================
// UTILITY TYPES
// =============================================================================

/**
 * Make all properties in T optional recursively
 */
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends (infer U)[]
    ? DeepPartial<U>[]
    : T[P] extends object
    ? DeepPartial<T[P]>
    : T[P];
};

/**
 * Make all properties in T readonly recursively
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends (infer U)[]
    ? DeepReadonly<U>[]
    : T[P] extends object
    ? DeepReadonly<T[P]>
    : T[P];
};

/**
 * Extract function parameters as tuple
 */
export type Parameters<T extends (...args: any[]) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;

/**
 * Extract function return type
 */
export type ReturnType<T extends (...args: any[]) => any> = T extends (
  ...args: any[]
) => infer R
  ? R
  : any;

// =============================================================================
// CHALLENGE SPECIFIC TYPES
// =============================================================================

/**
 * Challenge completion status
 */
export type ChallengeStatus = 'not-started' | 'in-progress' | 'completed' | 'reviewed';

/**
 * Challenge metadata
 */
export interface ChallengeInfo {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  estimatedTime: number; // in minutes
  prerequisites: string[];
  learningObjectives: string[];
  status: ChallengeStatus;
}

/**
 * Test result information
 */
export interface TestResult {
  passed: boolean;
  duration: number;
  coverage: number;
  errors: string[];
  warnings: string[];
}

// =============================================================================
// ALGORITHM TYPES
// =============================================================================

/**
 * Comparison function for sorting
 */
export type CompareFn<T> = (a: T, b: T) => number;

/**
 * Predicate function for filtering/searching
 */
export type PredicateFn<T> = (item: T) => boolean;

/**
 * Mapper function for transformations
 */
export type MapperFn<T, U> = (item: T, index: number) => U;

/**
 * Reducer function
 */
export type ReducerFn<T, U> = (accumulator: U, current: T, index: number) => U;

/**
 * Tree node structure
 */
export interface TreeNode<T> {
  value: T;
  children: TreeNode<T>[];
  parent?: TreeNode<T>;
}

/**
 * Binary tree node
 */
export interface BinaryTreeNode<T> {
  value: T;
  left?: BinaryTreeNode<T>;
  right?: BinaryTreeNode<T>;
  parent?: BinaryTreeNode<T>;
}

/**
 * Graph node
 */
export interface GraphNode<T> {
  value: T;
  neighbors: GraphNode<T>[];
  visited?: boolean;
}

/**
 * Performance metrics
 */
export interface PerformanceMetrics {
  executionTime: number;
  memoryUsage: number;
  operationCount: number;
  complexityClass: 'O(1)' | 'O(log n)' | 'O(n)' | 'O(n log n)' | 'O(n²)' | 'O(2^n)';
}

// =============================================================================
// ASYNC TYPES
// =============================================================================

/**
 * Promise state
 */
export type PromiseState = 'pending' | 'fulfilled' | 'rejected';

/**
 * Promise result
 */
export interface PromiseResult<T> {
  status: 'fulfilled' | 'rejected';
  value?: T;
  reason?: unknown;
}

/**
 * Retry options
 */
export interface RetryOptions {
  maxRetries: number;
  delay: number;
  backoff?: 'linear' | 'exponential';
  retryCondition?: (error: unknown) => boolean;
}

/**
 * Timeout options
 */
export interface TimeoutOptions {
  timeout: number;
  timeoutMessage?: string;
}

// =============================================================================
// DESIGN PATTERN TYPES
// =============================================================================

/**
 * Observer pattern types
 */
export interface Observer<T> {
  update(data: T): void;
}

export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(data: T): void;
}

/**
 * Factory pattern types
 */
export interface Factory<T> {
  create(...args: any[]): T;
}

/**
 * Strategy pattern types
 */
export interface Strategy<T, U> {
  execute(data: T): U;
}

/**
 * Command pattern types
 */
export interface Command {
  execute(): void;
  undo?(): void;
}

// =============================================================================
// EVENT SYSTEM TYPES
// =============================================================================

/**
 * Event listener function
 */
export type EventListener<T = any> = (data: T) => void;

/**
 * Event emitter interface
 */
export interface EventEmitter<T extends Record<string, any>> {
  on<K extends keyof T>(event: K, listener: EventListener<T[K]>): void;
  off<K extends keyof T>(event: K, listener: EventListener<T[K]>): void;
  emit<K extends keyof T>(event: K, data: T[K]): void;
}

/**
 * Default event map
 */
export interface DefaultEventMap {
  [key: string]: any;
}

// =============================================================================
// VALIDATION TYPES
// =============================================================================

/**
 * Validation result
 */
export interface ValidationResult {
  isValid: boolean;
  errors: string[];
  warnings: string[];
}

/**
 * Validator function
 */
export type ValidatorFn<T> = (value: T) => ValidationResult;

/**
 * Schema definition
 */
export interface Schema<T> {
  validate(value: unknown): value is T;
  parse(value: unknown): T;
}

// =============================================================================
// TESTING TYPES
// =============================================================================

/**
 * Test case definition
 */
export interface TestCase<T, U> {
  input: T;
  expected: U;
  description: string;
}

/**
 * Benchmark result
 */
export interface BenchmarkResult {
  name: string;
  duration: number;
  iterations: number;
  opsPerSecond: number;
}

/**
 * Mock function
 */
export interface MockFunction<T extends (...args: any[]) => any> {
  (...args: Parameters<T>): ReturnType<T>;
  mockReturnValue(value: ReturnType<T>): void;
  mockImplementation(fn: T): void;
  mockReset(): void;
  calls: Parameters<T>[];
}

// =============================================================================
// EXPORTS
// =============================================================================

export * from './challenge-types';
export * from './algorithm-types';
export * from './async-types';
export * from './pattern-types';
