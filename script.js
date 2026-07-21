/* ===================================
   PercentagePro V2
   Main JavaScript
=================================== */


"use strict";



/* ===============================
      ELEMENTS
================================ */


const percentInput = document.getElementById("percent");

const numberInput = document.getElementById("number");

const calculateBtn = document.getElementById("calculateBtn");

const clearBtn = document.getElementById("clearBtn");

const result = document.getElementById("result");

const copyBtn = document.getElementById("copyBtn");

const shareBtn = document.getElementById("shareBtn");

const themeBtn = document.getElementById("themeBtn");



/* ===============================
      CALCULATE PERCENTAGE
================================ */


calculateBtn.addEventListener("click",()=>{


    let percent = Number(percentInput.value);

    let number = Number(numberInput.value);



    if(percentInput.value === "" || numberInput.value === ""){


        showMessage("Please enter both values","error");

        return;


    }



    let answer = (percent * number) / 100;



    result.innerHTML = `

    ${answer.toFixed(2)}

    `;



    resultAnimation();



});





/* ===============================
        CLEAR BUTTON
================================ */


clearBtn.addEventListener("click",()=>{


    percentInput.value="";

    numberInput.value="";

    result.innerHTML="0";


});





/* ===============================
        RESULT ANIMATION
================================ */


function resultAnimation(){


    result.style.transform="scale(1.2)";


    setTimeout(()=>{


        result.style.transform="scale(1)";


    },300);


}

/* ===============================
        COPY RESULT
================================ */


copyBtn.addEventListener("click",()=>{


    let text = result.innerText;


    if(text === "0"){

        showMessage("First calculate result","error");

        return;

    }



    navigator.clipboard.writeText(text);


    showMessage("Result copied successfully","success");


});





/* ===============================
        SHARE RESULT
================================ */


shareBtn.addEventListener("click",async()=>{


    let text = 
    "Percentage Result: " + result.innerText;



    if(navigator.share){


        await navigator.share({

            title:"Percentage Calculator",

            text:text

        });


    }

    else{


        navigator.clipboard.writeText(text);

        showMessage("Share text copied","success");


    }



});





/* ===============================
        DARK MODE
================================ */


themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark");



    if(document.body.classList.contains("dark")){


        localStorage.setItem(
            "theme",
            "dark"
        );


        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';


    }

    else{


        localStorage.setItem(
            "theme",
            "light"
        );


        themeBtn.innerHTML =
        '<i class="fa-solid fa-moon"></i>';


    }


});





/* ===============================
       LOAD SAVED THEME
================================ */


window.addEventListener("load",()=>{


    let savedTheme =
    localStorage.getItem("theme");



    if(savedTheme==="dark"){


        document.body.classList.add("dark");


        themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';


    }



});

/* ===============================
        TOAST MESSAGE
================================ */


function showMessage(message,type){


    let toast = document.createElement("div");


    toast.className="toast";


    toast.innerText=message;



    toast.style.position="fixed";

    toast.style.bottom="25px";

    toast.style.right="25px";

    toast.style.padding="15px 25px";

    toast.style.borderRadius="50px";

    toast.style.color="#fff";

    toast.style.fontWeight="600";

    toast.style.zIndex="9999";

    toast.style.transition=".3s";



    if(type==="error"){

        toast.style.background="#ef4444";

    }

    else{

        toast.style.background="#22c55e";

    }



    document.body.appendChild(toast);



    setTimeout(()=>{

        toast.remove();

    },2500);



}





/* ===============================
        HISTORY SYSTEM
================================ */


function saveCalculation(data){


    let history =
    JSON.parse(
        localStorage.getItem("history")
    ) || [];



    history.unshift(data);



    if(history.length>10){

        history.pop();

    }



    localStorage.setItem(
        "history",
        JSON.stringify(history)
    );


}





/* Save After Calculation */


calculateBtn.addEventListener("click",()=>{


    if(result.innerText!=="0"){


        let historyText =

        `${percentInput.value}% of 
        ${numberInput.value} =
        ${result.innerText}`;



        saveCalculation(historyText);



    }


});





/* ===============================
        AUTO FOCUS
================================ */


window.addEventListener("load",()=>{


    percentInput.focus();


});





/* ===============================
        CONSOLE MESSAGE
================================ */


console.log(

"PercentagePro V2 Loaded Successfully 🚀"

);

const historyList = document.getElementById("historyList");

const clearHistoryBtn = document.getElementById("clearHistoryBtn");


// Display History

function displayHistory(){

    let history =
    JSON.parse(localStorage.getItem("history")) || [];


    historyList.innerHTML="";


    if(history.length === 0){

        historyList.innerHTML =
        "<li>No calculations yet.</li>";

        return;

    }


    history.forEach(item=>{


        let li=document.createElement("li");

        li.innerText=item;

        historyList.appendChild(li);


    });

}



// Load History

displayHistory();


// Clear History

clearHistoryBtn.addEventListener("click",()=>{


    localStorage.removeItem("history");


    displayHistory();


    showMessage(
        "History cleared",
        "success"
    );


});

const searchInput = document.getElementById("searchInput");

const cards = document.querySelectorAll(".tool-card");


searchInput.addEventListener("input",()=>{


let value = searchInput.value.toLowerCase();


cards.forEach(card=>{


let name = card.innerText.toLowerCase();


if(name.includes(value)){

    card.style.display="block";

}

else{

    card.style.display="none";

}


});


});