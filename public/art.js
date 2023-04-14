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
      question: "Who is the author of 'Pride and Prejudice'?",
      options: {
        A: "Charles Dickens",
        B: "Jane Austen",
        C: "Emily Bronte",
        D: "George Eliot"
      },
      answer: "Jane Austen"
    },
    {
      id: 2,
      question: "What is the title of F. Scott Fitzgerald's most famous novel?",
      options: {
        A: "The Catcher in the Rye",
        B: "The Great Gatsby",
        C: "1984",
        D: "Animal Farm"
      },
      answer: "The Great Gatsby"
    },
    {
      id: 3,
      question: "Who wrote 'Moby-Dick'?",
      options: {
        A: "Herman Melville",
        B: "Mark Twain",
        C: "William Faulkner",
        D: "Ernest Hemingway"
      },
      answer: "Herman Melville"
    },
    {
      id: 4,
      question: "What is the name of the protagonist in Ernest Hemingway's 'The Old Man and the Sea'?",
      options: {
        A: "Santiago",
        B: "Robert Jordan",
        C: "Frederic Henry",
        D: "Jake Barnes"
      },
      answer: "Santiago"
    },
    {
      id: 5,
      question: "Who is the author of 'Brave New World'?",
      options: {
        A: "Aldous Huxley",
        B: "Ray Bradbury",
        C: "J.D. Salinger",
        D: "William Golding"
      },
      answer: "Aldous Huxley"
    },
    {
      id: 6,
      question: "Who is the Italian Renaissance artist known for painting 'The Birth of Venus' and 'Primavera'?",
      options: {
      A: "Michelangelo",
      B: "Leonardo da Vinci",
      C: "Raphael",
      D: "Sandro Botticelli"
      },
      answer: "Sandro Botticelli"
      },
      
      {
      id: 7,
      question: "What is the name of the museum in St. Petersburg, Russia that houses the largest collection of paintings in the world?",
      options: {
      A: "The Louvre",
      B: "The British Museum",
      C: "The Hermitage",
      D: "The Prado"
      },
      answer: "The Hermitage"
      },
      {
      id: 8,
      question: "Who is the Mexican artist known for creating surrealist paintings such as 'The Two Fridas' and 'The Broken Column'?",
      options: {
      A: "Frida Kahlo",
      B: "Diego Rivera",
      C: "Pablo Picasso",
      D: "Salvador Dali"
      },
      answer: "Frida Kahlo"
      },
      
      {
      id: 9,
      question: "What is the name of the art movement that originated in Italy in the early 20th century and emphasized speed, technology, and the modern world?",
      options: {
      A: "Impressionism",
      B: "Cubism",
      C: "Futurism",
      D: "Dadaism"
      },
      answer: "Futurism"
      },
      
      {
      id: 10,
      question: "What is the name of the Japanese art form that involves folding paper into decorative shapes and figures?",
      options: {
      A: "Origami",
      B: "Ikebana",
      C: "Sumi-e",
      D: "Chigiri-e"
      },
      answer: "Origami"
      },
    {
        id: 11,
        question: "What is the title of Ernest Hemingway's memoir about his time in Paris?",
        options: {
          A: "A Moveable Feast",
          B: "The Sun Also Rises",
          C: "For Whom the Bell Tolls",
          D: "The Old Man and the Sea"
        },
        answer: "A Moveable Feast"
      },
      {
        id: 12,
        question: "Who is the author of 'The Picture of Dorian Gray'?",
        options: {
          A: "Oscar Wilde",
          B: "James Joyce",
          C: "Virginia Woolf",
          D: "D.H. Lawrence"
        },
        answer: "Oscar Wilde"
      },
      {
        id: 13,
        question: "What is the name of the family at the center of Gabriel Garcia Marquez's 'One Hundred Years of Solitude'?",
        options: {
          A: "The Buendias",
          B: "The Garcias",
          C: "The Mendozas",
          D: "The Rodriguezes"
        },
        answer: "The Buendias"
      },
      {
        id: 14,
        question: "Who is the author of the poem 'The Love Song of J. Alfred Prufrock'?",
        options: {
          A: "Robert Frost",
          B: "William Butler Yeats",
          C: "T.S. Eliot",
          D: "W.H. Auden"
        },
        answer: "T.S. Eliot"
      },
      {
        id: 15,
        question: "What is the name of the protagonist in Jane Eyre?",
        options: {
          A: "Emma Woodhouse",
          B: "Elinor Dashwood",
          C: "Elizabeth Bennet",
          D: "Jane Eyre"
        },
        answer: "Jane Eyre"
      },
      {
        id: 16,
        question: "What is the name of the famous sculpture by Michelangelo housed in the Vatican City?",
        options: {
        A: "The David",
        B: "The Pieta",
        C: "The Moses",
        D: "The Sistine Chapel Ceiling"
        },
        answer: "The Pieta"
        },
      {
        id: 17,
        question: "Who is the creator of the 'Campbell's Soup Cans' artwork?",
        options: {
        A: "Andy Warhol",
        B: "Salvador Dali",
        C: "Pablo Picasso",
        D: "Jackson Pollock"
        },
        answer: "Andy Warhol"
        },
        {
        id: 18,
        question: "What is the name of the famous fresco painted by Michelangelo in the Sistine Chapel?",
        options: {
        A: "The Last Supper",
        B: "The Creation of Adam",
        C: "The Temptation of Adam and Eve",
        D: "The Resurrection of Christ"
        },
        answer: "The Creation of Adam"
        },
      {
        id: 19,
        question: "Who is the artist behind the sculpture 'The Thinker'?",
        options: {
        A: "Pablo Picasso",
        B: "Auguste Rodin",
        C: "Claude Monet",
        D: "Salvador Dali"
        },
        answer: "Auguste Rodin"
        },
      {
        id: 20,
        question: "What is the name of the Dutch painter who created 'The Night Watch'?",
        options: {
        A: "Johannes Vermeer",
        B: "Rembrandt van Rijn",
        C: "Hieronymus Bosch",
        D: "Pieter Bruegel the Elder"
        },
        answer: "Rembrandt van Rijn"
        },
      {
        id: 21,
        question: "Who is the artist behind the 'Campbell's Soup Cans' artwork?",
        options: {
        A: "Andy Warhol",
        B: "Roy Lichtenstein",
        C: "Mark Rothko",
        D: "Willem de Kooning"
        },
        answer: "Andy Warhol"
        },
        {
        id: 22,
        question: "What is the name of the famous painting by Edvard Munch that depicts a figure screaming?",
        options: {
        A: "The Scream",
        B: "Starry Night",
        C: "The Persistence of Memory",
        D: "Guernica"
        },
        answer: "The Scream"
        },
      {
        id: 23,
        question: "What is the name of the famous graffiti artist known for his distinctive stenciling technique?",
        options: {
        A: "Banksy",
        B: "Keith Haring",
        C: "Jean-Michel Basquiat",
        D: "Shepard Fairey"
        },
        answer: "Banksy"
        },
        {
        id: 24,
        question: "What is the title of the landmark installation artwork created by Christo and Jeanne-Claude in 2005?",
        options: {
        A: "The Gates",
        B: "The Wall",
        C: "The Tower",
        D: "The Pyramid"
        },
        answer: "The Gates"
        },
        
        {
        id: 25,
        question: "Who is the artist known for creating sculptures made out of balloon animals?",
        options: {
        A: "Jeff Koons",
        B: "Damien Hirst",
        C: "Ai Weiwei",
        D: "Yayoi Kusama"
        },
        answer: "Jeff Koons"
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