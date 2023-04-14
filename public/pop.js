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
        question: "What was the name of Lady Gaga's first album, released in 2008?",
        options: {
        A: "The Fame",
        B: "Born This Way",
        C: "Artpop",
        D: "Joanne"
        },
        answer: "The Fame"
        },
        {
        id: 2,
        question: "What is the real name of the singer Halsey?",
        options: {
        A: "Ashley Nicolette Frangipane",
        B: "Ashley Marie Lewis",
        C: "Ashley Nicole Roberts",
        D: "Ashley Victoria Beckham"
        },
        answer: "Ashley Nicolette Frangipane"
        },
        {
        id: 3,
        question: "Which British singer-songwriter released the album '21' in 2011, which features the hit songs 'Rolling in the Deep' and 'Someone Like You'?",
        options: {
        A: "Adele",
        B: "Jessie J",
        C: "Rita Ora",
        D: "Dua Lipa"
        },
        answer: "Adele"
        },
        {
        id: 4,
        question: "What is the name of the pop group that includes members Niall Horan, Harry Styles, Louis Tomlinson, Liam Payne, and formerly Zayn Malik?",
        options: {
        A: "The Vamps",
        B: "5 Seconds of Summer",
        C: "One Direction",
        D: "Little Mix"
        },
        answer: "One Direction"
        },
        {
        id: 5,
        question: "Which American singer released the album 'Lover' in 2019, which features the hit songs 'ME!' and 'You Need to Calm Down'?",
        options: {
        A: "Taylor Swift",
        B: "Ariana Grande",
        C: "Selena Gomez",
        D: "Miley Cyrus"
        },
        answer: "Taylor Swift"
        },
        {
        id: 6,
        question: "What is the name of the Canadian singer who released the album 'Emotion' in 2015, which features the hit song 'Run Away with Me'?",
        options: {
        A: "Carly Rae Jepsen",
        B: "Avril Lavigne",
        C: "Shania Twain",
        D: "Celine Dion"
        },
        answer: "Carly Rae Jepsen"
        },
        {
        id: 7,
        question: "Which Australian singer-songwriter released the album 'Treat Myself' in 2020, which features the hit song 'NO EXCUSES'?",
        options: {
        A: "Sia",
        B: "Tones and I",
        C: "Delta Goodrem",
        D: "Meghan Trainor"
        },
        answer: "Meghan Trainor"
        },
        {
        id: 8,
        question: "What is the name of the South Korean boy band that released the album 'Map of the Soul: 7' in 2020, which features the hit song 'ON'?",
        options: {
        A: "BTS",
        B: "EXO",
        C: "NCT",
        D: "GOT7"
        },
        answer: "BTS"
        },
        {
id: 9,
question: "Which Canadian singer-songwriter released the hit album 'Jagged Little Pill' in 1995, which includes the popular songs 'Ironic' and 'You Oughta Know'?",
options: {
A: "Shania Twain",
B: "Celine Dion",
C: "Alanis Morissette",
D: "Sarah McLachlan"
},
answer: "Alanis Morissette"
},

{
id: 10,
question: "Which pop star is known for her meat dress and hit songs such as 'Bad Romance' and 'Poker Face'?",
options: {
A: "Britney Spears",
B: "Madonna",
C: "Katy Perry",
D: "Lady Gaga"
},
answer: "Lady Gaga"
},

{
id: 11,
question: "Who is the English singer-songwriter and actor, known for his role as 'Kipps' in the musical 'Half a Sixpence' and his hit song 'Healing'?",
options: {
A: "Harry Styles",
B: "Ed Sheeran",
C: "Tom Holland",
D: "Alex Brightman"
},
answer: "Alex Brightman"
},

{
id: 12,
question: "What is the name of the American pop rock band known for their hit songs 'She's So High' and 'Be My Yoko Ono'?",
options: {
A: "The Cars",
B: "Barenaked Ladies",
C: "Weezer",
D: "Matchbox Twenty"
},
answer: "Barenaked Ladies"
},

