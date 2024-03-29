let quizNum = document.getElementById("quiz-number");
const timerDisplay = document.getElementById("timer");
let questionCount = document.getElementById("question-count");
let question = document.getElementById("question");
let questionWrap = document.getElementById("question-wrap");
let optionA = document.getElementById("option-a");
let optionB = document.getElementById("option-b");
let optionC = document.getElementById("option-c");
let optionD = document.getElementById("option-d");
let a1 = document.getElementById("a");
let b1 = document.getElementById("b");
let c1 = document.getElementById("c");
let d1 = document.getElementById("d");
let hide = document.getElementById("hide");
let startBtn = document.getElementById("start-btn");
let submit = document.getElementById("submit");
let timeUp = document.getElementById("time-up");
let seeMore = document.getElementById("see-more");
let timeUpCon = document.getElementById("time-up-con")
let seeScore = document.getElementById("see-score")


//question questions
const questions = [
    {
      id: 1,
      question: "Which Greek god was the king of the gods?",
      options: {
        A: "Apollo",
        B: "Zeus",
        C: "Hades",
        D: "Poseidon"
      },
      answer: "B"
    },
    {
      id: 2,
      question: "Who was the Roman goddess of love?",
      options: {
        A: "Athena",
        B: "Venus",
        C: "Artemis",
        D: "Hera"
      },
      answer: "B"
    },
    {
      id: 3,
      question: "Which mythological creature is half-man and half-horse?",
      options: {
        A: "Cyclops",
        B: "Minotaur",
        C: "Siren",
        D: "Centaur"
      },
      answer: "D"
    },
    {
      id: 4,
      question: "Who was the Greek god of the sun?",
      options: {
        A: "Apollo",
        B: "Zeus",
        C: "Hermes",
        D: "Helios"
      },
      answer: "D"
    },
    {
      id: 5,
      question: "Who was the Greek god of wine?",
      options: {
        A: "Ares",
        B: "Dionysus",
        C: "Hephaestus",
        D: "Hermes"
      },
      answer: "B"
    },
    {
      id: 6,
      question: "Which Greek god was the god of the sea?",
      options: {
        A: "Apollo",
        B: "Zeus",
        C: "Hades",
        D: "Poseidon"
      },
      answer: "D"
    },
    {
      id: 7,
      question: "Who was the Roman god of war?",
      options: {
        A: "Ares",
        B: "Mars",
        C: "Hephaestus",
        D: "Hermes"
      },
      answer: "B"
    },
    {
      id: 8,
      question: "Which creature in Greek mythology has snakes for hair?",
      options: {
        A: "Medusa",
        B: "Cerberus",
        C: "Chimera",
        D: "Sphinx"
      },
      answer: "A"
    },
    {
      id: 9,
      question: "Who was the Norse god of thunder?",
      options: {
        A: "Thor",
        B: "Odin",
        C: "Loki",
        D: "Balder"
      },
      answer: "A"
    },
    {
      id: 10,
      question: "Who was the Greek god of love?",
      options: {
        A: "Apollo",
        B: "Zeus",
        C: "Eros",
        D: "Poseidon"
      },
      answer: "C"
    },
    {
      id: 11,
      question: "Who was the Greek goddess of wisdom?",
      options: {
        A: "Athena",
        B: "Demeter",
        C: "Persephone",
        D: "Hestia"
      },
      answer: "A"
    },
    {
      id: 12,
      question: "Who was the Greek goddess of the hunt?",
      options: {
        A: "Artemis",
        B: "Hera",
        C: "Aphrodite",
        D: "Gaia"
        },
        answer: "A"
        },
        {
        id: 13,
        question: "Who was the Norse god of mischief?",
        options: {
        A: "Balder",
        B: "Odin",
        C: "Loki",
        D: "Thor"
        },
        answer: "C"
        },
        {
        id: 14,
        question: "Who was the Greek god of fire?",
        options: {
        A: "Apollo",
        B: "Hephaestus",
        C: "Ares",
        D: "Dionysus"
        },
        answer: "B"
        },
        {
        id: 15,
        question: "Which Greek hero killed the Minotaur?",
        options: {
        A: "Perseus",
        B: "Theseus",
        C: "Hercules",
        D: "Orpheus"
        },
        answer: "B"
        },
        {
        id: 16,
        question: "Who was the Greek goddess of agriculture?",
        options: {
        A: "Athena",
        B: "Demeter",
        C: "Persephone",
        D: "Hestia"
        },
        answer: "B"
        },
        {
        id: 17,
        question: "Who was the Roman goddess of wisdom?",
        options: {
        A: "Athena",
        B: "Demeter",
        C: "Minerva",
        D: "Hestia"
        },
        answer: "C"
        },
        {
        id: 18,
        question: "Which creature in Greek mythology had the head of a bull and the body of a man?",
        options: {
        A: "Cyclops",
        B: "Minotaur",
        C: "Siren",
        D: "Centaur"
        },
        answer: "B"
        },
        {
        id: 19,
        question: "Who was the Greek god of war?",
        options: {
        A: "Ares",
        B: "Apollo",
        C: "Hermes",
        D: "Hephaestus"
        },
        answer: "A"
        },
        {
        id: 20,
        question: "Who was the Greek god of the underworld?",
        options: {
        A: "Apollo",
        B: "Zeus",
        C: "Hades",
        D: "Poseidon"
        },
        answer: "C"
        },
        {
        id: 21,
        question: "Which Greek goddess was the goddess of the moon?",
        options: {
        A: "Athena",
        B: "Demeter",
        C: "Persephone",
        D: "Selene"
        },
        answer: "D"
        },
        {
        id: 22,
        question: "Who was the Greek god of the forge?",
        options: {
        A: "Apollo",
        B: "Zeus",
        C: "Hades",
        D: "Hephaestus"
        },
        answer: "D"
        },
        {
        id: 23,
        question: "Who was the Greek god of the vine?",
        options: {
        A: "Ares",
        B: "Dionysus",
        C: "Hephaestus",
        D: "Hermes"
        },
        answer: "B"
        },
        {
        id: 24,
        question: "Which Norse god was known for his thunderbolt and hammer?",
        options: {
        A: "Balder",
        B: "Odin",
        C: "Loki",
        D: "Thor"
        },
        answer: "D"
        },
        {
        id: 25,
        question: "Which Greek hero is known for his slaying of the Gorgon Medusa?",
        options: {
        A: "Perseus",
        B: "Theseus",
        C: "Hercules",
        D: "Orpheus"
        },
        answer: "A"
        },
    ]  

