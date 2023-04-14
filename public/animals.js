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
// Questions on Animals and Nature
const questions = [
    {
      id: 1,
      question: "What type of animal is the largest primate in the world?",
      options: {
        A: "Orangutan",
        B: "Gorilla",
        C: "Chimpanzee",
        D: "Baboon"
      },
      answer: "Gorilla"
    },
    {
      id: 2,
      question: "What type of bird is the largest living bird in the world?",
      options: {
        A: "Emu",
        B: "Ostrich",
        C: "Condor",
        D: "Albatross"
      },
      answer: "Ostrich"
    },
    {
      id: 3,
      question: "What type of animal is known for its ability to change its skin color?",
      options: {
        A: "Octopus",
        B: "Chameleon",
        C: "Gecko",
        D: "Iguana"
      },
      answer: "Chameleon"
    },
    {
      id: 4,
      question: "What type of animal is the slowest mammal in the world?",
      options: {
        A: "Sloth",
        B: "Panda",
        C: "Koala",
        D: "Armadillo"
      },
      answer: "Sloth"
    },
    {
      id: 5,
      question: "What type of animal is the largest land animal in the world?",
      options: {
        A: "Hippopotamus",
        B: "Rhino",
        C: "Giraffe",
        D: "Elephant"
      },
      answer: "Elephant"
    },
    {
      id: 6,
      question: "What type of animal is the only mammal that can fly?",
      options: {
        A: "Bat",
        B: "Pterodactyl",
        C: "Butterfly",
        D: "Eagle"
      },
      answer: "Bat"
    },
    {
      id: 7,
      question: "What type of animal is the fastest land animal in the world?",
      options: {
        A: "Cheetah",
        B: "Lion",
        C: "Leopard",
        D: "Tiger"
      },
      answer: "Cheetah"
    },
    {
      id: 8,
      question: "What type of bird is known for its distinctive long beak?",
      options: {
        A: "Pelican",
        B: "Toucan",
        C: "Flamingo",
        D: "Eagle"
      },
      answer: "Toucan"
    },
    {
      id: 9,
      question: "What type of animal is the only marsupial native to North America?",
      options: {
        A: "Kangaroo",
        B: "Wallaby",
        C: "Koala",
        D: "Opossum"
      },
      answer: "Opossum"
    },
    {
      id: 10,
      question: "What type of animal is the largest reptile in the world?",
      options: {
        A: "Iguana",
        B: "Crocodile",
        C: "Lizard",
        D: "Turtle"
      },
      answer: "Crocodile"
    },
    {
      id: 11,
      question: "What type of animal is the national symbol of Australia?",
      options: {
        A: "Kangaroo",
        B: "Koala",
        C: "Emu",
        D: "Platypus"
      },
      answer: "Kangaroo"
    },
    {
    id: 12,
    question: "What type of animal is the only animal that can survive in the wilds of Antarctica?",
    options: {
    A: "Penguin",
    B: "Polar Bear",
    C: "Walrus",
    D: "Seal"
    },
    answer: "Penguin"
    },
    {
    id: 13,
    question: "What type of animal is known for its unique stripes?",
    options: {
    A: "Zebra",
    B: "Giraffe",
    C: "Horse",
    D: "Donkey"
    },
    answer: "Zebra"
    },
    {
    id: 14,
    question: "What type of animal is known for its slow movements and tough shell?",
    options: {
    A: "Tortoise",
    B: "Snail",
    C: "Slug",
    D: "Beetle"
    },
    answer: "Tortoise"
    },
    {
    id: 15,
    question: "What type of animal is known for its ability to hibernate for long periods of time?",
    options: {
    A: "Hedgehog",
    B: "Bear",
    C: "Squirrel",
    D: "Chipmunk"
    },
    answer: "Bear"
    },
    {
    id: 16,
    question: "What type of animal is known for its distinctive black and white coloring?",
    options: {
    A: "Penguin",
    B: "Zebra",
    C: "Cow",
    D: "Horse"
    },
    answer: "Penguin"
    },
    {
    id: 17,
    question: "What type of animal is known for its ability to camouflage itself in its surroundings?",
    options: {
    A: "Chameleon",
    B: "Lizard",
    C: "Gecko",
    D: "Iguana"
    },
    answer: "Chameleon"
    },
    {
    id: 18,
    question: "What type of animal is known for its ability to spin webs?",
    options: {
    A: "Ant",
    B: "Fly",
    C: "Spider",
    D: "Wasp"
    },
    answer: "Spider"
    },
    {
    id: 19,
    question: "What type of animal is known for its ability to glide through the air?",
    options: {
    A: "Bat",
    B: "Bird",
    C: "Butterfly",
    D: "Flying Squirrel"
    },
    answer: "Flying Squirrel"
    },
    {
    id: 20,
    question: "What type of animal is known for its ability to produce honey?",
    options: {
    A: "Bee",
    B: "Butterfly",
    C: "Wasp",
    D: "Ant"
    },
    answer: "Bee"
    },
    {
    id: 21,
    question: "What type of animal is known for its ability to live in both water and land?",
    options: {
    A: "Fish",
    B: "Turtle",
    C: "Frog",
    D: "Crocodile"
    },
    answer: "Turtle"
    },
    {
    id: 22,
    question: "What type of animal is known for its ability to regenerate its limbs?",
    options: {
    A: "Starfish",
    B: "Octopus",
    C: "Crab",
    D: "Lobster"
    },
    answer: "Starfish"
    },
    {
    id: 23,
    question: "What type of animal is known for its long neck and spots?",
    options: {
    A: "Giraffe",
    B: "Horse",
    C: "Deer",
    D: "Zebra"
    },
    answer: "Giraffe"
    },
    {
    id: 24,
    question: "What type of animal is known for its ability to change its color to match its surroundings?",
    options: {
    A: "Frog",
    B: "Snake",
    C: "Lizard",
    D: "Chameleon"
    },
    answer: "Chameleon"
    },
    {
    id: 25,
    question: "What type of animal is known for its ability to climb trees?",
    options: {
    A: "Squirrel",
    B: "Raccoon",
    C: "Monkey",
    D: "Bear"
    },
    answer: "Monkey"
    }
];

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