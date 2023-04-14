

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
    question: "What is the main cause of deforestation?",
    options: {
      A: "Urbanization",
      B: "Agriculture",
      C: "Mining",
      D: "All of the above"
    },
    answer: "All of the above"
  },
  {
    id: 2,
    question: "What percentage of Earth's fresh water is contained in lakes?",
    options: {
      A: "1%",
      B: "10%",
      C: "50%",
      D: "75%"
    },
    answer: "1%"
  },
  {
    id: 3,
    question: "Which of the following is not a greenhouse gas?",
    options: {
      A: "Carbon dioxide",
      B: "Methane",
      C: "Nitrogen",
      D: "Ozone"
    },
    answer: "Nitrogen"
  },
  {
    id: 4,
    question: "What is the main source of air pollution in cities?",
    options: {
      A: "Industrial emissions",
      B: "Traffic",
      C: "Agricultural activities",
      D: "Wildfires"
    },
    answer: "Traffic"
  },
  {
    id: 5,
    question: "What is the main cause of soil erosion?",
    options: {
      A: "Overgrazing",
      B: "Deforestation",
      C: "Agricultural activities",
      D: "Urbanization"
    },
    answer: "Deforestation"
  },
  {
    id: 6,
    question: "What is the term used to describe the process by which water evaporates from the leaves of plants?",
    options: {
    A: "Transpiration",
    B: "Respiration",
    C: "Evaporation",
    D: "Condensation"
    },
    answer: "Transpiration"
    },
    
    {
    id: 7,
    question: "What is the name of the largest species of fish, which is found in tropical and subtropical waters and can grow up to 40 feet in length?",
    options: {
    A: "Great white shark",
    B: "Killer whale",
    C: "Blue whale",
    D: "Whale shark"
    },
    answer: "Whale shark"
    },
    
    {
    id: 8,
    question: "What is the name of the process by which soil and rock are eroded and carried away by wind and water?",
    options: {
    A: "Weathering",
    B: "Erosion",
    C: "Deposition",
    D: "Transportation"
    },
    answer: "Erosion"
    },
    
    {
    id: 9,
    question: "What is the name of the phenomenon in which a large number of fish swim together in a coordinated manner, often creating intricate patterns in the water?",
    options: {
    A: "Fish swirl",
    B: "Fish swarm",
    C: "Fish whirl",
    D: "Fish twirl"
    },
    answer: "Fish swarm"
    },
  {
    id: 10,
    question: "What is the term used to describe a group of porcupines?",
    options: {
    A: "Quillers",
    B: "Prickles",
    C: "Spines",
    D: "Needles"
    },
    answer: "Prickles"
    },
    
    {
    id: 11,
    question: "What is the name of the largest type of deer, which is native to the Arctic regions of North America, Europe, and Asia?",
    options: {
    A: "Moose",
    B: "Elk",
    C: "Reindeer",
    D: "Caribou"
    },
    answer: "Moose"
    },
    
    {
    id: 12,
    question: "What is the name of the phenomenon that occurs when a group of dolphins swim together and create a ring of bubbles to corral fish for easier feeding?",
    options: {
    A: "Bubble netting",
    B: "Fish netting",
    C: "Dolphin ring",
    D: "Sea circling"
    },
    answer: "Bubble netting"
    },
    
    {
    id: 13,
    question: "What is the name of the flowering plant that is known for its distinctive odor, which is often compared to that of rotting flesh?",
    options: {
    A: "Corpse flower",
    B: "Stinking iris",
    C: "Death lily",
    D: "Rotting rose"
    },
    answer: "Corpse flower"
    },
    
    {
    id: 14,
    question: "What is the term used to describe the process by which plants convert light energy into chemical energy, using water and carbon dioxide to produce oxygen and glucose?",
    options: {
    A: "Photosynthesis",
    B: "Chemosynthesis",
    C: "Hydrogenation",
    D: "Aerobic respiration"
    },
    answer: "Photosynthesis"
    },
    
    {
    id: 15,
    question: "What is the name of the brightly-colored bird that is native to Central and South America, and is known for its ability to mimic the sounds of other birds and animals?",
    options: {
    A: "Parrot",
    B: "Toucan",
    C: "Macaw",
    D: "Hummingbird"
    },
    answer: "Macaw"
    },
    
    {
    id: 16,
    question: "What is the name of the slow-moving, tree-dwelling mammal that is native to Central and South America, and is known for its distinctive claws and low metabolic rate?",
    options: {
    A: "Sloth",
    B: "Armadillo",
    C: "Anteater",
    D: "Coati"
    },
    answer: "Sloth"
    },
    
    {
    id: 17,
    question: "What is the name of the natural phenomenon that occurs when the Earth's magnetic field is disturbed by solar winds, causing a display of colorful lights in the night sky?",
    options: {
    A: "Aurora borealis",
    B: "Solar flares",
    C: "Northern lights",
    D: "Magnetic storms"
    },
    answer: "Aurora borealis"
    },
    {
      id: 18,
      question: "What is the name of the smallest bird species in the world, found primarily in Cuba and the surrounding islands, and known for its iridescent feathers and unique high-pitched chirping sound?",
      options: {
      A: "Hummingbird",
      B: "Wren",
      C: "Finch",
      D: "Sparrow"
      },
      answer: "Bee hummingbird"
      },
      
      {
      id: 19,
      question: "What is the name of the largest living species of lizard, native to the Indonesian islands and known for its sharp teeth and venomous saliva?",
      options: {
      A: "Iguana",
      B: "Chameleon",
      C: "Komodo dragon",
      D: "Gecko"
      },
      answer: "Komodo dragon"
      },
      
      {
      id: 20,
      question: "What is the name of the natural phenomenon that occurs when warm air rises and cool air sinks, creating a rotating column of air that extends from the base of a cumulonimbus cloud to the ground?",
      options: {
      A: "Tornado",
      B: "Hurricane",
      C: "Thunderstorm",
      D: "Dust devil"
      },
      answer: "Tornado"
      },
      
      {
      id: 21,
      question: "What is the name of the rare and unusual geological feature found in some deserts, characterized by large, mushroom-shaped rocks that appear to defy gravity by balancing on narrow pedestals?",
      options: {
      A: "Rock arch",
      B: "Stone pillar",
      C: "Hoodoo",
      D: "Natural arch"
      },
      answer: "Hoodoo"
      },
      
      {
      id: 22,
      question: "What is the name of the bioluminescent phenomenon that occurs when certain types of plankton and bacteria emit a blue-green light in response to movement or disturbance in the water?",
      options: {
      A: "Bioluminescent bloom",
      B: "Sea sparkle",
      C: "Light wave",
      D: "Phosphorescent glow"
      },
      answer: "Sea sparkle"
      },
      
      {
      id: 23,
      question: "What is the name of the process by which sand dunes migrate over time, often creating unique shapes and patterns in the desert landscape?",
      options: {
      A: "Sand shift",
      B: "Wind drift",
      C: "Dune migration",
      D: "Aeolian transport"
      },
      answer: "Dune migration"
      },
      
      {
      id: 24,
      question: "What is the name of the naturally occurring, brightly colored mineral deposit that forms in caves and is often used in jewelry and decorative items?",
      options: {
      A: "Amber",
      B: "Turquoise",
      C: "Calcite",
      D: "Agate"
      },
      answer: "Agate"
      },
      
      {
      id: 25,
      question: "What is the name of the natural phenomenon that occurs when water droplets in the air refract sunlight, creating a colorful circular arc in the sky?",
      options: {
      A: "Rainbow",
      B: "Sun dog",
      C: "Halos",
      D: "Mirage"
      },
      answer: "Rainbow"
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
