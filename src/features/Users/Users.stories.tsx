import { userAPI } from "@api/userAPI";
import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { ReactElement } from "react";

import { handlers } from "../../mocks/handlers";
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

export const Complete = () => <Users />;

Complete.parameters = {
  msw: {
    handlers: [...handlers],
  },
};
