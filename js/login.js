const LoginDiv = document.querySelector("#login");
const LoginForm = document.querySelector("#login-form");
const LoginInput = document.querySelector("#login-form input");
const LoginFormBtn = document.querySelector("#login-form-button");
const errorMessage = LoginDiv.querySelector("span");
const Contents = document.querySelector("#contents");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
    event.preventDefault();
    const username = LoginInput.value;
    if(username === "") {
        errorMessage.className = "error";
    }
    else if(username !== ""){
        const hello = document.querySelector("#welcome span");
        hello.innerText = `${username}님 `;
        LoginDiv.classList.add(HIDDEN_CLASSNAME);
        Contents.className = "wrap-content";
        localStorage.setItem(USERNAME_KEY, username);
    }
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

console.log(savedUserName);

if(savedUserName === null) {
    LoginDiv.classList.remove(HIDDEN_CLASSNAME);
    Contents.classname = "hidden";
    LoginForm.addEventListener("submit", onLoginSubmit);
    LoginFormBtn.addEventListener("submit", onLoginSubmit);
} else {
    Contents.className = "wrap-content";
}