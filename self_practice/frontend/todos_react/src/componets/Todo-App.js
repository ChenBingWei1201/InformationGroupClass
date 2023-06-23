import '../App.css';
import TodoMain from './TodoMain';
import Header from './Header';
function Todo() {
  return (
    <div id="root" className="todo-app__root">
      <Header />
      <TodoMain />
    </div>
  );
}

export default Todo;