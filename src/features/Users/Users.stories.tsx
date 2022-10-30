import { config } from "@config";
import { rest } from "msw";
import { ReactElement } from "react";

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

export const Loading = () => <Users />;

Loading.parameters = {
  msw: {
    handlers: [
      rest.get(`${config.apiURL}/users`, (_req, res, ctx) => {
        return res(ctx.delay(1000 * 10), ctx.status(500));
      }),
    ],
  },
};

export const Errored = () => <Users />;

Errored.parameters = {
  msw: {
    handlers: [
      rest.get(`${config.apiURL}/users`, (_req, res, ctx) => {
        return res(ctx.status(404));
      }),
    ],
  },
};
