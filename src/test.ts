let a: number;
let b: boolean;
let c: string;
let d: string[];

export type Permission = "admin" | "user" | "manager";

type TuplePermisions = [Permission, Permission];
const perm: TuplePermisions = ["admin", "manager"];
/**
 * BasicUser is a type that has a name, surname, age, and isAdmin property, and an optional permissions
 * property that is an array of strings.
 * @property {string} name - string;
 * @property {string} surname - string;
 * @property {number} age - number;
 * @property {A} isAdmin - A - isAdmin is a property of type A.
 * @property {P[]} permissions - P[] - the permissions property is an array of P type.
 */
export type BasicUser<A = boolean, P = TuplePermisions> = {
  name: string;
  surname: string;
  age: number;
  isAdmin: A;
  permissions?: P;
};
/**
 * AdvancedUser is a type that has an account property that is a number.
 * @property {number} account - number;
 */
type AdvancedUser = {
  account: number;
};

type FullUser<A = boolean, P = string[]> = BasicUser<A, P> & AdvancedUser;
/* Creating a new user with the type FullUser, which is a BasicUser with an account number. */
const user: FullUser<boolean> = {
  name: "Juan",
  surname: "Suarez",
  age: 27,
  isAdmin: true,
  permissions: ["admin", "manager"],
  account: 100,
};
/* Creating a new user with the type BasicUser, which is a type that has a name, surname, age, and
isAdmin property, and an optional permissions property that is an array of strings. */
const user3: BasicUser<number> = {
  name: "Juan",
  surname: "Suarez",
  age: 27,
  isAdmin: 1,
};

/* Extending the BasicUser interface and adding a new property called permission. */
interface UserWithPermissions extends BasicUser<boolean> {
  permission: string[];
}
/* Extending the BasicUser interface and adding a new property called permission. */
const user2: UserWithPermissions = {
  name: "Juan",
  surname: "Suarez",
  age: 27,
  isAdmin: true,
  permission: ["manager", "operator", "instructor"],
};

type MathFunc = (a: number, b: number) => number;

/**
 * The mul function takes two numbers and returns a number.
 * @param a - number
 * @param b - number
 */
const mul: MathFunc = (a, b) => a * b;
const add: MathFunc = (a, b) => a + b;

let usersArray: FullUser[] = [user, user];

/**
 * GetFirst takes an array of type T and returns a value of type T.
 * @param {T[]} arr - T[] - This is the array that we're going to be getting the first element from.
 * @returns The first element of the array.
 */
function getFirst<T>(arr: T[]): T {
  return arr[0];
}
/* Calling the getFirst function and passing in the usersArray as a parameter. */
getFirst<FullUser>(usersArray);

/**
 * "The function takes in a parameter of type any and returns nothing."
 *
 * The function takes in a parameter of type any and returns nothing
 * @param {any} data - any
 */
const logFunction = (data: any): void => {
  const data2: unknown = data;
  console.log(data);
  console.log(data2);
};
