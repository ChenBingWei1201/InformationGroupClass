var todoData = {} // the object to store todo list items
var id = 0;
var stat = "All"; // "All", "Active", "Completed" 3 states
var count = 0; // counter to record how many items left in the list.

const ulNode = document.getElementById("todo-list"); // 拿到這個list

const removeTodo = (id) => { // a function to remove todo list item
    count += todoData[id].checked ? 0 : -1; // 原本有"checked"count就不變(left維持)，沒有就count減少一(left少1)
    document.getElementById("todo-app-count").innerText = count; // 拿到"todo-app-count"，將其內容改成count
    delete (todoData[id]); // 把存放在todoData陣列內的那個元素刪掉
    const liNode = document.getElementById(`li-${id}`); // 再去拿到我們新增的item
    liNode.remove(); // 最後remove掉的那個item
}

const changeChecked = (id) => {
    // console.log(todoData[id].checked);
    count += todoData[id].checked ? 1 : -1; // 原本的statet傳進來
    document.getElementById("todo-app-count").innerText = count;
    todoData[id].checked = !todoData[id].checked; // 最後更改state，變成有checked
    const liNode = document.getElementById(`li-${id}`);
    liNode.className = todoData[id].checked ? "todo-app__item todo-app__item-done" : "todo-app__item" // line-through
}

const addNewTodo = (data) => { // 新增新的item
    const { id, task, checked } = data; // data是我們輸入的字

    // document.createElement("tag name"); 創造tags
    const liNode = document.createElement("li");
    const divNode = document.createElement("div");
    const inputNode = document.createElement("input"); // type = "checked-box" 按按鈕的
    const labelNode = document.createElement("label");
    const h1Node = document.createElement("h1");
    const imgNode = document.createElement("img");

    // appendChild();
    liNode.appendChild(divNode); // 把divNode放進liNode
    liNode.appendChild(h1Node);  // 把h1Node放進liNode
    liNode.append(imgNode);      // 把imgNode放進liNode
    divNode.append(inputNode);   // 把inputNode放進divNode
    divNode.append(labelNode);   // 把labelNode放進divNode

    if (stat === "Completed") {
        liNode.style.display = "none";
    }

    // 設定新出來的tags的id, className, type...
    liNode.className = "todo-app__item";
    liNode.id = `li-${id}`;
    divNode.className = "todo-app__checkbox";
    inputNode.type = "checkbox";
    inputNode.id = id;
    inputNode.checked = checked;
    // addEventListener("do something", function)
    inputNode.addEventListener("click", () => changeChecked(id)); // 一開始新增出來的item，他的checked is false
    labelNode.htmlFor = id;
    h1Node.className = "todo-app__item-detail";
    h1Node.innerText = task;
    imgNode.src = "images/x.png";
    imgNode.className = "todo-app__item-x";
    imgNode.id = `img${id}`;
    imgNode.addEventListener("click", () => removeTodo(id)); // 如果按到x圖片，就把這個item刪掉

    ulNode.append(liNode);
    count += 1; // 多一個未處理的item
    document.getElementById("todo-app-count").innerText = count;
}

// Read input
const listenInput = (e) => {
    if (e.key !== "Enter") { // 當在<input>內打字時，按下enter才新增item，不然就不做事
        return;
    }
    const task = e.target.value; // 當在<input>內按下enter，把字存到task
    console.log(task);
    const data = { task, id, checked: false }; // 一開始新增時是沒有亮綠燈的
    addNewTodo(data); // 呼叫func. 去新增item
    todoData[id] = { task, checked: false }; // 把這些資訊(物件)放到陣列當中存放
    e.target.value = ""; // 把<input>內原本打的字變成沒有字
    id += 1; // 因每個tag都要有不同的id，新增item時，我們會給他id，故id要改變，用++即可
}

const inputNode = document.getElementById("todo-input"); // 可以打字的框框
inputNode.addEventListener("keydown", listenInput); // 每字案案件就去監聽，都去呼叫listenInput()，來看是否按下enter而要新增item

const changeStatus = (new_stat) => {
    if (stat === new_stat) { // 如果你現在就是這個state，那一樣按這個state的鍵
        return;             // state就不變嘛!
    }
    stat = new_stat; // 新的state
    switch (stat) {
        case "All":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = "flex"; // 按下All，每個item都要秀出，用flex display
            })
            break;
        case "Active":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = checked ? "none" : "flex"; // 按下Active，沒有亮綠燈(checked == false)的item都要秀出，用flex display
            })                                 //           ^
            break;
        case "Completed":
            Object.keys(todoData).forEach((id) => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                liNode.style.display = !checked ? "none" : "flex"; // 按下Completed，有亮綠燈(!checked == false)的item都要秀出，用flex display
            })                                 //            ^
            break;
        default:
            break;
    }
}

document.getElementById("todo-all").addEventListener("click", () => changeStatus("All"));
document.getElementById("todo-active").addEventListener("click", () => changeStatus("Active"));
document.getElementById("todo-completed").addEventListener("click", () => changeStatus("Completed"));

const removeComplete = () => {
    Object.keys(todoData).forEach((id) => {
        const { checked } = todoData[id];
        if (checked) {
            removeTodo(id);  // 有打勾的item按下Clear completed鍵後，才要刪掉
        }
    })
}

document.getElementById("todo-clear-completed").addEventListener("click", removeComplete);
