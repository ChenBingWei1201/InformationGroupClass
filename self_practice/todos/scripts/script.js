var todoData = {} // the array to store todo list items
var id = 0;
var stat = "All"; // "All", "Active", "Completed"
var count = 0; // counter to record how many items left in the list.

const ulNode = document.getElementById("todo-list"); // 拿到這個list

const removeTodo = (id) => { // a function to remove todo list item
    count += todoData[id].checked ? 0 : -1; // 原本有"checked"count就不變(left維持)，沒有就count減少一(left少1)
    document.getElementById("todo-app-count").innerText = count; // 拿到"todo-app-count"，將其內容改成count
    delete(todoData[id]); // 要把remove掉的東西刪掉
    const liNode = document.getElementById(`li-${id}`);
    liNode.remove();
}

const changeChecked = (id) =>{ 
    // console.log(todoData[id].checked);
    count += todoData[id].checked ? 1 : -1; // 原本的statet傳進來
    document.getElementById("todo-app-count").innerText = count;
    todoData[id].checked = !todoData[id].checked; // 最後更改state，變成有checked
}

const addNewTodo = (data)=>{ // 新增新的item
    const {id, task, checked} = data; // data是我們輸入的字
    
    // document.createElement("tag name"); 創造tags
    const liNode = document.createElement("li");
    const divNode = document.createElement("div");
    const inputNode = document.createElement("input");
    const labelNode = document.createElement("label");
    const h1Node = document.createElement("h1");
    const imgNode = document.createElement("img");

    // appendChild();
    liNode.appendChild(divNode); // 把divNode放進liNode
    liNode.appendChild(h1Node);  // 把h1Node放進liNode
    liNode.append(imgNode);      // 把imgNode放進liNode
    divNode.append(inputNode);   // 把inputNode放進divNode
    divNode.append(labelNode);   // 把labelNode放進divNode

    if (stat === "Completed"){
        liNode.style.display = "none";
    }
    
    // 設定新出來的tags的id, className, type...
    liNode.className ="todo-app__item";
    liNode.id = `li-${id}`;
    divNode.className = "todo-app__checkbox";
    inputNode.type = "checkbox";
    inputNode.id = id;
    inputNode.checked = checked;

    // addEventListener("do something", function)
    inputNode.addEventListener("click", ()=>changeChecked(id)); // 一開始新增出來的item，他的checked is false
    labelNode.htmlFor = id;
    h1Node.className = "todo-app__item-detail";
    h1Node.innerText = task;
    imgNode.src = "images/x.png";
    imgNode.className = "todo-app__item-x";
    imgNode.id = `img${id}`;
    imgNode.addEventListener("click", ()=>removeTodo(id)); // 如果按到x圖片，就把這個item刪掉

    ulNode.append(liNode);
    count += 1; // 多一個未處理的item
    document.getElementById("todo-app-count").innerText = count;
}

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
    id += 1;
}

const inputNode = document.getElementById("todo-input");
inputNode.addEventListener("keydown", listenInput);

const changeStatus = (new_stat) => {
    if (stat === new_stat){
        return;
    }
    stat = new_stat;
    switch (stat){
        case "All":
            Object.keys(todoData).forEach((id)=>{
                const {checked} = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = "flex";
            })
            break;
        case "Active":
            Object.keys(todoData).forEach((id)=>{
                const {checked} = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = checked ? "none" : "flex";
            })
            break;
        case "Completed":
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

document.getElementById("todo-all").addEventListener("click", () => changeStatus("All")); 
document.getElementById("todo-active").addEventListener("click", () => changeStatus("Active")); 
document.getElementById("todo-completed").addEventListener("click", () => changeStatus("Completed")); 

const removeComplete = () => {
    Object.keys(todoData).forEach((id)=>{
        const {checked} = todoData[id];
        if (checked) {
            removeTodo(id);
        }
    })
}

document.getElementById("todo-clear-completed").addEventListener("click", removeComplete);
