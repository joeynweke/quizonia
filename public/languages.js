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
        question : 'What is the most widely spoken language in the world?',
        options : {
        A: 'English',
        B: 'Mandarin Chinese',
        C: 'Spanish',
        D: 'Arabic'
        },
        answer : 'Mandarin Chinese'
        },
        {
        id: 2,
        question : 'What language has the most words?',
        options : {
        A: 'English',
        B: 'French',
        C: 'German',
        D: 'Russian'
        },
        answer : 'English'
        },
        {
        id: 3,
        question : 'What is the only official language of Brazil?',
        options : {
        A: 'Portuguese',
        B: 'Spanish',
        C: 'English',
        D: 'French'
        },
        answer : 'Portuguese'
        },
        {
        id: 4,
        question : 'What language has the most native speakers in Europe?',
        options : {
        A: 'English',
        B: 'French',
        C: 'Spanish',
        D: 'German'
        },
        answer : 'German'
        },
        {
        id: 5,
        question : 'What language is spoken in the most countries?',
        options : {
        A: 'English',
        B: 'French',
        C: 'Arabic',
        D: 'Spanish'
        },
        answer : 'English'
        },
        {
        id: 6,
        question : 'What is the official language of Pakistan?',
        options : {
        A: 'Urdu',
        B: 'Hindi',
        C: 'Punjabi',
        D: 'Arabic'
        },
        answer : 'Urdu'
        },
        {
        id: 7,
        question : 'What language has the most second language speakers?',
        options : {
        A: 'English',
        B: 'Mandarin Chinese',
        C: 'Spanish',
        D: 'French'
        },
        answer : 'English'
        },
        {
        id: 8,
        question : 'What is the official language of Switzerland?',
        options : {
        A: 'Swiss German',
        B: 'French',
        C: 'Italian',
        D: 'Romansh'
        },
        answer : 'There are four official languages: Swiss German, French, Italian, and Romansh'
        },
        {
        id: 9,
        question : 'What language is spoken in the African country of Ethiopia?',
        options : {
        A: 'Amharic',
        B: 'Swahili',
        C: 'Arabic',
        D: 'Somali'
        },
        answer : 'Amharic'
        },
        {
        id: 10,
        question : 'What language family does the Japanese language belong to?',
        options : {
        A: 'Sino-Tibetan',
        B: 'Indo-European',
        C: 'Austronesian',
        D: 'Japonic'
        },
        answer : 'Japonic'
        },
        {
            id: 11,
            question: "What is the most widely spoken indigenous language in South America?",
            options: {
            A: "Quechua",
            B: "Nahuatl",
            C: "Maya",
            D: "Aymara"
            },
            answer: "Quechua"
            },
            
            {
            id: 12,
            question: "What is the only continent where Portuguese is the official language?",
            options: {
            A: "South America",
            B: "Africa",
            C: "Europe",
            D: "Asia"
            },
            answer: "Africa"
            },
            
            {
            id: 13,
            question: "What is the name of the alphabet used in Russia and some other Slavic countries?",
            options: {
            A: "Cyrillic",
            B: "Latin",
            C: "Arabic",
            D: "Devanagari"
            },
            answer: "Cyrillic"
            },
            
            {
            id: 14,
            question: "What is the name of the language spoken by the native people of Hawaii?",
            options: {
            A: "Hawaiian",
            B: "Polynesian",
            C: "Maori",
            D: "Tongan"
            },
            answer: "Hawaiian"
            },
            
            {
            id: 15,
            question: "What is the official language of Suriname?",
            options: {
            A: "Dutch",
            B: "French",
            C: "Spanish",
            D: "English"
            },
            answer: "Dutch"
            },
            
            {
            id: 16,
            question: "What is the name of the writing system used in Japanese?",
            options: {
            A: "Katakana",
            B: "Hiragana",
            C: "Kanji",
            D: "Romaji"
            },
            answer: "Kanji"
            },
            
            {
            id: 17,
            question: "What is the official language of Haiti?",
            options: {
            A: "Creole",
            B: "French",
            C: "Spanish",
            D: "English"
            },
            answer: "French"
            },
            
            {
            id: 18,
            question: "What is the name of the language spoken in the Basque region of Spain?",
            options: {
            A: "Catalan",
            B: "Galician",
            C: "Euskara",
            D: "Castilian"
            },
            answer: "Euskara"
            },
            
            {
            id: 19,
            question: "What is the most widely spoken language in the world by number of native speakers?",
            options: {
            A: "Mandarin",
            B: "English",
            C: "Spanish",
            D: "Hindi"
            },
            answer: "Mandarin"
            },
            
            {
            id: 20,
            question: "What is the name of the language spoken in Afghanistan?",
            options: {
            A: "Pashto",
            B: "Dari",
            C: "Farsi",
            D: "Urdu"
            },
            answer: "Dari"
            },
            {
            id: 21,
            question: "What is the oldest known written language?",
            options: {
            A: "Sumerian",
            B: "Hieroglyphics",
            C: "Cuneiform",
            D: "Indus script"
            },
            answer: "Sumerian"
            },
            
            {
            id: 22,
            question: "What is the most spoken language in the world?",
            options: {
            A: "English",
            B: "Mandarin Chinese",
            C: "Spanish",
            D: "Hindi"
            },
            answer: "Mandarin Chinese"
            },
            
            {
            id: 23,
            question: "Which language has the most number of speakers as their first language?",
            options: {
            A: "Mandarin Chinese",
            B: "Spanish",
            C: "English",
            D: "Hindi"
            },
            answer: "Mandarin Chinese"
            },
            
            {
            id: 24,
            question: "What is the most widely spoken language in the European Union?",
            options: {
            A: "English",
            B: "French",
            C: "German",
            D: "Italian"
            },
            answer: "English"
            },
            
            {
            id: 25,
            question: "What language is the official language of Brazil?",
            options: {
            A: "Portuguese",
            B: "Spanish",
            C: "French",
            D: "Italian"
            },
            answer: "Portuguese"
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