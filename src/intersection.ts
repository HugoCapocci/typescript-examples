interface TypeA {
  dateOfBirth: Date;
}
interface TypeB {
  name: string;
}
type TypeC = TypeA & { name: string }
// interface TypeC extends TypeA, TypeB {
// }
const personBob: TypeC = { // Type A & TypeB
  dateOfBirth: new Date(),
  name: 'bob'
}
 