"use strict";


const cgpa =
document.getElementById("cgpa");


const calculateCGPA =
document.getElementById("calculateCGPA");


const clearCGPA =
document.getElementById("clearCGPA");


const percentageResult =
document.getElementById("percentageResult");





calculateCGPA.addEventListener("click",()=>{


let value = Number(cgpa.value);



if(cgpa.value===""){


alert("Please enter CGPA");


return;


}



if(value < 0 || value > 10){


alert("Enter CGPA between 0 and 10");


return;


}





// Common Formula

let percentage = value * 9.5;



percentageResult.innerHTML =

percentage.toFixed(2) + " %";



});






clearCGPA.addEventListener("click",()=>{


cgpa.value="";


percentageResult.innerHTML="0 %";


});