/**
 * Challenge 1: JavaScript Fundamentals Deep Dive - Tests
 * 
 * This file contains comprehensive tests for Challenge 1 tasks.
 * Tests are designed to validate understanding of JavaScript fundamentals.
 * 
 * 🎯 Test Coverage:
 * - Closures and scope behavior
 * - Hoisting and temporal dead zone
 * - Prototype-based inheritance
 * - Advanced patterns
 * 
 * 📚 Testing Strategy:
 * - Unit tests for individual functions
 * - Integration tests for complex scenarios
 * - Edge case validation
 * - Performance considerations
 */

import {
  createCounter,
  createMultiplier,
  createSecretKeeper,
  demonstrateHoisting,
  safeVariableAccess,
  Animal,
  Dog,
  demonstrateInheritance,
  createModule,
  PrototypeUtils,
} from '../../src/challenge1-js-fundamentals';

import { measureExecutionTime, createTestArray } from '../setup';

// =============================================================================
// TASK 1.1: CLOSURES & SCOPE MASTERY TESTS
// =============================================================================

describe('Task 1.1: Closures & Scope Mastery', () => {
  describe('createCounter', () => {
    it('should create a counter that maintains state', () => {
      const counter = createCounter(0);
      
      expect(counter()).toBe(1);
      expect(counter()).toBe(2);
      expect(counter()).toBe(3);
    });

    it('should work with different initial values', () => {
      const counter10 = createCounter(10);
      const counter100 = createCounter(100);
      
      expect(counter10()).toBe(11);
      expect(counter100()).toBe(101);
    });

    it('should create independent counters', () => {
      const counter1 = createCounter(0);
      const counter2 = createCounter(0);
      
      counter1();
      counter1();
      
      expect(counter1()).toBe(3);
      expect(counter2()).toBe(1);
    });

    it('should handle negative initial values', () => {
      const counter = createCounter(-5);
      
      expect(counter()).toBe(-4);
      expect(counter()).toBe(-3);
    });
  });

  describe('createMultiplier', () => {
    it('should create a multiplier function', () => {
      const double = createMultiplier(2);
      
      expect(double(5)).toBe(10);
      expect(double(0)).toBe(0);
      expect(double(-3)).toBe(-6);
    });

    it('should work with different factors', () => {
      const triple = createMultiplier(3);
      const half = createMultiplier(0.5);
      
      expect(triple(4)).toBe(12);
      expect(half(10)).toBe(5);
    });

    it('should maintain closure over factor', () => {
      const multipliers = [2, 3, 4].map(createMultiplier);
      
      expect(multipliers[0](5)).toBe(10);
      expect(multipliers[1](5)).toBe(15);
      expect(multipliers[2](5)).toBe(20);
    });
  });

  describe('createSecretKeeper', () => {
    it('should keep secrets private', () => {
      const keeper = createSecretKeeper('initial');
      
      expect(keeper.getSecret()).toBe('initial');
      expect(keeper).not.toHaveProperty('secret');
    });

    it('should allow secret updates', () => {
      const keeper = createSecretKeeper('old secret');
      
      keeper.updateSecret('new secret');
      expect(keeper.getSecret()).toBe('new secret');
    });

    it('should create independent secret keepers', () => {
      const keeper1 = createSecretKeeper('secret1');
      const keeper2 = createSecretKeeper('secret2');
      
      keeper1.updateSecret('updated1');
      
      expect(keeper1.getSecret()).toBe('updated1');
      expect(keeper2.getSecret()).toBe('secret2');
    });

    it('should handle empty string secrets', () => {
      const keeper = createSecretKeeper('');
      
      expect(keeper.getSecret()).toBe('');
      
      keeper.updateSecret('now has value');
      expect(keeper.getSecret()).toBe('now has value');
    });
  });
});

// =============================================================================
// TASK 1.2: HOISTING & TEMPORAL DEAD ZONE TESTS
// =============================================================================

