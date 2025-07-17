// src/types/index.ts
// 🎯 LEARNING GOAL: Define strong TypeScript types for better code safety
// 📚 Study: Generic types, utility types, and advanced TypeScript features

/**
 * 🚀 TASK 1: Generic Algorithm Interface
 * - Study: How generics improve type safety
 * - Challenge: Add constraints to generics
 */
export interface Algorithm<T> {
    name: string;
    description: string;
    timeComplexity: string;
    spaceComplexity: string;
    execute: (data: T[]) => T[];
}

/**
 * 🚀 TASK 2: Generic Data Structure Interface
 * - Think: Why use generics instead of 'any'?
 * - Consider: What operations are common to all data structures?
 */
export interface DataStructure {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

/**
 * 🚀 TASK 3: More Specific Data Structure Types
 * - Study: Interface inheritance and composition
 * - Challenge: Create different interfaces for different data structures
 */
export interface Stack<T> {
    push(item: T): void;
    pop(): T | undefined;
    peek(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

export interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    front(): T | undefined;
    isEmpty(): boolean;
    size(): number;
}

export interface Tree<T> {
    insert(value: T): void;
    search(value: T): boolean;
    delete(value: T): boolean;
    traverse(): T[];
}

/**
 * 🚀 TASK 4: User-related Types
 * - Study: Optional properties, union types, and type guards
 * - Challenge: Add validation using TypeScript
 */
export interface User {
    id: number;
    name: string;
    email: string;
    age?: number;
    isActive: boolean;
    roles: UserRole[];
}

export type UserRole = 'admin' | 'user' | 'moderator';

/**
 * 🚀 TASK 5: Utility Types for Learning
 * - Study: Utility types like Partial, Pick, Omit
 * - Challenge: Create custom utility types
 */
export type CreateUserRequest = Omit<User, 'id' | 'isActive'>;
export type UpdateUserRequest = Partial<Pick<User, 'name' | 'email' | 'age'>>;
export type UserSummary = Pick<User, 'id' | 'name' | 'email'>;

/**
 * 🚀 TASK 6: Function Types and Higher-Order Functions
 * - Study: Function types, callback patterns
 * - Challenge: Create generic function types
 */
export type SortingFunction<T> = (arr: T[]) => T[];
export type ComparisonFunction<T> = (a: T, b: T) => number;
export type PredicateFunction<T> = (item: T) => boolean;

/**
 * 🚀 TASK 7: Error Types
 * - Study: Discriminated unions for error handling
 * - Challenge: Create a Result type for error handling
 */
export type ValidationError = {
    type: 'validation';
    field: string;
    message: string;
};

export type DatabaseError = {
    type: 'database';
    code: string;
    message: string;
};

export type AppError = ValidationError | DatabaseError;

/**
 * 🚀 TASK 8: Advanced Generic Constraints
 * - Study: Generic constraints and conditional types
 * - Challenge: Create types that work with specific interfaces
 */
export interface Comparable<T> {
    compareTo(other: T): number;
}

export interface Serializable {
    serialize(): string;
    deserialize(data: string): void;
}

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. How do strong types prevent runtime errors?
 * 2. When should you use 'any' vs 'unknown' vs generics?
 * 3. How do utility types improve code reusability?
 * 4. What's the trade-off between type safety and flexibility?
 * 5. How do discriminated unions help with error handling?
 */

/**
 * 📚 RECOMMENDED RESOURCES:
 * - TypeScript Handbook: https://www.typescriptlang.org/docs/
 * - Advanced TypeScript: https://github.com/type-challenges/type-challenges
 * - TypeScript Deep Dive: https://basarat.gitbook.io/typescript/
 */
