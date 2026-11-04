import ProblemCard from "../extras/ProblemCard";

export const LookUp = () => {
  const users = [
    { id: 101, name: "Taylor" },
    { id: 102, name: "Jordan" },
  ];

  const lookup = users.reduce(
    (acc, user) => {
      acc[user.id] = user.name;
      return acc;
    },
    {} as Record<number, string>,
  );

  return (
    <ProblemCard
      title="Reduce 08 — Build a lookup object"
      method="reduce"
      question="Use reduce() to convert the array into an object: { [id]: name }."
      dataPreview={users}
    >
      <div>
        {/* TODO: const lookup = users.reduce((acc, u) => { acc[u.id] = u.name; return acc; }, {} as Record<number, string>) */}
        <p>{lookup[101]}</p>
        <p>{lookup[102]}</p>
      </div>
    </ProblemCard>
  );
};
