import { userAPI } from "@api/userAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ReactElement } from "react";

import { Users } from ".";
import { UsersListErrorBoundary } from "./components/UsersListErrorBoundary";

export default {
  title: "Users",
  component: Users,
  decorators: [
    (Story: () => ReactElement) => (
      <ApiProvider api={userAPI}>
        <UsersListErrorBoundary>
          <Story />
        </UsersListErrorBoundary>
      </ApiProvider>
    ),
  ],
};

export const Error = () => <Users />;
