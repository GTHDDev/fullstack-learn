// src/algorithms/dataStructures/index.ts
// 🎯 LEARNING GOAL: Understand fundamental data structures and their operations
// 📚 Study: Time complexity (Big-O) for each operation

import { DataStructure, Tree } from '../../types';

/**
 * 🚀 TASK 1: Implement a Stack using TypeScript generics
 * - Why generics? Think about type safety and reusability
 * - Consider: What are the core operations a stack needs?
 * - Challenge: How would you implement this with both array and linked list?
 */
export class Stack<T> implements DataStructure {
	private items: T[] = [];

	push(item: T): number {
		// TODO: Implement push operation
		// Think: What's the time complexity? O(1) or O(n)?
		this.items.push(item)
		return this.items.length
	}

	pop(): T | undefined {
		// TODO: Implement pop operation
		// Consider: What should happen when stack is empty?
		if (this.isEmpty()) {
			throw new Error('Stack is empty')
		}
		return this.items.pop()
	}

	peek(): T | undefined {
		// TODO: Implement peek operation
		// Think: How is this different from pop?
		if (this.isEmpty()) {
			throw new Error('Stack is empty')
		}
		return this.items[this.items.length - 1]
	}

	isEmpty(): boolean {
		// TODO: Implement isEmpty check
		return this.items.length === 0
	}

	size(): number {
		// TODO: Return current size
		return this.items.length
	}

	clear(): void {
		this.items = []
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

	enqueue(item: T): number {
		// TODO: Add item to rear of queue
		// Consider: Array methods - which is most efficient?
		this.items.push(item)
		return this.items.length
	}

	dequeue(): T | undefined {
		// TODO: Remove and return front item
		// Think: Time complexity of shift() vs other approaches
		return this.items.shift()
	}

	front(): T | undefined {
		// TODO: Return front item without removing
		return this.items[0]
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
	) { }
}

export class BinarySearchTree<T> {
	private root: TreeNode<T> | null = null;

	insert(value: T): boolean {
		// TODO: Insert value maintaining BST property
		// Think: Recursive vs iterative approach
		if (value === null || value === undefined) {
			throw new Error('Value cannot be null or undefined')
		}

		if (this.root === null) {
			this.root = new TreeNode(value)
			return true
		}
		return this.insertNode(this.root, value) !== null
	}

	private insertNode(node: TreeNode<T>, value: T) {
		if (value < node.value) {
			if (node.left === null) {
				node.left = new TreeNode(value)
			} else {
				this.insertNode(node.left, value)
			}
		} else if (value > node.value) {
			if (node.right === null) {
				node.right = new TreeNode(value)
			} else {
				this.insertNode(node.right, value)
			}
		}
		return node
	}

	search(value: T): boolean {
		// TODO: Search for value in tree
		// Consider: Average vs worst-case time complexity
		let current = this.root

		while (current !== null) {
			if (value === current.value) {
				return true
			} else if (value < current.value) {
				current = current.left
			} else {
				current = current.right
			}
		}
		return false
	}

	inorderTraversal(): T[] {
		// TODO: Return values in sorted order
		// Study: Why does inorder traversal give sorted result?
		const result: T[] = []
		this.inorder(this.root, result)
		return result
	}

	inorder(node: TreeNode<T> | null, result: T[]) {
		if (node !== null) {
			this.inorder(node.left, result)
			result.push(node.value)
			this.inorder(node.right, result)
		}
	}

	preorderTraversal(): T[] {
		const result: T[] = []
		const preorder = (node: TreeNode<T> | null) => {
			if (node) {
				result.push(node.value)
				preorder(node.left)
				preorder(node.right)
			}
		}
		preorder(this.root)
		return result
	}

	postorderTraversal(): T[] {
		const result: T[] = []
		const postorder = (node: TreeNode<T> | null) => {
			if (node) {
				postorder(node.left)
				postorder(node.right)
				result.push(node.value)
			}
		}
		postorder(this.root)
		return result
	}

	getRoot(): TreeNode<T> | null {
		return this.root
	}

	findMin(): T | null {
		let current = this.root
		while (current && current.left) {
			current = current.left
		}
		return current ? current.value : null
	}

	findMax(): T | null {
		let current = this.root
		while (current && current.right) {
			current = current.right
		}
		return current ? current.value : null
	}

	findMinValue(node: TreeNode<T>): T {
		let current = node
		while (current.left) {
			current = current.left
		}
		return current.value
	}

	delete(value: T): boolean {
		const deleteRecursive = (node: TreeNode<T> | null, value: T): TreeNode<T> | null => {
			if (!node) return null

			if (value < node.value) {
				node.left = deleteRecursive(node.left, value)
			} else if (value > node.value) {
				node.right = deleteRecursive(node.right, value)
			} else {
				if (!node.left) return node.right
				if (!node.right) return node.left

				node.value = this.findMinValue(node.right)
				node.right = deleteRecursive(node.right, node.value)
			}
			return node
		}

		const initialSize = this.size()
		this.root = deleteRecursive(this.root, value)
		return this.size() < initialSize
	}

	size(): number {
		const countNodes = (node: TreeNode<T> | null): number => {
			if (!node) return 0
			return 1 + countNodes(node.left) + countNodes(node.right)
		}
		return countNodes(this.root)
	}

	height(): number {
		const calculateHeight = (node: TreeNode<T> | null): number => {
			if (!node) return -1
			return 1 + Math.max(calculateHeight(node.left), calculateHeight(node.right))
		}
		return calculateHeight(this.root)
	}

	isBalanced(): boolean {
		const checkBalance = (node: TreeNode<T> | null): number => {
			if (!node) return 0

			const leftHeight = checkBalance(node.left)
			if (leftHeight === -1) return -1
			const rightHeight = checkBalance(node.right)
			if (rightHeight === -1) return -1

			if (Math.abs(leftHeight - rightHeight) > 1) return -1

			return Math.max(leftHeight, rightHeight)
		}
		return checkBalance(this.root) !== -1
	}
}

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. When would you choose a Stack over a Queue?
 * 2. What's the trade-off between arrays and linked lists for these structures?
 * 3. How do these data structures relate to algorithm design?
 * 4. What are the space complexity considerations?
 */
