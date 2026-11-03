import ProblemCard from "../extras/ProblemCard";
/* Import UserCard*/
import { UserCard } from "../components/UserCard";

export const RenderFromData = () => {
  const users = [
    { id: 1, name: "Ava", email: "ava@email.com" },
    { id: 2, name: "Noah", email: "noah@email.com" },
  ];

  return (
    <ProblemCard
      title="Map 06 — Render components from data"
      method="map"
      question="Use map() to render a <UserCard /> for each user."
      dataPreview={users}
    >
      {/* code here */}
      {users.map((user) => (
        <UserCard id={user.id} name={user.name} email={user.email} />
      ))}
    </ProblemCard>
  );
};
