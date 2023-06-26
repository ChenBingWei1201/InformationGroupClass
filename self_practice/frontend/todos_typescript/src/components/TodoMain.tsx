import { useState } from 'react';
import TodoFoot from './TodoFoot';
import TodoList from './TodoList';


function TodoMain(): JSX.Element {
    
    const [data, setData] = useState<any>({});
    const [id, setID] = useState<number>(0);
    const [status, setStatus] = useState<string>("All");
    
    return (
        <div>
            <TodoList data={data} setData={setData} id={id} setID={setID}/>
            <TodoFoot />
        </div>
    );
}

export default TodoMain;