import X from '../images/x.png';

interface DATA {
    data: any;
    setData: React.Dispatch<any>;
    id: number;
    setID: React.Dispatch<React.SetStateAction<number>>;
};

type Item = {
    task: string,
    id: number,
    checked: boolean
};

type KeyboardEventNames = 'keydown' | 'keyup';

function TodoList({data, setData, id, setID}: DATA): JSX.Element {
    const listenInput = (e: KeyboardEvent): void => {
        if (e.key !== "Enter") {
            return;
        }
        const task: string = (e.target as HTMLInputElement).value;
        const item: Item =  {task, id, checked: false};
        addTodoItem(item);
    }

    const addTodoItem = (item: Item): JSX.Element => {

        return (
            <li className="todo-app__item" id= {`li-0`}>  
                <div className="todo-app__checkbox">
                    <input id={`0`} type="checkbox" />
                    <label htmlFor={`0`}></label>
                </div>
                <h1 className="todo-app__item-detail">This is the first TODO.</h1>
                <img className="todo-app__item-x" src={X} alt="x" />
            </li> 
        );
    }

    return (
        <section className="todo-app__main">
            <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" onKeyDown={listenInput}/>
            <ul id="todo-list" className="todo-app__list">
                {/* {todoItem()} */}
            </ul>

        </section>
    );
}

export default TodoList;