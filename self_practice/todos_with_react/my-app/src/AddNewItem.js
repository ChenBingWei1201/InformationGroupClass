import X from './images/x.png';
// import { useState } from 'react';
const AddNewItem = ({ task, id, keyboard, setId, todoData, setTodoData }) => {
    if (keyboard === "Enter")
        setId(i => i + 1);
    return todoData.map((todo) => (
        // keyboard === "Enter" ?
        < li className="todo-app__item" id={`l1-${todo.id}`}>
            <div className="todo-app__checkbox">
                <input id={todo.id} type="checkbox" />
                <label htmlFor={todo.id}></label>
            </div>
            <h1 className={todo.checked ? "todo-app__item-detail  todo-app-item-done" : "todo-app__item-detail"} >{todo.task}</h1>
            <img className="todo-app__item-x" src={X} alt="x" />
        </li >
        // : <></>
    ));

}

export default AddNewItem;