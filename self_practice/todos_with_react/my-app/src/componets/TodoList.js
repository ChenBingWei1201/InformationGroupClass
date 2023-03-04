import X from './images/x.png';
const TodoList = ({ todoData, removeTodo, status, setTodoData }) => {

    const changeChecked = (id) => {
        setTodoData((array) => {
            return array.map((item) => {
                if (item.id === id)
                    return { ...item, checked: !item.checked };
                else
                    return item;
            })
        })
    }

    const List = ({ todoData }) => {
        return (
            <ul id="todo-list" className="todo-app__list">
                {todoData.map((item) => { // map will return a new array and won't modify the original array
                    return (
                        <li className="todo-app__item" key={`l1-${item.id}`} id={`l1-${item.id}`}>
                            <div className="todo-app__checkbox">
                                <input id={item.id} type="checkbox" onChange={() => changeChecked(item.id)} checked={item.checked} />
                                <label htmlFor={item.id} ></label>
                            </div>
                            <h1 style={{ textDecoration: item.checked ? "line-through" : null, opacity: item.checked ? 0.5 : 1 }} className={"todo-app__item-detail"}>{item.task}</h1>
                            <img className="todo-app__item-x" src={X} alt="x" onClick={() => removeTodo(item.id)} />
                        </li>
                    )
                })}
            </ul>);
    }
    switch (status) {
        case "All":
            return <List todoData={todoData} />
        case "Active":
            return <List todoData={todoData.filter((todo) => todo.checked !== true)} /> // todoData didn't be modified
        case "Completed":
            return <List todoData={todoData.filter((todo) => todo.checked === true)} />
    }
}
export default TodoList;