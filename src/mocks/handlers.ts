// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

import { User } from "../App";

const mockUsers: User[] = [
  { id: "1", name: "Bob" },
  { id: "2", name: "Jane" },
];

sessionStorage.setItem("users", JSON.stringify(mockUsers));

export const handlers = [
  rest.get("/users", (_req, res, ctx) => {
    const storedUsers = sessionStorage.getItem("users");

    return res(ctx.status(200), ctx.json(JSON.parse(storedUsers!)));
  }),

  rest.post<User>("/users", (req, res, ctx) => {
    const storedUsers = sessionStorage.getItem("users");
    const updatedUsers: User[] = [JSON.parse(storedUsers!), req.json()];

    sessionStorage.setItem("users", JSON.stringify(updatedUsers));

    return res(ctx.status(200), ctx.json(req.json()));
  }),
];
