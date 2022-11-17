var todoData = {}
var id = 0;
var stat = "ALL"; // "ALL", "ACTIVE", "COMPLETED"
var count = 0;

const ulNode = document.getElementById("todo-list");
const removeTodo = (id) => {
    count += todoData[id].checked ? 0 : -1;
    document.getElementById("left_count").innerText = count;
    delete(todoData[id]);
    const liNode = document.getElementById(`li-${id}`);
    liNode.remove();
}

const changeChecked = (id) =>{
    count += todoData[id].checked ? 1 : -1;
    document.getElementById("left_count").innerText = count;
    todoData[id].checked = !todoData[id].checked;
}

const addNewTodo = (data)=>{
    // data = {
    //     "id": 0,
    //     "task": "Testing text",
    //     "checked": false
    // }
    const {id, task, checked} = data;
    const liNode = document.createElement("li");
    const divNode = document.createElement("div");
    const inputNode = document.createElement("input");
    const labelNode = document.createElement("label");
    const h1Node = document.createElement("h1");
    const imgNode = document.createElement("img");

    liNode.appendChild(divNode);
    liNode.appendChild(h1Node);
    liNode.append(imgNode);
    divNode.append(inputNode);
    divNode.append(labelNode);

    if (stat === "COMPLETED"){
        liNode.style.display = "none";
    }

    liNode.className ="todo-app__item";
    liNode.id = `li-${id}`;
    divNode.className = "todo-app__checkbox";
    inputNode.type = "checkbox";
    inputNode.id = id;
    inputNode.checked = checked;
    inputNode.addEventListener("click", ()=>changeChecked(id));
    labelNode.htmlFor = id;
    h1Node.className = "todo-app__item-detail";
    h1Node.innerText = task;
    imgNode.src = "x.png";
    imgNode.className = "todo-app__item-x";
    imgNode.id = `img${id}`;
    imgNode.addEventListener("click", ()=>removeTodo(id));

    ulNode.append(liNode);
    count += 1;
    document.getElementById("left_count").innerText = count;
}
// todoData.forEach(addNewTodo);


// Read input
const listenInput = (e) => {
    if (e.key !== "Enter"){
        return;
    }
    const task = e.target.value;
    const data = {task, id, checked: false};
    addNewTodo(data);
    todoData[id] = {task, checked: false};
    e.target.value = "";
    id++;
}

const inputNode = document.getElementById("todo-input");
inputNode.addEventListener("keydown", listenInput);

const changeStatus = (new_stat) => {
    if (stat === new_stat){
        return;
    }
    stat = new_stat;
    switch (stat){
        case "ALL":
            // const liNodeList = document.getElementsByClassName("todo-app__item");
            // [].forEach.call(liNodeList, (Node)=>{
            //     Node.style.display = "flex";
            // })

            Object.keys(todoData).forEach((id)=>{
                const {checked} = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = "flex";
            })

            break;
        case "ACTIVE":
            Object.keys(todoData).forEach((id)=>{
                const {checked} = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = checked ? "none" : "flex";
            })
            break;
        case "COMPLETED":
            Object.keys(todoData).forEach((id)=>{
                const {checked} = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = !checked ? "none" : "flex";
            })
            break;
        default:
            break;
    }
}

document.getElementById("view_0").addEventListener("click", () => changeStatus("ALL")); 
document.getElementById("view_1").addEventListener("click", () => changeStatus("ACTIVE")); 
document.getElementById("view_2").addEventListener("click", () => changeStatus("COMPLETED")); 

const removeComplete = () => {
    Object.keys(todoData).forEach((id)=>{
        const {checked} = todoData[id];
        if (checked) {
            removeTodo(id);
        }
    })
}

document.getElementById("clear_completed_button").addEventListener("click", removeComplete);
