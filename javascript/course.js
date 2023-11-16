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



let CPUs = document.getElementById("CPU")
let memory = document.getElementById("Memory-slot")
/* let IO = document.getElementById("dropdown-btn")
let CMOS = document.getElementById("dropdown-btn")
let CMOSb = document.getElementById("dropdown-btn")
let PCH = document.getElementById("dropdown-btn")
let Temp = document.getElementById("dropdown-btn")
let MBCPU = document.getElementById("dropdown-btn") */

function droptext() {
    let CPUdrop = document.getElementById("CPUdrop");
    let Memorydrop = document.getElementById("Memorydrop")
    if (CPUdrop.style.display === "block") {
      CPUdrop.style.display = "none";
      CPUs.textContent = CPUs.textContent -"▲";
      CPUs.textContent = CPUs.textContent +"▼";
    }
    else {
        CPUdrop.style.display = "block";
        CPUs.textContent = CPUs.textContent - "▼" 
        CPUs.textContent = CPUs.textContent + "▲" 
  
      }
    if (Memorydrop.style.display === "block") {
        Memorydrop.style.display = "none";
        memory.textContent = memory.textContent + CPUs.memory -"▲";
        memory.textContent = memory.textContent + CPUs.memory +"▼";
    }
    else{
        
        CPUdrop.style.display = "block";
        CPUs.textContent = CPUs.textContent - "▼" 
        CPUs.textContent = CPUs.textContent + "▲" 
    }
    } 
    

  
