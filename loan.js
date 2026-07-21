"use strict";


const loan =
document.getElementById("loan");


const loanInterest =
document.getElementById("loanInterest");


const tenure =
document.getElementById("tenure");


const calculateLoan =
document.getElementById("calculateLoan");


const clearLoan =
document.getElementById("clearLoan");



const monthlyPayment =
document.getElementById("monthlyPayment");


const loanInterestAmount =
document.getElementById("loanInterestAmount");


const loanTotal =
document.getElementById("loanTotal");





calculateLoan.addEventListener("click",()=>{


let amount =
Number(loan.value);


let rate =
Number(loanInterest.value);


let years =
Number(tenure.value);





if(
loan.value==="" ||
loanInterest.value==="" ||
tenure.value===""
){

alert("Please enter all details");

return;

}



let totalInterest =
(amount * rate * years) / 100;



let totalAmount =
amount + totalInterest;



let monthly =
totalAmount / (years * 12);





monthlyPayment.innerHTML =
"₹ " + monthly.toFixed(2);



loanInterestAmount.innerHTML =
"₹ " + totalInterest.toFixed(2);



loanTotal.innerHTML =
"₹ " + totalAmount.toFixed(2);



});






clearLoan.addEventListener("click",()=>{


loan.value="";

loanInterest.value="";

tenure.value="";


monthlyPayment.innerHTML="₹ 0";


loanInterestAmount.innerHTML="₹ 0";


loanTotal.innerHTML="₹ 0";


});