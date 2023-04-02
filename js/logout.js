const Logout = document.querySelector("#welcome");

function onLogout() {
    localStorage.removeItem(USERNAME_KEY);
    window.location.reload();
}


Logout.addEventListener("click", onLogout);