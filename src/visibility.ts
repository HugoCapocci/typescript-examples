abstract class People {
  protected name: string;
  constructor(name: string) { this.name = name; }
}
class Employee extends People {
  private department: string;
  constructor(name: string, department: string) {
      super(name);
      this.department = department;
  }
  getInfo() {
      return `Nom : ${this.name}, travaille au département ${this.department}.`;
  }
}

const employee = new Employee('bob', 'bricolage');
employee.getInfo();

class User {
  private _fullName: string;
  constructor(fullName: string) {
    this._fullName = fullName.toUpperCase();
  }
  get fullName(): string {
      return this._fullName;
  }
  set fullName(fullName: string) {
    this._fullName = fullName.toUpperCase();
  }
}
const userBob = new User('bob');
userBob.fullName = 'Robert';
console.log(userBob.fullName);

class Department {
  constructor(private name: string) {
  }

  printName(): void {
    console.log('Department : ' + this.name);
  }
}
const department = new Department('Seine saint denis');

class Octopus {
  readonly NAME: string;
  readonly NUMBER_OF_LEGS: number = 8;
  constructor (name: string) {
    this.NAME = name;
  }
}


 