interface Person {
  firstName: string,
  lastName: string,
  age?: number,
  dateOfBirth: Date,
  getFullName?(): string
 }
 
 const person = {
  firstName: 'Robert',
  lastName: 'Martin',
  dateOfBirth: new Date('07/01/1952')
 }

//  let fullName: boolean = person.getFullName();
 