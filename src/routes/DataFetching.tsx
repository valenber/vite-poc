import { userAPI } from "@api/userAPI";
import { NewUserForm } from "@common/components/NewUserForm";
import { useErrorHandler } from "react-error-boundary";

export const DataFetching = () => {
  const {
    isLoading,
    isSuccess,
    data: users,
    isError,
    error,
  } = userAPI.useGetAllUsersQuery();

  useErrorHandler(error);

  const [trigger] = userAPI.useCreateUserMutation();

  return (
    <>
      <NewUserForm submitCallTrigger={trigger} />

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
