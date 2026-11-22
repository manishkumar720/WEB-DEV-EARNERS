
let originalPrices = [463, 654, 2346]

let discountPrices = []


// for (value of originalPrices) {
//     discountPrices.push(value * 0.9) // 10% discount
// }


originalPrices.forEach((value) => {
    discountPrices.push(value * 0.9) // 10% discount
})

// console.log(originalPrices);
// console.log(discountPrices);


const discountPrices2 = originalPrices.map((value) => value * 0.9)


// console.log(discountPrices2);


let students = [
    {
        name: "Ayan",
        marks: 56,
    },
    {
        name: "Mansi",
        marks: 46,
    },
    {
        name: "Dipak",
        marks: 33,
    },
    {
        name: "Shivam",
        marks: 30,
    },
    {
        name: "Alauddin",
        marks: 28,
    },


]
// let studentNames = []

// students.forEach((value) => {
//     studentNames.push(value.name)
// })

const studentNames = students.map((students) => students.name)
const studentMarks = students.map((students) => students.marks)


// console.log(studentNames, studentMarks);

// let boostedMarks = students.map((student) => {
//     return { ...studentNames, marks: student.marks + 10 }
// })


let boostedMarks = students.map(student => ({ ...student, marks: student.marks + 10 }))
// let boostedMarks = students.map(student => student.marks < 33)

// console.log(boostedMarks);


// let failedStudents = []

// students.forEach((student) => {
//     if (student.marks < 33) {
//         failedStudents.push(student)
//     }
// })

const failedStudents = students.filter((student) => student.marks < 33).map((student) => student.name)

// constfailedStudentsName = failedStudents.map((student) => student.name)

// console.log(failedStudents);

let marks = [56, 24, 62, 73, 78]

// let totalMarks = 0

// marks.forEach((marks) => totalMarks = totalMarks + marks)

// const totalMarks = marks.reduce((totalMarks, marks) => totalMarks + marks, 0)

const totalMarks = students.reduce((totalMarks, student) => totalMarks + student.marks, 0)

// console.log(totalMarks);


const attendence = ["present", "present", "absent", "present", "absent"]

// -> {present : 3 , absent: 2 }

// let obj = {}

// attendence.forEach((value) => {
//     if (obj[value]) {
//         obj[value] = obj[value] + 1
//     } else {
//         obj[value] = 1
//     }
// })

// console.log(obj);


// by reduce 

const obj = attendence.reduce((acc, value) => {
    // if (acc[value]) {
    //     acc[value] = acc[value] + 1
    // } else {
    //     acc[value] = 1
    // }

    acc[value] = (acc[value] || 0) + 1;
    return acc
}, {})

console.log(obj);