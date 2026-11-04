import ProblemCard from "../extras/ProblemCard";

export const EmptyState = () => {
  const items = ["Apple", "Banana"];
  const searchTerm = "zzz";

  const filter = items.filter((item) => {
    item.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <ProblemCard
      title="Filter 09 — Empty state handling"
      method="filter"
      question='Filter by searchTerm. If no results, show "No results found".'
      dataPreview={{ items, searchTerm }}
    >
      {/* Ternary */}
      {filter.length > 0 ? (
        filter.map((item) => <p>{item}</p>)
      ) : (
        <p>No results found</p>
      )}
    </ProblemCard>
  );
};
