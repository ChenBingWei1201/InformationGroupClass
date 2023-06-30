import X from '../images/x.png';

interface DATA_FUNCTION {
    data: any;
    setData: React.Dispatch<any>;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    removeItem: any;
};

type Item = {
    task: string,
    id: number,
    checked: boolean
};

function TodoList({data, setData, status, removeItem}: DATA_FUNCTION): JSX.Element {

    const changeChecked = (id: number): void => {
        setData((array: any): any => {
            return array.map((item: Item): Item => {
                if (item.id === id)
                    return {...item, checked: !item.checked};
                else
                    return item;
            })

        });
    }

    const List = ({data}: any) => {
        return (
            <ul id="todo-list" className="todo-app__list">
                {data.map((item: Item) => {
                    return (
                        <li className="todo-app__item" id= {`li-${item.id}`} key={`${item.id}`}>  
                            <div className="todo-app__checkbox">
                                <input id={`${item.id}`} type="checkbox" onChange={() => changeChecked(item.id)} checked={item.checked}/>
                                <label htmlFor={`${item.id}`}></label>
                            </div>
                            <h1 className="todo-app__item-detail">{item.task}</h1>
                            <img className="todo-app__item-x" src={X} alt="x" onClick={() => removeItem(item.id)}/>
                        </li>
                        ); 
                    }
                )
            }
            </ul>
        );
    }
    switch (status) {
        case "All":
            return <List data={data}/>;
        case "Activate":
            return <List data={data.filter((item: Item) => item.checked !== true)}/>;
        case "Completed":
            return <List data={data.filter((item: Item) => item.checked === true)}/>;
        default:
            return <List data={data}/>;
    }

}

export default TodoList;