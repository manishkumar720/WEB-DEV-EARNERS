
// console.log("a");

// const p = new Promise(function (resolve, rejected) {
//     resolve("hii")
//     // rejected("I am sorry")

// })

// console.log("c");
// console.log(typeof p); // object
// console.log(p);

// p.then(function onFulfilled(val) {
//     console.log(val);
// }, function onRejected(val) {
//     console.log(val);
// })

// .then(() => { }, () => { })
// .then()
// .then()


// const res = p.then(function (val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).then(function onFulfilled(val) {
//     console.log(val);
// }).catch(function onFulfilled(val) {
//     console.log(val);
// }).finally(function () {
//     console.log("Ye toh hamesha chalega");
// })




// console.log("a");

// const p2 = new Promise(function f1(resolve, rejected) {
//     console.log("b");
//     resolve("hello")
// })

// p2.then(function f2(val) {
//     console.log("then");
//     console.log(val);
// }).catch(function f3() {
//     console.log("catch");
// }).finally(function f4() {
//     console.log("finally");
// })

// console.log("c");


// const p3 = new Promise(function f1(resolve, rejected) {
//     resolve() // ye line sirf itna batati hai ki promise fulfill ho gya thats it
// })

// Promise.resolve().then(function f2() {
//     console.log("f2 function");
// })

// setTimeout(function fun3() {
//     console.log("setTimeout");
// }, 2000)

// p3.then(function f3() {
//     console.log("f3 function");
// })




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

            let isPaymentSucceddful = false

            if (isPaymentSucceddful) {
                console.log(`Payment Completed , Amount : ${price}`);
                resolve()
            } else {
                rejected("Bhaiya payment failed")
            }


        }, 5000)
    })
}


// searchPizza().then(function (price) {
//     console.log(price);
// })

let res = searchPizza()
price = 0
res.then(function (price) {
    return addToCart(price)
}).then(function (pricec) {
    return payment(pricec)
}).then(function () {
    console.log("Bass Aa hi gya Pizza");
}).catch(function (err) {
    console.log(err);
})
