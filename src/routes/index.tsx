import { AppLayout } from "@common/components/layout/AppLayout";
import { RoutingErrorPage } from "@common/components/layout/RoutingErrorPage";
import { createBrowserRouter } from "react-router-dom";

import { ErrorManagement } from "../features/ErrorManagement/ErrorManagement";
import { Users } from "../features/Users";
import { UsersListErrorBoundary } from "../features/Users/components/UsersListErrorBoundary";

export const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    errorElement: <RoutingErrorPage />,
    children: [
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
