// tests/algorithms/sorting.test.ts
// 🎯 LEARNING GOAL: Validate sorting algorithm implementations with unit tests
// 📚 Study: Importance of various testing strategies like unit, integration, and e2e
import { bubbleSort, quickSort } from '../../src/algorithms/sorting';

/**
 * 🚀 TASK: Implement tests for sorting algorithms
 * - Consider edge cases
 * - Think about boundary conditions and typical usage
 */
describe('Sorting Algorithms', () => {
    describe('Bubble Sort', () => {
        it('should sort an array of numbers', () => {
            const result = bubbleSort([4, 2, 7, 1, 3]);
            expect(result).toEqual([1, 2, 3, 4, 7]);
        });

        it('should handle an empty array', () => {
            const result = bubbleSort([]);
            expect(result).toEqual([]);
        });

        it('should handle a single-element array', () => {
            const result = bubbleSort([1]);
            expect(result).toEqual([1]);
        });
    });

    describe('Quick Sort', () => {
        it('should sort an array of numbers', () => {
            const result = quickSort([4, 2, 7, 1, 3]);
            expect(result).toEqual([1, 2, 3, 4, 7]);
        });

        it('should handle an empty array', () => {
            const result = quickSort([]);
            expect(result).toEqual([]);
        });

        it('should handle a single-element array', () => {
            const result = quickSort([1]);
            expect(result).toEqual([1]);
        });
    });
});

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. How do test cases improve confidence in code changes?
 * 2. What is the role of unit tests in TDD?
 * 3. How can you apply DRY principles in test development?
 * 4. How do you decide what to test?
 */
