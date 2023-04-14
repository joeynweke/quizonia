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
        question: "What is the normal range of blood pressure for an adult?",
        options: {
        A: "90/60 mmHg to 120/80 mmHg",
        B: "110/70 mmHg to 140/90 mmHg",
        C: "120/80 mmHg to 160/100 mmHg",
        D: "130/80 mmHg to 180/110 mmHg"
        },
        answer: "90/60 mmHg to 120/80 mmHg"
        },
        
        {
        id: 2,
        question: "What is the medical term for high blood pressure?",
        options: {
        A: "Hypertension",
        B: "Hypotension",
        C: "Hypoalbuminemia",
        D: "Hyperlipidemia"
        },
        answer: "Hypertension"
        },
        
        {
        id: 3,
        question: "What is the recommended daily intake of water for adults?",
        options: {
        A: "2 liters",
        B: "3 liters",
        C: "4 liters",
        D: "5 liters"
        },
        answer: "2 liters"
        },
        
        {
        id: 4,
        question: "What is the medical term for the 'windpipe'?",
        options: {
        A: "Bronchus",
        B: "Larynx",
        C: "Trachea",
        D: "Alveoli"
        },
        answer: "Trachea"
        },
        
        {
        id: 5,
        question: "What is the medical term for the 'voice box'?",
        options: {
        A: "Bronchus",
        B: "Larynx",
        C: "Trachea",
        D: "Alveoli"
        },
        answer: "Larynx"
        },
        
        {
        id: 6,
        question: "What is the medical term for the 'food pipe'?",
        options: {
        A: "Esophagus",
        B: "Duodenum",
        C: "Jejunum",
        D: "Ileum"
        },
        answer: "Esophagus"
        },
        
        {
        id: 7,
        question: "What is the medical term for the 'tailbone'?",
        options: {
        A: "Pelvis",
        B: "Coccyx",
        C: "Sacrum",
        D: "Vertebrae"
        },
        answer: "Coccyx"
        },
        
        {
        id: 8,
        question: "What is the medical term for 'near-sightedness'?",
        options: {
        A: "Astigmatism",
        B: "Hyperopia",
        C: "Myopia",
        D: "Presbyopia"
        },
        answer: "Myopia"
        },
        
        {
        id: 9,
        question: "What is the medical term for 'far-sightedness'?",
        options: {
        A: "Astigmatism",
        B: "Hyperopia",
        C: "Myopia",
        D: "Presbyopia"
        },
        answer: "Hyperopia"
        },
        
        {
        id: 10,
        question: "What is the medical term for the 'kneecap'?",
        options: {
        A: "Patella",
        B: "Tibia",
        C: "Fibula",
        D: "Femur"
        },
        answer: "Patella"
        },
        {
            id: 11,
            question: "What is the medical term for an excessive fear of heights?",
            options: {
              A: "Acrophobia",
              B: "Claustrophobia",
              C: "Agoraphobia",
              D: "Hemophobia"
            },
            answer: "Acrophobia"
          },
          {
            id: 12,
            question: "What is the name for the condition where the fingers and toes turn white or blue due to poor circulation?",
            options: {
              A: "Frostbite",
              B: "Raynaud's Disease",
              C: "Peripheral Neuropathy",
              D: "Gangrene"
            },
            answer: "Raynaud's Disease"
          },
          {
            id: 13,
            question: "What is the medical term for a fear of needles?",
            options: {
              A: "Trypanophobia",
              B: "Arachnophobia",
              C: "Agoraphobia",
              D: "Ophidiophobia"
            },
            answer: "Trypanophobia"
          },
          {
            id: 14,
            question: "What is the name for the condition where a person falls asleep suddenly during the day?",
            options: {
              A: "Insomnia",
              B: "Narcolepsy",
              C: "Sleep Apnea",
              D: "Night Terrors"
            },
            answer: "Narcolepsy"
          },
          {
            id: 15,
            question: "What is an alternative therapy that involves the use of needles?",
            options: {
            A: "Acupuncture",
            B: "Aromatherapy",
            C: "Reflexology",
            D: "Hypnotherapy"
            },
            answer: "Acupuncture"
            },
            {
                id: 16,
                question: "What is the condition that causes excessive sweating?",
                options: {
                A: "Hyperhidrosis",
                B: "Hypohidrosis",
                C: "Anhidrosis",
                D: "Diaphoresis"
                },
                answer: "Hyperhidrosis"
                },
                
                {
                id: 17,
                question: "What is the name of the rare genetic disorder that causes premature aging?",
                options: {
                A: "Progeria",
                B: "Hutchinson-Gilford syndrome",
                C: "Werner syndrome",
                D: "Alzheimer's disease"
                },
                answer: "Progeria"
                },
                
                {
                id: 18,
                question: "What is the term for an abnormally high body temperature?",
                options: {
                A: "Hyperthermia",
                B: "Hypothermia",
                C: "Hypoglycemia",
                D: "Hyperglycemia"
                },
                answer: "Hyperthermia"
                },
                
                {
                id: 19,
                question: "What is the condition characterized by a deficiency of vitamin D?",
                options: {
                A: "Scurvy",
                B: "Beriberi",
                C: "Rickets",
                D: "Kwashiorkor"
                },
                answer: "Rickets"
                },
                
                {
                id: 20,
                question: "What is the name of the condition where there is a loss of vision in the center of the visual field?",
                options: {
                A: "Astigmatism",
                B: "Glaucoma",
                C: "Cataracts",
                D: "Macular degeneration"
                },
                answer: "Macular degeneration"
                },
                
                {
                id: 21,
                question: "What is the term for the ringing or buzzing sound in the ear?",
                options: {
                A: "Tinnitus",
                B: "Vertigo",
                C: "Meniere's disease",
                D: "Otitis media"
                },
                answer: "Tinnitus"
                },
                
                {
                id: 22,
                question: "What is the name of the condition where there is an excessive accumulation of fluid in the lungs?",
                options: {
                A: "Pneumonia",
                B: "Asthma",
                C: "Pulmonary edema",
                D: "Tuberculosis"
                },
                answer: "Pulmonary edema"
                },
                
                {
                id: 23,
                question: "What is the term for the loss of the ability to taste?",
                options: {
                A: "Hypogeusia",
                B: "Anosmia",
                C: "Ageusia",
                D: "Dysgeusia"
                },
                answer: "Ageusia"
                },
                
                {
                id: 24,
                question: "What is the name of the condition where there is an inflammation of the appendix?",
                options: {
                A: "Appendicitis",
                B: "Pancreatitis",
                C: "Cholecystitis",
                D: "Gastritis"
                },
                answer: "Appendicitis"
                },
                
                {
                id: 25,
                question: "What is the term for the difficulty in breathing that occurs during sleep?",
                options: {
                A: "Sleep apnea",
                B: "Insomnia",
                C: "Narcolepsy",
                D: "Cataplexy"
                },
                answer: "Sleep apnea"
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