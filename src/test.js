"use strict";
exports.__esModule = true;
var a;
var b;
var c;
var d;
var perm = ["admin", "manager"];
/* Creating a new user with the type FullUser, which is a BasicUser with an account number. */
var user = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: true,
    permissions: ["admin", "manager"],
    account: 100
};
/* Creating a new user with the type BasicUser, which is a type that has a name, surname, age, and
isAdmin property, and an optional permissions property that is an array of strings. */
var user3 = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: 1
};
/* Extending the BasicUser interface and adding a new property called permission. */
var user2 = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: true,
    permission: ["manager", "operator", "instructor"]
};
/**
 * The mul function takes two numbers and returns a number.
 * @param a - number
 * @param b - number
 */
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
var usersArray = [user, user];
/**
 * GetFirst takes an array of type T and returns a value of type T.
 * @param {T[]} arr - T[] - This is the array that we're going to be getting the first element from.
 * @returns The first element of the array.
 */
function getFirst(arr) {
    return arr[0];
}
/* Calling the getFirst function and passing in the usersArray as a parameter. */
getFirst(usersArray);
/**
 * "The function takes in a parameter of type any and returns nothing."
 *
 * The function takes in a parameter of type any and returns nothing
 * @param {any} data - any
 */
var logFunction = function (data) {
    var data2 = data;
    console.log(data);
    console.log(data2);
};
