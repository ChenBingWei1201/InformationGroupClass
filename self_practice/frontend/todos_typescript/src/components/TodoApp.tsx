import './TodoApp.css';
import TodoHead from './TodoHead';
import TodoMain from './TodoMain';
function Todo(): JSX.Element {
    return (
        <div>
            <TodoHead />
            <TodoMain />
        </div>
    );
}

export default Todo;