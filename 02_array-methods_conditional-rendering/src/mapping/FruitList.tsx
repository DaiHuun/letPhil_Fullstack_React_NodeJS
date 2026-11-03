import ProblemCard from "../extras/ProblemCard";

// .map(() => )

export function RenderFruitList() {
  const fruits = ["Apple", "Banana", "Orange"];

  return (
    <ProblemCard
      title="Map 01 — Render a list of strings"
      method="map"
      question="Render each fruit inside an <li>."
      dataPreview={fruits}
    >
      {/* code here */}
    </ProblemCard>
  );
}

export default RenderFruitList;
