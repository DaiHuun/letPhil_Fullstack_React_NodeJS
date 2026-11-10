import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from: https://randomuser.me/api/?results=10
- Run fetch when component mounts
- Display:
  - Name
  - Email
  - Profile picture
- Add a "Refresh User" button (optional)
*/

const api_url = "https://randomuser.me/api/?results=10";

export default function RandomUser() {
  const [users, setUsers] = useState([]);

  async function getUser() {
    try {
      const { results } = await fetch(api_url).then((response) =>
        response.json(),
      );
      setUsers(results);
    } catch (err) {
      throw new Error("Could not retrieve user data" + err);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button onClick={getUser}>Refresh</button>
      {users.map((user: any) => (
        <div>
          <p>
            {user.name.first} {user.name.last}
          </p>
          <p>{user.email}</p>
          <img src={user.picture.thumbnail} />
        </div>
      ))}
    </div>
  );
}
