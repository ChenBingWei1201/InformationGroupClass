interface DATA {
    data: never[];
    setData: React.Dispatch<React.SetStateAction<never[]>>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
};

type Item = {
    task: string,
    id: number,
    checked: boolean
};

const TodoFoot = ({data, setData, setStatus}: DATA): JSX.Element => {
    
    // clear the items whose checked are true == restore the items whose checked aren't true (item.checked !== true)
    const clearCompleted = () => {
        setData(data.filter((item: Item) => item.checked !== true)); // an item will be return if item.checked is not true.
    }

    const left = data.filter((item: Item) => item.checked !== true).length;

    if (data.length > 0)
        return (
            <footer className="todo-app__footer" id="todo-footer">
                <div className="todo-app__total">
                    <span id="todo-app-count">{left}</span> left
                </div>
                <ul className="todo-app__view-buttons">
                    <li><button id="todo-all" onClick={() => setStatus("All")}>All</button></li>
                    <li><button id="todo-active" onClick={() => setStatus("Activate")}>Active</button></li>
                    <li><button id="todo-completed" onClick={() => setStatus("Completed")}>Completed</button></li>
                </ul>
                <div className="todo-app__clean">
                    <button id="todo-clear-completed" onClick={clearCompleted}>Clear completed</button>
                </div>                      {/*need not to send any prameter, not an arrow function*/}
            </footer>
        );
    else
        return <></>;
}

export default TodoFoot;