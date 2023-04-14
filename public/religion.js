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
        question: "What is the name of the festival of lights celebrated by Hindus?",
        options: {
        A: "Holi",
        B: "Diwali",
        C: "Eid al-Fitr",
        D: "Hanukkah"
        },
        answer: "Diwali"
        },
        
        {
        id: 2,
        question: "What is the name of the holy book of the Sikh religion?",
        options: {
        A: "Bhagavad Gita",
        B: "Quran",
        C: "Bible",
        D: "Guru Granth Sahib"
        },
        answer: "Guru Granth Sahib"
        },
        
        {
        id: 3,
        question: "What is the name of the founder of the Bahá'í faith?",
        options: {
        A: "Bahá'u'lláh",
        B: "Muhammad",
        C: "Buddha",
        D: "Jesus"
        },
        answer: "Bahá'u'lláh"
        },
        
        {
        id: 4,
        question: "What is the name of the Japanese religion that centers around the veneration of nature spirits?",
        options: {
        A: "Shinto",
        B: "Taoism",
        C: "Confucianism",
        D: "Zen"
        },
        answer: "Shinto"
        },
        
        {
        id: 5,
        question: "What is the name of the sacred river in Hinduism?",
        options: {
        A: "Nile",
        B: "Ganges",
        C: "Euphrates",
        D: "Yangtze"
        },
        answer: "Ganges"
        },
        
        {
        id: 6,
        question: "What is the name of the founder of the Mormon religion?",
        options: {
        A: "Joseph Smith",
        B: "Martin Luther",
        C: "John Calvin",
        D: "John Wesley"
        },
        answer: "Joseph Smith"
        },
        
        {
        id: 7,
        question: "What is the name of the holy text in the Zoroastrian religion?",
        options: {
        A: "Torah",
        B: "Vedas",
        C: "Zend Avesta",
        D: "Kojiki"
        },
        answer: "Zend Avesta"
        },
        
        {
        id: 8,
        question: "What is the name of the Buddhist festival that celebrates the birth, enlightenment, and death of the Buddha?",
        options: {
        A: "Wesak",
        B: "Diwali",
        C: "Holi",
        D: "Eid al-Fitr"
        },
        answer: "Wesak"
        },
        
        {
        id: 9,
        question: "What is the name of the Islamic holy month of fasting?",
        options: {
        A: "Ramadan",
        B: "Eid al-Fitr",
        C: "Hajj",
        D: "Zakat"
        },
        answer: "Ramadan"
        },
        
        {
        id: 10,
        question: "What is the name of the holy book in the Jain religion?",
        options: {
        A: "Bhagavad Gita",
        B: "Quran",
        C: "Bible",
        D: "Agamas"
        },
        answer: "Agamas"
        },
        {
            id: 11,
            question: "What religion believes that the universe and everything in it is a manifestation of the divine and that God is present in all things?",
            options: {
            A: "Buddhism",
            B: "Jainism",
            C: "Hinduism",
            D: "Taoism"
            },
            answer: "Hinduism"
            },
            {
            id: 12,
            question: "Which religion believes that the founder, Bahá'u'lláh, is the most recent messenger of God?",
            options: {
            A: "Bahá'í Faith",
            B: "Islam",
            C: "Christianity",
            D: "Judaism"
            },
            answer: "Bahá'í Faith"
            },
            {
            id: 13,
            question: "What religion believes that the Messiah has already arrived and that he is Jesus Christ?",
            options: {
            A: "Christianity",
            B: "Judaism",
            C: "Islam",
            D: "Zoroastrianism"
            },
            answer: "Christianity"
            },
            {
            id: 14,
            question: "What religion is based on the teachings of Guru Nanak and stresses the importance of meditation and selfless service?",
            options: {
            A: "Sikhism",
            B: "Buddhism",
            C: "Jainism",
            D: "Hinduism"
            },
            answer: "Sikhism"
            },
            {
            id: 15,
            question: "What religion believes in the existence of an all-powerful God and that the primary purpose of human life is to worship and obey God?",
            options: {
            A: "Islam",
            B: "Judaism",
            C: "Christianity",
            D: "Hinduism"
            },
            answer: "Islam"
            },
            {
            id: 16,
            question: "What religion believes in the existence of multiple gods and goddesses and that the universe and everything in it is a manifestation of divine power?",
            options: {
            A: "Wicca",
            B: "Hinduism",
            C: "Judaism",
            D: "Buddhism"
            },
            answer: "Hinduism"
            },
            {
            id: 17,
            question: "What religion believes that the universe is governed by the principles of Yin and Yang and that ultimate reality is beyond the reach of words and concepts?",
            options: {
            A: "Taoism",
            B: "Confucianism",
            C: "Shinto",
            D: "Sikhism"
            },
            answer: "Taoism"
            },
            {
            id: 18,
            question: "What religion believes that the universe and all living things are interconnected and that human beings have a responsibility to protect the natural world?",
            options: {
            A: "Paganism",
            B: "Buddhism",
            C: "Judaism",
            D: "Christianity"
            },
            answer: "Paganism"
            },
            {
            id: 19,
            question: "What religion believes that the ultimate goal of human existence is to achieve enlightenment and break free from the cycle of reincarnation?",
            options: {
            A: "Hinduism",
            B: "Buddhism",
            C: "Jainism",
            D: "Sikhism"
            },
            answer: "Buddhism"
            },
            {
                id: 20,
                question: "What is the name of the sacred text in the Zoroastrian religion, which contains the teachings of the prophet Zoroaster?",
                options: {
                A: "Vedas",
                B: "Bhagavad Gita",
                C: "Zend Avesta",
                D: "Quran"
                },
                answer: "Zend Avesta"
                },            
                {
                    id: 21,
                    question: "What is the name of the holy text in the Ayyavazhi religion, which originated in South India?",
                    options: {
                    A: "Vedas",
                    B: "Bible",
                    C: "Quran",
                    D: "Akilathirattu Ammanai"
                    },
                    answer: "Akilathirattu Ammanai"
                    },
                    {
                    id: 22,
                    question: "What is the name of the Japanese religion that worships the god Amaterasu, the goddess of the sun?",
                    options: {
                    A: "Shinto",
                    B: "Buddhism",
                    C: "Confucianism",
                    D: "Taoism"
                    },
                    answer: "Shinto"
                    },
                    {
                    id: 23,
                    question: "What is the name of the holiday celebrated by Muslims at the end of Ramadan?",
                    options: {
                    A: "Eid al-Adha",
                    B: "Eid al-Fitr",
                    C: "Ashura",
                    D: "Hajj"
                    },
                    answer: "Eid al-Fitr"
                    },
                    {
                    id: 24,
                    question: "What is the name of the religion that combines elements of Christianity and traditional African beliefs and practices?",
                    options: {
                    A: "Voodoo",
                    B: "Santeria",
                    C: "Candomble",
                    D: "Rastafarianism"
                    },
                    answer: "Santeria"
                    },
                    {
                    id: 25,
                    question: "What is the name of the holy text in the Sikh religion, which was compiled by the Sikh Gurus?",
                    options: {
                    A: "Guru Granth Sahib",
                    B: "Bhagavad Gita",
                    C: "Dhammapada",
                    D: "Zend Avesta"
                    },
                    answer: "Guru Granth Sahib"
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