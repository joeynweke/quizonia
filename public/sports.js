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
        question: "Who is the only athlete to have won Olympic gold medals in both the 100 meters and the long jump?",
        options: {
        A: "Usain Bolt",
        B: "Jesse Owens",
        C: "Carl Lewis",
        D: "Michael Johnson"
        },
        answer: "Carl Lewis"
        },
        
        {
        id: 2,
        question: "What is the only country to have played in every soccer World Cup since its inception in 1930?",
        options: {
        A: "Brazil",
        B: "Germany",
        C: "Italy",
        D: "Argentina"
        },
        answer: "Brazil"
        },
        
        {
        id: 3,
        question: "What sport was played by NASA astronauts on the moon?",
        options: {
        A: "Golf",
        B: "Tennis",
        C: "Basketball",
        D: "Volleyball"
        },
        answer: "Golf"
        },
        
        {
        id: 4,
        question: "Which NFL team won the first Super Bowl in 1967?",
        options: {
        A: "Green Bay Packers",
        B: "New York Jets",
        C: "Kansas City Chiefs",
        D: "Baltimore Colts"
        },
        answer: "Green Bay Packers"
        },
        
        {
        id: 5,
        question: "What is the oldest professional football club in the world?",
        options: {
        A: "Sheffield FC",
        B: "Notts County",
        C: "Arsenal FC",
        D: "Liverpool FC"
        },
        answer: "Sheffield FC"
        },
        
        {
        id: 6,
        question: "Who is the only boxer to have won world titles in five weight classes?",
        options: {
        A: "Manny Pacquiao",
        B: "Floyd Mayweather Jr.",
        C: "Sugar Ray Leonard",
        D: "Oscar De La Hoya"
        },
        answer: "Manny Pacquiao"
        },
        
        {
        id: 7,
        question: "What is the name of the international governing body for the sport of squash?",
        options: {
        A: "World Squash Federation",
        B: "International Squash Association",
        C: "Squash Racquets Association",
        D: "Squash Players Association"
        },
        answer: "World Squash Federation"
        },
        
        {
        id: 8,
        question: "What is the name of the only horse to have won the Triple Crown with an undefeated record?",
        options: {
        A: "Seattle Slew",
        B: "Secretariat",
        C: "American Pharoah",
        D: "Justify"
        },
        answer: "Justify"
        },
        
        {
        id: 9,
        question: "What is the name of the annual international rugby union competition contested by England, France, Ireland, Italy, Scotland, and Wales?",
        options: {
        A: "Six Nations",
        B: "Tri-Nations",
        C: "Rugby Championship",
        D: "Bledisloe Cup"
        },
        answer: "Six Nations"
        },
        {
            id: 10,
            question: "Who was the first woman to win a Nobel Prize?",
            options: {
            A: "Marie Curie",
            B: "Rosalind Franklin",
            C: "Dorothy Crowfoot Hodgkin",
            D: "Barbara McClintock"
            },
            answer: "Marie Curie"
            },
            {
                id: 11,
                question: "Who was the first woman to win a Nobel Prize?",
                options: {
                A: "Marie Curie",
                B: "Rosalind Franklin",
                C: "Dorothy Crowfoot Hodgkin",
                D: "Barbara McClintock"
                },
                answer: "Marie Curie"
                },
                {
                id: 12,
                question: "What is the name of the first cloned mammal?",
                options: {
                A: "Dolly",
                B: "Fiona",
                C: "Molly",
                D: "Lola"
                },
                answer: "Dolly"
                },
                {
                id: 13,
                question: "What is the largest planet in our solar system?",
                options: {
                A: "Saturn",
                B: "Neptune",
                C: "Jupiter",
                D: "Uranus"
                },
                answer: "Jupiter"
                },
                {
                id: 14,
                question: "What was the first video game ever made?",
                options: {
                A: "Pong",
                B: "Tetris",
                C: "Space Invaders",
                D: "Pac-Man"
                },
                answer: "Pong"
                },
                {
                id: 15,
                question: "Who is considered the father of modern computing?",
                options: {
                A: "Alan Turing",
                B: "Charles Babbage",
                C: "Steve Jobs",
                D: "Bill Gates"
                },
                answer: "Alan Turing"
                },
                {
                id: 16,
                question: "What is the smallest country in the world?",
                options: {
                A: "Vatican City",
                B: "Monaco",
                C: "Nauru",
                D: "Tuvalu"
                },
                answer: "Vatican City"
                },
                {
                id: 17,
                question: "Who invented the World Wide Web?",
                options: {
                A: "Tim Berners-Lee",
                B: "Steve Jobs",
                C: "Bill Gates",
                D: "Mark Zuckerberg"
                },
                answer: "Tim Berners-Lee"
                },
                {
                id: 18,
                question: "What is the highest mountain in Africa?",
                options: {
                A: "Mount Kilimanjaro",
                B: "Mount Everest",
                C: "Mount Denali",
                D: "Mount McKinley"
                },
                answer: "Mount Kilimanjaro"
                },
                {
                id: 19,
                question: "Who wrote the book '1984'?",
                options: {
                A: "George Orwell",
                B: "J.D. Salinger",
                C: "Ernest Hemingway",
                D: "F. Scott Fitzgerald"
                },
                answer: "George Orwell"
                },
                {
                id: 20,
                question: "What is the capital city of Australia?",
                options: {
                A: "Sydney",
                B: "Melbourne",
                C: "Brisbane",
                D: "Canberra"
                },
                answer: "Canberra"
                },

                {
                    id: 21,
                    question: "What is the term for the fear of long words?",
                    options: {
                    A: "Hippopotomonstrosesquipedaliophobia",
                    B: "Sesquipedalophobia",
                    C: "Glossophobia",
                    D: "Arachibutyrophobia"
                    },
                    answer: "Hippopotomonstrosesquipedaliophobia"
                    },
                    
                    {
                    id: 22,
                    question: "What is the scientific term for the study of fingerprints?",
                    options: {
                    A: "Dactylography",
                    B: "Dermatoglyphics",
                    C: "Cheiloscopy",
                    D: "Trichology"
                    },
                    answer: "Dermatoglyphics"
                    },
                    
                    {
                    id: 23,
                    question: "Which country is home to the world's smallest mammal, the bumblebee bat?",
                    options: {
                    A: "Thailand",
                    B: "Malaysia",
                    C: "Indonesia",
                    D: "Philippines"
                    },
                    answer: "Thailand"
                    },
                    
                    {
                    id: 24,
                    question: "What is the name for the fear of palindromes?",
                    options: {
                    A: "Aibohphobia",
                    B: "Ergophobia",
                    C: "Nosophobia",
                    D: "Triskaidekaphobia"
                    },
                    answer: "Aibohphobia"
                    },
                    
                    {
                    id: 25,
                    question: "What is the only continent that is also a country?",
                    options: {
                    A: "Europe",
                    B: "Asia",
                    C: "Australia",
                    D: "South America"
                    },
                    answer: "Australia"
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