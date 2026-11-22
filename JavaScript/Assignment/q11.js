let age = 45;
let hasLicense = true;

if (age < 0) {
    console.log("Invalid age");
} else if (age >= 18 && age <= 60 && hasLicense) {
    console.log("Bhai tum chala sakte ho car");
} else {
    console.log("Tum kaha ?? Tum nhi chal sakte ho car");
}