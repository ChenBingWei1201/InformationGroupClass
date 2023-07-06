import TodoList from "./TodoList";
import Footer from "./Footer";
import { useState, useEffect, useRef } from 'react';

function TodoMain() {
    const [task, setTask] = useState(""); // each item in todo list
    const [value, setValue] = useState(""); // value of an input
    const [id, setId] = useState(0); // id of an item
    const [todoData, setTodoData] = useState([]); // an array to store items.
    const [status, setStatus] = useState("All"); // three status : "All", "Active", "Completed"
    
    /* Use useRef to keep track of previous state values:
    const prev = useRef("");
    useEffect(() => {
        prev.current = task;
    }, [task]);
    console.log(prev.current);
    */

    const addNewTodo = () => { // add new todo item
        const item = { // construct a new item 
            id: id,
            task: task,
            checked: false
        }
        setTodoData((oldList) => [...oldList, item]); // concat old list and new item
        setTask("");
        setId((id) => id + 1); // id + 1 (id should be unique)
    }

    const removeTodo = (id) => { // when click x, remove todo item
        /* 
        sol. 1
        const newArray = todoData.filter((item) => item.id !== id); 
        setTodoData(newArray); // refresh todoData array
        */

        // sol. 2
        setTodoData(todoData.filter((item) => item.id !== id)); // when find item.id不等於我們要刪掉的那個item的id才會被回傳
    }

    const handleKeyDown = (e) => {
        if (e.target.value.length !== 0) {
            setTask(e.target.value);
            if (e.key !== "Enter")
                setValue(e.target.value);
            else {
                setValue("");
                addNewTodo();
            }
        }
    }

    return (
        <>
            <section className="todo-app__main">
                <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?"
                    onKeyDown={handleKeyDown} onChange={handleKeyDown} value={value} />
                <TodoList todoData={todoData} removeTodo={removeTodo} status={status} setTodoData={setTodoData} />
            </section>
            <Footer todoData={todoData} setStatus={setStatus} setTodoData={setTodoData} />
        </>
    )
}

export default TodoMain;