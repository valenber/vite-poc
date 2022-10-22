import { User } from "@api/entities";
import { ChangeEvent, FC, FormEvent, useState } from "react";

export interface NewUserFormProps {
  submitCallTrigger: (data: Omit<User, "id">) => Promise<unknown>;
}

export const NewUserForm: FC<NewUserFormProps> = ({ submitCallTrigger }) => {
  const [newName, setNewName] = useState("");

  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function sendCreateUserRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    submitCallTrigger({ name: newName });

    setNewName("");
  }

  return (
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
  );
};
