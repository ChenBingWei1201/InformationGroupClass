"use strict";
var _a, _b, _c, _d;
let todoData = {};
let id = 0;
let state = "All";
let counter = 0;
const ulNode = document.getElementById("todo-list");
const removeTodo = (id) => {
    var _a;
    (_a = document.getElementById(`li-${id}`)) === null || _a === void 0 ? void 0 : _a.remove();
    counter += todoData[id].checked ? 0 : -1;
    const spanNode = document.getElementById("todo-app-count");
    if (spanNode !== null)
        spanNode.innerHTML = `${counter}`;
    delete (todoData[id]);
};
const changeChecked = (id) => {
    counter += todoData[id].checked ? 1 : -1;
    todoData[id].checked = !todoData[id].checked;
    const spanNode = document.getElementById("todo-app-count");
    const liNode = document.getElementById(`li-${id}`);
    if (spanNode !== null && liNode !== null) {
        spanNode.innerHTML = `${counter}`;
        liNode.className = todoData[id].checked ? "todo-app__item todo-app__item-done" : "todo-app__item";
    }
};
const addNewTodo = (data) => {
    const { task, id, checked } = data;
    const liNode = document.createElement("li");
    const divNode = document.createElement("div");
    const inputNode = document.createElement("input");
    const labelNode = document.createElement("label");
    const h1Node = document.createElement("h1");
    const imgNode = document.createElement("img");
    liNode.className = "todo-app__item";
    liNode.id = `li-${id}`;
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
    ulNode === null || ulNode === void 0 ? void 0 : ulNode.appendChild(liNode);
    counter += 1;
    const spanNode = document.getElementById("todo-app-count");
    if (spanNode !== null)
        spanNode.innerHTML = `${counter}`;
};
const listenInput = (e) => {
    var _a;
    if (e.key !== "Enter") {
        return;
    }
    const task = (_a = e.target) === null || _a === void 0 ? void 0 : _a.value;
    const data = { task, id, checked: false };
    addNewTodo(data);
    todoData[id] = { task, checked: false };
    e.target.value = "";
    id += 1;
};
const inputNode = document.getElementById("todo-input");
inputNode === null || inputNode === void 0 ? void 0 : inputNode.addEventListener("keydown", listenInput);
const changeStatus = (new_state) => {
    if (new_state === state)
        return;
    state = new_state;
    Object.keys(todoData).forEach((id) => {
        const { checked } = todoData[id];
        const liNode = document.getElementById(`li-${id}`);
        if (liNode !== null)
            switch (state) {
                case "All":
                    liNode.style.display = "flex";
                    break;
                case "Active":
                    liNode.style.display = checked ? "none" : "flex";
                    break;
                case "Completed":
                    liNode.style.display = !checked ? "none" : "flex";
                    break;
            }
    });
};
(_a = document.getElementById("todo-all")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", () => changeStatus("All"));
(_b = document.getElementById("todo-active")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", () => changeStatus("Active"));
(_c = document.getElementById("todo-completed")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", () => changeStatus("Completed"));
const removeCompleted = () => {
    Object.keys(todoData).forEach((id) => {
        const { checked } = todoData[id];
        if (checked)
            removeTodo(id);
    });
};
(_d = document.getElementById("todo-clear-completed")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", removeCompleted);
