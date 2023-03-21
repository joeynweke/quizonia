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
                //hero.style.background = '#222'
                //hero.style.borderBottomColor = 'gainsboro';
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
                //hero.style.background = 'lightblue'
                //hero.style.borderBottomColor = 'dodgerblue';
                localStorage.setItem('key', lightmode)
            }
            
        } 
        checkbox.addEventListener("click",handleDarkMode)
        
    } 
    getMode()
}
