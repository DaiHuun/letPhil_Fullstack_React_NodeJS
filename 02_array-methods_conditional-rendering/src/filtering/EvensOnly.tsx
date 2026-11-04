import ProblemCard from "../extras/ProblemCard";

export const EvensOnly = () => {
  const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const evenNumbers = nums.filter((num) => num % 2 === 0);

  return (
    <ProblemCard
      title="Filter 01 — Even numbers only"
      method="filter"
      question="Filter the array to only even numbers, then render them."
      dataPreview={nums}
    >
      {evenNumbers.map((evenNumber) => (
        <p>{evenNumber} is an evenNumber </p>
      ))}
    </ProblemCard>
  );
};
