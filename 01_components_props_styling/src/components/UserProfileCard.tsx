/**
 * Some more practice with Components
 * props: {
 *  username: string;
 *  bio: string;
 *  age: number;
 *  email: string;
 * }
 * When working with props, you can define it with types
 */

type UserProfileCardTypes = {
  username: string;
  bio: string;
  age: number;
  email: string;
};

export const UserProfileCard = (props: UserProfileCardTypes) => {
  return (
    <div>
      <h2>My Name is {props.username}</h2>
      <p>{props.bio}</p>
      <p>I am {props.age}</p>
      <p>Contact me at {props.email}</p>
    </div>
  );
};
