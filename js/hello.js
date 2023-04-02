const hello = document.querySelector("#welcome span");
const username = localStorage.getItem("username");

hello.innerText = `${username}님 `;