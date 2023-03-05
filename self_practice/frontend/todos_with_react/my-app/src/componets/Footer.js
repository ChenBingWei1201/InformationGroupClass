const Footer = ({ todoData, setStatus, setTodoData }) => {
    const clearCompleted = () => {
        setTodoData(todoData.filter((item) => item.checked === false)) // filter didn't modify todoData so this line in=s valid
    }                                                                  // it will return a new array, and use setTodoData to refresh todoData

    const left = todoData.filter((item) => item.checked === false).length; // count the number of items left
    if (todoData.length > 0)
        return (<footer className="todo-app__footer" id="todo-footer">
            <div className="todo-app__total">
                <span id="todo-app-count">{left}</span> left
            </div>
            <ul className="todo-app__view-buttons">
                <li><button id="todo-all" onClick={() => setStatus("All")}>All</button></li>
                <li><button id="todo-active" onClick={() => setStatus("Active")}>Active</button></li>
                <li><button id="todo-completed" onClick={() => setStatus("Completed")}>Completed</button></li>
            </ul>
            <div className="todo-app__clean">
                <button id="todo-clear-completed" onClick={clearCompleted}>Clear completed</button>
            </div>
        </footer>
        );
    else
        return;
}

export default Footer;