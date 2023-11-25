import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

import NavBar from "./NavBar";

import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

// firebase config import
import firebaseApp from "./Config";

function Layout() {
  // credentials state
  const [credentials, setCredentials] = useState(false);

  // initialize auth
  const auth = getAuth(firebaseApp);

  // 🔹 CREDENTIALS CONFIG 🔹
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setCredentials(true);
        const uid = user.uid;
      } else {
        setCredentials(false);
      }
    });
  }, []);

  // log out function
  const logout = () => {
    // initialize auth
    const auth = getAuth(firebaseApp);

    // 🔹 SIGNOUT CONFIG 🔹
    // signOut(auth)
    //   .then(() => {
    //     alert("You have logout!");
    //     setCredentials(false);
    //   })
    //   .catch((error) => {});
  };

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
