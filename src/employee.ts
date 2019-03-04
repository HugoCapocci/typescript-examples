// class Person {
//   protected name: string;
//   constructor(name: string) { this.name = name; }
// }

// class Employee extends Person {
//   private department: string;
//   constructor(name: string, department: string) {
//       super(name);
//       this.department = department;
//   }
//   public getInfo() {
//       return `Nom : ${this.name}, travaille au dépratement ${this.department}.`;
//   }
// }

// const bob = new Employee("Bob", "Ventes");

// class User {
//   private _fullName: string;
//   constructor(fullName: string) {
//     this._fullName = fullName.toUpperCase();
//   }
//   get fullName(): string {
//       return this._fullName;
//   }
// }

// const user = new User('bob');

// [1, 2].(3);
// console.log(user.fullName);

// abstract class Observer {
// }
// class ConcreteObserver extends Observer {

// }

// class Department {
//   constructor(private name: string) {
//   }

//   printName(): void {
//       console.log('Department : ' + this.name);
//   }
// }
