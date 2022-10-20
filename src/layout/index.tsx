import "./AppLayout.css";

import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="AppLayout">
      <nav>[navigation links]</nav>
      <section>
        <Outlet />
      </section>
    </div>
  );
};
