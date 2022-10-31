import { config } from "@config";
import { render, screen, userEvent, waitFor} from "@tests/utils";
import { rest } from "msw";

import { server } from "../../mocks/server";
import { Users } from ".";

test("displays loading message", () => {
  render(<Users />);

  expect(screen.getByText("Please hold...")).toBeVisible();
});

test("displays users list when fetched", async () => {
  server.use(
    rest.get(`${config.apiURL}/users`, (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json([
          { id: "3", name: "Jack" },
          { id: "4", name: "Jill" },
        ])
      );
    })
  );
  render(<Users />);

  await waitFor(() => expect(screen.getByText("Jack")).toBeVisible());

  await waitFor(() => expect(screen.getByText("Jill")).toBeVisible());
});

test("newly created user is displayed in the list", async () => {
  const user = userEvent.setup();
  render(<Users />);

  await waitFor(() => expect(screen.getByText("Bob")).toBeVisible());
  await waitFor(() =>
    expect(screen.queryByText("Gary")).not.toBeInTheDocument()
  );

  await user.type(screen.getByLabelText("User name:"), "Gary");
  await user.click(screen.getByText("Save user"));

  await waitFor(() => expect(screen.getByText("Gary")).toBeVisible());
});