describe('Task 1.2: Hoisting & Temporal Dead Zone', () => {
  describe('demonstrateHoisting', () => {
    it('should return explanations of hoisting behavior', () => {
      const result = demonstrateHoisting();
      
      expect(result).toHaveProperty('varHoisting');
      expect(result).toHaveProperty('letHoisting');
      expect(result).toHaveProperty('functionHoisting');
      expect(result).toHaveProperty('classHoisting');
      
      expect(typeof result.varHoisting).toBe('string');
      expect(typeof result.letHoisting).toBe('string');
      expect(typeof result.functionHoisting).toBe('string');
      expect(typeof result.classHoisting).toBe('string');
    });

    it('should demonstrate var hoisting behavior', () => {
      const result = demonstrateHoisting();
      
      expect(result.varHoisting).toContain('undefined');
      expect(result.varHoisting).not.toContain('ReferenceError');
    });

    it('should demonstrate let/const temporal dead zone', () => {
      const result = demonstrateHoisting();
      
      expect(result.letHoisting).toContain('ReferenceError');
      expect(result.letHoisting).toContain('temporal dead zone');
    });

    it('should demonstrate function hoisting', () => {
      const result = demonstrateHoisting();
      
      expect(result.functionHoisting).toContain('works');
      expect(result.functionHoisting).toContain('declaration');
    });
  });

  describe('safeVariableAccess', () => {
    it('should return value when getter succeeds', () => {
      const getValue = () => 'success';
      const fallback = 'fallback';
      
      const result = safeVariableAccess(getValue, fallback);
      expect(result).toBe('success');
    });

    it('should return fallback when getter throws', () => {
      const getValue = () => {
        throw new Error('Variable not accessible');
      };
      const fallback = 'fallback';
      
      const result = safeVariableAccess(getValue, fallback);
      expect(result).toBe('fallback');
    });

    it('should handle different types', () => {
      const numberResult = safeVariableAccess(() => 42, 0);
      const arrayResult = safeVariableAccess(() => [1, 2, 3], []);
      
      expect(numberResult).toBe(42);
      expect(arrayResult).toEqual([1, 2, 3]);
    });

    it('should handle null and undefined', () => {
      const nullResult = safeVariableAccess(() => null, 'fallback');
      const undefinedResult = safeVariableAccess(() => undefined, 'fallback');
      
      expect(nullResult).toBe(null);
      expect(undefinedResult).toBe(undefined);
    });
  });
});

// =============================================================================
// TASK 1.3: PROTOTYPES & INHERITANCE TESTS
// =============================================================================

describe('Task 1.3: Prototypes & Inheritance', () => {
  describe('Animal constructor', () => {
    it('should create animal instances with name', () => {
      const animal = new (Animal as any)('Fluffy');
      
      expect(animal.name).toBe('Fluffy');
      expect(animal instanceof Animal).toBe(true);
    });

    it('should have prototype methods', () => {
      const animal = new (Animal as any)('Fluffy');
      
      expect(typeof animal.speak).toBe('function');
      expect(typeof animal.getName).toBe('function');
    });

    it('should implement speak method', () => {
      const animal = new (Animal as any)('Fluffy');
      const speech = animal.speak();
      
      expect(typeof speech).toBe('string');
      expect(speech).toContain('Fluffy');
    });

    it('should implement getName method', () => {
      const animal = new (Animal as any)('Fluffy');
      
      expect(animal.getName()).toBe('Fluffy');
    });
  });

  describe('Dog constructor', () => {
    it('should create dog instances with name and breed', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      
      expect(dog.name).toBe('Rex');
      expect(dog.breed).toBe('Golden Retriever');
    });

    it('should inherit from Animal', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      
      expect(dog instanceof Dog).toBe(true);
      expect(dog instanceof Animal).toBe(true);
    });

    it('should have inherited methods', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      
      expect(typeof dog.speak).toBe('function');
      expect(typeof dog.getName).toBe('function');
    });

    it('should have dog-specific methods', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      
      expect(typeof dog.bark).toBe('function');
      expect(typeof dog.getBreed).toBe('function');
    });

    it('should implement bark method', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      const bark = dog.bark();
      
      expect(typeof bark).toBe('string');
      expect(bark).toContain('Woof');
    });

    it('should implement getBreed method', () => {
      const dog = new (Dog as any)('Rex', 'Golden Retriever');
      
      expect(dog.getBreed()).toBe('Golden Retriever');
    });
  });

  describe('demonstrateInheritance', () => {
    it('should return proper structure', () => {
      const demo = demonstrateInheritance();
      
      expect(demo).toHaveProperty('animal');
      expect(demo).toHaveProperty('dog');
      expect(demo).toHaveProperty('instanceChecks');
      expect(demo).toHaveProperty('methodCalls');
    });

    it('should show correct instance relationships', () => {
      const demo = demonstrateInheritance();
      
      expect(demo.instanceChecks.dogIsAnimal).toBe(true);
      expect(demo.instanceChecks.dogIsDog).toBe(true);
      expect(demo.instanceChecks.animalIsDog).toBe(false);
    });

    it('should demonstrate method calls', () => {
      const demo = demonstrateInheritance();
      
      expect(typeof demo.methodCalls.animalSpeak).toBe('string');
      expect(typeof demo.methodCalls.dogSpeak).toBe('string');
      expect(typeof demo.methodCalls.dogBark).toBe('string');
    });
  });
});

// =============================================================================
// ADVANCED TASKS TESTS
// =============================================================================

