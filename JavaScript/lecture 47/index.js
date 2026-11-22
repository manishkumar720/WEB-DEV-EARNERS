"use strict"

// async function fun2() {
//     // console.log("Hii");
//     return 11
// }


// function fun1() {
//     // console.log("Hello");

//     // return Promise.resolve(10)
//     return 10
// }

// // console.log(fun2());
// fun2().then((data) => {
//     console.log(data);
// })

// console.log(fun1());




// console.log("a");

// async function fun3() {
//     console.log("b");
// }

// console.log("c");


// fun3()




// async function fun3() {
//     return "hello"
// }


// function fun4() {
//     return Promise.resolve("hii")
// }


// console.log("1");
// async function fun5() {
//     // fun3().then(data => {
//     //     console.log(data);
//     // })

//     console.log("2");
//     let data = await fun3()
//     console.log("3");
//     let data2 = await fun4()
//     console.log("4");
//     console.log(data, data2);
// }

// console.log("manish");

// fun5()

// console.log("5");





// console.log("a");

// async function random() {


//     console.log("b");

//     await 1;

//     console.log("c");

// }

// random()

// console.log("d");



// let data;

// async function userData() {
//     return { name: "manish" }
// }

// function fun4() {
//     return Promise.reject("error aa gaya")
// }

// async function fun5() {
//     try {
//         data = await userData()
//         let data2 = await fun4()
//         console.log(data, data2);
//     } catch (error) {
//         console.log(error);
//     } finally {
//         console.log("mai to hamesa aaunga");
//     }
// }

// fun5()





function searchPizza() {
    return new Promise(function a(resolve, rejected) {
        console.log("Pizza searching...");
        setTimeout(function fun1() {
            console.log("Here is the Pizza Menu.");
            let price = 500;
            // a(price)
            resolve(price)
        }, 2000)
    })

}


function addToCart(price) {
    return new Promise(function a(resolve, rejected) {
        console.log("Pizza adding to cart...");
        setTimeout(function fun2() {
            console.log("Pizza Added to cart");
            resolve(price)
        }, 3000)
    })

}

function payment(price) {
    return new Promise(function a(resolve, rejected) {
        console.log(`Payment Initiated , Amount : ${price}`);
        setTimeout(function fun3() {

            let isPaymentSucceddful = true

            if (isPaymentSucceddful) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve()
            } else {
                rejected("Bhaiya payment failed")
            }


        }, 5000)
    })
}



// let res = searchPizza()

// res.then(function (price) {
//     return addToCart(price)
// }).then(function (pricec) {
//     return payment(pricec)
// }).then(function () {
//     console.log("Bass Aa hi gya Pizza");
// }).catch(function (err) {
//     console.log(err);
// })


async function orderFood() {
    try {
        let price = await searchPizza()
        await addToCart()
        await payment(price)
        console.log("Bass Aa hi gya Pizza");

    } catch (error) {
        console.log(error);
    }
}



orderFood()