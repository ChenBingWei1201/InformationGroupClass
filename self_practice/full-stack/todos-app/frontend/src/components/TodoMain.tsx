import { useState } from 'react';
import TodoFoot from './TodoFoot';
import TodoList from './TodoList';
import { api } from '../api/api.ts';

type Item = {
    task: string,
    id: number,
    checked: boolean
};

function TodoMain(): JSX.Element {

    const [task, setTask] = useState<string>("");
    const [data, setData] = useState<never[]>([]); // how to replace type: any with more specific type?
    const [id, setID] = useState<number>(0);
    const [status, setStatus] = useState<string>("All");
    const [value, setValue] = useState<string>("");

    // const addNewItem = (): void => {
    //     const item: Item = { task: task, id: id, checked: false };
    //     setData((oldData: never[]) => [...oldData, item] as never[]); // append item to old list
    //     setID((id: number) => id + 1); // id pius 1
    // }

    const handleSubmit = async () => {
        const item: Item = { task: task, id: id, checked: false };
        try {
            const response = await api.post('/', item);
            setData((oldData: never[]) => [...oldData, response.data] as never[]); // append item to old list
            setID((id: number) => id + 1); // id pius 1
        } catch (err: any) {
            console.log(`Error: ${err.message}`);
        }
    }

    // const removeItem = (id: number): void => {
    //     setData(data.filter((item: Item) => item.id !== id)); // filter will return a new array
    // }

    const handleDelete = async (id: number) => {
        try {
            // await api.delete(`${id}`);
            setData(data.filter((item: Item) => item.id !== id));
        } catch (err: any) {
            console.log(`Error: ${err.message}`);
        }
    }

    // todo : replace any to ... (I don't know now)
    const listenInput = (e: any): void => {
        if (e.target.value.length !== 0) {

            setTask((e.target as HTMLInputElement).value);
    
            if (e.key !== "Enter") {
                setValue((e.target as HTMLInputElement).value); // return void
            }
            else {
                setValue(""); // clear value in input as soon as I press "Enter"
                handleSubmit(); // form a new item, store information into it, and put it into data array
                // console.log(task);
            }
        }
    }

    return (
        <> {/*why don't I use <div></div>, because the .todo-app__main in CSS is relative to the previous tag*/}
            <section className="todo-app__main">                                                        {/*how ugly it was! can I elaborate it?*/}
                <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" onKeyDown={listenInput} onChange={listenInput} value={value} />
                <TodoList data={data} setData={setData} status={status} setStatus={setStatus} handleDelete={handleDelete} />
            </section>
            <TodoFoot data={data} setData={setData} status={status} setStatus={setStatus} />
        </>
    );
}

export default TodoMain;