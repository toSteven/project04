import { Link, NavLink } from "react-router-dom";

function NarBar({ auth, logout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-secondary">
      <div className="container-fluid">
        <Link className="navbar-brand text-white" to="/">
          My Company
        </Link>

        <button
          className="navbar-toggler bg-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {auth ? (
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="/">
                  Dashboard
                </NavLink>
              </li>
            ) : null}

            {auth ? null : (
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="register">
                  Register
                </NavLink>
              </li>
            )}

            {auth ? null : (
              <li className="nav-item">
                <NavLink className="nav-link text-white" to="login">
                  Log In
                </NavLink>
              </li>
            )}

            {auth ? (
              <li className="nav-item">
                <NavLink
                  className="nav-link text-white"
                  to="/"
                  onClick={() => {
                    logout();
                  }}
                >
                  SignOut
                </NavLink>
              </li>
            ) : null}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NarBar;
