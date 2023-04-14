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
        question: "What is the name of the famous French fashion designer known for his timeless designs and trademark tweed suits?",
        options: {
        A: "Coco Chanel",
        B: "Yves Saint Laurent",
        C: "Christian Dior",
        D: "Gianni Versace"
        },
        answer: "Coco Chanel"
        },
        {
        id: 2,
        question: "What is the name of the iconic red-soled shoes designed by French luxury shoe designer Christian Louboutin?",
        options: {
        A: "Ruby Pumps",
        B: "Scarlet Heels",
        C: "Crimson Stilettos",
        D: "Red Bottoms"
        },
        answer: "Red Bottoms"
        },
        {
        id: 3,
        question: "What is the name of the Indian fashion designer who has dressed international celebrities such as Beyonce, Rihanna, and Lady Gaga?",
        options: {
        A: "Sabyasachi Mukherjee",
        B: "Manish Malhotra",
        C: "Tarun Tahiliani",
        D: "Rohit Bal"
        },
        answer: "Sabyasachi Mukherjee"
        },
        {
        id: 4,
        question: "What is the name of the iconic American denim brand that was founded in 1853 and is known for its Levi's 501 jeans?",
        options: {
        A: "Wrangler",
        B: "Lee",
        C: "Calvin Klein",
        D: "Levi Strauss & Co."
        },
        answer: "Levi Strauss & Co."
        },
        {
        id: 5,
        question: "What is the name of the Italian luxury fashion brand known for its signature Medusa logo and opulent designs?",
        options: {
        A: "Gucci",
        B: "Prada",
        C: "Versace",
        D: "Valentino"
        },
        answer: "Versace"
        },
        {
            id: 6,
            question: 'What fashion item is named after the French word for "little barrel"?',
            options: {
                A: 'Bolero',
                B: 'Barrette',
                C: 'Bandeau',
                D: 'Barrel bag'
            },
            answer: 'Barrel bag'
        },
        {
            id: 7,
            question: 'What type of jewelry is named after a flower known for its prickly stem and vibrant color?',
            options: {
                A: 'Poppy necklace',
                B: 'Thistle brooch',
                C: 'Daisy earrings',
                D: 'Rose bracelet'
            },
            answer: 'Thistle brooch'
        },
        {
            id: 8,
            question: 'Which famous fashion designer is known for his signature red-soled shoes?',
            options: {
            A: 'Christian Louboutin',
            B: 'Karl Lagerfeld',
            C: 'Giorgio Armani',
            D: 'Ralph Lauren'
            },
            answer: 'Christian Louboutin'
            },
            {
            id: 9,
            question: 'What is the name of the iconic Hermès bag that was first introduced in 1935?',
            options: {
            A: 'Kelly',
            B: 'Birkin',
            C: 'Constance',
            D: 'Evelyne'
            },
            answer: 'Kelly'
            },
            {
            id: 10,
            question: 'Which iconic fashion designer is known for his "wrap" dress?',
            options: {
            A: 'Coco Chanel',
            B: 'Donna Karan',
            C: 'Diane von Furstenberg',
            D: 'Betsey Johnson'
            },
            answer: 'Diane von Furstenberg'
            },
            {
            id: 11,
            question: 'What type of fabric is used to make traditional Scottish kilts?',
            options: {
            A: 'Tweed',
            B: 'Cashmere',
            C: 'Wool',
            D: 'Silk'
            },
            answer: 'Wool'
            },
            {
            id: 12,
            question: 'Which fashion designer is known for his skull motifs and edgy designs?',
            options: {
            A: 'Alexander McQueen',
            B: 'Tom Ford',
            C: 'Oscar de la Renta',
            D: 'Marc Jacobs'
            },
            answer: 'Alexander McQueen'
            },
            {
            id: 13,
            question: 'What type of hat is typically worn by the British royal family to formal events?',
            options: {
            A: 'Fedora',
            B: 'Top hat',
            C: 'Beret',
            D: 'Baseball cap'
            },
            answer: 'Top hat'
            },
            {
            id: 14,
            question: 'What is the name of the Italian luxury fashion house that is known for its colorful prints and bold designs?',
            options: {
            A: 'Gucci',
            B: 'Versace',
            C: 'Prada',
            D: 'Dolce & Gabbana'
            },
            answer: 'Versace'
            },
            {
            id: 15,
            question: 'Which iconic French fashion designer is known for his tweed jackets and quilted handbags?',
            options: {
            A: 'Jean-Paul Gaultier',
            B: 'Pierre Cardin',
            C: 'Yves Saint Laurent',
            D: 'Coco Chanel'
            },
            answer: 'Coco Chanel'
            },
            {
            id: 16,
            question: 'What is the name of the famous French fashion house that was founded by a Spanish designer?',
            options: {
            A: 'Givenchy',
            B: 'Balenciaga',
            C: 'Dior',
            D: 'Chloé'
            },
            answer: 'Balenciaga'
            },
            {
            id: 17,
            question: 'What is the name of the American fashion designer who is known for his minimalist designs and love of the color black?',
            options: {
            A: 'Michael Kors',
            B: 'Ralph Lauren',
            C: 'Calvin Klein',
            D: 'Rick Owens'
            },
            answer: 'Rick Owens'
            },
        {
            id: 18,
            question: 'Which famous fashion designer is known for his signature red-soled shoes?',
            options: {
            A: 'Christian Louboutin',
            B: 'Karl Lagerfeld',
            C: 'Giorgio Armani',
            D: 'Ralph Lauren'
            },
            answer: 'Christian Louboutin'
            },
            {
            id: 19,
            question: 'What is the name of the iconic Hermès bag that was first introduced in 1935?',
            options: {
            A: 'Kelly',
            B: 'Birkin',
            C: 'Constance',
            D: 'Evelyne'
            },
            answer: 'Kelly'
            },
            {
            id: 20,
            question: 'Which iconic fashion designer is known for his "wrap" dress?',
            options: {
            A: 'Coco Chanel',
            B: 'Donna Karan',
            C: 'Diane von Furstenberg',
            D: 'Betsey Johnson'
            },
            answer: 'Diane von Furstenberg'
            },
            {
            id: 21,
            question: 'What type of fabric is used to make traditional Scottish kilts?',
            options: {
            A: 'Tweed',
            B: 'Cashmere',
            C: 'Wool',
            D: 'Silk'
            },
            answer: 'Wool'
            },
            {
            id: 22,
            question: 'Which fashion designer is known for his skull motifs and edgy designs?',
            options: {
            A: 'Alexander McQueen',
            B: 'Tom Ford',
            C: 'Oscar de la Renta',
            D: 'Marc Jacobs'
            },
            answer: 'Alexander McQueen'
            },
            {
            id: 23,
            question: 'What type of hat is typically worn by the British royal family to formal events?',
            options: {
            A: 'Fedora',
            B: 'Top hat',
            C: 'Beret',
            D: 'Baseball cap'
            },
            answer: 'Top hat'
            },
            {
            id: 24,
            question: 'What is the name of the Italian luxury fashion house that is known for its colorful prints and bold designs?',
            options: {
            A: 'Gucci',
            B: 'Versace',
            C: 'Prada',
            D: 'Dolce & Gabbana'
            },
            answer: 'Versace'
            },
            {
            id: 25,
            question: 'Which iconic French fashion designer is known for his tweed jackets and quilted handbags?',
            options: {
            A: 'Jean-Paul Gaultier',
            B: 'Pierre Cardin',
            C: 'Yves Saint Laurent',
            D: 'Coco Chanel'
            },
            answer: 'Coco Chanel'
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