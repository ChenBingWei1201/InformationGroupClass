function TodoList(): JSX.Element {
    return (
        <section className="todo-app__main">
            <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" />
            <ul id="todo-list" className="todo-app__list">
                <li className="todo-app__item" id="li-0">  
                        <div className="todo-app__checkbox">
                            <input id="0" type="checkbox" />
                            <label htmlFor="0"></label>
                        </div>
                        <h1 className="todo-app__item-detail">This is the first TODO.</h1>
                        <img className="todo-app__item-x" src="./images/x.png" alt="x" />
                </li> 
            </ul>

        </section>
    );
}

export default TodoList;