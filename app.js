const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
const products = [
    {
        id: 1,
        title: "Air Force",
        price: "₹ 7,501",
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },
            {
                code: "darkblue",
                img: "./img/air2.png"
            },
        ],
    },
    {
        id: 2,
        title: "Air Jordan",
        price: "₹ 16 995",
        colors: 
        [
            {
                code: "lightgray",
                img: "./img/jordan.png",
            },
            {
                code: "green",
                img: "./img/jordan2.png",
            },
        ],
    },
    {
        id: 3,
        title: "Blazer",
        price: "₹ 2,799",
        colors: 
        [
            {
                code: "lightgray",
                img: "./img/blazer.png",
            },
            {
                code: "green",
                img: "./img/blazer2.png"
            },
        ],
    },
    {
        id: 4,
        title: "Crater",
        price: "₹ 14,995",
        colors: 
        [
            {
                code: "black",
                img: "./img/crater.png"
            },
            {
                code: "lightgray",
                img: "./img/crater2.png",
            },
        ],
    },
    {
        id: 5,
        title: "Hippie",
        price: "₹19,182",
        colors: 
        [
            {
                code: "gray",
                img: "./img/hippie.png"
            },
            {
                code: "black",
                img: "./img/hippie2.png"
            },
        ],
    },
];

let choosenProduct = products[0]
const currentProductImg = document.querySelector(".productImg");
const currentProducTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColor = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click", ()=>{
        //change the choosen side
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //chenge the choosen porduct
        choosenProduct = products[index]

        //chenge text of current product 
        currentProducTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = choosenProduct.price;
        currentProductImg.src =  choosenProduct.colors[0].img;
        // assing new colors

        currentProductColor.forEach((color, index) => {
            color.style.background = choosenProduct.colors[index].code;
        });
    });
});

currentProductColor.forEach((color, index)=>{
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size, index)=>{
    size.addEventListener("click",()=>{
        currentProductSizes.forEach((size)=> {
            size.style.backgroundColor = "white";
            size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
    });
});
//payment button start here
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");
productButton.addEventListener("click", ()=>{
    payment.style.display = "flex"
});
close.addEventListener("click", ()=>{
    payment.style.display = "none"
});