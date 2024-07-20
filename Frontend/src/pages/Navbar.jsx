import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isSignIn, isLoggedIn } = useSelector((state) => state.user);

  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Authentication
        </Link>
        <form className="d-flex" role="search">
          {isSignIn && ( <Link to={"/register"} className="btn btn-secondary mx-2">Sign In</Link> )}
          {isLoggedIn && ( <Link to={"/login"} className="btn btn-secondary"> Log In </Link>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
