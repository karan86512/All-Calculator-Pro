"use strict";


const price = document.getElementById("price");

const gstRate = document.getElementById("gstRate");

const calculateGST = document.getElementById("calculateGST");

const clearGST = document.getElementById("clearGST");

const gstAmount = document.getElementById("gstAmount");

const finalPrice = document.getElementById("finalPrice");



calculateGST.addEventListener("click",()=>{


let amount = Number(price.value);

let rate = Number(gstRate.value);



if(price.value===""){

alert("Please enter price");

return;

}



let gst = (amount * rate) / 100;


let total = amount + gst;



gstAmount.innerHTML = "₹ " + gst.toFixed(2);


finalPrice.innerHTML = "₹ " + total.toFixed(2);



});





clearGST.addEventListener("click",()=>{


price.value="";


gstAmount.innerHTML="0";


finalPrice.innerHTML="0";


});