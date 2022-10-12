import { useEffect, useState } from "react";

export interface User {
  id: string;
  name: string;
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("/users")
      .then(async (res) => {
        const fetchedUsers = await res.json();
        setUsers(fetchedUsers as User[])
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.error("Failed to fetch users", { err });
      });
  }, []);

  return (
    <div>
      <h1>Vite - PoC</h1>
      <ul>
        {users.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
