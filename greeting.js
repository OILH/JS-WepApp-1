const form = document.querySelector(".js-form"),
      input = form.querySelector("input")
      greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",  //  Local Storage
      SHOWING_CN = "showing";   //  Class Name

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

 function handleSubmit(event){
     event.preventDefault();
     const currentValue = input.value;
     paintGreeting(currentValue);
     saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);     // the class is showing this to the form
    form.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);  // hide the form to paint the text
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
            // User doesn't exist
            askForName();
        } else {
            // User exists
            paintGreeting(currentUser);
    }
}

function init(){
    loadName();
}

init();