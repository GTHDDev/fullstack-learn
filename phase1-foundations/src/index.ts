/**
 * Phase 1: Core Programming Foundations
 * Main Entry Point
 * 
 * This file serves as the main entry point for Phase 1 challenges.
 * It provides a menu system to run individual challenges and track progress.
 */

import { logger } from './utils';
import { ChallengeInfo, ChallengeStatus } from './types';

// =============================================================================
// CHALLENGE DEFINITIONS
// =============================================================================

const challenges: ChallengeInfo[] = [
  {
    id: 'challenge1',
    title: 'JavaScript Fundamentals Deep Dive',
    description: 'Master closures, hoisting, prototypes, and execution context',
    difficulty: 'intermediate',
    estimatedTime: 480, // 8 hours
    prerequisites: ['Basic JavaScript knowledge'],
    learningObjectives: [
      'Understand JavaScript execution model',
      'Master closure patterns',
      'Implement prototype-based inheritance',
      'Handle hoisting and temporal dead zone',
    ],
    status: 'not-started',
  },
  {
    id: 'challenge2',
    title: 'Async JavaScript Mastery',
    description: 'Master Promise patterns, async/await, and error handling',
    difficulty: 'intermediate',
    estimatedTime: 360, // 6 hours
    prerequisites: ['Challenge 1 completed'],
    learningObjectives: [
      'Implement Promise utilities',
      'Master async error handling',
      'Understand concurrency patterns',
      'Handle complex async workflows',
    ],
    status: 'not-started',
  },
  {
    id: 'challenge3',
    title: 'TypeScript Type System Deep Dive',
    description: 'Master advanced TypeScript types and type safety',
    difficulty: 'advanced',
    estimatedTime: 480, // 8 hours
    prerequisites: ['Challenge 1 and 2 completed'],
    learningObjectives: [
      'Create advanced type patterns',
      'Build type-safe systems',
      'Implement utility types',
      'Master generic programming',
    ],
    status: 'not-started',
  },
  {
    id: 'challenge4',
    title: 'Advanced Algorithm Implementations',
    description: 'Implement and optimize search, sort, and DP algorithms',
    difficulty: 'advanced',
    estimatedTime: 600, // 10 hours
    prerequisites: ['Challenge 3 completed'],
    learningObjectives: [
      'Implement efficient algorithms',
      'Analyze time/space complexity',
      'Master dynamic programming',
      'Optimize performance',
    ],
    status: 'not-started',
  },
  {
    id: 'challenge5',
    title: 'Design Patterns Implementation',
    description: 'Implement Factory, Observer, and other design patterns',
    difficulty: 'advanced',
    estimatedTime: 480, // 8 hours
    prerequisites: ['Challenge 4 completed'],
    learningObjectives: [
      'Implement design patterns',
      'Understand architectural patterns',
      'Apply SOLID principles',
      'Build flexible systems',
    ],
    status: 'not-started',
  },
  {
    id: 'challenge6',
    title: 'Testing Excellence',
    description: 'Master TDD, mocking, and comprehensive testing strategies',
    difficulty: 'intermediate',
    estimatedTime: 360, // 6 hours
    prerequisites: ['Challenge 5 completed'],
    learningObjectives: [
      'Practice test-driven development',
      'Master mocking strategies',
      'Achieve high test coverage',
      'Write maintainable tests',
    ],
    status: 'not-started',
  },
];

// =============================================================================
// PROGRESS TRACKING
// =============================================================================

class ProgressTracker {
  private static instance: ProgressTracker;
  private challenges: Map<string, ChallengeInfo>;

  private constructor() {
    this.challenges = new Map();
    challenges.forEach(challenge => {
      this.challenges.set(challenge.id, { ...challenge });
    });
  }

  static getInstance(): ProgressTracker {
    if (!ProgressTracker.instance) {
      ProgressTracker.instance = new ProgressTracker();
    }
    return ProgressTracker.instance;
  }

  updateChallengeStatus(challengeId: string, status: ChallengeStatus): void {
    const challenge = this.challenges.get(challengeId);
    if (challenge) {
      challenge.status = status;
      logger.info(`Challenge ${challengeId} status updated to: ${status}`);
    }
  }

  getChallengeStatus(challengeId: string): ChallengeStatus | undefined {
    return this.challenges.get(challengeId)?.status;
  }

  getProgress(): { completed: number; total: number; percentage: number } {
    const total = this.challenges.size;
    const completed = Array.from(this.challenges.values()).filter(
      c => c.status === 'completed'
    ).length;
    
    return {
      completed,
      total,
      percentage: Math.round((completed / total) * 100),
    };
  }

  printProgress(): void {
    const progress = this.getProgress();
    
    console.log('\n='.repeat(60));
    console.log('🎯 PHASE 1 PROGRESS TRACKER');
    console.log('='.repeat(60));
    console.log(`Progress: ${progress.completed}/${progress.total} (${progress.percentage}%)`);
    console.log('\nChallenges:');
    
    Array.from(this.challenges.values()).forEach((challenge, index) => {
      const statusIcon = this.getStatusIcon(challenge.status);
      const difficultyColor = this.getDifficultyColor(challenge.difficulty);
      
      console.log(
        `${index + 1}. ${statusIcon} ${challenge.title} ${difficultyColor}[${challenge.difficulty}]`
      );
      console.log(`   ${challenge.description}`);
      console.log(`   Estimated time: ${Math.floor(challenge.estimatedTime / 60)}h ${challenge.estimatedTime % 60}m`);
      console.log('');
    });
    
    console.log('='.repeat(60));
  }

