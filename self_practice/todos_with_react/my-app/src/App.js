import './App.css';
import TodoMain from './TodoMain';
import Header from './Header';
// import { useState } from 'react';
function Todo() {
  // const [task, setTask] = useState("");
  // const [value, setValue] = useState("");
  // const [keyboard, setKeyboard] = useState("");
  // const [id, setId] = useState(0);
  // const [todoData, setData] = useState([]);
  return (
    <div id="root" className="todo-app__root">
      <Header />
      <TodoMain />
    </div>
  );
}

export default Todo;
// task={task} setTask={setTask}
//         value={value} setValue={setValue}
//         keyboard={keyboard} setKeyboard={setKeyboard}
//         id={id} setId={setId}
//         todoData={todoData} setData={setData} 