import Todo from "./components/todo"
import Button from "./components/button"

function App(props) {




  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
        <Form/>
      <div className="filters btn-group stack-exception">
        <Button text="all"></Button>
        <Button text="Active"></Button>
        <Button text="Completed"></Button>
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        <Todo/>
      </ul>
    </div>
  );
}

function Form(){
  return (
    <form>
    <h2 className="label-wrapper">
      <label htmlFor="new-todo-input" className="label__lg">
        What needs to be done?
      </label>
    </h2>
    <input
      type="text"
      id="new-todo-input"
      className="input input__lg"
      name="text"
      autoComplete="off"
    />
    <button type="submit" className="btn btn__primary btn__lg">
      Add
    </button>
  </form>
  )
}

export default App;
