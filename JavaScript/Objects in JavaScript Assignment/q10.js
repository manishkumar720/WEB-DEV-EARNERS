
const user = {
    name: "Manish",
    email: "manish@gmail.com"
};

Object.entries(user).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
})