let a: number;
let b: boolean;
let c: string;

interface BasicUser {
  name: string;
  surname: string;
  age: number;
  isAdmin: boolean;
  profession?: string;
}
const user: BasicUser = {
  name: "Juan",
  surname: "Suarez",
  age: 27,
  isAdmin: true,
  profession: "Software developer",
};

interface UserWithPermissions extends BasicUser {
  permission: string[];
}
const user2: UserWithPermissions = {
  name: "Juan",
  surname: "Suarez",
  age: 27,
  isAdmin: true,
  permission: ["manager", "operator", "instructor"],
};

type MathFunc = (a: number, b: number) => number;

const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;

console.log(mul(7, 7));
