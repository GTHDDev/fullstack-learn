// src/cleanCode/examples.ts
// 🎯 LEARNING GOAL: Apply clean code principles for maintainable software
// 📚 Study: Robert C. Martin's Clean Code principles

/**
 * 🚀 TASK 1: MEANINGFUL NAMES
 * Compare these two approaches and understand why naming matters
 * Research: Hungarian notation vs descriptive naming
 */

// BAD: Unclear, abbreviated names
function calc(x: number, y: number, z: number): number {
    return x * y * z;
}

// GOOD: Descriptive, intention-revealing names
function calculateRectangleVolume(length: number, width: number, height: number): number {
    return length * width * height;
}

/**
 * 🚀 TASK 2: FUNCTIONS SHOULD DO ONE THING
 * Refactor the BAD example to follow Single Responsibility Principle
 * Challenge: What other improvements can you make?
 */

// BAD: Function doing multiple things
function processUserData(userData: any): void {
    // Validation
    if (!userData.email || !userData.name) {
        throw new Error('Invalid user data');
    }
    
    // Formatting
    userData.email = userData.email.toLowerCase();
    userData.name = userData.name.trim();
    
    // Saving to database
    console.log('Saving user:', userData);
    // database.save(userData);
}

// GOOD: Separate functions for separate concerns
interface UserData {
    email: string;
    name: string;
}

function validateUserData(userData: UserData): void {
    if (!userData.email || !userData.name) {
        throw new Error('Invalid user data');
    }
}

function formatUserData(userData: UserData): UserData {
    return {
        email: userData.email.toLowerCase(),
        name: userData.name.trim()
    };
}

function saveUserData(userData: UserData): void {
    console.log('Saving user:', userData);
    // database.save(userData);
}

// TODO: Create a coordinator function that uses all three above
function processUser(userData: UserData): void {
    // TASK: Implement this using the three functions above
    // Think: How does this improve testability?
    throw new Error('Not implemented yet');
}

/**
 * 🚀 TASK 3: AVOID DEEPLY NESTED CODE
 * Refactor this nested function using early returns
 * Study: Guard clauses vs nested if statements
 */

// BAD: Deep nesting
function processOrderBad(order: any): string {
    if (order) {
        if (order.items && order.items.length > 0) {
            if (order.customer) {
                if (order.customer.address) {
                    return `Processing order for ${order.customer.name}`;
                } else {
                    return 'No customer address';
                }
            } else {
                return 'No customer information';
            }
        } else {
            return 'No items in order';
        }
    } else {
        return 'No order provided';
    }
}

// GOOD: Early returns with guard clauses
function processOrderGood(order: any): string {
    // TODO: Implement this using guard clauses
    // Think: How does this improve readability?
    throw new Error('Not implemented yet');
}

/**
 * 🚀 TASK 4: USE MEANINGFUL CONSTANTS
 * Replace magic numbers with named constants
 * Research: Why are magic numbers considered bad?
 */

// BAD: Magic numbers
function calculateDiscountBad(price: number, customerType: string): number {
    if (customerType === 'premium') {
        return price * 0.8; // What does 0.8 mean?
    } else if (customerType === 'regular') {
        return price * 0.95; // What does 0.95 mean?
    }
    return price;
}

// GOOD: Named constants
const DISCOUNT_RATES = {
    PREMIUM: 0.8,  // 20% discount
    REGULAR: 0.95  // 5% discount
} as const;

function calculateDiscountGood(price: number, customerType: string): number {
    // TODO: Implement using the constants above
    // Think: How does this improve maintainability?
    throw new Error('Not implemented yet');
}

/**
 * 🚀 TASK 5: ERROR HANDLING
 * Implement proper error handling with custom error types
 * Study: Error handling strategies in TypeScript
 */

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'ValidationError';
    }
}

class DatabaseError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DatabaseError';
    }
}

// TODO: Implement a function that demonstrates proper error handling
function createUserAccount(userData: UserData): Promise<string> {
    // TASK: Implement with proper error handling
    // Consider: When to throw vs when to return error objects
    throw new Error('Not implemented yet');
}

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. How do clean code principles affect debugging time?
 * 2. What's the relationship between clean code and performance?
 * 3. How does clean code support team collaboration?
 * 4. When might you break these rules, and why?
 * 5. How do these principles relate to SOLID principles?
 */

/**
 * 📚 RECOMMENDED RESOURCES:
 * - Clean Code by Robert C. Martin
 * - https://github.com/ryanmcdermott/clean-code-javascript
 * - https://github.com/labs42io/clean-code-typescript
 * - https://refactoring.guru/refactoring
 */
