// src/solid/principles.ts
// 🎯 LEARNING GOAL: Master SOLID principles for scalable object-oriented design
// 📚 Study: How SOLID principles prevent code rot and improve maintainability

/**
 * 🚀 TASK 1: SINGLE RESPONSIBILITY PRINCIPLE (SRP)
 * "A class should have one, and only one, reason to change."
 * Refactor the BAD example to follow SRP
 */

// BAD: Multiple responsibilities in one class
class UserManagerBad {
	validateUser(user: any): boolean {
		return user.email && user.name;
	}

	saveUser(user: any): void {
		console.log('Saving to database:', user);
	}

	sendWelcomeEmail(user: any): void {
		console.log('Sending welcome email to:', user.email);
	}

	generateUserReport(user: any): string {
		return `User Report: ${user.name} - ${user.email}`;
	}
}

// GOOD: Each class has a single responsibility
class UserValidator {
	// TODO: Implement user validation logic
	// Think: What makes validation logic change?
	validate(user: any): boolean {
		return user.email && user.name
	}
}

class UserRepository {
	// TODO: Implement user persistence logic
	// Think: What makes database logic change?
	save(user: any): void {
		console.log('Saving to database:', user)
	}
}

class EmailService {
	// TODO: Implement email sending logic
	// Think: What makes email logic change?
	sendWelcomeEmail(user: any): void {
		console.log('Sending welcome email to:', user.email)
	}
}

class ReportGenerator {
	// TODO: Implement report generation logic
	// Think: What makes report format change?
	generateUserReport(user: any): string {
		return `User Report: ${user.name} - ${user.email}`;
	}
}

/**
 * 🚀 TASK 2: OPEN/CLOSED PRINCIPLE (OCP)
 * "Classes should be open for extension, but closed for modification."
 * Extend the shape system without modifying existing code
 */

// Base abstraction
abstract class Shape {
	abstract calculateArea(): number;
	abstract getShapeType(): string;
}

// Existing implementations
class Rectangle extends Shape {
	constructor(private width: number, private height: number) {
		super();
	}

	calculateArea(): number {
		return this.width * this.height;
	}

	getShapeType(): string {
		return 'Rectangle';
	}
}

class Circle extends Shape {
	constructor(private radius: number) {
		super();
	}

	calculateArea(): number {
		return Math.PI * this.radius * this.radius;
	}

	getShapeType(): string {
		return 'Circle';
	}
}

// TODO: Add a Triangle class without modifying existing code
class Triangle extends Shape {
	constructor(private base: number, private height: number) {
		super()
	}
	calculateArea(): number {
		return (this.base * this.height) / 2
	}

	getShapeType(): string {
		return 'Triangle'
	}
}
// TODO: Add a Pentagon class without modifying existing code
class Pentagon extends Shape {
	constructor(private side: number) {
		super()
	}
	calculateArea(): number {
		return (5 * this.side * this.side) / (4 * Math.tan(Math.PI / 5))
	}

	getShapeType(): string {
		return 'Pentagon'
	}
}
// Think: How does this principle support maintainability?

class AreaCalculator {
	calculateTotalArea(shapes: Shape[]): number {
		return shapes.reduce((total, shape) => total + shape.calculateArea(), 0);
	}
}

/**
 * 🚀 TASK 3: LISKOV SUBSTITUTION PRINCIPLE (LSP)
 * "Objects should be replaceable with instances of their subtypes without altering correctness."
 * Fix the BAD example to follow LSP
 */

// BAD: Violates LSP - Rectangle behavior changes when substituted
class RectangleBad {
	constructor(protected width: number, protected height: number) { }

	setWidth(width: number): void {
		this.width = width;
	}

	setHeight(height: number): void {
		this.height = height;
	}

	getArea(): number {
		return this.width * this.height;
	}
}

class SquareBad extends RectangleBad {
	setWidth(width: number): void {
		this.width = width;
		this.height = width; // This breaks LSP!
	}

	setHeight(height: number): void {
		this.width = height;
		this.height = height; // This breaks LSP!
	}
}

// GOOD: Design that follows LSP
interface ShapeInterface {
	calculateArea(): number;
}

class ImmutableRectangle implements ShapeInterface {
	constructor(private width: number, private height: number) {
		this.width = width
		this.height = height
	}

	calculateArea(): number {
		return this.width * this.height;
	}

	getWidth(): number {
		return this.width;
	}

	getHeight(): number {
		return this.height;
	}
}

class ImmutableSquare implements ShapeInterface {
	constructor(private side: number) {
		this.side = side
	}

	calculateArea(): number {
		return this.side * this.side;
	}

