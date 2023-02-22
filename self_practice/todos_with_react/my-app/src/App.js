import './App.css';
import X from './images/x.png'
function App() {
  return (
    <div id="root" className="todo-app__root">

      <header className="todo-app__header">
        <h1 className="todo-app__title">todos</h1>
      </header>

      <section className="todo-app__main">
        <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" />
        <ul id="todo-list" className="todo-app__list">
          <li className="todo-app__item" id="l1-0"> {/* 當按下enter, new一個新的item*/}
            <div className="todo-app__checkbox">
              <input id="0" type="checkbox" />
              <label htmlFor="0"></label>
            </div>
            <h1 className="todo-app__item-detail">This is the first item.</h1>
            <img className="todo-app__item-x" src={X} alt="x" />
          </li>
        </ul>
      </section>
      <footer className="todo-app__footer" id="todo-footer">
        <div className="todo-app__total">
          <span id="todo-app-count">0</span> left
        </div>
        <ul className="todo-app__view-buttons">
          <li><button id="todo-all">All</button></li>
          <li><button id="todo-active">Active</button></li>
          <li><button id="todo-completed">Completed</button></li>
        </ul>
        <div className="todo-app__clean">
          <button id="todo-clear-completed">Clear completed</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
