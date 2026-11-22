

// let div = document.querySelector("#reveal-gift")
// let h1 = document.querySelector("#gift")

// let btn = document.querySelector("#btn")

// function revealGift(event) {
//     console.log(event);
//     console.log(event.type);
//     console.log("target", event.target);
//     console.log("currentTarget", event.currentTarget);
//     h1.classList.toggle("hidden")
//     // h1.classList.add("visible")
// }


// btn.addEventListener('click', () => {
//     console.log("hello dosto kya haal chaal");
// })


// div.addEventListener('click', revealGift)


// let counter = 0

// function fun1(e) {
//     if (counter < 3) {
//         console.log(e);
//         counter++
//     } else {
//         btn.removeEventListener(`click`, fun1)
//     }
// }

// btn.addEventListener(`click`, fun1)



// let outter = document.querySelector("#outter")
// let inner = document.querySelector("#inner")
// let btn2 = document.querySelector("#btn2")
// let body = document.querySelector("body")


// body.addEventListener(`click`, (e) => {
//     e.stopPropagation()
//     console.log("body");
// })


// outter.addEventListener(`click`, (e) => {
//     e.stopPropagation()
//     console.log("Outter");
// })

// inner.addEventListener(`click`, (e) => {
//     e.stopPropagation()
//     console.log("Inner");
// })

// btn2.addEventListener(`click`, (e) => {
//     e.stopPropagation()
//     console.log("Btn2");
// })



let products = [
    {
        id: "1",
        name: "Iphone 20",
        price: 455000,
        imgUrl: "https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
    },
    {
        id: "2",
        name: "Samsung 15",
        price: 17500,
        imgUrl: "https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
    },
    {
        id: "3",
        name: "MI 23",
        price: 564274,
        imgUrl: "https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
    },
    {
        id: "4",
        name: "Poco 10",
        price: 56422,
        imgUrl: "https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
    },
    {
        id: "5",
        name: "Lava 12",
        price: 5642,
        imgUrl: "https://img-prd-pim.poorvika.com/product/Apple-iphone-17-pro-cosmic-orange-256gb-Front-Back-View.png"
    }
]



let productList = document.querySelector("#product-list")

products.forEach((product) => {
    const card = document.createElement("div");
    card.classList.add("singleProduct");


    card.dataset.productId = product.id;
    const dltBtn = document.createElement("button");
    const addToCartBtn = document.createElement("button");
    dltBtn.textContent = "Remove product"
    addToCartBtn.textContent = "Add to cart"


    // dltBtn.addEventListener(`click`, (e) => {
    //     e.stopPropagation()
    //     card.remove()
    // })



    card.innerHTML = `<div>
       <img src=${product.imgUrl} alt="">
   </div>
   <div class="productDetails">
      <p>${product.name}</p>
      <p>${product.price}</p>
   </div>
   `


    card.append(dltBtn)
    card.append(addToCartBtn)

    productList.append(card)

})

productList.addEventListener("click", (e) => {
    e.stopPropagation();

    const dltBtn = e.target;

    // console.log(dltBtn.parentElement);
    // console.log(dltBtn.tagName);
    // console.log(dltBtn.textContent);

    // if (e.target.tagName === "BUTTON") {
    //     // e.target.parentElement.remove()
    // }

    // console.log(dltBtn.parentElement.dataset.productId);

    if (dltBtn.textContent === "Remove product" && dltBtn.tagName === "BUTTON") {
        //     dltBtn.parentElement.remove()
        // dltBtn.closest(".singleproduct").remove()
    }

    // console.log(dltBtn.closest(".singleProduct"));

})

