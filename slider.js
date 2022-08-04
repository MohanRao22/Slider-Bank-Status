const slideContainer = document.querySelector('.slide-container');
let sliderParent = document.getElementById("slides_path");

//  Client feedback data
var feedBackContent = [
    {
        client: "Citi Bank",
        rating: 4,
        msg: "We like to think that we offer exemplary quality and we are constantly examining our own practice to improve our programmes. However, in order to help you get a feel for the quality that we offer, here are just some of the comments and feedback from previous clients.",
        img: "./images/citibank-logo.jpeg"
    },
    {
        client: "Axis Bank",
        rating: 4.3,
        msg: "I just wanted to thank you for your excellent inputs [on various courses] over the last 9 months, and more recently this morning. Your specific inputs have been insightful and have really helped me focus my approach to research leadership in my University. This has been invaluable to me and I will bring this knowledge with me when meeting with my research team in the future.",
        img: "./images/axis-logo.png"
    },
    {
        client: "Canara Bank",
        rating: 3.9,
        msg: "I just wanted to thank you for your excellent inputs [on various courses] over the last 9 months, and more recently this morning. Your specific inputs have been insightful and have really helped me focus my approach to research leadership in my University. This has been invaluable to me and I will bring this knowledge with me when meeting with my research team in the future.",
        img: "./images/canara-logo.png"
    },
    {
        client: "Indian Bank",
        rating: 4.3,
        msg: "A big Thank You for the leadership session this afternoon. It was a great pleasure to listen to your talk - highly inspirational and perfectly pitched to the audience, as always. This has been invaluable to me and I will bring this knowledge with me when meeting with my research team in the future.",
        img: "./images/indian-logo.png"
    }

];


// Mapping the content data through DOM Manipulation
{/* <div class="stars">
<div class="star"></div>
<div class="star"></div>
<div class="star"></div>
</div> */}

{/* <div class="cilent_representation">
<div> <h4>${clientData.client}</h4></div>
<div><p>${clientData.rating}</P></div>
</div> */}

var feedbackItemSection = feedBackContent.map((clientData) => {
    sliderParent.innerHTML += `<div class="slide_item">
     <div class="client_image_sec">
       <img src=${clientData.img} alt=${clientData.client} class="client_image"/>
     </div>
     <div class="client_name">
     <h2>Henry Marshall</h2>
     <h4 class="designation">CEO</h4>
     </div>
     <div class="client_message">
        <p><strong>${clientData.msg}</strong>
     </div>
   
  

     <div class="rating">
     <div class="star">🌟</div>
     <div class="star">🌟</div>
     <div class="star">🌟</div>
     <div class="star">⭐</div>
     <div class="star">⭐</div>
</div>
   
    </div> `;
})

sliderParent.append(feedbackItemSection);

// collecting the slide items

let slideItems = document.querySelectorAll(".slide_item");
console.log(slideItems);


// cloning the first and last element 

const firstClone = slideItems[0].cloneNode(true);
const lastClone = slideItems[slideItems.length - 1].cloneNode(true);
console.log(firstClone);
console.log(lastClone);

firstClone.setAttribute("id", "first_clone");
lastClone.setAttribute("id", "last_clone");

// cloning the first and last element 
sliderParent.append(firstClone);
sliderParent.prepend(lastClone);


// Getting the width of particular item

let loopTime = 3000;
let index = 1;
const itemWidth = slideItems[index].clientWidth;
console.log(itemWidth);



// start slide show function
let interval_value;

const startSlideShow = () => {
    // slideItems = document.querySelectorAll(".slide_item");
    // console.log(slideItems);
    interval_value = setInterval(() => {


        sliderParent.style.transform = `translateX(${-itemWidth * index}px)`;
        sliderParent.style.transition = "1s";
        index++;

    }, loopTime);
}

startSlideShow();


sliderParent.addEventListener("transitionend", () => {
    slideItems = document.querySelectorAll(".slide_item");

    if (slideItems[index].id === firstClone.id) {
        sliderParent.style.transition = "none";
        index = 0;
        sliderParent.style.transform = `translateX(${-slideWidth * index}px)`;
    }
});


// stopping the auto play whenever an user hover an track of an items

sliderParent.addEventListener("mouseover", () => {
    slideItems[index].style.cursor = "pointer";
    clearInterval(interval_value);
});

sliderParent.addEventListener("mouseleave", () => {
    startSlideShow();
});




/**
 * Screen Animation effect
 */

var parentAnimator = document.querySelector(".whole_wrapper_container");


var sc = setInterval(() => {

    for (let incrementalIndex = 1; incrementalIndex <= 100; incrementalIndex++) {


        var rand = Math.random();
        rand = Math.floor(rand * 100);

        var randHeight = Math.floor(Math.random() * 30);
        var randWidth = Math.floor(Math.random() * 30);

        // Randoms color generator

        var red = Math.floor(Math.random() * 255);
        var green = Math.floor(Math.random() * 255);
        var blue = Math.floor(Math.random() * 255);


        var box = document.createElement("div");
        box.setAttribute("class", "box");

        box.style.height = `${randHeight}px`;
        box.style.width = `${randWidth}px`;
        box.style.backgroundColor = `rgb(${red},${green},${blue})`;
        box.style.position = "absolute";

        box.style.left = Math.floor(Math.random() * (screen.width) - 100) + "px";
        box.style.top = Math.floor(Math.random() * screen.height) + "px";
        box.style.borderRadius = Math.floor(Math.random() * 100) + "%";
        box.style.boxShadow = "2px 2px 10px pink";
        box.style.transition = "1s";
        document.body.append(box);

    }

    clear();
}, 3000);


function clear() {
    document.querySelectorAll(".box").innerHTML = " ";
}