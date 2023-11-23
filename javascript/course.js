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
      question: "Kva heite AMD og INTEL sinn CPU socket standard?",
      answers: {
        a: 'AM4 & zen3',
        b: 'Intel og AMD CPU',
        c: 'AM LGA',
        d: 'LGA 1200'
      },
      correctAnswer: 'c'
    },
    {
      question: "Kva er Hovudkorte sinn oppgåve?",
      answers: {
        a: 'Å gi strøym til CPU-en',
        b: 'Gi strøym til komponentar i PC-en',
        c: 'Å koble saman alle CPU-ane',
        d: 'Sette opp kommunikasjon mellom alle komponentane i PC-en med MB som medium'
      },
      correctAnswer: 'c'
    },
    
  ];
  
  const SrtBtn = document.getElementById("START")
  const hiding = document.getElementById("hideQ")
  const question = document.getElementById("Q");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");
  let poeng = 0;
  let P1;
  let qNext;
 
  const Q1 = SrtBtn.addEventListener("click", start);


  function start() {
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
    };
  };
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
    }
    function q3(){
      question.innerHTML = myQuiz[2].question;
      a.innerHTML = myQuiz[2].answers.a;
      b.innerHTML = myQuiz[2].answers.b;
      c.innerHTML = myQuiz[2].answers.c;
      d.innerHTML = myQuiz[2].answers.d;
    }

  //dropdown box code
  function droptext(downID) {
    let dropElement = document.getElementById(downID + "drop");
  
    if (dropElement.style.display === "block") {
      dropElement.style.display = "none";
    } else {
      dropElement.style.display = "block";
    }
  }
  