import { AppLayout } from "@common/components/layout/AppLayout";
import { RoutingErrorPage } from "@common/components/layout/RoutingErrorPage";
import { createBrowserRouter } from "react-router-dom";

import { Users } from "../features/Users";
import { UsersListErrorBoundary } from "../features/Users/components/UsersListErrorBoundary";
import { DataFetching } from "./DataFetching";
import { ErrorManagement } from "./ErrorManagement";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <RoutingErrorPage />,
    children: [
      {
        path: "data",
        element: <DataFetching />,
      },
      {
        path: "errors",
        element: <ErrorManagement />,
      },
      {
        path: "users",
        element: (
          <UsersListErrorBoundary>
            <Users />
          </UsersListErrorBoundary>
        ),
      },
    ],
  },
]);
