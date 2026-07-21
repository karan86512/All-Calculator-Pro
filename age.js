"use strict";


const birthDate =
document.getElementById("birthDate");


const calculateAge =
document.getElementById("calculateAge");


const clearAge =
document.getElementById("clearAge");


const ageResult =
document.getElementById("ageResult");





calculateAge.addEventListener("click",()=>{


if(birthDate.value===""){


alert("Please select your birth date");


return;


}



let birth =
new Date(birthDate.value);


let today =
new Date();



let years =
today.getFullYear() - birth.getFullYear();


let months =
today.getMonth() - birth.getMonth();


let days =
today.getDate() - birth.getDate();





if(days < 0){

months--;

days += new Date(
today.getFullYear(),
today.getMonth(),
0
).getDate();

}



if(months < 0){

years--;

months += 12;

}




ageResult.innerHTML =

`${years} Years ${months} Months ${days} Days`;



});





clearAge.addEventListener("click",()=>{


birthDate.value="";


ageResult.innerHTML =
"0 Years 0 Months 0 Days";


});