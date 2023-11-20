function quiztest()
{
//question 1
let svar1 = '4';
let riktig = 0;
const getInput1 = document.getElementById('input1').value;
const feil = document.getElementById('answer1').textContent = "svaret er feil";
if(getInput1 == svar1){ 
    document.getElementById('answer1').textContent = "riktig svaret var 4";
    riktig++;
}
else {
    feil;
};
//question 2
const Bu5 = document.getElementById('Bu5');
}


//
function droptext(elementId) {
    let dropElement = document.getElementById(elementId + "drop");
    let buttonElement = document.getElementById(elementId);

    if (dropElement.style.display === "block") {
        dropElement.style.display = "none";
        buttonElement.textContent = buttonElement.textContent.replace("▲", "▼");
    } else {
        dropElement.style.display = "block";
        buttonElement.textContent = buttonElement.textContent.replace("▼", "▲");
    }
}

  
