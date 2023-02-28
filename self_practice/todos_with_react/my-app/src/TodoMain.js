import AddNewItem from "./AddNewItem";
import { useState } from 'react';
function TodoMain() {
    const [task, setTask] = useState("");
    const [value, setValue] = useState("");
    const [keyboard, setKeyboard] = useState("");
    const [id, setId] = useState(0);
    const [todoData, setTodoData] = useState([]);

    // const addTodo = (todo) => {
    //     const newTodos = [todo, ...todoData];
    //     setTodoData(newTodos);
    // setTodoData([...todoData, { id: id, task: task, checked: false }])
    // }

    const handleKeyDown = (e) => {
        setKeyboard(e.key);
        setTask(e.target.value);
        if (e.key !== "Enter")
            setValue(e.target.value);
        else
            setValue("");
    }

    return (
        <>
            <section className="todo-app__main">
                <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown} onChange={handleKeyDown} value={value} />
                <ul id="todo-list" className="todo-app__list">
                    <AddNewItem task={task} id={id} setId={setId} keyboard={keyboard} todoData={todoData} setTodoData={setTodoData} />
                </ul>
            </section>

            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">
                    <span id="todo-app-count">0</span> left
                </div>
                <ul className="todo-app__view-buttons">
                    <li><button id="todo-all">All</button></li>
                    <li><button id="todo-active">Active</button></li>
                    <li><button id="todo-completed">Completed</button></li>
                </ul>
                <div className="todo-app__clean">
                    <button id="todo-clear-completed">Clear completed</button>
                </div>
            </footer>
        </>
    )
}

export default TodoMain;
// { task, setTask, value, setValue, keyboard, setKeyboard, id, setId, todoData, setData }