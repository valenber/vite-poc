// this feature is designed as an illustration of a data fetching pattern
// here we want to render a list of entities from a remote resource
// we also want to give feedback to the user if an error occures
// and while the data is being fetched

import { userAPI } from "@api/userAPI";
import { useErrorHandler } from "react-error-boundary";

import { LoadedUsersList } from "./components/LoadedUsersList";
import { NewUserForm } from "./components/NewUserForm";

// this component is in charge of fetching users and managing the request states
export const Users = () => {
  const { isLoading, data: users, error } = userAPI.useGetAllUsersQuery();
  useErrorHandler(error); // this will throw to be caught by error boundary

  if (isLoading) {
    return <h3>Please hold...</h3>;
  }

  return (
    <>
      <h1>Users list</h1>

      <NewUserForm />

      <LoadedUsersList users={users!} />
    </>
  );
};