  private getStatusIcon(status: ChallengeStatus): string {
    switch (status) {
      case 'not-started': return '⭕';
      case 'in-progress': return '🔄';
      case 'completed': return '✅';
      case 'reviewed': return '🎓';
      default: return '❓';
    }
  }

  private getDifficultyColor(difficulty: string): string {
    switch (difficulty) {
      case 'beginner': return '\x1b[32m'; // Green
      case 'intermediate': return '\x1b[33m'; // Yellow
      case 'advanced': return '\x1b[31m'; // Red
      default: return '\x1b[0m'; // Reset
    }
  }
}

// =============================================================================
// CHALLENGE RUNNER
// =============================================================================

class ChallengeRunner {
  private progressTracker: ProgressTracker;

  constructor() {
    this.progressTracker = ProgressTracker.getInstance();
  }

  async runChallenge(challengeId: string): Promise<void> {
    const challenge = challenges.find(c => c.id === challengeId);
    
    if (!challenge) {
      logger.error(`Challenge ${challengeId} not found`);
      return;
    }

    logger.info(`Starting ${challenge.title}...`);
    this.progressTracker.updateChallengeStatus(challengeId, 'in-progress');

    try {
      // Dynamic import based on challenge ID
      const challengeModule = await import(`./challenge${challengeId.slice(-1)}-${challengeId.replace(/challenge\d-/, '')}/index.js`);
      
      if (challengeModule.default && typeof challengeModule.default === 'function') {
        await challengeModule.default();
        this.progressTracker.updateChallengeStatus(challengeId, 'completed');
        logger.info(`✅ ${challenge.title} completed successfully!`);
      } else {
        logger.error(`Invalid challenge module: ${challengeId}`);
      }
    } catch (error) {
      logger.error(`Error running challenge ${challengeId}:`, error);
      this.progressTracker.updateChallengeStatus(challengeId, 'not-started');
    }
  }

  async runAllChallenges(): Promise<void> {
    logger.info('Starting all Phase 1 challenges...');
    
    for (const challenge of challenges) {
      await this.runChallenge(challenge.id);
    }
    
    logger.info('All challenges completed!');
    this.progressTracker.printProgress();
  }
}

// =============================================================================
// MENU SYSTEM
// =============================================================================

class MenuSystem {
  private challengeRunner: ChallengeRunner;
  private progressTracker: ProgressTracker;

  constructor() {
    this.challengeRunner = new ChallengeRunner();
    this.progressTracker = ProgressTracker.getInstance();
  }

  showMenu(): void {
    console.clear();
    console.log('\n🚀 PHASE 1: CORE PROGRAMMING FOUNDATIONS');
    console.log('==========================================\n');
    
    console.log('Available Options:');
    console.log('1. View Progress');
    console.log('2. Run Challenge 1: JavaScript Fundamentals');
    console.log('3. Run Challenge 2: Async JavaScript');
    console.log('4. Run Challenge 3: TypeScript Types');
    console.log('5. Run Challenge 4: Advanced Algorithms');
    console.log('6. Run Challenge 5: Design Patterns');
    console.log('7. Run Challenge 6: Testing Excellence');
    console.log('8. Run All Challenges');
    console.log('9. Exit');
    console.log('\n==========================================');
  }

  async handleMenuChoice(choice: string): Promise<boolean> {
    switch (choice.trim()) {
      case '1':
        this.progressTracker.printProgress();
        break;
      case '2':
        await this.challengeRunner.runChallenge('challenge1');
        break;
      case '3':
        await this.challengeRunner.runChallenge('challenge2');
        break;
      case '4':
        await this.challengeRunner.runChallenge('challenge3');
        break;
      case '5':
        await this.challengeRunner.runChallenge('challenge4');
        break;
      case '6':
        await this.challengeRunner.runChallenge('challenge5');
        break;
      case '7':
        await this.challengeRunner.runChallenge('challenge6');
        break;
      case '8':
        await this.challengeRunner.runAllChallenges();
        break;
      case '9':
        logger.info('Goodbye! Keep practicing and building great software! 👋');
        return false;
      default:
        logger.warn('Invalid choice. Please select a number from 1-9.');
    }
    return true;
  }
}

// =============================================================================
// MAIN FUNCTION
// =============================================================================

async function main(): Promise<void> {
  const menuSystem = new MenuSystem();
  const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = (question: string): Promise<string> => {
    return new Promise(resolve => {
      readline.question(question, resolve);
    });
  };

  let continueRunning = true;
  
  while (continueRunning) {
    menuSystem.showMenu();
    const choice = await askQuestion('Enter your choice: ');
    continueRunning = await menuSystem.handleMenuChoice(choice);
    
    if (continueRunning) {
      await askQuestion('\nPress Enter to continue...');
    }
  }
  
  readline.close();
}

// =============================================================================
// EXPORTS
// =============================================================================

export { ProgressTracker, ChallengeRunner, MenuSystem };
export default main;

// Run main function if this file is executed directly
if (require.main === module) {
  main().catch(error => {
    logger.error('Application error:', error);
    process.exit(1);
  });
}
