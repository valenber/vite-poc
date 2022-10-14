import { userAPI } from "./services/api";

export const App = () => {
  const {
    isLoading,
    isSuccess,
    data: users,
    isError,
    error,
  } = userAPI.useGetAllUsersQuery();

  return (
    <>
      <h1>Vite - PoC</h1>
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
