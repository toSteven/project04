import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseApp from "./Config";

function Register() {
  //email & password state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // navigate congif
  const navigate = useNavigate();

  // register config
  const handleRegister = () => {
    if (email !== "" && password !== "") {
      const auth = getAuth(firebaseApp);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // User registered successfully
          const user = userCredential.user;
          alert("Registration successful");
          navigate("/login");
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
      <section className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: "400px" }}>
          <div className="card-body">
            <h1 className="fw-bold text-center">Register</h1>

            <div className="form-floating my-3">
              {/* Email Input */}
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="email">Email</label>
            </div>

            <div className="form-floating mb-3">
              {/* Password Input */}
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label htmlFor="password">Password</label>
            </div>

            {/* Register Btn */}
            <button className="btn btn-dark" onClick={() => handleRegister()}>
              Register
            </button>
            <hr />
            {/* Link to Login */}
            <Link to="/login" className="">
              Already have an account? Log in here.
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
