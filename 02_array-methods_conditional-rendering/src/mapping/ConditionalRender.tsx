import ProblemCard from "../extras/ProblemCard";

/**
 * Conditionally Render the list of users that are online
 *
 * ternary operator
 * conditional ? value 1 : value 2
 *
 */

export const ConditionalRender = () => {
  const users = [
    { id: 1, name: "Sam", isOnline: true },
    { id: 2, name: "Kai", isOnline: false },
    { id: 3, name: "Tony", isOnline: true },
    { id: 4, name: "Ronald", isOnline: true },
    { id: 5, name: "Sharon", isOnline: false },
  ];

  return (
    <ProblemCard
      title="Map 07 — Conditional rendering inside map"
      method="map"
      question='Render each user with a status: "🟢 Online" or "⚪ Offline".'
      dataPreview={users}
    >
      {/* code here */}
      {users.map((user) => (
        <div>
          {user.isOnline ? `${user.name} 🟢 Online` : `${user.name} ⚪ Offline`}
          ,
        </div>
      ))}
    </ProblemCard>
  );
};