describe('Advanced Tasks', () => {
  describe('createModule', () => {
    it('should create a module with public interface', () => {
      const module = createModule('TestModule');
      
      expect(typeof module).toBe('object');
      expect(module.name).toBe('TestModule');
    });

    it('should provide public methods', () => {
      const module = createModule('TestModule');
      
      expect(typeof module.publicMethod).toBe('function');
    });

    it('should hide private variables', () => {
      const module = createModule('TestModule');
      
      expect(module.privateVar).toBeUndefined();
    });

    it('should maintain state between calls', () => {
      const module = createModule('TestModule');
      
      module.increment();
      module.increment();
      
      expect(module.getCount()).toBe(2);
    });
  });

  describe('PrototypeUtils', () => {
    describe('addMethod', () => {
      it('should add method to prototype safely', () => {
        const TestClass = function() {};
        const method = function() { return 'test'; };
        
        PrototypeUtils.addMethod(TestClass.prototype, 'testMethod', method);
        
        const instance = new (TestClass as any)();
        expect(instance.testMethod()).toBe('test');
      });

      it('should not override existing methods', () => {
        const TestClass = function() {};
        TestClass.prototype.existingMethod = function() { return 'original'; };
        
        PrototypeUtils.addMethod(TestClass.prototype, 'existingMethod', function() { return 'new'; });
        
        const instance = new (TestClass as any)();
        expect(instance.existingMethod()).toBe('original');
      });
    });

    describe('mixin', () => {
      it('should mix multiple objects into target', () => {
        const target = {};
        const source1 = { method1: () => 'method1' };
        const source2 = { method2: () => 'method2' };
        
        const result = PrototypeUtils.mixin(target, source1, source2);
        
        expect(result.method1()).toBe('method1');
        expect(result.method2()).toBe('method2');
      });
    });

    describe('getMethods', () => {
      it('should return all methods in prototype chain', () => {
        const obj = new (Dog as any)('Rex', 'Golden Retriever');
        const methods = PrototypeUtils.getMethods(obj);
        
        expect(methods).toContain('speak');
        expect(methods).toContain('getName');
        expect(methods).toContain('bark');
        expect(methods).toContain('getBreed');
      });

      it('should not include non-function properties', () => {
        const obj = { prop: 'value', method: () => 'test' };
        const methods = PrototypeUtils.getMethods(obj);
        
        expect(methods).toContain('method');
        expect(methods).not.toContain('prop');
      });
    });
  });
});

// =============================================================================
// INTEGRATION TESTS
// =============================================================================

describe('Integration Tests', () => {
  it('should work with closures and prototypes together', () => {
    const CounterClass = function(initial: number) {
      const counter = createCounter(initial);
      this.next = counter;
    };
    
    CounterClass.prototype.getNext = function() {
      return this.next();
    };
    
    const instance = new (CounterClass as any)(10);
    
    expect(instance.getNext()).toBe(11);
    expect(instance.getNext()).toBe(12);
  });

  it('should handle complex inheritance hierarchies', () => {
    // Create a more complex hierarchy
    const Mammal = function(name: string) {
      Animal.call(this, name);
      this.type = 'mammal';
    };
    
    Mammal.prototype = Object.create(Animal.prototype);
    Mammal.prototype.constructor = Mammal;
    
    const WorkingDog = function(name: string, breed: string, job: string) {
      Dog.call(this, name, breed);
      this.job = job;
    };
    
    WorkingDog.prototype = Object.create(Dog.prototype);
    WorkingDog.prototype.constructor = WorkingDog;
    
    const workingDog = new (WorkingDog as any)('Rex', 'German Shepherd', 'Police');
    
    expect(workingDog instanceof WorkingDog).toBe(true);
    expect(workingDog instanceof Dog).toBe(true);
    expect(workingDog instanceof Animal).toBe(true);
    expect(workingDog.job).toBe('Police');
  });
});

// =============================================================================
// PERFORMANCE TESTS
// =============================================================================

describe('Performance Tests', () => {
  it('should have reasonable performance for closure creation', () => {
    const { duration } = measureExecutionTime(() => {
      for (let i = 0; i < 1000; i++) {
        createCounter(i);
      }
    });
    
    expect(duration).toBeLessThan(50); // Should complete in under 50ms
  });

  it('should have reasonable performance for prototype chain lookups', () => {
    const dogs = Array.from({ length: 1000 }, (_, i) => 
      new (Dog as any)(`Dog${i}`, 'Test Breed')
    );
    
    const { duration } = measureExecutionTime(() => {
      dogs.forEach(dog => {
        dog.speak();
        dog.bark();
      });
    });
    
    expect(duration).toBeLessThan(100); // Should complete in under 100ms
  });
});

// =============================================================================
// ERROR HANDLING TESTS
// =============================================================================

describe('Error Handling', () => {
  it('should handle invalid inputs gracefully', () => {
    expect(() => createCounter(NaN)).not.toThrow();
    expect(() => createMultiplier(Infinity)).not.toThrow();
    expect(() => createSecretKeeper(null as any)).not.toThrow();
  });

  it('should handle prototype chain manipulation errors', () => {
    expect(() => {
      PrototypeUtils.addMethod(null, 'method', () => {});
    }).not.toThrow();
  });
});
