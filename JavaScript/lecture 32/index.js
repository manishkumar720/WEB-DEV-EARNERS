

// function convertToPositiveNumber(num){
//     return num * -1 ;
// }
//  let positiveNum = convertToPositiveNumber(-10)

//  console.log(positiveNum);



//  let positiveNum2 = Math.abs(-10)
//  console.log(positiveNum2);



// console.log(Math.PI);
// console.log(Math.pow(2,3));

// console.log(2 ** 3);
// console.log(Math.sqrt(36));

// console.log(Math.min(5,6,2,1,5,-8,9));
// console.log(Math.max(5,6,7,8,6.,52,55,56,5,8,2));



// console.log(Math.round(5.6));
// console.log(Math.round(3.3));
// console.log(Math.round(7.3));
// console.log(Math.round(8.9));
// console.log(Math.round(1.5));

// console.log(Math.round(2.634345));

// console.log(Math.ceil(4.1));
// console.log(Math.floor(7.0));


// let min = 1 ;
// let max = 6 ;
// let result = Math.floor(Math.random() * (max - min + 1) + min)

// console.log(result);



// console.log(Number.isFinite(Infinity));
// console.log(("56"));
// console.log(Number.parseInt("56"));


// let num1 = "45"; // backend
// let num2 = "75"; // backend is aai hai
// console.log(num1 + num2); // 2 string ko add kar rahe ho
// console.log(parseInt (num1) + parseInt(num2));


// let num = 49.7524526655
// console.log(num.toFixed(2));

// console.log(num.toPrecision(5));


// console.log("manish".toUpperCase());

// let str = "Hello Dosto"
// let email = "example@email.com"

// console.log(str.includes("ello"));
// console.log(email.includes("@") && email.includes("."));

// let fileName = "image.png"
// console.log(email.endsWith(".png") || fileName.endsWith(".jog"));


// let greet = "hello dosto, hello guys";
// console.log(greet.replace("hello", "Hii"));
// console.log(greet.replaceAll("hello", "Hii"));



// Date

console.log(Date.now()); // to get current unix timestamp

let date = new Date();

console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getFullYear());

console.log(date.toLocaleDateString());

console.log(date.toLocaleTimeString());

console.log(date.toDateString());
