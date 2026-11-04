import ProblemCard from "../extras/ProblemCard";

export const CountOccurences = () => {
  const words = ["apple", "banana", "apple", "orange", "banana", "apple"];

  const wordCount = words.reduce(
    (acc, word) => {
      acc[word] = (acc[word] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  return (
    <ProblemCard
      title="Reduce 07 — Count occurrences"
      method="reduce"
      question="Use reduce() to count how many times each word appears."
      dataPreview={words}
    >
      <p>Apple: {wordCount.apple}</p>
      <p>Banana: {wordCount.banana}</p>
      <p>Orange: {wordCount.orange}</p>
    </ProblemCard>
  );
};