	getSide(): number {
		return this.side;
	}
}

// TODO: Create a function that demonstrates LSP compliance
function demonstrateLSP(shapes: ShapeInterface[]): number {
	// TASK: Calculate total area without knowing specific shape types
	// Think: Why is this important for polymorphism?
	return shapes.reduce((total, shape) => total + shape.calculateArea(), 0)
}

/**
 * 🚀 TASK 4: INTERFACE SEGREGATION PRINCIPLE (ISP)
 * "Clients should not be forced to depend upon interfaces they do not use."
 * Break down the fat interface into smaller, focused interfaces
 */

// BAD: Fat interface that forces implementation of unused methods
interface WorkerBad {
	work(): void;
	eat(): void;
	sleep(): void;
	fly(): void; // Not all workers can fly!
}

// GOOD: Segregated interfaces
interface Workable {
	work(): void;
}

interface Eatable {
	eat(): void;
}

interface Sleepable {
	sleep(): void;
}

interface Flyable {
	fly(): void;
}

// TODO: Implement different worker types using appropriate interfaces
class HumanWorker implements Workable, Eatable, Sleepable {
	/**
	 * Logs a message indicating the human is working.
	 */
	work(): void {
		console.log('Human is working...');
	}

	/**
	 * Logs a message indicating the human is eating.
	 */
	eat(): void {
		console.log('Human is eating... Yum!');
	}

	/**
	 * Logs a message indicating the human is sleeping.
	 */
	sleep(): void {
		console.log('Human is sleeping... Zzz...');
	}
}

class RobotWorker implements Workable {
	/**
	 * Logs a message indicating the robot is working.
	 */
	work(): void {
		// Think: Why doesn't a robot need to eat or sleep?
		console.log('Robot is working... Bleep bloop.');
	}
}

class SuperHeroWorker implements Workable, Eatable, Sleepable, Flyable {
	// Think: How does this demonstrate ISP benefits?
	/**
	 * Logs a message indicating the superhero is working.
	 */
	work(): void { console.log('Superhero is saving the world!'); }
	/**
	 * Logs a message indicating the superhero is eating.
	 */
	eat(): void { console.log('Superhero is refueling!'); }
	/**
	 * Logs a message indicating the superhero is sleeping.
	 */
	sleep(): void { console.log('Superhero is taking a power nap.'); }
	/**
	 * Logs a message indicating the superhero is flying.
	 */
	fly(): void { console.log('Superhero is flying up, up, and away!'); }
}

/**
 * 🚀 TASK 5: DEPENDENCY INVERSION PRINCIPLE (DIP)
 * "Depend upon abstractions, not concretions."
 * Refactor to depend on abstractions instead of concrete classes
 */

// BAD: High-level module depends on low-level module
class MySQLDatabase {
	save(data: any): void {
		console.log('Saving to MySQL:', data);
	}
}

class OrderServiceBad {
	private database = new MySQLDatabase(); // Hard dependency!

	processOrder(order: any): void {
		// Process order logic
		this.database.save(order);
	}
}

// GOOD: Depend on abstractions
interface Database {
	save(data: any): void;
}

class MySQLDatabaseGood implements Database {
	save(data: any): void {
		console.log('Saving to MySQL:', data);
	}
}

class PostgreSQLDatabase implements Database {
	save(data: any): void {
		console.log('Saving to PostgreSQL:', data);
	}
}

class OrderServiceGood {
	constructor(private database: Database) { } // Dependency injection!

	processOrder(order: any): void {
		// Process order logic
		this.database.save(order);
	}
}

// TODO: Create a simple dependency injection container
class DIContainer {
	private services = new Map<string, any>();

	register(name: string, service: any): void {
		// TODO: Implement service registration
		this.services.set(name, service)
	}

	resolve<T>(name: string): T {
		// TODO: Implement service resolution
		if (!this.services.has(name)) {
			throw new Error(`Service ${name} not found in DI container`)
		}
		return this.services.get(name)
	}
}

/**
 * 🎓 REFLECTION QUESTIONS:
 * 1. How do SOLID principles relate to each other?
 * 2. When might following SOLID principles add unnecessary complexity?
 * 3. How do these principles support unit testing?
 * 4. What's the relationship between SOLID and design patterns?
 * 5. How do SOLID principles apply to functional programming?
 */

/**
 * 📚 RECOMMENDED RESOURCES:
 * - Clean Architecture by Robert C. Martin
 * - https://blog.cleancoder.com/uncle-bob/2020/10/18/Solid-Relevance.html
 * - https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design
 * - https://github.com/mikaelbr/node-solidprinciples
 */
