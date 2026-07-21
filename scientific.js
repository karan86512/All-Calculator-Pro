"use strict";


const display =
document.getElementById("display");



function addValue(value){

    display.value += value;

}



function clearDisplay(){

    display.value="";

}



function deleteValue(){

    display.value =
    display.value.slice(0,-1);

}



function calculateResult(operator){


try{


if(operator==="="){

display.value =
eval(display.value);

}


else{

display.value += operator;

}



}

catch{

display.value="Error";

}


}





function squareRoot(){


let value =
Number(display.value);


display.value =
Math.sqrt(value);


}





function power(){


let value =
Number(display.value);


display.value =
Math.pow(value,2);


}