// imports
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "./Config";

function Layout() {
  // credential state
  const [credentials, setCredentials] = useState(false);
  // auth config
  const auth = getAuth(firebaseApp);
  // navigate config
  const navigate = useNavigate();

  useEffect(() => {
    // users authentication config
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCredentials(true);
      } else {
        setCredentials(false);
        navigate("/login");
      }
    });
  }, []);

  // log out config
  const logout = async () => {
    try {
      await signOut(auth);
      alert("You have logged out!");
      setCredentials(false);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <main>
      {/* components arrangement */}
      <NavBar auth={credentials} logout={logout} />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
