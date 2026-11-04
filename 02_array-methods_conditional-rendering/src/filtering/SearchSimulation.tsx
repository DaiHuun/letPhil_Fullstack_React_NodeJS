import ProblemCard from "../extras/ProblemCard";

/**
 * Create a type for searchTerm prop
 */
type SearchSimulationType = {
  searchTerm: string;
};

export const SearchSimulation = ({ searchTerm }: SearchSimulationType) => {
  const items = ["React", "JavaScript", "TypeScript", "Node", "CSS"];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <ProblemCard
      title="Filter 08 — Search simulation"
      method="filter"
      question="Filter items that include the searchTerm prop (case-insensitive), then render them."
      dataPreview={{ items, searchTerm: searchTerm }}
    >
      {filteredItems.map((item) => (
        <li>{item}</li>
      ))}
    </ProblemCard>
  );
};
