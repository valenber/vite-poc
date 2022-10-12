import { useEffect, useState } from "react";

import { config } from "../config";

export interface User {
  id: string;
  name: string;
}

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`${config.apiURL}/users`)
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
        {!users.length && <h3>Please hold...</h3>}

        {users.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
