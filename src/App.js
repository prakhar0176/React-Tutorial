import AppName from "./conponents/AppName";
import AddTodo from "./conponents/AddTodo";
import TodoItem1 from "./conponents/TodoItem1";
import TodoItem2 from "./conponents/TodoItem2";
import "./App.css";

function App() {
  return <center className="todo-container">
    <AppName />
    <AddTodo />
    <TodoItem1 />
    <TodoItem2 />
  </center>
  
}

export default App;
