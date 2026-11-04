import ProblemCard from "../extras/ProblemCard";
// cart.reduce((acc, curr) => , default value)

/**
 * GOAL:
 * starting value: 0
 * const itemCount = 0;
 * answer: 5
 *
 * reduce => loop through every variable | you see every item in the array at least once
 */
export const CountItems = () => {
  const items = ["a", "b", "c", "d", 12];

  const itemCount = items.reduce((acc: any, item) => {
    return (acc += 1);
  }, 0);

  return (
    <ProblemCard
      title="Reduce 02 — Count items"
      method="reduce"
      question="Use reduce() to count how many items are in the array (without using .length)."
      dataPreview={items}
    >
      {itemCount}
    </ProblemCard>
  );
};
