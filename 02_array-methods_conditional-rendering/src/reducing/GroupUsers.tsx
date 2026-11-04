import ProblemCard from "../extras/ProblemCard";

export const GroupUsers = () => {
  const users = [
    { id: 1, name: "Larry", role: "admin" },
    { id: 2, name: "Jorge", role: "user" },
    { id: 3, name: "Karina", role: "user" },
    { id: 4, name: "Jin", role: "admin" },
    { id: 5, name: "Bone", role: "admin" },
  ];

  /**
   * Goal: Group each users by role
   * Start:
   * End Goal: {curr.name} {curr.role}
   * Count
   *
   * Making an object to
   *  admin  ,  user
   * { [ []  ,  [] ] }
   */

  // 1. loop everything (reduce method)
  // 2. check users role
  // 3. branching decisions either the role is admin or user
  // if admin => add/push to admins:[]
  // if user => add/push to users:[]
  // 4. return acc

  const userRole = users.reduce(
    (acc, user) => {
      (acc[user.role] ??= []).push(user);
      return acc;
    },
    {} as Record<string, typeof users>,
  );

  return (
    <ProblemCard
      title="Reduce 06 — Group items"
      method="reduce"
      question="Use reduce() to group users by role. (Example: { admin: [...], user: [...] })"
      dataPreview={users}
    >
      <div>
        {/* TODO: const grouped = users.reduce((acc, u) => {...}, {} as Record<string, typeof users>) Admin: , */}
        <p>Admins: {userRole.admin.map((user) => user.name).join(", ")}</p>
        <p>Users: {userRole.user.map((user) => user.name).join(", ")}</p>
      </div>
    </ProblemCard>
  );
};
