import "./AppLayout.css";

import { Link, Outlet } from "react-router-dom";

import { AppErrorBoundary } from "../AppErrorBoundary";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <nav>
        <li>
          <Link to="data">Data fetching</Link>
        </li>

        <li>
          <Link to="users">Users List</Link>
        </li>

        <li>
          <Link to="errors">Error Management</Link>
        </li>

        <li>
          <Link to="app/broken">Broken link</Link>
        </li>
      </nav>

      <section>
        <AppErrorBoundary>
          <Outlet />
        </AppErrorBoundary>
      </section>
    </div>
  );
};
