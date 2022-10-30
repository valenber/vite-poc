import { ReactElement } from "react";

import { handlers } from "../../mocks/handlers";
import { Users } from ".";
import { UsersListErrorBoundary } from "./components/UsersListErrorBoundary";

export default {
  title: "Users",
  component: Users,
  decorators: [
    (Story: () => ReactElement) => (
      <UsersListErrorBoundary>
        <Story />
      </UsersListErrorBoundary>
    ),
  ],
};

export const Complete = () => <Users />;

Complete.parameters = {
  msw: {
    handlers: [...handlers],
  },
};
