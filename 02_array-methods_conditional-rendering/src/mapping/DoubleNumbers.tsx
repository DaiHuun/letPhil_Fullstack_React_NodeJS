import ProblemCard from "../extras/ProblemCard";

/**
 * Render out a list of each number doubled
 */

export const DoubleNumbers = () => {
  const nums = [5, 10, 15];
  return (
    <ProblemCard
      title="Map 05 — Add computed data"
      method="map"
      question="Render each number doubled."
      dataPreview={nums}
    >
      {/* code here */}
      {nums.map((num) => (
        <li>
          {num} doubled is {num * 2}
        </li>
      ))}
    </ProblemCard>
  );
};
