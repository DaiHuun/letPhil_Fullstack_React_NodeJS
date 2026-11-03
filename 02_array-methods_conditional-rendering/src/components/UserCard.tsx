/**
 * Create UserCard to use in Map 06
 *
 */
type UserCardTypes = {
  id: number;
  name: string;
  email: string;
};

export const UserCard = (props: UserCardTypes) => {
  return (
    <div>
      <p>ID: {props.id}</p>
      <p>Name: {props.name}</p>
      <p>Email: {props.email}</p>
    </div>
  );
};
