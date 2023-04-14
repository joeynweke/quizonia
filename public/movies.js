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
        question: "In the movie 'The Truman Show', what is Truman Burbank's job?",
        options: {
        A: "Weatherman",
        B: "Insurance salesman",
        C: "Car salesman",
        D: "Banker"
        },
        answer: "Insurance salesman"
        },
        
        {
        id: 2,
        question: "What is the name of the fictional African country that is the setting for the movie 'Black Panther'?",
        options: {
        A: "Wakanda",
        B: "Zamunda",
        C: "Nigeria",
        D: "Sokovia"
        },
        answer: "Wakanda"
        },
        
        {
        id: 3,
        question: "What is the name of the character played by Tom Cruise in the movie 'Edge of Tomorrow'?",
        options: {
        A: "Bill Cage",
        B: "John Anderton",
        C: "Jack Reacher",
        D: "Ethan Hunt"
        },
        answer: "Bill Cage"
        },
        
        {
        id: 4,
        question: "What is the name of the actor who played Dracula in the 1992 movie 'Bram Stoker's Dracula'?",
        options: {
        A: "Gary Oldman",
        B: "Anthony Hopkins",
        C: "Keanu Reeves",
        D: "Winona Ryder"
        },
        answer: "Gary Oldman"
        },
        
        {
        id: 5,
        question: "What is the name of the character played by Charlize Theron in the movie 'Mad Max: Fury Road'?",
        options: {
        A: "Imperator Furiosa",
        B: "Max Rockatansky",
        C: "Nux",
        D: "Immortan Joe"
        },
        answer: "Imperator Furiosa"
        },
        
        {
        id: 6,
        question: "What is the name of the computer program that causes chaos in the movie 'The Matrix'?",
        options: {
        A: "Neo",
        B: "Morpheus",
        C: "Trinity",
        D: "Agent Smith"
        },
        answer: "Agent Smith"
        },
        
        {
        id: 7,
        question: "What is the name of the character played by Benicio Del Toro in the movie 'Sicario'?",
        options: {
        A: "Alejandro Gillick",
        B: "Matt Graver",
        C: "Kate Macer",
        D: "Teddy"
        },
        answer: "Alejandro Gillick"
        },
        
        {
        id: 8,
        question: "What is the name of the actress who played Princess Leia in the 'Star Wars' movies?",
        options: {
        A: "Natalie Portman",
        B: "Carrie Fisher",
        C: "Daisy Ridley",
        D: "Felicity Jones"
        },
        answer: "Carrie Fisher"
        },
        
        {
        id: 9,
        question: "In the movie 'Inception', what is the name of the device used to enter people's dreams?",
        options: {
        A: "Dream Weaver",
        B: "Dream Catcher",
        C: "Dream Extractor",
        D: "Dream Machine"
        },
        answer: "Dream Machine"
        },
        {
            id: 10,
            question: "In the movie 'The Shawshank Redemption', what was the occupation of the character Brooks Hatlen?",
            options: {
            A: "Prison Guard",
            B: "Prisoner",
            C: "Janitor",
            D: "Cook"
            },
            answer: "Prison Librarian"
            },
    {
        id: 11,
        question: "Who directed the movie 'Jurassic Park'?",
        options: {
        A: "Steven Spielberg",
        B: "James Cameron",
        C: "Christopher Nolan",
        D: "Quentin Tarantino"
        },
        answer: "Steven Spielberg"
        },
        
        {
        id: 12,
        question: "What is the highest-grossing movie of all time?",
        options: {
        A: "Avengers: Endgame",
        B: "Avatar",
        C: "Titanic",
        D: "Star Wars: The Force Awakens"
        },
        answer: "Avatar"
        },
        
        {
        id: 13,
        question: "What is the name of the protagonist in the movie 'The Matrix'?",
        options: {
        A: "John Wick",
        B: "Neo",
        C: "Trinity",
        D: "Morpheus"
        },
        answer: "Neo"
        },
        
        {
        id: 14,
        question: "Who played the role of the Joker in the 2008 movie 'The Dark Knight'?",
        options: {
        A: "Jared Leto",
        B: "Heath Ledger",
        C: "Jack Nicholson",
        D: "Mark Hamill"
        },
        answer: "Heath Ledger"
        },
        
        {
        id: 15,
        question: "What is the name of the main character in the movie 'Forrest Gump'?",
        options: {
        A: "Forrest Gump",
        B: "Bubba Blue",
        C: "Jenny Curran",
        D: "Lieutenant Dan"
        },
        answer: "Forrest Gump"
        },
        
        {
        id: 16,
        question: "Which actress won an Oscar for her performance in the movie 'La La Land'?",
        options: {
        A: "Jennifer Lawrence",
        B: "Meryl Streep",
        C: "Emma Stone",
        D: "Natalie Portman"
        },
        answer: "Emma Stone"
        },
        
        {
        id: 17,
        question: "Who played the role of Rocky Balboa in the 'Rocky' movie series?",
        options: {
        A: "Sylvester Stallone",
        B: "Arnold Schwarzenegger",
        C: "Bruce Willis",
        D: "Dwayne Johnson"
        },
        answer: "Sylvester Stallone"
        },
        
        {
        id: 18,
        question: "What is the name of the robot in the movie 'WALL-E'?",
        options: {
        A: "EVE",
        B: "R2-D2",
        C: "BB-8",
        D: "C-3PO"
        },
        answer: "WALL-E"
        },
        
        {
        id: 19,
        question: "What is the name of the character played by Will Smith in the movie 'Men in Black'?",
        options: {
        A: "Agent J",
        B: "Agent K",
        C: "Agent L",
        D: "Agent M"
        },
        answer: "Agent J"
        },
        {
            id: 20,
            question: "Who directed the 1975 movie Jaws?",
            options: {
            A: "Steven Spielberg",
            B: "George Lucas",
            C: "Francis Ford Coppola",
            D: "Martin Scorsese"
            },
            answer: "Steven Spielberg"
            },
            {
                id: 21,
                question: "In the movie 'Her', who voices the AI operating system named Samantha?",
                options: {
                A: "Scarlett Johansson",
                B: "Emma Stone",
                C: "Jennifer Lawrence",
                D: "Anne Hathaway"
                },
                answer: "Scarlett Johansson"
                },
                
                {
                id: 22,
                question: "What is the name of the character played by Clint Eastwood in the movie 'Dirty Harry'?",
                options: {
                A: "Harry Callahan",
                B: "Frank Bullitt",
                C: "John McClane",
                D: "John Rambo"
                },
                answer: "Harry Callahan"
                },
                
                {
                id: 23,
                question: "Who directed the 2019 movie 'Parasite', which won Best Picture at the Academy Awards?",
                options: {
                A: "Bong Joon-ho",
                B: "Park Chan-wook",
                C: "Kim Jee-woon",
                D: "Hong Sang-soo"
                },
                answer: "Bong Joon-ho"
                },
                
                {
                id: 24,
                question: "What is the name of the hobbit played by Elijah Wood in 'The Lord of the Rings' trilogy?",
                options: {
                A: "Frodo Baggins",
                B: "Bilbo Baggins",
                C: "Samwise Gamgee",
                D: "Meriadoc Brandybuck"
                },
                answer: "Frodo Baggins"
                },
                
                {
                id: 25,
                question: "Which of the following actors did NOT play James Bond in an official movie of the franchise?",
                options: {
                A: "Pierce Brosnan",
                B: "Sean Connery",
                C: "Daniel Craig",
                D: "Roger Moore"
                },
                answer: "Jason Statham"
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