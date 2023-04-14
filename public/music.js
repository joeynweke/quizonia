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
        question: "What is the name of the lead singer of the band U2?",
        options: {
        A: "Bono",
        B: "The Edge",
        C: "Adam Clayton",
        D: "Larry Mullen Jr."
        },
        answer: "Bono"
        },
        
        {
        id: 2,
        question: "Which 1980s hit song by Michael Jackson features a voiceover by horror film actor Vincent Price?",
        options: {
        A: "Beat It",
        B: "Billie Jean",
        C: "Thriller",
        D: "Smooth Criminal"
        },
        answer: "Thriller"
        },
        
        {
        id: 3,
        question: "What is the name of the famous French electronic music duo who scored a worldwide hit with their 1998 song 'Da Funk'?",
        options: {
        A: "Air",
        B: "Justice",
        C: "Daft Punk",
        D: "Kavinsky"
        },
        answer: "Daft Punk"
        },
        
        {
        id: 4,
        question: "Who was the lead singer of the 1970s rock band Queen?",
        options: {
        A: "Freddie Mercury",
        B: "Brian May",
        C: "Roger Taylor",
        D: "John Deacon"
        },
        answer: "Freddie Mercury"
        },
        
        {
        id: 5,
        question: "Which 1980s pop icon recorded the hit songs 'Like a Virgin' and 'Material Girl'?",
        options: {
        A: "Madonna",
        B: "Cyndi Lauper",
        C: "Whitney Houston",
        D: "Cher"
        },
        answer: "Madonna"
        },
        
        {
        id: 6,
        question: "What is the name of the English singer-songwriter who released her debut album '19' in 2008 and went on to win multiple Grammy Awards?",
        options: {
        A: "Adele",
        B: "Duffy",
        C: "Leona Lewis",
        D: "Lily Allen"
        },
        answer: "Adele"
        },
        
        {
        id: 7,
        question: "Which iconic British band released the hit song 'Stairway to Heaven' in 1971?",
        options: {
        A: "Led Zeppelin",
        B: "The Rolling Stones",
        C: "The Beatles",
        D: "Pink Floyd"
        },
        answer: "Led Zeppelin"
        },,
        
        {
        id: 8,
        question: "Who is the rapper responsible for the hit song 'Old Town Road', which spent a record-breaking 19 weeks at number one on the US Billboard Hot 100 chart?",
        options: {
        A: "Lil Nas X",
        B: "Cardi B",
        C: "Kendrick Lamar",
        D: "Travis Scott"
        },
        answer: "Lil Nas X"
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
        answer: "Alanis Morisset"
    },
    {
        id: 10,
        question: "Who was the first musician to win a Nobel Prize in Literature, for 'having created new poetic expressions within the great American song tradition'?",
        options: {
        A: "Bob Dylan",
        B: "Leonard Cohen",
        C: "Joni Mitchell",
        D: "Patti Smith"
        },
        answer: "Bob Dylan"
        },
        
        {
        id: 11,
        question: "Which rock band's name is derived from a type of insect with a highly aggressive and territorial nature?",
        options: {
        A: "The Beatles",
        B: "The Rolling Stones",
        C: "Black Sabbath",
        D: "The Scorpions"
        },
        answer: "The Scorpions"
        },
        
        {
        id: 12,
        question: "Who wrote the classic opera 'The Barber of Seville', which features the famous aria 'Largo al factotum'?",
        options: {
        A: "Giuseppe Verdi",
        B: "Wolfgang Amadeus Mozart",
        C: "Richard Wagner",
        D: "Gioachino Rossini"
        },
        answer: "Gioachino Rossini"
        },
        
        {
        id: 13,
        question: "What is the name of the legendary rock band that was composed of Jimmy Page, Robert Plant, John Paul Jones, and John Bonham?",
        options: {
        A: "The Who",
        B: "Led Zeppelin",
        C: "Pink Floyd",
        D: "The Doors"
        },
        answer: "Led Zeppelin"
        },
        
        {
        id: 14,
        question: "Which famous classical composer was deaf for most of his life, but still managed to create some of the most beautiful music ever written?",
        options: {
        A: "Ludwig van Beethoven",
        B: "Johann Sebastian Bach",
        C: "Wolfgang Amadeus Mozart",
        D: "Franz Schubert"
        },
        answer: "Ludwig van Beethoven"
        },
        
        {
        id: 15,
        question: "What is the name of the electronic music duo composed of Guy-Manuel de Homem-Christo and Thomas Bangalter, who are famous for wearing robot helmets in their performances?",
        options: {
        A: "Daft Punk",
        B: "The Chemical Brothers",
        C: "The Prodigy",
        D: "Justice"
        },
        answer: "Daft Punk"
        },
        
        {
        id: 16,
        question: "Which jazz musician is known for his distinctive trumpet playing style, as well as his collaborations with vocalists like Ella Fitzgerald and Billie Holiday?",
        options: {
        A: "Miles Davis",
        B: "Louis Armstrong",
        C: "Dizzy Gillespie",
        D: "Chet Baker"
        },
        answer: "Louis Armstrong"
        },
        
        {
        id: 17,
        question: "What is the name of the American singer-songwriter who is known for her unique vocal style, as well as her activism and political views?",
        options: {
        A: "Nina Simone",
        B: "Joni Mitchell",
        C: "Joni Mitchell",
        D: "Patti Smith"
        },
        answer: "Nina Simone"
        },
        {
            id: 18,
            question: "What is the name of the American composer who is known for his minimalist style, and whose works include 'Music for 18 Musicians' and 'Different Trains'?",
            options: {
            A: "John Adams",
            B: "Steve Reich",
            C: "Terry Riley",
            D: "Philip Glass"
            },
            answer: "Steve Reich"
            },
            
            {
            id: 19,
            question: "What is the name of the ancient Chinese musical instrument that is known for its distinctive sound and is often used in traditional Chinese music?",
            options: {
            A: "Guqin",
            B: "Sheng",
            C: "Erhu",
            D: "Dizi"
            },
            answer: "Guqin"
            },
            
            {
            id: 20,
            question: "What is the name of the Indian classical music system that is based on the concept of ragas, which are melodic frameworks that evoke different moods and emotions?",
            options: {
            A: "Hindustani",
            B: "Carnatic",
            C: "Dhrupad",
            D: "Khyal"
            },
            answer: "Hindustani"
            },
            
            {
            id: 21,
            question: "What is the name of the African instrument that is made from a calabash and played with the thumbs, and is often used in traditional African music?",
            options: {
            A: "Balafon",
            B: "Mbira",
            C: "Kora",
            D: "Shekere"
            },
            answer: "Mbira"
            },
            
            {
            id: 22,
            question: "What is the name of the musical technique that involves playing two notes at the same time, and is often used in certain styles of jazz and blues music?",
            options: {
            A: "Harmonic",
            B: "Melodic",
            C: "Polyphonic",
            D: "Monophonic"
            },
            answer: "Harmonic"
            },
            
            {
            id: 23,
            question: "What is the name of the traditional Korean musical genre that is characterized by its use of the gayageum, a twelve-stringed zither-like instrument?",
            options: {
            A: "Pansori",
            B: "Jeongak",
            C: "Sujecheon",
            D: "Gagok"
            },
            answer: "Jeongak"
            },
            
            {
            id: 24,
            question: "What is the name of the Canadian electronic music producer who is known for his experimental and avant-garde style, and whose albums include 'Visions' and 'Art Angels'?",
            options: {
            A: "Grimes",
            B: "Caribou",
            C: "Tim Hecker",
            D: "Jessy Lanza"
            },
            answer: "Grimes"
            },
            
            {
            id: 25,
            question: "What is the name of the genre of music that originated in the early 2000s and is characterized by its use of glitchy, chopped-up samples and unconventional rhythms?",
            options: {
            A: "Vaporwave",
            B: "Seapunk",
            C: "Future Funk",
            D: "Wonky"
            },
            answer: "Wonky"
            }
        ]

        
let answersTotal = questions.length;
let quizNumVal = quizNum.innerHTML = questions.length -1;
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