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

const hiding = document.getElementById("hideQ");
const questionElem = document.getElementById("Q");
const aElem = document.getElementById("a");
const bElem = document.getElementById("b");
const cElem = document.getElementById("c");
const dElem = document.getElementById("d");

let poeng = 0;
let currQnum = 0;

function loadQuestion() {
  const currentQuestion = myQuiz[currQnum];
  questionElem.innerHTML = currentQuestion.question;
  aElem.innerHTML = currentQuestion.answers.a;
  bElem.innerHTML = currentQuestion.answers.b;
  cElem.innerHTML = currentQuestion.answers.c;
  dElem.innerHTML = currentQuestion.answers.d;
}

function checkAnswer(selectedOption) {
  const currentQuestion = myQuiz[currQnum];

  if (selectedOption === currentQuestion.correctAnswer) {
    poeng += 1;
    console.log("Correct! Score: " + poeng);
  } else {
    console.log("Incorrect! Score: " + poeng);
  }

  currQnum++;

  if (currQnum < myQuiz.length) {
    loadQuestion();
  } else {
    hiding.style.display = "none";
  }
}

// Start the quiz
hiding.style.display = "block";
loadQuestion();

/*   function start() {
      hiding.style.display = "block"
      question.innerHTML = myQuiz[0].question;
      a.innerHTML = myQuiz[0].answers.a;
      b.innerHTML = myQuiz[0].answers.b;
      c.innerHTML = myQuiz[0].answers.c;
      d.innerHTML = myQuiz[0].answers.d;
      
      P1 = a.addEventListener("click", A1)
      qNext = a.addEventListener("click", q2) ||
       b.addEventListener("click", q2) || 
       c.addEventListener("click", q2) || 
       d.addEventListener("click", q2);
    };
    function A1(){
      if(a.innerHTML === myQuiz[0].answers.a){
      poeng += 1
      console.log(poeng)
    };}
    function A2() {
      if(c.innerHTML === myQuiz[1].answers.c){
        poeng += 1
        console.log(poeng)
      }      
    }

    function q2(){
      question.innerHTML = myQuiz[1].question;
      a.innerHTML = myQuiz[1].answers.a;
      b.innerHTML = myQuiz[1].answers.b;
      c.innerHTML = myQuiz[1].answers.c;
      d.innerHTML = myQuiz[1].answers.d;
      qNext = a.addEventListener("click", q3) ||
      b.addEventListener("click", q3) || 
      c.addEventListener("click", q3) || 
      d.addEventListener("click", q3);
      P1 = c.addEventListener("click", A2)
    }
    function q3(){
      question.innerHTML = myQuiz[2].question;
      a.innerHTML = myQuiz[2].answers.a;
      b.innerHTML = myQuiz[2].answers.b;
      c.innerHTML = myQuiz[2].answers.c;
      d.innerHTML = myQuiz[2].answers.d;
    } */
 





  //dropdown box code
  function droptext(downID) {
    let dropElement = document.getElementById(downID + "drop");
  
    if (dropElement.style.display === "block") {
      dropElement.style.display = "none";
    } else {
      dropElement.style.display = "block";
    }
  }
  