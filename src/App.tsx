import { userAPI } from "@api";
import { ChangeEvent, FormEvent, useState } from "react";

export const App = () => {
  const {
    isLoading,
    isSuccess,
    data: users,
    isError,
    error,
  } = userAPI.useGetAllUsersQuery();

  const [trigger] = userAPI.useCreateUserMutation();

  const [newName, setNewName] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function sendCreateUserRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    trigger({ name: newName });

    setNewName("");
  }

  return (
    <>
      <form onSubmit={sendCreateUserRequest}>
        <legend>New user</legend>
        <br />

        <label htmlFor="user_name">
          User name:
          <input
            id="user_name"
            name="name"
            onChange={handleInputChange}
            type="text"
            value={newName}
          />
        </label>

        <input type="submit" value="Save user" />
      </form>

      <h1>Users list</h1>
      {isLoading && <h3>Please hold...</h3>}

      {isError && <pre>{JSON.stringify(error, null, 2)}</pre>}
      <ul>
        {isSuccess &&
          users.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
      </ul>
    </>
  );
};
