import './App.css';

function App() {
  return (
    <div id="root" className="todo-app__root">

      <header className="todo-app__header">
        <h1 className="todo-app__title">todos</h1>
      </header>

      <section className="todo-app__main">
        <input id="todo-input" className="todo-app__input" placeholder="What needs to be done?" />
        <ul id="todo-list" className="todo-app__list">

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

      <script src="scripts/practice.js"></script>
    </div>
  );
}

export default App;
