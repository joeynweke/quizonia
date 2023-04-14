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
      question: "What is the value of x in the equation 2x + 3 = 11?",
      options: {
        A: "2",
        B: "3",
        C: "4",
        D: "5"
      },
      answer: "4"
    },
    {
      id: 2,
      question: "What is the slope of a line that passes through the points (2, 4) and (6, 10)?",
      options: {
        A: "1",
        B: "2",
        C: "3",
        D: "4"
      },
      answer: "2"
    },
    {
      id: 3,
      question: "What is the value of the expression 3x + 4y - 2x + 5y when x = 2 and y = 3?",
      options: {
        A: "12",
        B: "18",
        C: "24",
        D: "30"
      },
      answer: "18"
    },
    {
      id: 4,
      question: "What is the area of a rectangle with length 5 cm and width 8 cm?",
      options: {
        A: "12 cm^2",
        B: "25 cm^2",
        C: "35 cm^2",
        D: "40 cm^2"
      },
      answer: "40 cm^2"
    },
    {
      id: 5,
      question: "What is the square root of 169?",
      options: {
        A: "12",
        B: "13",
        C: "14",
        D: "15"
      },
      answer: "13"
    },
    {
      id: 6,
      question: "What is the value of the expression (3 + 4) * 5 - 2?",
      options: {
        A: "17",
        B: "23",
        C: "25",
        D: "27"
      },
      answer: "23"
    },
    {
      id: 7,
      question: "What is the slope of a vertical line?",
      options: {
        A: "0",
        B: "1",
        C: "Undefined",
        D: "Infinity"
      },
      answer: "Undefined"
    },
    {
      id: 8,
      question: "What is the value of the expression 2x^2 + 5x + 3 when x = -1?",
      options: {
        A: "0",
        B: "2",
        C: "4",
        D: "6"
      },
      answer: "4"
    },
    {
      id: 9,
      question: "What is the volume of a cube with edge length 3 cm?",
      options: {
        A: "9 cm^3",
        B: "18 cm^3",
        C: "27 cm^3",
        D: "36 cm^3"
      },
      answer: "27 cm^3"
    },
    {
      id: 10,
      question: "What is the value of the expression 4!/2!?",
      options: {
        A: "6",
        B: "8",
        C: "12",
        D: "24"
      },
      answer: "12"
    },
    {
        id: 11,
        question: "What is the value of 3^4?",
        options: {
          A: "9",
          B: "27",
          C: "64",
          D: "81"
        },
        answer: "81"
    },
    {
        id: 12,
        question: "What is the value of sin(90°)?",
        options: {
          A: "0",
          B: "1",
          C: "-1",
          D: "Undefined"
        },
        answer: "1"
      },
      {
        id: 13,
        question: "What is the measure of each interior angle of a regular pentagon?",
        options: {
          A: "108°",
          B: "120°",
          C: "135°",
          D: "144°"
        },
        answer: "108°"
      },
      {
        id: 14,
        question: "What is the value of the expression 2cos²(30°) - 1?",
        options: {
          A: "0",
          B: "1",
          C: "2",
          D: "3"
        },
        answer: "1"
      },
      {
        id: 15,
        question: "What is the perimeter of a triangle with sides of length 5 cm, 7 cm, and 9 cm?",
        options: {
          A: "18 cm",
          B: "21 cm",
          C: "24 cm",
          D: "26 cm"
        },
        answer: "21 cm"
      },
      {
        id: 16,
        question: "What is the value of the expression log10(1000)?",
        options: {
          A: "1",
          B: "2",
          C: "3",
          D: "4"
        },
        answer: "3"
      },
      {
        id: 17,
        question: "What is the value of the expression 5!/2! - 3!?",
        options: {
          A: "97",
          B: "118",
          C: "132",
          D: "148"
        },
        answer: "118"
      },
      {
        id: 18,
        question: "What is the value of the expression 2x + 3y when x = 4 and y = 2?",
        options: {
          A: "8",
          B: "10",
          C: "11",
          D: "12"
        },
        answer: "11"
      },
      {
        id: 19,
        question: "What is the process of converting a decimal number to a binary number?",
        options: {
        A: "Division by 2",
        B: "Multiplication by 2",
        C: "Addition of 2",
        D: "Subtraction of 2"
        },
        answer: "Division by 2"
        },
        {
        id: 20,
        question: "What is the difference between a conductor and an insulator?",
        options: {
        A: "A conductor allows electricity to flow through it easily while an insulator does not",
        B: "A conductor absorbs electricity while an insulator does not",
        C: "A conductor does not allow electricity to flow through it while an insulator does",
        D: "A conductor and an insulator are the same thing"
        },
        answer: "A conductor allows electricity to flow through it easily while an insulator does not"
        },
        {
        id: 21,
        question: "What is the significance of the number zero in the binary number system?",
        options: {
        A: "It represents the end of a binary number",
        B: "It represents the beginning of a binary number",
        C: "It is not used in the binary number system",
        D: "It is used to represent the absence of a digit in a binary number"
        },
        answer: "It is used to represent the absence of a digit in a binary number"
        },
        {
        id: 22,
        question: "What is the difference between a scalar and a vector?",
        options: {
        A: "A scalar has only magnitude while a vector has both magnitude and direction",
        B: "A scalar has only direction while a vector has both magnitude and direction",
        C: "A scalar has both magnitude and direction while a vector has only magnitude",
        D: "A scalar and a vector are the same thing"
        },
        answer: "A scalar has only magnitude while a vector has both magnitude and direction"
        },
        {
        id: 23,
        question: "What is the difference between a rational number and an irrational number?",
        options: {
        A: "A rational number is a fraction while an irrational number is not",
        B: "A rational number can be expressed as a terminating or repeating decimal while an irrational number cannot",
        C: "A rational number can be expressed as an integer while an irrational number cannot",
        D: "A rational number and an irrational number are the same thing"
        },
        answer: "A rational number can be expressed as a terminating or repeating decimal while an irrational number cannot"
        },
        {
          id: 24,
          question: "What is the difference between a succulent and a cactus?",
          options: {
          A: "A succulent has prickly spines while a cactus does not",
          B: "A succulent stores water in its leaves while a cactus stores water in its stem",
          C: "A succulent is a type of flowering plant while a cactus is not",
          D: "A succulent and a cactus are the same thing"
          },
          answer: "A succulent stores water in its leaves while a cactus stores water in its stem"
          },
          
          {
            id: 25,
            question: "What is the Pythagorean theorem?",
            options: {
            A: "The sum of the interior angles of a triangle equals 180 degrees",
            B: "The area of a circle equals pi times the radius squared",
            C: "The square of the hypotenuse of a right triangle equals the sum of the squares of the other two sides",
            D: "The ratio of the circumference of a circle to its diameter equals pi"
            },
            answer: "The square of the hypotenuse of a right triangle equals the sum of the squares of the other two sides"
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