
let users = [

    { name: "Dipak", age: 20 },
    { name: "Vikash", age: 23 }

];

let result = users.find(user => user.name === "Dipak");

console.log(result);