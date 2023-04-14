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
        question : 'What is the national dish of Thailand?',
        options : {
        A: 'Pad Thai',
        B: 'Tom Yum Goong',
        C: 'Som Tam',
        D: 'Khao Soi'
        },
        answer : 'Pad Thai'
        },
        {
        id: 2,
        question : 'What is the primary ingredient in hummus?',
        options : {
        A: 'Chickpeas',
        B: 'Lentils',
        C: 'Black beans',
        D: 'Pinto beans'
        },
        answer : 'Chickpeas'
        },
        {
        id: 3,
        question : 'What is the name of the traditional Scottish dish that consists of a sheep’s stomach filled with sheep’s heart, liver, and lungs, along with oatmeal and spices?',
        options : {
        A: 'Haggis',
        B: 'Bangers and mash',
        C: 'Shepherd’s pie',
        D: 'Fish and chips'
        },
        answer : 'Haggis'
        },
        {
        id: 4,
        question : 'What is the main ingredient in a traditional Greek salad?',
        options : {
        A: 'Feta cheese',
        B: 'Olives',
        C: 'Tomatoes',
        D: 'Cucumbers'
        },
        answer : 'Feta cheese'
        },
        {
        id: 5,
        question : 'What is the name of the famous spicy Korean cabbage dish?',
        options : {
        A: 'Kimchi',
        B: 'Bibimbap',
        C: 'Japchae',
        D: 'Galbi'
        },
        answer : 'Kimchi'
        },
        {
        id: 6,
        question : 'What is the main ingredient in hummus?',
        options : {
        A: 'Chickpeas',
        B: 'Lentils',
        C: 'Black beans',
        D: 'Kidney beans'
        },
        answer : 'Chickpeas'
        },
        
        {
        id: 7,
        question : 'What type of cuisine is pho?',
        options : {
        A: 'Thai',
        B: 'Vietnamese',
        C: 'Japanese',
        D: 'Korean'
        },
        answer : 'Vietnamese'
        },
        
        {
        id: 8,
        question : 'What is the national dish of Spain?',
        options : {
        A: 'Paella',
        B: 'Tacos',
        C: 'Pasta',
        D: 'Sushi'
        },
        answer : 'Paella'
        },
        
        {
        id: 9,
        question : 'What is the main ingredient in falafel?',
        options : {
        A: 'Chickpeas',
        B: 'Lentils',
        C: 'Black beans',
        D: 'Kidney beans'
        },
        answer : 'Chickpeas'
        },
        
        {
        id: 10,
        question : 'What is the traditional Italian dessert that is made with ladyfingers, espresso, and mascarpone cheese?',
        options : {
        A: 'Tiramisu',
        B: 'Cannoli',
        C: 'Gelato',
        D: 'Panna cotta'
        },
        answer : 'Tiramisu'
        },
        
        {
        id: 11,
        question : 'What is the national dish of Greece?',
        options : {
        A: 'Baklava',
        B: 'Tzatziki',
        C: 'Moussaka',
        D: 'Dolmades'
        },
        answer : 'Moussaka'
        },
        
        {
        id: 12,
        question : 'What type of cheese is traditionally used on a pizza margherita?',
        options : {
        A: 'Mozzarella',
        B: 'Cheddar',
        C: 'Gouda',
        D: 'Brie'
        },
        answer : 'Mozzarella'
        },
        
        {
        id: 13,
        question : 'What is the traditional German dish that consists of meat that is marinated and then grilled?',
        options : {
        A: 'Bratwurst',
        B: 'Schnitzel',
        C: 'Sauerbraten',
        D: 'Rouladen'
        },
        answer : 'Sauerbraten'
        },
        
        {
        id: 14,
        question : 'What type of noodle is typically used in a traditional lasagna?',
        options : {
        A: 'Spaghetti',
        B: 'Linguine',
        C: 'Fettuccine',
        D: 'Lasagna'
        },
        answer : 'Lasagna'
        },
        
        {
        id: 15,
        question : 'What is the traditional French dish that consists of beef stewed in red wine with vegetables?',
        options : {
        A: 'Bouillabaisse',
        B: 'Coq au Vin',
        C: 'Ratatouille',
        D: 'Quiche Lorraine'
        },
        answer : 'Coq au Vin'
        },
        {
        id: 16,
        question : 'Which country is credited with inventing the dish "sushi"?',
        options : {
        A: 'Japan',
        B: 'China',
        C: 'Korea',
        D: 'Vietnam'
        },
        answer : 'Japan'
        },
        {
            id: 17,
            question : 'What is the main ingredient of the popular Italian dish "risotto"?',
            options : {
                A: 'Rice',
                B: 'Pasta',
                C: 'Bread',
                D: 'Potatoes'
            },
            answer : 'Rice'
        },
        
        {
            id: 18,
            question : 'What type of cheese is traditionally used in the Greek dish "spanakopita"?',
            options : {
                A: 'Feta',
                B: 'Cheddar',
                C: 'Gouda',
                D: 'Parmesan'
            },
            answer : 'Feta'
        },
        
        {
            id: 19,
            question : 'What type of pastry is used to make the French dessert "éclair"?',
            options : {
                A: 'Pâte à choux',
                B: 'Shortcrust',
                C: 'Phyllo',
                D: 'Puff pastry'
            },
            answer : 'Pâte à choux'
        },
        
        {
            id: 20,
            question : 'What is the main ingredient of the popular Indian dish "saag paneer"?',
            options : {
                A: 'Spinach',
                B: 'Cauliflower',
                C: 'Eggplant',
                D: 'Peas'
            },
            answer : 'Spinach'
        },
        
        {
            id: 21,
            question : 'What is the national dish of Thailand?',
            options : {
                A: 'Pad Thai',
                B: 'Tom Yum Soup',
                C: 'Green Curry',
                D: 'Mango Sticky Rice'
            },
            answer : 'Pad Thai'
        },
        
        {
            id: 22,
            question : 'Which ingredient gives the Korean dish "bibimbap" its signature flavor?',
            options : {
                A: 'Gochujang',
                B: 'Soy sauce',
                C: 'Fish sauce',
                D: 'Oyster sauce'
            },
            answer : 'Gochujang'
        },
        
        {
            id: 23,
            question : 'What type of bean is used to make the popular Mexican dish "refried beans"?',
            options : {
                A: 'Pinto beans',
                B: 'Black beans',
                C: 'Kidney beans',
                D: 'Lima beans'
            },
            answer : 'Pinto beans'
        },
        
        {
            id: 24,
            question : 'What is the main ingredient of the popular Middle Eastern dip "hummus"?',
            options : {
                A: 'Chickpeas',
                B: 'Lentils',
                C: 'Black beans',
                D: 'Kidney beans'
            },
            answer : 'Chickpeas'
        },
        
        {
            id: 25,
            question : 'What type of meat is traditionally used in the British dish "shepherd\'s pie"?',
            options : {
                A: 'Lamb',
                B: 'Beef',
                C: 'Pork',
                D: 'Chicken'
            },
            answer : 'Lamb'
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