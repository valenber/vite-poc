import { AppErrorBoundary } from "@common/components/AppErrorBoundary";
import { AppLayout } from "@common/components/layout/AppLayout";
import { RoutingErrorPage } from "@common/components/layout/RoutingErrorPage";
import { createBrowserRouter } from "react-router-dom";

import { UsersList } from "../features/UsersList";
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
        element: (
          // if this boundary is moved inside the component, it fails to catch runtime errors
          <AppErrorBoundary>
            <DataFetching />
          </AppErrorBoundary>
        ),
      },
      {
        path: "errors",
        element: (
          // if this boundary is moved inside the component, it fails to catch runtime errors
          <AppErrorBoundary>
            <ErrorManagement />
          </AppErrorBoundary>
        ),
      },
      {
        path: "users",
        element: <UsersList />,
      },
    ],
  },
]);
