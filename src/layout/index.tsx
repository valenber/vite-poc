import "./AppLayout.css";

import { Link, Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <nav>
        <Link to="app/">App</Link>
      </nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
