import { useState, ChangeEvent, KeyboardEvent } from 'react';
import TodoFoot from './TodoFoot';
import TodoList from './TodoList';

type Item = {
    task: string,
    id: number,
    checked: boolean
};

function TodoMain(): JSX.Element {
    
    const [task, setTask] = useState<string>("");
    const [data, setData] = useState<any>([]);
    const [id, setID] = useState<number>(0);
    const [status, setStatus] = useState<string>("All");
    const [value, setValue] = useState<string>("");

    const addNewItem = ():void => {
        const item: Item = {task: task, id: id, checked: false};
        setData((oldData: any) => [...oldData, item]); // append item to old list
        setID((id: number) => id + 1); // id pius 1
    }

    const removeItem = (id: number): void => {
        setData(data.filter((item: Item) => item.id !== id));
    }
    
    const listenInput = (e: any): void => {
        setTask((e.target as HTMLInputElement).value); 
        
        if (e.key !== "Enter") {
            setValue((e.target as HTMLInputElement).value); // return void
        }
        else{
            setValue("");
            addNewItem();
            console.log(task);
        }
    }
    
    return (
        <> {/*why don't I use <div></div>, because the .todo-app__main in CSS is relative to the previous tag*/ }
            <section className="todo-app__main">
                <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" onKeyDown={listenInput} onChange={listenInput} value={value}/>
                <TodoList data={data} setData={setData} status={status} setStatus={setStatus} removeItem={removeItem}/>
            </section>
            <TodoFoot data={data} setData={setData} status={status} setStatus={setStatus} />
        </>
    );
}

export default TodoMain;