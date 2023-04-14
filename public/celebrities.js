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
      question: 'Which famous actress appeared in the movies "Thelma & Louise" and "Dead Man Walking"?',
      options: {
        A: 'Meryl Streep',
        B: 'Susan Sarandon',
        C: 'Jodie Foster',
        D: 'Julia Roberts'
      },
      answer: 'Susan Sarandon'
    },
  
    {
      id: 2,
      question: 'Which famous actor starred in the movies "Rain Man" and "The Graduate"?',
      options: {
        A: 'Al Pacino',
        B: 'Robert De Niro',
        C: 'Dustin Hoffman',
        D: 'Jack Nicholson'
      },
      answer: 'Dustin Hoffman'
    },
  
    {
      id: 3,
      question: 'Which famous singer is known as the "Queen of Pop"?',
      options: {
        A: 'Beyoncé',
        B: 'Madonna',
        C: 'Lady Gaga',
        D: 'Adele'
      },
      answer: 'Madonna'
    },
  
    {
      id: 4,
      question: 'Which famous actor starred in the movies "The Fugitive" and "Under Siege"?',
      options: {
        A: 'Harrison Ford',
        B: 'Arnold Schwarzenegger',
        C: 'Sylvester Stallone',
        D: 'Steven Seagal'
      },
      answer: 'Steven Seagal'
    },
  
    {
      id: 5,
      question: 'Which famous musician was known as "The King of Pop"?',
      options: {
        A: 'Elvis Presley',
        B: 'Michael Jackson',
        C: 'Prince',
        D: 'David Bowie'
      },
      answer: 'Michael Jackson'
    },
  
    {
      id: 6,
      question: 'Which famous actress starred in the movies "The Silence of the Lambs" and "Contact"?',
      options: {
        A: 'Helen Mirren',
        B: 'Jodie Foster',
        C: 'Cate Blanchett',
        D: 'Emma Thompson'
      },
      answer: 'Jodie Foster'
    },
  
    {
      id: 7,
      question: 'Which famous actor starred in the movies "Pulp Fiction" and "Die Hard with a Vengeance"?',
      options: {
        A: 'Bruce Willis',
        B: 'Samuel L. Jackson',
        C: 'John Travolta',
        D: 'Nicolas Cage'
      },
      answer: 'Samuel L. Jackson'
    },
  
    {
      id: 8,
      question: 'Which famous singer is known as "The Boss"?',
      options: {
        A: 'Bruce Springsteen',
        B: 'Bob Dylan',
        C: 'David Bowie',
        D: 'Elton John'
      },
      answer: 'Bruce Springsteen'
    },
  
    {
      id: 9,
      question: 'Which famous actress starred in the movies "The Godfather" and "Annie Hall"?',
      options: {
        A: 'Meryl Streep',
        B: 'Faye Dunaway',
        C: 'Diane Keaton',
        D: 'Jane Fonda'
      },
      answer: 'Diane Keaton'
    },
    {
        id: 10,
        question : 'What famous musician is known for hits like "Purple Rain" and "When Doves Cry"?',
        options : {
        A: 'Michael Jackson',
        B: 'Prince',
        C: 'Elvis Presley',
        D: 'David Bowie'
        },
        answer : 'Prince'
        },
        {
        id: 11,
        question : 'Who is the lead vocalist of the band Coldplay?',
        options : {
        A: 'Chris Martin',
        B: 'Adam Levine',
        C: 'Ed Sheeran',
        D: 'Sam Smith'
        },
        answer : 'Chris Martin'
        },
        {
        id: 12,
        question : 'Who is the highest-grossing actor of all time?',
        options : {
        A: 'Tom Cruise',
        B: 'Robert Downey Jr.',
        C: 'Samuel L. Jackson',
        D: 'Will Smith'
        },
        answer : 'Samuel L. Jackson'
        },
        {
        id: 13,
        question : 'Which famous comedian and actor starred in the films "Ace Ventura: Pet Detective" and "The Mask"?',
        options : {
        A: 'Jim Carrey',
        B: 'Eddie Murphy',
        C: 'Steve Martin',
        D: 'Adam Sandler'
        },
        answer : 'Jim Carrey'
        },
        {
        id: 14,
        question : 'Which famous musician is known as the "Queen of Pop"?',
        options : {
        A: 'Madonna',
        B: 'Beyonce',
        C: 'Lady Gaga',
        D: 'Taylor Swift'
        },
        answer : 'Madonna'
        },
        {
        id: 15,
        question : 'What famous director is known for films such as "Jaws," "E.T. the Extra-Terrestrial," and "Jurassic Park"?',
        options : {
        A: 'Steven Spielberg',
        B: 'Martin Scorsese',
        C: 'Quentin Tarantino',
        D: 'Christopher Nolan'
        },
        answer : 'Steven Spielberg'
        },
        {
        id: 16,
        question : 'Which famous actor played the character "Forrest Gump" in the film of the same name?',
        options : {
        A: 'Tom Hanks',
        B: 'Robert De Niro',
        C: 'Al Pacino',
        D: 'Dustin Hoffman'
        },
        answer : 'Tom Hanks'
        },
        {
        id: 17,
        question : 'Who is the creator of the television series "The Office"?',
        options : {
        A: 'Greg Daniels',
        B: 'David Chase',
        C: 'Matthew Weiner',
        D: 'Aaron Sorkin'
        },
        answer : 'Greg Daniels'
        },
        {
        id: 18,
        question : 'Which famous singer was known as the "King of Pop"?',
        options : {
        A: 'Elvis Presley',
        B: 'Michael Jackson',
        C: 'Freddie Mercury',
        D: 'David Bowie'
        },
        answer : 'Michael Jackson'
        },
        {
        id: 19,
        question : `Which famous actress played the character "Holly Golightly" in the film "Breakfast at Tiffany's"?`,
        options : {
        A: 'Audrey Hepburn',
        B: 'Marilyn Monroe',
        C: 'Elizabeth Taylor',
        D: 'Grace Kelly'
        },
        answer : 'Audrey Hepburn'
        },
    {
        id: 20,
        question: 'What is the real name of the actress who played the character "Eleven" in the TV series "Stranger Things"?',
        options: {
        A: 'Millie Bobby Brown',
        B: 'Winona Ryder',
        C: 'Sadie Sink',
        D: 'Natalia Dyer'
        },
        answer: 'Millie Bobby Brown'
        },
        {
        id: 21,
        question: 'Which rapper starred in the movie "8 Mile"?',
        options: {
        A: 'Jay-Z',
        B: 'Eminem',
        C: 'Drake',
        D: 'Kanye West'
        },
        answer: 'Eminem'
        },
        {
        id: 22,
        question: 'What is the full name of the actress who played Hermione Granger in the "Harry Potter" movie series?',
        options: {
        A: 'Emma Watson',
        B: 'Emma Stone',
        C: 'Emma Thompson',
        D: 'Emma Roberts'
        },
        answer: 'Emma Watson'
        },
        {
        id: 23,
        question: 'Which actor played the character "Tyler Durden" in the movie "Fight Club"?',
        options: {
        A: 'Brad Pitt',
        B: 'Tom Cruise',
        C: 'Matt Damon',
        D: 'Leonardo DiCaprio'
        },
        answer: 'Brad Pitt'
        },
        {
        id: 24,
        question: 'What is the real name of the singer who performed the hit song "Bad Guy"?',
        options: {
        A: 'Taylor Swift',
        B: 'Ariana Grande',
        C: 'Billie Eilish',
        D: 'Lizzo'
        },
        answer: 'Billie Eilish'
        },
    {
        id: 25,
        question: 'What actress was the first woman to receive a star on the Hollywood Walk of Fame?',
        options: {
        A: 'Greta Garbo',
        B: 'Meryl Streep',
        C: 'Shirley Temple',
        D: 'Lucille Ball'
        },
        answer: 'Joan Crawford'
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