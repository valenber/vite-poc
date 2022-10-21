import { AppErrorBoundary } from "@common/components/AppErrorBoundary";
import { createBrowserRouter } from "react-router-dom";

import { AppLayout } from "../layout/AppLayout";
import { RoutingErrorPage } from "../layout/RoutingErrorPage";
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
        hasErrorBoundary: true,
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
    ],
  },
]);
