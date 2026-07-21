"use strict";


const originalPrice =
document.getElementById("originalPrice");


const discountPercent =
document.getElementById("discountPercent");


const calculateDiscount =
document.getElementById("calculateDiscount");


const clearDiscount =
document.getElementById("clearDiscount");


const discountAmount =
document.getElementById("discountAmount");


const discountFinal =
document.getElementById("discountFinal");





calculateDiscount.addEventListener("click",()=>{


let price = Number(originalPrice.value);


let discount = Number(discountPercent.value);



if(originalPrice.value==="" || discountPercent.value===""){


alert("Please enter all values");


return;


}



let saved =
(price * discount) / 100;



let final =
price - saved;




discountAmount.innerHTML =
"₹ " + saved.toFixed(2);



discountFinal.innerHTML =
"₹ " + final.toFixed(2);



});






clearDiscount.addEventListener("click",()=>{


originalPrice.value="";

discountPercent.value="";


discountAmount.innerHTML="0";


discountFinal.innerHTML="0";


});