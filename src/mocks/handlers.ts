import { User } from "@api/entities";
import { config } from "@config";
// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";

const mockUsers: User[] = [
  { id: "1", name: "Bob" },
  { id: "2", name: "Jane" },
];

sessionStorage.setItem("users", JSON.stringify(mockUsers));

function getUsers(): User[] {
  return JSON.parse(sessionStorage.getItem("users") ?? '[]');
}

export const handlers = [
  rest.get(`${config.apiURL}/users`, (_req, res, ctx) => {
    const storedUsers = getUsers();

    return res(ctx.status(200), ctx.json(storedUsers));
  }),

  rest.post<Omit<User, 'id'>>(`${config.apiURL}/users`, async (req, res, ctx) => {
    const storedUsers = getUsers();
    const payload = await req.json();
    const nextId = String(storedUsers.length + 1);

    const newUser: User = { id: nextId, ...payload };

    const updatedUsers: User[] = [...storedUsers, newUser];

    sessionStorage.setItem("users", JSON.stringify(updatedUsers));

    return res(ctx.status(200), ctx.json(newUser));
  }),
];
