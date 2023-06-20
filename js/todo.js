const toDoForm = document.querySelector("#todo-form");
const toDoInput = document.querySelector('#todo-form input');
const toDoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

const saveToDos = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const deleteTodo = (event) => {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
};

const paintToDo = (newTodo) => {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const checkBox = document.createElement("input");
  checkBox.type = "checkbox";
  const span = document.createElement("span");
  span.innerText = newTodo.text; // 텍스트 설정
  li.appendChild(checkBox);
  li.appendChild(span); // span을 li의 자식으로 추가
  checkBox.addEventListener("click", handleToDoCheck);

  const button = document.createElement("button");
  button.innerText = "✖️";
  button.addEventListener("click", deleteTodo);
  li.appendChild(button);
  toDoList.appendChild(li);
};


const handleToDoSubmit = (event) => {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  if (toDos.length >= 6) {
    alert(`You cannot exceed six items in the To-Do list.\n투두 리스트는 6개를 초과해서 등록할 수 없어요. 😥`);
    return;
  }

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
};

const handleToDoCheck = (event) => {
  const checkBox = event.target;
  const li = checkBox.parentNode;
  const todoText = li.childNodes[1];
  const index = Array.from(li.parentNode.children).indexOf(li);

  toDos[index].checked = checkBox.checked;

  if (checkBox.checked) {
    todoText.style.textDecoration = "line-through";
  } else {
    todoText.style.textDecoration = "none";
  }
};

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
};