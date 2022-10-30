import { User } from "@api/entities";
import { FC } from "react";

export interface LoadedUsersListProps {
  users: User[];
}

export const LoadedUsersList: FC<LoadedUsersListProps> = ({ users }) => {
  return (
    <ul>
      {users.map(({ id, name }) => {
        return <li key={id}>{name}</li>;
      })}
    </ul>
  );
};
