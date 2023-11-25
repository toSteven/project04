import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./Config";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Add this line

  const handleLogin = () => {
    if (email !== "" && password !== "") {
      const auth = getAuth(firebaseApp);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Sign in successful");
          navigate("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(`Error: ${errorMessage}`);
        });
    } else {
      alert("Please enter both email and password");
    }
  };

  return (
    <>
      <section className="container">
        <h1 className="display-4 text-center my-5">Employee Management</h1>
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h2 className="fw-bold text-center mb-4">Login</h2>

            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="btn btn-dark w-100 mb-3" onClick={handleLogin}>
              Log In
            </button>

            <hr />

            <p className="text-center">
              <Link to="/register">Register here.</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default LogIn;