let answersTotal = questions.length;
let quizNumVal = quizNum.innerHTML = questions.length;
let questCountVal = questionCount.innerHTML = 1;



function showQuestion(a,b,c,d,questions) {
    
    let selected = '';
    let bool;
    let count = 0
    submit.innerHTML = 'Start'

    var blue = 'dodgerblue';
    var black = 'rgb(22,22,22)'

    a.onclick = () => {
        a.style.backgroundColor = blue;
        b.style.backgroundColor = black;
        c.style.backgroundColor = black;
        d.style.backgroundColor = black;
        selected = a1.innerHTML;
        questionWrap.className = 'question-wrap';
    }
    b.onclick = () => {
        b.style.backgroundColor = blue;
        a.style.backgroundColor = black;
        c.style.backgroundColor = black;
        d.style.backgroundColor = black;
        selected = b1.innerHTML;
        questionWrap.className = 'question-wrap';
        
    }
    c.onclick = () => {
        c.style.backgroundColor = blue;
        a.style.backgroundColor = black;
        b.style.backgroundColor = black;
        d.style.backgroundColor = black;
        selected = c1.innerHTML;
        questionWrap.className = 'question-wrap';
        
    }
    d.onclick = () => {
        d.style.backgroundColor = blue;
        a.style.backgroundColor = black;
        b.style.backgroundColor = black;
        c.style.backgroundColor = black;
        selected = d1.innerHTML;
        questionWrap.className = 'question-wrap';
        
    }
    
    
    let emptyArr = []
    function random(){
        if (emptyArr.length === questions.length) {
            //console.log("All numbers have been selected.");
            return;
          }
          let randomIndex;
          do {
            randomIndex = Math.floor(Math.random() * questions.length);
          } while (emptyArr.includes(questions[randomIndex]));
        
          emptyArr.push(questions[randomIndex]);
          //console.log(`Selected number: ${questions[randomIndex].id}`);
          
          question.innerHTML = questions[randomIndex].question;
            a1.innerHTML = questions[randomIndex].options.A;
            b1.innerHTML = questions[randomIndex].options.B;
            c1.innerHTML = questions[randomIndex].options.C;
            d1.innerHTML = questions[randomIndex].options.D;
            let answers = questions[randomIndex].answer;
            return randomIndex
        }


startBtn.onclick = () => {
    if(hide.className.includes('hide')){
        hide.classList.remove('hide')
        startBtn.classList.add('hide')
        submit.classList.remove('hide')

        // Set the initial time to 5 minutes (in milliseconds)
let time = 5 * 60 * 1000;

// Function to update the timer display
 // Start the timer
 const updateTimer = () => {
    // Calculate the minutes and seconds remaining
    let minutes = Math.floor(time / 60 / 1000);
    let seconds = Math.floor((time - minutes * 60 * 1000) / 1000);
  
    // Add a leading zero to the minutes and seconds if needed
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
  
    // Update the timer display
    timerDisplay.innerHTML = `${minutes}:${seconds} min`;
    
    //change mins to secs
    if(minutes === '00'){
      timerDisplay.innerHTML = `${minutes}:${seconds} sec`;
      timerDisplay.style.color = 'red'
    }
  };

       // Function to decrement the time remaining
  const decrementTime = () => {
    // Decrement the time by one second
    time -= 1000;
  
    // Update the timer display
    updateTimer();

    // display results in percentage
    function score() {
        let percentage = Math.round((count / answersTotal) * 100);
        const showPercent = () => {
            
            if(percentage <= 20){
                return 'Not a bad effort, but you can do better.'

            }
            else if(percentage <= 50){
                return 'Good effort, most of these questions are tricky.'
            }
            else if(percentage <= 99){
                return 'Awesome, you did a great job, some of these questions are tricky.'
            }
            else{
                return 'WOW, you are Amazing. you nailed it all.'
            }
        }
    
        
        
        timeUp.innerHTML = `<div><h1>${percentage}%</h1></div>
        <br>
        <div><h3 style="color: dodgerblue;">${showPercent()}</h3></div>
        <br>
        Your score is ${count}/${answersTotal}`;
        seeScore.innerHTML = 'Play again';
        
        if(seeScore.innerHTML = 'Play again') {
            seeScore.onclick = () => {
                location.href = '/index';
            }
        }
       }
    

    // If the time has reached 0, clear the interval and alert the user
    if (time <= 0) {
        clearInterval(intervalId);
        timeUpCon.classList.replace('hide','time-up')
        hide.classList.add('hide');
        submit.classList.add('hide');
        questions = []
        timeUp.innerHTML = 'Time is up';
        seeScore.onclick = () => score()
    }
  
  };

  var randomize = random()
            

  // Update the timer display for the first time
  const intervalId = setInterval(decrementTime, 1000);

        submit.innerHTML = 'Submit'
        //console.log(answers)
    }
        submit.addEventListener("click", (e) => {
            
           if(selected === ''){
               alert('please select one option');
               return;
           } else
           {
               if(selected === questions[randomize].answer){
                   count+=1
                   //console.log('correct',count)
               } else{
                   count = count
                   if(count <= 0){
                       count = 0
                   }
                   //console.log('fail',count)
                   
               }
               //console.log(selected, questions[randomize].answer)
               
           }
           
           a.style.backgroundColor = black;
           b.style.backgroundColor = black;
           c.style.backgroundColor = black;
           d.style.backgroundColor = black;
           
           randomize = random()           
           quizNum.innerHTML-= 1
           questionCount.innerHTML= questCountVal+=1;

           function score() {
            let percentage = Math.round((count / answersTotal) * 100);
            const showPercent = () => {
                
                if(percentage <= 20){
                    return 'Not a bad effort, but you can do better.'
    
                }
                else if(percentage <= 50){
                    return 'Good effort, most of these questions are tricky.'
                }
                else if(percentage <= 99){
                    return 'Awesome, you did a great job, some of these questions are tricky.'
                }
                else{
                    return 'WOW, you are Amazing. you nailed it all.'
                }
            }
        
            
            
            timeUp.innerHTML = `<div><h1>${percentage}%</h1></div>
            <br>
            <div><h3 style="color: dodgerblue;">${showPercent()}</h3></div>
            <br>
            Your score is ${count}/${answersTotal}`;
            seeScore.innerHTML = 'Play again';
            
            if(seeScore.innerHTML = 'Play again') {
                seeScore.onclick = () => {
                    location.href = '/index';
                }
            }
           }

   
           if(quizNum.innerHTML <= 0){
                let reply = 'Quiz completed!'
                timeUp.innerHTML = reply
               timeUpCon.classList.replace('hide','time-up')
               hide.classList.add('hide');
               submit.classList.add('hide');
               questions = [];
               seeScore.onclick = () => score()
           }
           selected = '';
           questionWrap.className = 'animate';
       })
       questionWrap.className = 'animate';
    }
    
}

showQuestion(optionA,optionB,optionC,optionD,questions)