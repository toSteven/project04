import { Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import NavBar from "./NavBar";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import firebaseApp from "./Config";

function Layout() {
  const [credentials, setCredentials] = useState(false); // Change null to false
  const auth = getAuth(firebaseApp);
  const navigate = useNavigate(); // Add this line

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCredentials(true);
      } else {
        setCredentials(false);
        // Navigate to login page
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [auth, navigate]);

  const logout = async () => {
    try {
      await signOut(auth);
      alert("You have logged out!");
      setCredentials(false);
      // Navigate to login page
      navigate("/login");
    } catch (error) {
      console.error("Error signing out", error);
    }
  };

  return (
    <main>
      <NavBar credentials={credentials} logout={logout} />
      <section>
        <Outlet />
      </section>
    </main>
  );
}

export default Layout;
