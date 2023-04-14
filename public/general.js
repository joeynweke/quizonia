
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
let questions = [
  {
    id: 1,
    question: "What is the largest country in the world by land area?",
    options: {
    A: "Russia",
    B: "Canada",
    C: "China",
    D: "United States"
    },
    answer: "Russia"
    },
    {
    id: 2,
    question: "What is the largest ocean in the world?",
    options: {
    A: "Pacific Ocean",
    B: "Atlantic Ocean",
    C: "Indian Ocean",
    D: "Arctic Ocean"
    },
    answer: "Pacific Ocean"
    },
    {
    id: 3,
    question: "What is the smallest continent in the world?",
    options: {
    A: "Australia",
    B: "Antarctica",
    C: "Europe",
    D: "Africa"
    },
    answer: "Australia"
    },
    {
    id: 4,
    question: "What is the capital of South Africa?",
    options: {
    A: "Pretoria",
    B: "Johannesburg",
    C: "Cape Town",
    D: "Durban"
    },
    answer: "Pretoria"
    },
    {
    id: 5,
    question: "What is the currency of Japan?",
    options: {
    A: "Yen",
    B: "Dollar",
    C: "Euro",
    D: "Pound"
    },
    answer: "Yen"
    },
    {
    id: 6,
    question: "What is the largest desert in the world?",
    options: {
    A: "Sahara Desert",
    B: "Gobi Desert",
    C: "Arabian Desert",
    D: "Antarctic Desert"
    },
    answer: "Antarctic Desert"
    },
    {
    id: 7,
    question: "What is the highest waterfall in the world?",
    options: {
    A: "Angel Falls",
    B: "Niagara Falls",
    C: "Victoria Falls",
    D: "Iguazu Falls"
    },
    answer: "Angel Falls"
    },
    {
    id: 8,
    question: "What is the smallest country in the world by land area?",
    options: {
    A: "Vatican City",
    B: "Monaco",
    C: "Nauru",
    D: "San Marino"
    },
    answer: "Vatican City"
    },
    {
    id: 9,
    question: "What is the largest river in the world by volume?",
    options: {
    A: "Amazon River",
    B: "Nile River",
    C: "Yangtze River",
    D: "Mississippi River"
    },
    answer: "Amazon River"
    },
    {
    id: 10,
    question: "What is the largest lake in the world by surface area?",
    options: {
    A: "Caspian Sea",
    B: "Lake Superior",
    C: "Lake Victoria",
    D: "Lake Huron"
    },
    answer: "Caspian Sea"
    },
    {
    id: 11,
    question: "What is the capital of Russia?",
    options: {
    A: "Moscow",
    B: "Saint Petersburg",
    C: "Novosibirsk",
    D: "Yekaterinburg"
    },
    answer: "Moscow"
    },
    {
      id: 12,
      question: "What is the capital city of Spain?",
      options: {
      A: "Barcelona",
      B: "Madrid",
      C: "Seville",
      D: "Valencia"
      },
      answer: "Madrid"
      },
      
      {
      id: 13,
      question: "What is the largest desert in the world?",
      options: {
      A: "Sahara Desert",
      B: "Arabian Desert",
      C: "Gobi Desert",
      D: "Antarctica"
      },
      answer: "Antarctica"
      },
      
      {
      id: 14,
      question: "What is the name of the smallest planet in our solar system?",
      options: {
      A: "Venus",
      B: "Mars",
      C: "Mercury",
      D: "Neptune"
      },
      answer: "Mercury"
      },
      
      {
      id: 15,
      question: "What is the largest animal on Earth?",
      options: {
      A: "Blue Whale",
      B: "Elephant",
      C: "Giraffe",
      D: "Hippopotamus"
      },
      answer: "Blue Whale"
      },
      
      {
      id: 16,
      question: "Who is credited with inventing the telephone?",
      options: {
      A: "Alexander Graham Bell",
      B: "Thomas Edison",
      C: "Nikola Tesla",
      D: "Guglielmo Marconi"
      },
      answer: "Alexander Graham Bell"
      },
      
      {
      id: 17,
      question: "What is the highest waterfall in the world?",
      options: {
      A: "Angel Falls",
      B: "Niagara Falls",
      C: "Victoria Falls",
      D: "Iguaçu Falls"
      },
      answer: "Angel Falls"
      },
      
      {
      id: 18,
      question: "What is the name of the largest ocean on Earth?",
      options: {
      A: "Indian Ocean",
      B: "Atlantic Ocean",
      C: "Arctic Ocean",
      D: "Pacific Ocean"
      },
      answer: "Pacific Ocean"
      },
      
      {
      id: 19,
      question: "What is the name of the scientist who developed the theory of relativity?",
      options: {
      A: "Isaac Newton",
      B: "Albert Einstein",
      C: "Galileo Galilei",
      D: "Charles Darwin"
      },
      answer: "Albert Einstein"
      },
      
      {
      id: 20,
      question: "What is the smallest country in the world?",
      options: {
      A: "Monaco",
      B: "Nauru",
      C: "Vatican City",
      D: "San Marino"
      },
      answer: "Vatican City"
      },
      
      {
      id: 21,
      question: "Who wrote the famous novel '1984'?",
      options: {
      A: "Aldous Huxley",
      B: "George Orwell",
      C: "J.D. Salinger",
      D: "Ernest Hemingway"
      },
      answer: "George Orwell"
      },
      {
        id: 22,
        question: "What is the name of the process used by plants to convert sunlight into energy?",
        options: {
        A: "Photosynthesis",
        B: "Respiration",
        C: "Transpiration",
        D: "Chlorophyll"
        },
        answer: "Photosynthesis"
        },
        
        {
        id: 23,
        question: "What is the name of the largest mammal in the world?",
        options: {
        A: "Elephant",
        B: "Blue Whale",
        C: "Giraffe",
        D: "Hippopotamus"
        },
        answer: "Blue Whale"
        },
        
        {
        id: 24,
        question: "What is the name of the theory that explains the origin of the universe?",
        options: {
        A: "The Big Bang Theory",
        B: "The Theory of Relativity",
        C: "The Theory of Evolution",
        D: "The Quantum Theory"
        },
        answer: "The Big Bang Theory"
        },
        
        {
        id: 25,
        question: "What is the name of the largest organ in the human body?",
        options: {
        A: "Liver",
        B: "Heart",
        C: "Lungs",
        D: "Skin"
        },
        answer: "Skin"
        }
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
