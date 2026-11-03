import ProblemCard from "../extras/ProblemCard";

export const FullNames = () => {
  const people = [
    { firstName: "Taylor", lastName: "Kim" },
    { firstName: "Jordan", lastName: "Lee" },
  ];
  return (
    <ProblemCard
      title="Map 10 — Transform shape"
      method="map"
      question="Render full names by combining firstName + lastName."
      dataPreview={people}
    >
      {/* code here */}
      {people.map((person) => (
        <div>
          {person.firstName} {person.lastName}
        </div>
      ))}
    </ProblemCard>
  );
};
