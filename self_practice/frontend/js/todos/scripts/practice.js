var todoData = {}
var id = 0;
var count = 0; // left
var state = ""; // "All", "Active", "Completed"
const ulNode = document.getElementById("todo-list");

// changedCheck(id)
const changeChecked = (id) => {
    count += todoData[id].checked ? 1 : -1;
    document.getElementById("todo-app-count").innerHTML = count;
    todoData[id].checked = !todoData[id].checked;
    const liNode = document.getElementById(`li-${id}`);
    liNode.className = todoData[id].checked ? "todo-app__item todo-app__item-done" : "todo-app__item";
}

// removeTodo(id)
const removeTodo = (id) => {
    count += todoData[id].checked ? 0 : -1;
    document.getElementById("todo-app-count").innerHTML = count;
    delete (todoData[id]);
    const liNode = document.getElementById(`li-${id}`);
    liNode.remove();
}

const addNewTodo = (data) => {
    const { id, task, checked } = data;

    const liNode = document.createElement("li");
    const divNode = document.createElement("div");
    const inputNode = document.createElement("input");
    const lableNode = document.createElement("label");
    const h1Node = document.createElement("h1");
    const imgNode = document.createElement("img");

    liNode.className = "todo-app__item";
    liNode.id = `li-${id}`;
    divNode.className = "todo-app__checkbox";
    inputNode.id = id; // id is unique for any tag
    inputNode.type = "checkbox";
    inputNode.checked = checked;
    inputNode.addEventListener("click", () => changeChecked(id));
    lableNode.htmlFor = id;
    h1Node.className = "todo-app__item-detail";
    h1Node.innerText = task;
    imgNode.id = `img${id}`;
    imgNode.className = "todo-app__item-x";
    imgNode.src = "images/x.png";
    imgNode.alt = "x";
    imgNode.addEventListener("click", () => removeTodo(id));

    divNode.appendChild(inputNode);
    divNode.appendChild(lableNode);
    liNode.appendChild(divNode);
    liNode.appendChild(h1Node);
    liNode.appendChild(imgNode);

    ulNode.append(liNode);
    count += 1;
    document.getElementById("todo-app-count").innerHTML = count;
}

const listenInput = (e) => {
    if (e.key !== "Enter")
        return;
    const task = e.target.value;
    const data = { task, id, checked: false };
    addNewTodo(data);
    todoData[id] = { task, checked: false };
    e.target.value = "";
    id += 1;
}

const inputNode = document.getElementById("todo-input");
inputNode.addEventListener("keydown", listenInput);

const changeStatus = (new_state) => {
    if (state === new_state)
        return;
    state = new_state;
    switch (state) {
        case "All":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = "flex";
            })
            break;
        case "Active":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = checked ? "none" : "flex";
            })
            break;
        case "Completed":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = checked ? "flex" : "none";
            })
            break;
        default:
            break;
    }
}

document.getElementById("todo-all").addEventListener("click", () => changeStatus("All"));
document.getElementById("todo-active").addEventListener("click", () => changeStatus("Active"));
document.getElementById("todo-completed").addEventListener("click", () => changeStatus("Completed"));

const removeCompleted = () => {
    Object.keys(todoData).forEach((id) => {
        const { checked } = todoData[id];
        if (checked)
            removeTodo(id);
    })
}

document.getElementById("todo-clear-completed").addEventListener("click", removeCompleted);