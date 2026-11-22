
let dipakMarks = 46 + 56 + 23;
let vikashMarks = 25 + 35 + 56;
let divish = 23 + 36 + 65;
let karan = 35 + 65 + 35;

// let productPrice  = 3000;
// let discountAmount = 3000 * 10 / 100;
// let deliveryCharge = 50;
// let totalAmount = productPrice - discountAmount + deliveryCharge

function totalMarks(mathMarks, scienceMarks, sanskritMarks) {
    return mathMarks + scienceMarks + sanskritMarks;
}


function calPercentage(studentName, mathMarks, scienceMarks, sanskritMarks) {
    let total = totalMarks(mathMarks, scienceMarks, sanskritMarks);
    let percentage = (total / 300) * 100
    console.log(`${studentName} percentage : ${percentage}`);
    return percentage
}


// let percentage = calPercentage("dipak", 46, 56, 23)
// console.log(percentage);


// totalMarks("dipak", 46, 56, 23)
// totalMarks("vikash", 25, 35, 56)
// totalMarks("divish", 23, 36, 65)
// totalMarks("karan", 35, 65, 35)

// after array class
let students = [
    ["dipak", 46, 56, 23],
    ["vikash", 25, 35, 56],
    ["divish", 23, 36, 65],
    ["karan", 35, 65, 35]
]

for (let i = 0; i < students.length; i++) {
    calPercentage(students[i][0], students[i][1], students[i][2], students[i][3])
}


// function greetingMsg(userName = "Guest", greetings = "Hii") {
//     console.log(`${greetings}, ${userName}`);
// }


// greetingMsg("Masood bhai")
// greetingMsg("Manish")
// greetingMsg("Montu" , "kya haal chhal")
// greetingMsg("Vivek")



// function calculater(num1, num2, operator) {

//     switch (operator) {
//         case "+":
//             console.log(`${num1} ${operator} ${num2} =`, num1 + num2);
//             break;
//         case "-":
//             console.log(`${num1} ${operator} ${num2} =`, num1 - num2);

//     }
// }


// calculater(4 , 5 , "-")


// fun1()
// function fun1() {
//     console.log("fuction declaration");
// }


// console.log(add(5, 7));
// let add = function (num1, num2) {
//     return num1 + num2
// }


// arrow function

// syntax 1
// let add = num1 => num1 + 4;


// // syntax 2
// let add = (num1, num2) => num1 + num2;

// // syntax 3
// let add = (num1, num2) => {
//     // something
//     // something

//     return num1 + num2
// };

// console.log(add(5, 7));