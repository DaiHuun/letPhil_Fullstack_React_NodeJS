import "./App.css";
// import { Todo } from "./components/Todo.tsx";
import { RenderFruitList } from "./mapping/FruitList";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { ConditionalRender } from "./mapping/ConditionalRender";

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
  // example
  // const todos = [
  //   { description: "Wash Car", due_date: "10/01/01" },
  //   { description: "Clean Laundry", due_date: "10/01/02" },
  //   { description: "Feed Dog", due_date: "10/01/03" },
  //   { description: "Cook Foor", due_date: "10/01/04" },
  // ];

  return (
    <>
      {/* example */}
      {/* {todos.map((todo) => (
        <Todo description={todo.description} due_date={todo.due_date} />
      ))} */}

      {/* map */}
      <RenderFruitList />
      <CapitalizeWords />
      <ConditionalRender />

      {/* filter */}
    </>
  );
}

export default App;
