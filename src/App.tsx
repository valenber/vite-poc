import { userAPI } from "@api/userAPI";
import { ChangeEvent, FormEvent, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

export const App = () => {
  const {
    isLoading,
    isSuccess,
    data: users,
    isError,
    error,
  } = userAPI.useGetAllUsersQuery();

  useErrorHandler(error);

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

  // AppErrorBoundary test for react lifecucle error
  const [renderFire, setRenderFire] = useState(false);

  const Fire = () => {
    throw new Error("💥 Lifecycle Fire!!! 💥");
  };

  function renderFireComponent() {
    setRenderFire(true);
  }

  // AppErrorBoundary test for runtime error
  const errorHandler = useErrorHandler();

  function throwRuntimeError() {
    const runtimeError = new Error("💥 Runtime Fire!!! 💥");
    errorHandler(runtimeError);
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

      <button onClick={renderFireComponent}>Render faulty component</button>
      {renderFire && <Fire />}

      <button onClick={throwRuntimeError}>Throw runtime error</button>
    </>
  );
};
