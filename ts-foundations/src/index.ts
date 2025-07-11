// src/index.ts
// 🎯 LEARNING GOAL: Main entry point for TypeScript foundations project
// 📚 This file serves as the main entry point for your learning journey

import { bubbleSort, quickSort } from './algorithms/sorting'
import { Stack, Queue } from './algorithms/dataStructures'

/**
 * 🚀 TASK: Create a simple demonstration of your implementations
 * - Use this file to test your algorithms and data structures
 * - Think: How would you structure a CLI application?
 * - Challenge: Add command-line argument parsing
 */

function main(): void {
  console.log('🎯 Welcome to TypeScript Foundations!')
  console.log('=====================================')
  
  // Demonstrate sorting algorithms
  console.log('\n📊 Sorting Algorithms:')
  const unsortedArray = [64, 34, 25, 12, 22, 11, 90]
  console.log('Original array:', unsortedArray)
  
  // TODO: Uncomment when you implement the algorithms
  // console.log('Bubble Sort:', bubbleSort([...unsortedArray]))
  // console.log('Quick Sort:', quickSort([...unsortedArray]))
  
  // TODO: Demonstrate data structures
  console.log('\n🗂️  Data Structures:')
  console.log('Stack and Queue demonstrations will be added as you implement them')
  
  // TODO: Demonstrate clean code principles
  console.log('\n✨ Clean Code Examples:')
  console.log('Clean code examples will be demonstrated as you implement them')
  
  // TODO: Demonstrate SOLID principles
  console.log('\n🏗️  SOLID Principles:')
  console.log('SOLID principle examples will be shown as you implement them')
  
  console.log('\n🎓 Ready to start learning! Check out the TODO comments in each file.')
}

// Execute main function if this file is run directly
if (require.main === module) {
  main()
}

export { main }
