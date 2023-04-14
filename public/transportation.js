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
        question: "What is the fastest commercially available car in the world?",
        options: {
        A: "Koenigsegg Agera RS",
        B: "Bugatti Chiron Super Sport 300+",
        C: "Hennessey Venom F5",
        D: "SSC Tuatara"
        },
        answer: "Bugatti Chiron Super Sport 300+"
        },
        
        {
        id: 2,
        question: "Which airline operates the longest non-stop commercial flight in the world?",
        options: {
        A: "Singapore Airlines",
        B: "Emirates",
        C: "Qantas",
        D: "Etihad Airways"
        },
        answer: "Singapore Airlines"
        },
        
        {
        id: 3,
        question: "What is the name of the first supersonic passenger jet that entered commercial service in 1976?",
        options: {
        A: "Concorde",
        B: "Boeing 747",
        C: "Lockheed L-1011 TriStar",
        D: "Airbus A380"
        },
        answer: "Concorde"
        },
        
        {
        id: 4,
        question: "Which automobile manufacturer is responsible for producing the Prius, the world's first mass-produced hybrid vehicle?",
        options: {
        A: "Toyota",
        B: "Ford",
        C: "Chevrolet",
        D: "Honda"
        },
        answer: "Toyota"
        },
        
        {
        id: 5,
        question: "What is the name of the first woman to fly solo across the Atlantic Ocean?",
        options: {
        A: "Bessie Coleman",
        B: "Amelia Earhart",
        C: "Harriet Quimby",
        D: "Jacqueline Cochran"
        },
        answer: "Amelia Earhart"
        },
        
        {
        id: 6,
        question: "Which country is home to the world's busiest airport by international passenger traffic?",
        options: {
        A: "United States",
        B: "China",
        C: "United Kingdom",
        D: "United Arab Emirates"
        },
        answer: "United Arab Emirates"
        },
        
        {
        id: 7,
        question: "What is the name of the world's largest aircraft by wingspan?",
        options: {
        A: "Boeing 747",
        B: "Airbus A380",
        C: "Antonov An-225 Mriya",
        D: "Lockheed C-5 Galaxy"
        },
        answer: "Antonov An-225 Mriya"
        },
        
        {
        id: 8,
        question: "What is the name of the magnetic levitation train system that operates in Shanghai, China?",
        options: {
        A: "TGV",
        B: "Hyperloop",
        C: "Maglev",
        D: "Bullet train"
        },
        answer: "Maglev"
        },
        
        {
        id: 9,
        question: "What is the name of the world's first jet airliner that entered commercial service in 1952?",
        options: {
        A: "Boeing 707",
        B: "Douglas DC-8",
        C: "De Havilland Comet",
        D: "Lockheed L-188 Electra"
        },
        answer: "De Havilland Comet"
        },
        {
            id: 10,
            question: "What is the name of the world's fastest production car, which has a top speed of 304 miles per hour?",
            options: {
            A: "Bugatti Veyron Super Sport",
            B: "Koenigsegg Jesko",
            C: "Hennessey Venom F5",
            D: "SSC Tuatara"
            },
            answer: "SSC Tuatara"
            },
            {
            id: 11,
            question: "What type of aircraft was the famous American pilot Amelia Earhart flying when she disappeared over the Pacific Ocean in 1937?",
            options: {
            A: "Lockheed Vega",
            B: "Curtiss Jenny",
            C: "Boeing 247",
            D: "Waco YMF"
            },
            answer: "Lockheed Vega"
            },
            {
            id: 12,
            question: "What is the name of the world's longest sea bridge, which connects Hong Kong, Zhuhai, and Macau?",
            options: {
            A: "Donghai Bridge",
            B: "Hangzhou Bay Bridge",
            C: "Chesapeake Bay Bridge-Tunnel",
            D: "Hong Kong-Zhuhai-Macau Bridge"
            },
            answer: "Hong Kong-Zhuhai-Macau Bridge"
            },
            {
            id: 13,
            question: "What is the name of the world's first supersonic passenger airliner?",
            options: {
            A: "Concorde",
            B: "Boeing 707",
            C: "Airbus A380",
            D: "Boeing 747"
            },
            answer: "Concorde"
            },
            {
            id: 14,
            question: "What type of vehicle is used in the sport of bobsleigh?",
            options: {
            A: "Motorcycle",
            B: "Snowmobile",
            C: "Car",
            D: "Sled"
            },
            answer: "Sled"
            },
            {
            id: 15,
            question: "What is the name of the world's largest aircraft, which has a wingspan of 385 feet?",
            options: {
            A: "Airbus A380",
            B: "Boeing 747-8",
            C: "Antonov An-225 Mriya",
            D: "Lockheed C-5 Galaxy"
            },
            answer: "Antonov An-225 Mriya"
            },
            {
            id: 16,
            question: "What is the name of the first commercial jet airliner?",
            options: {
            A: "Boeing 707",
            B: "Douglas DC-3",
            C: "Lockheed Constellation",
            D: "de Havilland Comet"
            },
            answer: "de Havilland Comet"
            },
            {
            id: 17,
            question: "What is the name of the world's largest cruise ship, which has a capacity of over 6,000 passengers?",
            options: {
            A: "Symphony of the Seas",
            B: "Harmony of the Seas",
            C: "Allure of the Seas",
            D: "Oasis of the Seas"
            },
            answer: "Symphony of the Seas"
            },
            {
            id: 18,
            question: "What is the name of the first satellite launched into space?",
            options: {
            A: "Explorer 1",
            B: "Sputnik 1",
            C: "Vanguard 1",
            D: "Telstar 1"
            },
            answer: "Sputnik 1"
        },
        {
            id: 19,
            question: "What was the name of the first commercially available electric car?",
            options: {
            A: "Tesla Model S",
            B: "Nissan Leaf",
            C: "General Motors EV1",
            D: "Toyota RAV4 EV"
            },
            answer: "General Motors EV1"
            },
            {
            id: 20,
            question: "What is the top speed of the fastest production motorcycle in the world?",
            options: {
            A: "250 mph",
            B: "290 mph",
            C: "305 mph",
            D: "330 mph"
            },
            answer: "330 mph"
            },
            {
            id: 21,
            question: "What is the name of the world's first supersonic passenger jet?",
            options: {
            A: "Concorde",
            B: "Boeing 747",
            C: "Airbus A380",
            D: "Boeing 787"
            },
            answer: "Concorde"
            },
            {
            id: 22,
            question: "What is the name of the largest airplane in the world by wingspan?",
            options: {
            A: "Antonov An-225 Mriya",
            B: "Boeing 747-8",
            C: "Airbus A380",
            D: "Lockheed C-5 Galaxy"
            },
            answer: "Antonov An-225 Mriya"
            },
            {
            id: 23,
            question: "What was the first car to use a turbocharger?",
            options: {
            A: "Porsche 911 Turbo",
            B: "BMW 2002 Turbo",
            C: "Saab 99 Turbo",
            D: "Chevrolet Corvair Monza Spyder"
            },
            answer: "Chevrolet Corvair Monza Spyder"
            },
            {
            id: 24,
            question: "What is the name of the first airplane to fly non-stop across the Atlantic Ocean?",
            options: {
            A: "Spirit of St. Louis",
            B: "Boeing 747",
            C: "Lockheed Constellation",
            D: "Douglas DC-3"
            },
            answer: "Spirit of St. Louis"
            },
            {
            id: 25,
            question: "What is the name of the first commercial jet airliner?",
            options: {
            A: "Boeing 707",
            B: "De Havilland Comet",
            C: "Douglas DC-8",
            D: "Lockheed L-1011 TriStar"
            },
            answer: "De Havilland Comet"
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