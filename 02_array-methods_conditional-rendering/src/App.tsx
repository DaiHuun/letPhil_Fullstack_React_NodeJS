import "./App.css";
// import { Todo } from "./components/Todo.tsx";
/* MAP IMPORTS */
// import { RenderFruitList } from "./mapping/FruitList";
// import { RenderNumbers } from "./mapping";
// import { CapitalizeWords } from "./mapping/CapitalizeWords";
// import { RenderObjects } from "./mapping/RenderObjects";
// import { DoubleNumbers } from "./mapping/DoubleNumbers";
// import { RenderFromData } from "./mapping/RenderFromData";
// import { ConditionalRender } from "./mapping/ConditionalRender";
// import { RankedList } from "./mapping/RankedList";
// import { FormatPrices } from "./mapping/FormatPrices";
// import { FullNames } from "./mapping/FullNames";

/* FILTER IMPORTS */
// import { EvensOnly } from "./filtering/EvensOnly";
// import { LongWordsOnly } from "./filtering/LongWordsOnly";
// import { AdminsOnly } from "./filtering/AdminsOnly";
// import { PriceGreaterThan20 } from "./filtering/PriceGreaterThan20";
// import { CaseInsensitive } from "./filtering/CaseInsensitive";
// import { MultipleConditions } from "./filtering/MultipleConditions";
// import { SearchSimulation } from "./filtering/SearchSimulation";
// import { EmptyState } from "./filtering/EmptyState";
// import { PreFilter } from "./filtering/PreFilter";

/* REDUCE IMPORTS */
import { SumNumbers } from "./reducing/SumNumbers";
import { CountItems } from "./reducing/CountItems";
import { SumPrices } from "./reducing/SumPrices";
import { GroupUsers } from "./reducing/GroupUsers";
import { CountOccurences } from "./reducing/CountOccurences";
import { LookUp } from "./reducing/LookUp";
import { CartTotal } from "./reducing/CartTotal";
import { Stats } from "./reducing/Stats";

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
      {/* <RenderFruitList />
      <RenderNumbers />
      <CapitalizeWords />
      <RenderObjects />
      <DoubleNumbers />
      <RenderFromData />
      <ConditionalRender />
      <RankedList />
      <FormatPrices />
      <FullNames /> */}

      {/* filter */}
      {/* <EvensOnly />
      <LongWordsOnly />
      <AdminsOnly />
      <PriceGreaterThan20 />
      <CaseInsensitive />
      <MultipleConditions />
      <SearchSimulation searchTerm="script" />
      <EmptyState />
      <PreFilter /> */}

      {/* reduce */}
      <SumNumbers />
      <CountItems />
      <SumPrices />
      <GroupUsers />
      <CountOccurences />
      <LookUp />
      <CartTotal />
      <Stats />
    </>
  );
}

export default App;
