"use strict";


const weight =
document.getElementById("weight");


const height =
document.getElementById("height");


const calculateBMI =
document.getElementById("calculateBMI");


const clearBMI =
document.getElementById("clearBMI");


const bmiResult =
document.getElementById("bmiResult");


const bmiStatus =
document.getElementById("bmiStatus");





calculateBMI.addEventListener("click",()=>{


let w = Number(weight.value);

let h = Number(height.value);



if(weight.value==="" || height.value===""){

alert("Please enter weight and height");

return;

}



let heightMeter = h / 100;


let bmi = w / (heightMeter * heightMeter);



bmiResult.innerHTML =
bmi.toFixed(2);



if(bmi < 18.5){

bmiStatus.innerHTML =
"Underweight";

}

else if(bmi < 25){

bmiStatus.innerHTML =
"Normal Weight";

}

else if(bmi < 30){

bmiStatus.innerHTML =
"Overweight";

}

else{

bmiStatus.innerHTML =
"Obesity";

}



});






clearBMI.addEventListener("click",()=>{


weight.value="";

height.value="";


bmiResult.innerHTML="0";


bmiStatus.innerHTML=
"Enter your details";


});