{
id: 13,
question: "Which Australian pop singer is known for her hit songs 'Torn' and 'Smoke'?",
options: {
A: "Kylie Minogue",
B: "Delta Goodrem",
C: "Natalie Imbruglia",
D: "Sia"
},
answer: "Natalie Imbruglia"
},

{
id: 14,
question: "Who is the pop singer known for her hit songs 'Bleeding Love' and 'Better in Time'?",
options: {
A: "Adele",
B: "Leona Lewis",
C: "Rihanna",
D: "Taylor Swift"
},
answer: "Leona Lewis"
},

{
id: 15,
question: "What is the name of the American girl group known for their hit songs 'Waterfalls' and 'No Scrubs'?",
options: {
A: "TLC",
B: "Destiny's Child",
C: "En Vogue",
D: "SWV"
},
answer: "TLC"
},

{
id: 16,
question: "Which British singer-songwriter is known for his hit songs 'Stay with Me' and 'I'm Not the Only One'?",
options: {
A: "Sam Smith",
B: "James Bay",
C: "George Ezra",
D: "Ed Sheeran"
},
answer: "Sam Smith"
},
{
    id: 17,
    question: "Which pop artist released the hit song 'Toxic' in 2003?",
    options: {
    A: "Britney Spears",
    B: "Christina Aguilera",
    C: "Jessica Simpson",
    D: "Mandy Moore"
    },
    answer: "Britney Spears"
    },
    {
    id: 18,
    question: "What was the name of the band that Justin Timberlake was a part of before becoming a solo artist?",
    options: {
    A: "Backstreet Boys",
    B: "NSYNC",
    C: "New Kids on the Block",
    D: "98 Degrees"
    },
    answer: "NSYNC"
    },
    {
    id: 19,
    question: "Which pop star was born with the name Stefani Joanne Angelina Germanotta?",
    options: {
    A: "Taylor Swift",
    B: "Beyonce",
    C: "Ariana Grande",
    D: "Lady Gaga"
    },
    answer: "Lady Gaga"
    },
    {
    id: 20,
    question: "Which pop duo had a hit with the song 'Ain't No Mountain High Enough' in 1967?",
    options: {
    A: "Simon & Garfunkel",
    B: "The Beatles",
    C: "The Supremes",
    D: "The Beach Boys"
    },
    answer: "The Supremes"
    },
    {
    id: 21,
    question: "Which pop singer released the album '25' in 2015?",
    options: {
    A: "Adele",
    B: "Rihanna",
    C: "Katy Perry",
    D: "Miley Cyrus"
    },
    answer: "Adele"
    },
    {
    id: 22,
    question: "Which pop group released the hit song 'MmmBop' in 1997?",
    options: {
    A: "Hanson",
    B: "Backstreet Boys",
    C: "NSYNC",
    D: "98 Degrees"
    },
    answer: "Hanson"
    },
    {
    id: 23,
    question: "Which pop star is known for her alter ego Sasha Fierce?",
    options: {
    A: "Beyonce",
    B: "Ariana Grande",
    C: "Katy Perry",
    D: "Taylor Swift"
    },
    answer: "Beyonce"
    },
    {
    id: 24,
    question: "Which pop singer released the hit song 'Genie in a Bottle' in 1999?",
    options: {
    A: "Britney Spears",
    B: "Christina Aguilera",
    C: "Jessica Simpson",
    D: "Mandy Moore"
    },
    answer: "Christina Aguilera"
    },
    {
    id: 25,
    question: "Which pop group released the hit song 'I Want It That Way' in 1999?",
    options: {
    A: "Backstreet Boys",
    B: "NSYNC",
    C: "New Kids on the Block",
    D: "98 Degrees"
    },
    answer: "Backstreet Boys"
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