//this is the wuiz I put it all inside an array so it's easy to change and add to
const myQuiz = [
  {
    question: "Kva er eit Hovudkort?",
    answers: {
      a: 'Ein PCB',
      b: 'Ein man på ski',
      c: 'Ein type MOBO',
      d: 'Ein variant av PCI-e 4.0'
    },
    correctAnswer: 'a'
  },
  {
    question: "Kva er Hovudkorte sinn oppgåve?",
    answers: {
      a: 'Å gi strøym til CPU-en',
      b: 'Gi strøym til komponentar i PC-en',
      c: 'Å kople saman alle CPU-ane',
      d: 'Sette opp kommunikasjon mellom alle komponentane i PC-en med MB som medium'
    },
    correctAnswer: 'd'
  },
  {
    question: "Kva er av desse er den største ATX standaren?",
    answers: {
      a: 'eATX',
      b: 'mATX',
      c: 'mITX',
      d: 'sATX'
    },
    correctAnswer: 'a'
  },
  {
    question: "Kor ville du plassert ein GPU i eit hovudkort",
    answers: {
      a: 'AGP',
      b: 'PCI x32 ver 5.0',
      c: 'PCI-e x16',
      d: 'PCI-e x1'
    },
    correctAnswer: 'c'
  },
  {
    question: "Kva er forskjellen på CMOS og BIOS chipen",
    answers: {
      a: 'CMOS er batteriet til BIOS',
      b: 'CMOS lagrar Innstillingane, BIOS-chip har programmet BIOS.',
      c: 'BIOS CMOS tilbakestiller BIOS, BIOS hentar CMOS på avslutt',
      d: 'BIOS har programmet BIOS på seg og køyre CMOS overclock'
    },
    correctAnswer: 'b'
  },
  {
    question: "Kva er oppgåva til PCH",
    answers: {
      a: 'Å kotrollere BikiOS 5',
      b: 'Ta av seg GPU CPU og RAM',
      c: 'FDI, DMI og system klokke',
      d: 'I/O, PCIe-G, DDR, iGFX og IMC'
    },
    correctAnswer: 'c'
  },
  {
    question: "Eit hovudkort er",
    answers: {
      a: 'Livs viktig',
      b: 'Ein plass i Sveriga',
      c: 'Ein datakomponent som blir brukt i utvid bar datasystem',
      d: 'Ein ny standar som har tatt plassen til Senterkort'
    },
    correctAnswer: 'c'
  },
  {
    question: "Kva av desse tinga er vanlig å finne på eit hovudkort",
    answers: {
      a: 'AGP, Ryzen 7 5600x, 2040 TI.',
      b: 'USB 6.0, GPU, PCI.',
      c: 'AM4, amd chipset, pre installed Linux',
      d: 'CPU, Memory-slot og ein I/O'
    },
    correctAnswer: 'd'
  },
  {
    question: "Kva skjer om system klokke batteriet går tom",
    answers: {
      a: 'BIOS innstillingar kan bli fjernet',
      b: 'Ingenting skjer',
      c: 'Du mister BIOS',
      d: 'BIOS funkar ikkje'
    },
    correctAnswer: 'a'
  },
  {
    question: "Kva har du lært om i denne modulen",
    answers: {
      a: 'Kjedeleg',
      b: 'Ingenting :(',
      c: 'Lego historie',
      d: 'Hovudkort (Eg håper)'
    },
    correctAnswer: 'd'
  }
];
//grab elemtents I need for the code
const hiding = document.getElementById("hideQ");
const question = document.getElementById("Q");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const finalR = document.getElementById("finalAnswer")
const result = document.getElementById("results")
const right = document.getElementById("right")
const wrong = document.getElementById("wrong")
//poeng holder and, currQnum that holds the current question number instead of [0-10]
let poeng = 0;
let currQnum = 0;
//loads the questions. takes myquiz and changes the innerhtml of the html elements to the current question and answer choices
function loadQuestion() {
  const currQuest = myQuiz[currQnum];
  question.innerHTML = currQuest.question;
  a.innerHTML = currQuest.answers.a;
  b.innerHTML = currQuest.answers.b;
  c.innerHTML = currQuest.answers.c;
  d.innerHTML = currQuest.answers.d;
}
//hide finalR
finalR.style.display = "none"
//chackanswer point system
function checkAnswer(selectedOption) {
  //I had to put this const here becauce it didn't work otherwise
  const currQuest = myQuiz[currQnum];
  //give point if correct
  if (selectedOption === currQuest.correctAnswer) {
    poeng += 1;
    console.log("riktig: " + poeng);
  } else {
    console.log("feil: " + poeng);
  }

  currQnum++;

  if (currQnum < myQuiz.length) {
    loadQuestion();
  } else {
    finalAnswers()
  }
}
//final answer gives you the final results
function finalAnswers(){
  let feil = 10 - poeng
  hiding.style.display = "none"
  finalR.style.display = "block"
  result.innerHTML = "%" + poeng + "0"
  wrong.innerHTML = "Du har " + feil + " feil av 10"
  right.innerHTML = "Du har " + poeng + " riktig av 10"
}

// Start the quiz

loadQuestion();


  //dropdown box code, code for the dropdown effect for the info boxes
  function droptext(downID) {
    let dropElement = document.getElementById(downID + "drop");
  
    // Close all dropdowns
    const allDropdowns = document.querySelectorAll('.dropdown-content');
    allDropdowns.forEach(dropdown => {
      if (dropdown.id !== downID + "drop") {
        dropdown.style.display = "none";
      }
    });
  
    // Toggle the clicked dropdown
    if (dropElement.style.display === "block") {
      dropElement.style.display = "none";
    } else {
      dropElement.style.display = "block";
    }
  }