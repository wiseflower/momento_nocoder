// const calculator = {
//     plus: function(a, b){
//         return a + b;
//     },
//     minus: function(a,b){
//         return a - b;
//     },
//     divide: function(a,b){
//         return a / b;
//     },
//     multiple: function(a,b){
//         return a * b;
//     },
//     power: function(a,b){
//         return a ** b;
//     },
// }

// const plus = calculator.plus(5, 5);
// const minus = calculator.minus(10, 5);
// const divide = calculator.divide(10, 5);
// const multiple = calculator.multiple(10, 5);
// const power = calculator.power(2,2);


// console.log(plus, minus, divide, multiple, power);

// const title = document.querySelector("#title");

// function handleClick(){
//     title.style.color = "blue";
// }

// title.addEventListener("click", handleClick);


// const age = prompt("How old are you?");

// if (age >= 18 && age <= 21){
//     console.log("You can drink!");
// } else if(age > 21){
//     console.log("Go ahead");
// } else {
//     console.log("You cant!");
// }

// const title = document.querySelector("#title");
// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";

// function handleClick(){
//     const currentColor = title.style.color;
//     if (currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     } else {
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
//     title.addEventListener("click", handleClick);
// }

// init();


const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){
    title.classList.toggle(CLICKED_CLASS);
}

function init(){
    title.addEventListener("click", handleClick);
}


init();