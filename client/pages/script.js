function scriptRun(){
    document.querySelector("#con").classList.add('hide');
    document.querySelector("#search").
    addEventListener("input", fiterList);

    document.querySelector("#search").
    addEventListener("focusout", clearFiterList);

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
        if(searchInput.value.length < 1){
            document.querySelector("#con").classList.add('hide');
        }
    };


}
scriptRun()