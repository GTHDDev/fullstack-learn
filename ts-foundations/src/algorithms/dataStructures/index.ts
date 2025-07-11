// src/algorithms/dataStructures/index.ts
// 🎯 LEARNING GOAL: Understand fundamental data structures and their operations
// 📚 Study: Time complexity (Big-O) for each operation

import { DataStructure } from '../../types';

/**
 * 🚀 TASK 1: Implement a Stack using TypeScript generics
 * - Why generics? Think about type safety and reusability
 * - Consider: What are the core operations a stack needs?
 * - Challenge: How would you implement this with both array and linked list?
 */
export class Stack<T> implements DataStructure {
    private items: T[] = [];
    
    push(item: T): void {
        // TODO: Implement push operation
        // Think: What's the time complexity? O(1) or O(n)?
        throw new Error('Not implemented yet');
    }
    
    pop(): T | undefined {
        // TODO: Implement pop operation
        // Consider: What should happen when stack is empty?
        throw new Error('Not implemented yet');
    }
    
    peek(): T | undefined {
        // TODO: Implement peek operation
        // Think: How is this different from pop?
        throw new Error('Not implemented yet');
    }
    
    isEmpty(): boolean {
        // TODO: Implement isEmpty check
        return false;
    }
    
    size(): number {
        // TODO: Return current size
        return 0;
    }
}

/**
 * 🚀 TASK 2: Implement a Queue using TypeScript
 * - Research: FIFO vs LIFO - when would you use each?
 * - Challenge: Implement using circular buffer for better performance
 * - Think: What are real-world applications of queues?
 */
export class Queue<T> {
    private items: T[] = [];
    
    enqueue(item: T): void {
        // TODO: Add item to rear of queue
        // Consider: Array methods - which is most efficient?
        throw new Error('Not implemented yet');
    }
    
    dequeue(): T | undefined {
        // TODO: Remove and return front item
        // Think: Time complexity of shift() vs other approaches
        throw new Error('Not implemented yet');
    }
    
    front(): T | undefined {
        // TODO: Return front item without removing
        throw new Error('Not implemented yet');
    }
    
    isEmpty(): boolean {
        return this.items.length === 0;
    }
    
    size(): number {
        return this.items.length;
    }
}

/**
 * 🚀 TASK 3: Implement a Binary Search Tree
 * - Study: Tree traversal methods (inorder, preorder, postorder)
 * - Challenge: Add balance checking and auto-balancing
 * - Research: When are trees better than arrays for searching?
 */
class TreeNode<T> {
    constructor(
        public value: T,
        public left: TreeNode<T> | null = null,
        public right: TreeNode<T> | null = null
    ) {}
}

export class BinarySearchTree<T> {
    private root: TreeNode<T> | null = null;
    
    insert(value: T): void {
        // TODO: Insert value maintaining BST property
        // Think: Recursive vs iterative approach
        throw new Error('Not implemented yet');
    }
    
    search(value: T): boolean {
        // TODO: Search for value in tree
        // Consider: Average vs worst-case time complexity
        throw new Error('Not implemented yet');
    }
    
    inorderTraversal(): T[] {
        // TODO: Return values in sorted order
        // Study: Why does inorder traversal give sorted result?
        throw new Error('Not implemented yet');
    }
}

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. When would you choose a Stack over a Queue?
 * 2. What's the trade-off between arrays and linked lists for these structures?
 * 3. How do these data structures relate to algorithm design?
 * 4. What are the space complexity considerations?
 */
