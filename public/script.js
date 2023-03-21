// const checkbox = document.getElementById('checkbox');

// checkbox.addEventListener('change', ()=>{
//   document.body.classList.toggle('dark');
// })
function scriptRun(){
    document.querySelector("#con").classList.add('hide');
    document.querySelector("#search").
    addEventListener("input", fiterList);
    

    function fiterList(){
        
        const searchInput = document.querySelector("#search");
        const filter = searchInput.value.toLowerCase();
        const listItems = document.querySelectorAll(".anchor-text");

        listItems.forEach((item) => {
            let text = item.textContent;
            if(text.toLowerCase().includes(filter.toLowerCase())){
                item.style.display = 'block';
            }
            else{
                item.style.display = 'none';
            }
            document.querySelector("#con").classList.remove('hide');
        });

        function clearInput(){
            if(searchInput.value.length < 1){
                document.querySelector("#con").classList.add('hide');
            }
        }
        clearInput()
    };
}
scriptRun()

function user() {
    const user = document.querySelector(".user-profile");
    const userMenu = document.querySelector("#user-menu");
    try {
        user.onclick = () => {
            if(userMenu.classList == 'hide'){
                userMenu.classList = 'user-menu'
            }
            else{
                userMenu.classList = 'hide'
            }
        };
    } catch (error) {
        
        return null
    }
    
}

user()