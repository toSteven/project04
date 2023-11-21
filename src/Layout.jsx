import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function Layout() {
  return (
    <main>
      <NavBar />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
