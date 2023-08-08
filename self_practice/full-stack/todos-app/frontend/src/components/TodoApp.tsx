import '../TodoApp.css';
import TodoHead from './TodoHead';
import TodoMain from './TodoMain';

function Todo(): JSX.Element {
    return (
        <div id="root" className="todo-app__root">
            <TodoHead title="todos"/>
            <TodoMain />
        </div>
    );
}

export default Todo;