/**
 * Creating a TodoType to hold description and due date
 *
 */

type TodoType = {
  description: string;
  due_date: string;
};

export const Todo = (props: TodoType) => {
  return (
    <div>
      <p>{props.description}</p>
      <p>{props.due_date}</p>
    </div>
  );
};
