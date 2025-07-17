/**
 * Challenge 1: JavaScript Fundamentals Deep Dive
 * 
 * 🎯 Learning Objectives:
 * - Understand JavaScript execution model
 * - Master closure patterns
 * - Implement prototype-based inheritance
 * - Handle hoisting and temporal dead zone
 * 
 * 📚 Prerequisites:
 * - Basic JavaScript knowledge
 * - Understanding of functions and variables
 * 
 * ⏱️ Estimated Time: 8 hours
 * 
 * 🚀 Tasks:
 * 1. Task 1.1: Closures & Scope Mastery
 * 2. Task 1.2: Hoisting & Temporal Dead Zone
 * 3. Task 1.3: Prototypes & Inheritance
 * 
 * 📖 Resources:
 * - https://javascript.info/closures
 * - https://javascript.info/prototype-inheritance
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
 */

import { logger } from '../utils';

// =============================================================================
// TASK 1.1: CLOSURES & SCOPE MASTERY
// =============================================================================

/**
 * 🚀 Task 1.1: Closures & Scope Mastery
 * 
 * Objective: Understand closure behavior and scope chain
 * 
 * Requirements:
 * 1. Return a function that remembers its creation context
 * 2. Show how lexical scoping works
 * 3. Demonstrate practical use cases
 * 
 * 🎓 Reflection Questions:
 * 1. How does closure help in data privacy?
 * 2. When might closures cause memory leaks?
 * 3. How do closures relate to module patterns?
 */

// TODO: Implement createCounter function
export function createCounter(initialValue: number): () => number {
  // Your implementation here
  // Hint: Use closure to maintain state
  throw new Error('createCounter not implemented');
}

// TODO: Implement createMultiplier function
export function createMultiplier(factor: number): (num: number) => number {
  // Your implementation here
  // Hint: The factor should be remembered via closure
  throw new Error('createMultiplier not implemented');
}

// TODO: Implement createSecretKeeper function
export function createSecretKeeper(secret: string): {
  getSecret: () => string;
  updateSecret: (newSecret: string) => void;
} {
  // Your implementation here
  // Hint: Use closure to create private variables
  throw new Error('createSecretKeeper not implemented');
}

// =============================================================================
// TASK 1.2: HOISTING & TEMPORAL DEAD ZONE
// =============================================================================

/**
 * 🚀 Task 1.2: Hoisting & Temporal Dead Zone
 * 
 * Objective: Understand JavaScript's execution model
 * 
 * Requirements:
 * 1. Demonstrate different hoisting behaviors
 * 2. Show temporal dead zone with let/const
 * 3. Explain function vs variable hoisting
 * 
 * 🎓 Reflection Questions:
 * 1. Why does JavaScript hoist variables and functions?
 * 2. How does the temporal dead zone prevent errors?
 * 3. What are the implications for code organization?
 */

// TODO: Create examples that demonstrate hoisting behavior
export function demonstrateHoisting(): {
  varHoisting: string;
  letHoisting: string;
  functionHoisting: string;
  classHoisting: string;
} {
  // Your implementation here
  // Create examples showing different hoisting behaviors
  
  // Example structure:
  // - Show var hoisting (undefined vs ReferenceError)
  // - Show let/const temporal dead zone
  // - Show function declaration vs expression hoisting
  // - Show class hoisting behavior
  
  throw new Error('demonstrateHoisting not implemented');
}

// TODO: Implement a function that safely handles hoisting edge cases
export function safeVariableAccess<T>(
  getValue: () => T,
  fallback: T
): T {
  // Your implementation here
  // Handle cases where variables might not be initialized
  throw new Error('safeVariableAccess not implemented');
}

// =============================================================================
// TASK 1.3: PROTOTYPES & INHERITANCE
// =============================================================================

/**
 * 🚀 Task 1.3: Prototypes & Inheritance
 * 
 * Objective: Master JavaScript's prototype-based inheritance
 * 
 * Requirements:
 * 1. Create a prototype-based inheritance system
 * 2. Implement proper prototype chain
 * 3. Show method inheritance and overriding
 * 4. Demonstrate instanceof behavior
 * 
 * 🎓 Reflection Questions:
 * 1. How does prototype inheritance differ from class inheritance?
 * 2. What are the performance implications of deep prototype chains?
 * 3. How do you handle method conflicts in inheritance?
 */

