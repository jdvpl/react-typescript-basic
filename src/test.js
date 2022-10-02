var a;
var b;
var c;
var d;
var user = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: true,
    profession: "Software developer"
};
var user3 = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: 1,
    profession: "Software developer"
};
var user2 = {
    name: "Juan",
    surname: "Suarez",
    age: 27,
    isAdmin: true,
    permission: ["manager", "operator", "instructor"]
};
var mul = function (a, b) { return a * b; };
var add = function (a, b) { return a + b; };
var usersArray = [user, user, user2];
function getFirst(arr) {
    return arr[0];
}
getFirst(usersArray);
