import ProblemCard from "../extras/ProblemCard";

export const CaseInsensitive = () => {
  const names = ["Ava", "liam", "Noah", "MIA", "Zoe"];

  /**
   * Created caseInsens variable to filter names that includes "a"
   * toLowerCase first, since MIA has "A"
   */
  const caseInsens = names.filter((name) => name.toLowerCase().includes("a"));

  return (
    <ProblemCard
      title="Filter 05 — Case-insensitive filtering"
      method="filter"
      question='Render only names that include the letter "a" (case-insensitive).'
      dataPreview={names}
    >
      {caseInsens.map((name) => (
        <div>{name}</div>
      ))}
    </ProblemCard>
  );
};
