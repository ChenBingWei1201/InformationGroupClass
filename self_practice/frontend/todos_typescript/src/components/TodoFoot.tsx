function TodoFoot(): JSX.Element {
    return (
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
    );
}

export default TodoFoot;