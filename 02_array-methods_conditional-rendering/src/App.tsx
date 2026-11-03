import "./App.css";
import { Todo } from "./components/Todo.tsx";

/**
 * Array Methods: 3 higher order functions
 * filter, map, reduce
 *
 * filter returns items in a new array
 * .filter() => conditional | return true or false
 *
 * map returns every item in a new array
 * .map(() =>)
 *
 * reduce, can do everything
 * [].reduce((acc,curr) => {}, starting value)
 *
 */
function App() {
  const todos = [
    { description: "Wash Car", due_date: "10/01/01" },
    { description: "Clean Laundry", due_date: "10/01/02" },
    { description: "Feed Dog", due_date: "10/01/03" },
    { description: "Cook Foor", due_date: "10/01/04" },
  ];

  return (
    <>
      {/**
       * map
       * for(i = 0 < todos.length; i++){
       *  todos[i]
       *  return Todo description = {todos[i].description} due_date = {todos.[i].due_date}
       * }
       */}
      {todos.map((todo) => (
        <Todo description={todo.description} due_date={todo.due_date} />
      ))}
    </>
  );
}

export default App;
