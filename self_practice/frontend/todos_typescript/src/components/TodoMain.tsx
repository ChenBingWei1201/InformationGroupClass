import TodoFoot from './TodoFoot';
import TodoList from './TodoList';
function TodoMain(): JSX.Element {
    return (
        <div>
            <TodoList />
            <TodoFoot />
        </div>
    );
}

export default TodoMain;