import { useState, useEffect } from "react";

/*
Requirements:
- Fetch data from an API
- Add:
  - loading state
  - error state
- Show:
  - "Loading..." while fetching
  - Error message if request fails
  - Data when successful
*/

const api_url = "https://randomuser.me/api/?results=10";

export default function FetchWithStates() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getUser() {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(api_url);
      if (!response.ok) {
        throw new Error(`${response.status}`);
      }
      const { results } = await response.json();
      setUsers(results);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Could not retrieve user data",
      );
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <button onClick={getUser}>Refresh</button>

      {loading && <p>Loading...</p>}
      {error && <p role="alert">Error: {error}</p>}

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
