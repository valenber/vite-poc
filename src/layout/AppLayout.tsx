import "./AppLayout.css";

import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <nav>
        <li>
          <Link to="data">Data fetching</Link>
        </li>

        <li>
          <Link to="errors">Error Management</Link>
        </li>

        <li>
          <Link to="app/broken">Broken link</Link>
        </li>
      </nav>

      <section>
        <Outlet />
      </section>
    </div>
  );
};
