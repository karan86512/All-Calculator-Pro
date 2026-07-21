"use strict";


const loanAmount =
document.getElementById("loanAmount");


const interestRate =
document.getElementById("interestRate");


const loanYears =
document.getElementById("loanYears");



const calculateEMI =
document.getElementById("calculateEMI");


const clearEMI =
document.getElementById("clearEMI");



const monthlyEMI =
document.getElementById("monthlyEMI");


const totalInterest =
document.getElementById("totalInterest");


const totalPayment =
document.getElementById("totalPayment");





calculateEMI.addEventListener("click",()=>{


let principal =
Number(loanAmount.value);


let rate =
Number(interestRate.value);


let years =
Number(loanYears.value);




if(
loanAmount.value==="" ||
interestRate.value==="" ||
loanYears.value===""
){


alert("Please enter all values");

return;


}




let monthlyRate =
rate / 12 / 100;


let months =
years * 12;



let emi =

(principal *
monthlyRate *
Math.pow(1+monthlyRate,months))
/
(Math.pow(1+monthlyRate,months)-1);





let total =
emi * months;


let interest =
total - principal;




monthlyEMI.innerHTML =
"₹ " + emi.toFixed(2);



totalInterest.innerHTML =
"₹ " + interest.toFixed(2);



totalPayment.innerHTML =
"₹ " + total.toFixed(2);



});







clearEMI.addEventListener("click",()=>{


loanAmount.value="";

interestRate.value="";

loanYears.value="";


monthlyEMI.innerHTML="₹ 0";

totalInterest.innerHTML="₹ 0";

totalPayment.innerHTML="₹ 0";


});