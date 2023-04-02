const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input")
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

//const toDos = []; // 배열이 비어있어서 새로고침할 때마다 localstorage가 빔
let toDos = [];
 
function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // JSON.stringify : 뭐든간에 문자로 바꿔줌
}

function deleteToDo(event) {
    const li = event.target.parentElement; // event.target : button, event.target.parentElement : li
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}
function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id= newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos); // 문자열이 아니라 JS에서 사용 가능한 object로 만들어줌, 여기서는 배열이 됨
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo); // 배열의 각 item에 대해 함수를 실행하게 함
}

function sexyFilter(element) {
    return toDos.id !== element.id;
}

[1,2,3,4].filter(sexyFilter);