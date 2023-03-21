window.onload = () => {
    const checkbox = document.getElementById('checkbox');
    function getMode(){
        const lightmode = 'light'
        const mode = localStorage.setItem('key', lightmode);

        function handleDarkMode(){
            const darkmode = 'dark'
            const getCurrentMode = localStorage.getItem("key");
            if(getCurrentMode == 'light'){
                const header = document.querySelectorAll("header");
                const h1 = document.querySelectorAll("h1");
                const button = document.querySelectorAll("button");
                const main = document.querySelectorAll("main");
                const p = document.querySelectorAll("p");
                const hero = document.querySelector(".hero");
                const box = document.querySelectorAll(".box1");

                header.forEach((element) => {
                    element.style.background = '#222'
                })
                h1.forEach((element) => {
                    element.style.color = 'gainsboro'
                })
                button.forEach((element) => {
                    element.style.borderColor = 'gainsboro'
                })
                main.forEach((element) => {
                    element.style.borderColor = 'gainsboro'
                })
                p.forEach((element) => {
                    element.style.color = 'gainsboro';
                })
                box.forEach((element) => {
                    element.style.borderBottomColor = 'gainsboro';
                })
                document.body.style.background = '#222'
                hero.style.background = '#222'
                hero.style.borderBottomColor = 'gainsboro';
                localStorage.setItem('key', darkmode)
            }
            else{
                const header = document.querySelectorAll("header");
                const h1 = document.querySelectorAll("h1");
                const button = document.querySelectorAll("button");
                const main = document.querySelectorAll("main");
                const p = document.querySelectorAll("p");
                const hero = document.querySelector(".hero");
                const box = document.querySelectorAll(".box1");

                header.forEach((element) => {
                    element.style.background = '#fff'
                })
                h1.forEach((element) => {
                    element.style.color = 'dodgerblue'
                })
                button.forEach((element) => {
                    element.style.borderColor = 'dodgerblue'
                })
                main.forEach((element) => {
                    element.style.borderColor = 'dodgerblue'
                })
                p.forEach((element) => {
                    element.style.color = 'dodgerblue';
                })
                box.forEach((element) => {
                    element.style.borderBottomColor = 'dodgerblue';
                })
                document.body.style.background = '#fff'
                hero.style.background = 'lightblue'
                hero.style.borderBottomColor = 'dodgerblue';
                localStorage.setItem('key', lightmode)
            }
            
        } 
        checkbox.addEventListener("click",handleDarkMode)
        
    } 
    getMode()
}


//     const header = document.querySelector("header")
//     const body = document.querySelector("body")
//     const h1 = document.querySelector("h1");
//     const hh1 = document.querySelector(".hh1");
//     const button = document.querySelector("button");
//     const input = document.querySelector("input");
//     const main = document.querySelector("main");
//     const loginh1 = document.querySelector(".loginh1");
//     const label = document.querySelectorAll(".label");
//     const hero= document.querySelector(".hero");
//     const box = document.querySelectorAll(".box1");
//     const upgradeBtn= document.querySelector(".btn");
//     const mode = document.querySelector(".mode");
//     const checkbox = document.getElementById('checkbox');

    
//     function changeMode(){
//         checkbox.onchange = ()=>{
//             try {
//                 if(checkbox.className.includes('light')){
//                     body.style.background = '#222';
//                     header.style.background = '#222';
//                     h1.style.color = 'gainsboro';
//                     button.style.borderColor = 'gainsboro';
//                     input.style.borderColor = 'gainsboro';
//                     input.style.outlineColor = 'gainsboro';
//                     main.style.borderColor = 'gainsboro';
//                     loginh1.style.color = 'gainsboro'
//                     hero.style.background = '#222';
//                     hero.style.borderColor = 'gainsboro';
//                     hero.style.color = 'gainsboro';
//                     hh1.style.color = 'gainsboro';
//                     box.forEach((item) => {
//                         item.style.borderColor = 'gainsboro';
//                         item.style.color = 'gainsboro'
//                     })
//                     upgradeBtn.style.borderColor = 'gainsboro';
//                     upgradeBtn.style.color = 'gainsboro';
//                     mode.style.color = 'gainsboro';
//                     checkbox.classList.remove("light")
//                 }else{
//                     body.style.background = 'white';
//                     header.style.background = 'white';
//                     h1.style.color = 'dodgerblue';
//                     button.style.borderColor = 'dodgerblue';
//                     input.style.borderColor = 'dodgerblue';
//                     input.style.outlineColor = 'lightblue';
//                     main.style.borderColor = 'dodgerblue';
//                     hero.style.background = 'lightblue';
//                     hero.style.borderColor = 'dodgerblue';
//                     hero.style.color = 'dodgerblue';
//                     hh1.style.color = 'dodgerblue';
//                     box.forEach((item) => {
//                         item.style.borderColor = 'dodgerblue';
//                         item.style.color = 'dodgerblue'
//                     })
//                     upgradeBtn.style.borderColor = 'dodgerblue';
//                     upgradeBtn.style.color = 'dodgerblue';
                    
//                     checkbox.classList.add("light")
//                 }
//             } catch (error) {
//                 console.log('err', error)
//             }
//         }
//     }
    
// changeMode()