// TODO: Create Animal constructor function
export function Animal(name: string) {
  // Your implementation here
  // Set up the base Animal with name property
  throw new Error('Animal constructor not implemented');
}

// TODO: Add methods to Animal prototype
// Animal.prototype.speak = function() { ... }
// Animal.prototype.getName = function() { ... }

// TODO: Create Dog constructor function that inherits from Animal
export function Dog(name: string, breed: string) {
  // Your implementation here
  // Call parent constructor and set breed
  throw new Error('Dog constructor not implemented');
}

// TODO: Set up proper prototype chain for Dog
// Dog.prototype = Object.create(Animal.prototype)
// Dog.prototype.constructor = Dog

// TODO: Add Dog-specific methods
// Dog.prototype.bark = function() { ... }
// Dog.prototype.getBreed = function() { ... }

// TODO: Create a function that demonstrates inheritance
export function demonstrateInheritance(): {
  animal: any;
  dog: any;
  instanceChecks: {
    dogIsAnimal: boolean;
    dogIsDog: boolean;
    animalIsDog: boolean;
  };
  methodCalls: {
    animalSpeak: string;
    dogSpeak: string;
    dogBark: string;
  };
} {
  // Your implementation here
  // Create instances and demonstrate inheritance
  throw new Error('demonstrateInheritance not implemented');
}

// =============================================================================
// ADVANCED TASKS
// =============================================================================

/**
 * 🚀 Advanced Task: Module Pattern with Closures
 * 
 * Create a module pattern that uses closures to provide:
 * - Private variables
 * - Public methods
 * - Initialization logic
 * - State management
 */
export function createModule(name: string) {
  // TODO: Implement module pattern
  // Use IIFE (Immediately Invoked Function Expression) with closures
  throw new Error('createModule not implemented');
}

/**
 * 🚀 Advanced Task: Prototype Chain Manipulation
 * 
 * Create utilities for working with prototype chains:
 * - Add methods to existing prototypes safely
 * - Create mixins for multiple inheritance
 * - Implement method chaining
 */
export const PrototypeUtils = {
  // TODO: Add method to any prototype safely
  addMethod: function(prototype: any, methodName: string, method: Function) {
    throw new Error('PrototypeUtils.addMethod not implemented');
  },
  
  // TODO: Create mixin functionality
  mixin: function(target: any, ...sources: any[]) {
    throw new Error('PrototypeUtils.mixin not implemented');
  },
  
  // TODO: Get all methods in prototype chain
  getMethods: function(obj: any): string[] {
    throw new Error('PrototypeUtils.getMethods not implemented');
  }
};

// =============================================================================
// CHALLENGE RUNNER
// =============================================================================

/**
 * Main function to run Challenge 1
 */
export default async function runChallenge1(): Promise<void> {
  logger.info('🚀 Starting Challenge 1: JavaScript Fundamentals Deep Dive');
  
  try {
    // Task 1.1: Test closures
    logger.info('Testing closures...');
    const counter = createCounter(0);
    const multiplier = createMultiplier(2);
    const secretKeeper = createSecretKeeper('initial secret');
    
    // Task 1.2: Test hoisting
    logger.info('Testing hoisting...');
    const hoistingDemo = demonstrateHoisting();
    
    // Task 1.3: Test prototypes
    logger.info('Testing prototypes...');
    const inheritanceDemo = demonstrateInheritance();
    
    logger.info('✅ Challenge 1 completed successfully!');
    logger.info('Next: Complete Challenge 2 - Async JavaScript Mastery');
    
  } catch (error) {
    logger.error('❌ Challenge 1 failed:', error);
    logger.info('💡 Review the requirements and try again');
  }
}

// =============================================================================
// EXPORTS
// =============================================================================

export {
  // Task 1.1 exports
  createCounter,
  createMultiplier,
  createSecretKeeper,
  
  // Task 1.2 exports
  demonstrateHoisting,
  safeVariableAccess,
  
  // Task 1.3 exports
  Animal,
  Dog,
  demonstrateInheritance,
  
  // Advanced exports
  createModule,
  PrototypeUtils,
};
