let todoData: any = {}
let id: number = 0;
let state: string = "All";
let counter: number = 0;

type Data = {
    task: string,
    id: number,
    checked: boolean
}; 

const ulNode: HTMLElement | null = document.getElementById("todo-list");

const removeTodo = (id: number | string): void => {
    const liNode: HTMLElement | null = document.getElementById(`li-${id}`);
    liNode?.remove();

    const spanNode: HTMLSpanElement | null= document.getElementById("todo-app-count");
    counter += todoData[id].checked ? 0 : -1;
    delete(todoData[id]);
    
    if (spanNode !== null)
        spanNode.innerHTML = `${counter}`;
}


const changeChecked = (id: number): void => {
    counter += todoData[id].checked ? 1 : -1;
    todoData[id].checked = !todoData[id].checked;

    const spanNode: HTMLSpanElement | null= document.getElementById("todo-app-count");
    const liNode: HTMLElement | null = document.getElementById(`li-${id}`);
    if (spanNode !== null && liNode !== null) {
        spanNode.innerHTML = `${counter}`;
        liNode.className = todoData[id].checked ? "todo-app__item todo-app__item-done" : "todo-app__item";
    }
}

const NewTodo = (data: Data): void => {
    const { task, id, checked}: Data = data

    const liNode: HTMLLIElement | null = document.createElement("li");
    const divNode: HTMLDivElement | null = document.createElement("div");
    const inputNode: HTMLInputElement | null = document.createElement("input");
    const labelNode: HTMLLabelElement | null = document.createElement("label");
    const h1Node: HTMLHeadingElement | null = document.createElement("h1");
    const imgNode: HTMLImageElement | null = document.createElement("img");
    
    liNode.className = "todo-app__item";
    liNode.id = `li-${id}`
    divNode.className = "todo-app__checkbox";
    inputNode.id = `${id}`;
    inputNode.type = "checkbox";
    inputNode.checked = checked;
    inputNode.addEventListener("click", () => changeChecked(id));

    labelNode.htmlFor = `${id}`;
    h1Node.className = "todo-app__item-detail";
    h1Node.innerHTML = task;
    imgNode.className = "todo-app__item-x";
    imgNode.src = "./images/x.png";
    imgNode.alt = "x";
    imgNode.addEventListener("click", () => removeTodo(id));

    divNode.appendChild(inputNode);
    divNode.appendChild(labelNode);
    liNode.appendChild(divNode);
    liNode.appendChild(h1Node);
    liNode.appendChild(imgNode);

    ulNode?.appendChild(liNode);
    counter += 1;
    const spanNode: HTMLSpanElement | null = document.getElementById("todo-app-count");
    if (spanNode !== null)
        spanNode.innerHTML = `${counter}`;
}

const listenInput = (e: any): void => {
    if (e.key !== "Enter") {
        return;
    }
    const task: string = e.target.value;
    console.log(task);
    const data: Data = { task, id, checked: false}
    NewTodo(data);
    todoData[id] = { task, checked: false}
    e.target.value = "";
    id += 1;
}

const inputNode: HTMLElement | null = document.getElementById("todo-input");
inputNode?.addEventListener("keydown", listenInput);

const changeStatus = (new_state: string):void => {
    if (new_state === state)
        return;
    state = new_state;
    switch (state) {
        case "All":
            Object.keys(todoData).forEach( (id: string): void => {
                // const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                if (liNode !== null)
                    liNode.style.display = "flex"; // 按下All，每個item都要秀出，用flex display
            })
            break;
        case "Active":
            Object.keys(todoData).forEach( (id: string): void => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                if (liNode !== null)
                    liNode.style.display = checked ? "none" : "flex";
            })
            break;
        case "Completed":
            Object.keys(todoData).forEach( (id: string): void => {
                const { checked } = todoData[id];
                const liNode = document.getElementById(`li-${id}`);
                if (liNode !== null)
                    liNode.style.display = !checked ? "none" : "flex";
            })
            break;
        }

}

document.getElementById("todo-all")?.addEventListener("click", () => changeStatus("All"));
document.getElementById("todo-active")?.addEventListener("click", () => changeStatus("Active"));
document.getElementById("todo-completed")?.addEventListener("click", () => changeStatus("Completed"));

const removeCompleted = (): void => {
    Object.keys(todoData).forEach( (id: string | number): void => {
        const { checked } = todoData[id];
        if (checked)
            removeTodo(id);
    })
}

document.getElementById("todo-clear-completed")?.addEventListener("click", removeCompleted);