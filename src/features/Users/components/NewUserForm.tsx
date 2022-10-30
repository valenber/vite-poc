import { userAPI } from "@api/userAPI";
import { ChangeEvent, FormEvent, useState } from "react";

export const NewUserForm = () => {
  const [triggerMutation] = userAPI.useCreateUserMutation();
  const [newName, setNewName] = useState("");


  function handleInputChange(e: ChangeEvent<HTMLInputElement>) {
    setNewName(e.target.value);
  }

  function sendCreateUserRequest(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    triggerMutation({ name: newName });

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
