const form = document.getElementById("form");
//const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const signUp = document.getElementById("sign")
const btnCon = document.getElementById("btn-con");
const err = document.getElementById("error");
const login = document.querySelectorAll(".login");



const users = []


form.addEventListener("submit", (e) => {
    const passwordValue = password.value
   const confirmPasswordValue = confirmPassword.value
    const error = []
    e.preventDefault()
    function createUser(user){
        if(passwordValue.length <= 6){
            error.push('Password must be longer than six characters');

            login = false;
           }
           else if(confirmPasswordValue !== passwordValue){
            error.push('Both passwords do not match');
            login = false;
           }
           else{
            error.push('Account created successfully.');
            error.style.color = 'green';
            console.log(passwordValue, confirmPasswordValue)
            login = true;
           }
           err.innerHTML = error.join(',')

           if(login === true){
            try {
                login.style.color = 'red'
            } catch (error) {
                console.log(error)
            }
            alert('true')
           }
    }
    createUser()
})



