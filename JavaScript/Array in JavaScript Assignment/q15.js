
let users = [
    { name: "Divish", age: 20 },
    { name: "Rahul", age: 23 }
];

let result = users.findIndex(users => users.name === "Rahul");

console.log(result);