let users = [
  { name: "Dipak", email: "dipakl@example.com" },
  { name: "Masood Bhai", email: "masood@example.com" },
];

let userNames = users.map((user) => {
  return user.name;
});

const userEmails = users.map((user) => {
  return user.email;
});

console.log(users);
console.log(userNames);
console.log(userEmails);
