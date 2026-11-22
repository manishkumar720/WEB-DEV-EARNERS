

// function fun1(callback) {
//     console.log("Hii");
//     callback()
// }


// function cb() {
//     console.log("This is callback function");
// }

// fun1(cb)


// let arr = ["a", "b", "c", "d"]


// function a() {


//     function b() {

//     }

//     return b
// }









function searchPizza(a) {

    console.log("Pizza searching...");
    setTimeout(function fun1() {
        console.log("Here is the Pizza Menu.");
        let price = 500;
        a(price)
    }, 2000)
}

function addToCart(cb2) {
    console.log("Pizza adding to cart...");
    setTimeout(function fun2() {
        console.log("Pizza Added to cart");
        cb2()
    }, 3000)
}

function payment(price) {
    console.log(`Payment Initiated , Amount : ${price}`);
    setTimeout(function fun3() {
        console.log(`Payment Completed , Amount : ${price}`);
        console.log("Bass Aa hi gya Pizza");
    }, 5000)
}


searchPizza(function a(price) {
    addToCart(function b() {
        payment(price)
        payment(price)
    })
})

