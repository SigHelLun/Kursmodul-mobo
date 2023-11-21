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
    }
  ];
  const hiding = document.getElementById("hideQ")
  const question = document.getElementById("Q");
  const a = document.getElementById("a");
  const b = document.getElementById("b");
  const c = document.getElementById("c");
  const d = document.getElementById("d");
  
  function start() {
    if (question.innerHTML === "") {
      hiding.style.display = "block"
      question.innerHTML = myQuiz[0].question;
      a.innerHTML = myQuiz[0].answers.a;
      b.innerHTML = myQuiz[0].answers.b;
      c.innerHTML = myQuiz[0].answers.c;
      d.innerHTML = myQuiz[0].answers.d;
    }
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
  