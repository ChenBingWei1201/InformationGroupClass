type Title = {
    title: String
};

function TodoHead({ title }: Title): JSX.Element {
    return (
        <header className="todo-app__header">
            <h1 className="todo-app__title">{title}</h1>
        </header>
    );
}

export default TodoHead;