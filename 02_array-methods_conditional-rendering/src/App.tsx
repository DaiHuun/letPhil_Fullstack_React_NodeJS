import "./App.css";
// import { Todo } from "./components/Todo.tsx";
/* MAP IMPORTS */
import { RenderFruitList } from "./mapping/FruitList";
import { RenderNumbers } from "./mapping";
import { CapitalizeWords } from "./mapping/CapitalizeWords";
import { RenderObjects } from "./mapping/RenderObjects";
import { DoubleNumbers } from "./mapping/DoubleNumbers";
import { RenderFromData } from "./mapping/RenderFromData";
import { ConditionalRender } from "./mapping/ConditionalRender";
import { RankedList } from "./mapping/RankedList";
import { FormatPrices } from "./mapping/FormatPrices";
import { FullNames } from "./mapping/FullNames";

/* FILTER IMPORTS */
import { AdminsOnly } from "./filtering/AdminsOnly";
import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";

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
      <RenderNumbers />
      <CapitalizeWords />
      <RenderObjects />
      <DoubleNumbers />
      <RenderFromData />
      <ConditionalRender />
      <RankedList />
      <FormatPrices />
      <FullNames />

      {/* filter */}
      {/* <AdminsOnly />
      <PriceGreaterThan20 /> */}
    </>
  );
}

export default App;
