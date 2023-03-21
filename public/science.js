

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
    question: "What is the unit of measurement for computing power?",
    options: {
      A: "Hertz",
      B: "Joules",
      C: "Watts",
      D: "Flops"
    },
    answer: "Flops"
  },
  {
    id: 2,
    question: "What is the most widely used programming language for web development?",
    options: {
      A: "Java",
      B: "C++",
      C: "Python",
      D: "JavaScript"
    },
    answer: "JavaScript"
  },
  {
    id: 3,
    question: "What is the process of breaking down large data into smaller chunks called?",
    options: {
      A: "Encryption",
      B: "Decryption",
      C: "Compression",
      D: "Decompression"
    },
    answer: "Compression"
  },
  {
    id: 4,
    question: "What type of technology is used to transmit data wirelessly over short distances?",
    options: {
      A: "Bluetooth",
      B: "Wi-Fi",
      C: "LTE",
      D: "5G"
    },
    answer: "Bluetooth"
  },
  {
    id: 5,
    question: "What is the term used to describe the creation of a replica or simulation of a real-world environment?",
    options: {
      A: "Modeling",
      B: "Virtualization",
      C: "Simulation",
      D: "Emulation"
    },
    answer: "Simulation"
  },
  {
    id: 6,
    question: "What is the process of transmitting data over a network called?",
    options: {
      A: "Encoding",
      B: "Decoding",
      C: "Encapsulation",
      D: "Transmission"
    },
    answer: "Transmission"
  },
  {
    id: 7,
    question: "What is the term used to describe the study of algorithms and data structures?",
    options: {
      A: "Data Science",
      B: "Machine Learning",
      C: "Computer Science",
      D: "Theoretical Computer Science"
    },
    answer: "Theoretical Computer Science"
  },
  {
    id: 8,
    question: "What is the term used to describe a system of interconnected computer networks?",
    options: {
      A: "Intranet",
      B: "Internet",
      C: "Extranet",
      D: "Virtual Private Network"
    },
    answer: "Internet"
  },
  {
    id: 9,
    question: "What is the term used to describe a program that performs a specific function or task?",
    options: {
      A: "Software",
      B: "Operating System",
      C: "Application",
      D: "Hardware"
    },
    answer: "Application"
  },
  {
    id: 10,
    question: "What is the term used to describe the instructions that control the operation of a computer?",
    options: {
      A: "Software",
      B: "Operating System",
      C: "Programming Language",
      D: "Firmware"
    },
    answer: "Operating System"
  },
  {
    id: 11,
    question: "What is the term used to describe the representation of data in a computer?",
    options: {
      A: "Encoding",
      B: "Decoding",
      C: "Encryption",
      D: "Data Structure"
    },
    answer: "Data Structure"
  },
  {
    id: 12,
    question: "What is the term used to describe the process of finding and fixing errors in computer programs?",
    options: {
      A: "Debugging",
      B: "Programming",
      C: "Coding",
      D: "Testing"
    },
    answer: "Debugging"
  },
  {
    id: 13,
    question: "What is the term used to describe the method of accessing and manipulating data in a database?",
    options: {
      A: "Database Management",
      B: "Data Warehousing",
      C: "Data Mining",
      D: "SQL"
    },
    answer: "SQL"
  },
  {
    id: 14,
    question: "What is the term used to describe the process of delivering content over the internet?",
    options: {
      A: "Streaming",
      B: "Broadcasting",
      C: "Downloading",
      D: "Uploading"
    },
    answer: "Streaming"
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
