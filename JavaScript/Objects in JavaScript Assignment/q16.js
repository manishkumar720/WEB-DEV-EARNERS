
const user = {
    name: "Manish",
    role: "student"
};

const newUser = {
    ...user,
    role: "developer"
};

console.log(newUser);