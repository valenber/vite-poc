// this feature is designed as an illustration of a data fetching pattern
// here we want to render a list of entities from a remote resource
// we also want to give feedback to the user if an error occures
// and while the data is being fetched

import { userAPI } from "@api/userAPI";
import { NewUserForm } from "@common/components/NewUserForm";
import { useErrorHandler } from "react-error-boundary";

import { LoadedUsersList } from "./components/LoadedUsersList";

export const UsersList = () => {
  const {
    isLoading,
    data: users,
    error,
  } = userAPI.useGetAllUsersQuery();

  useErrorHandler(error); // this will be caught by error boundary

  const [trigger] = userAPI.useCreateUserMutation();

  if (isLoading) {
    return <h3>Please hold...</h3>;
  }

  return (
    <>
      <h1>Users list</h1>

      <NewUserForm submitCallTrigger={trigger} />

      <LoadedUsersList users={users!} />
    </>
  );
};
