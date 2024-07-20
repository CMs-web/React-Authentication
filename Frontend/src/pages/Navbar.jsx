import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Authentication
        </Link>
        <form className="d-flex" role="search">
          <Link to={"/register"} className="btn btn-secondary mx-2">
            Sign In
          </Link>
          <Link to={"/login"} className="btn btn-secondary">
            {" "}
            Log In{" "}
          </Link>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
