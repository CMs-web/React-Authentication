import toast from "react-hot-toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Navbar = () => {
  const { user } = useSelector(state => state.user)
  const logout = () => {
    toast.success("Log out success")
    localStorage.removeItem("user")
  }
  return (
    <nav className="navbar bg-primary">
      <div className="container-fluid">
        <Link to={"/"} className="navbar-brand">
          Authentication
        </Link>
        <form className="d-flex" role="search">
          {!user ? (
            <>
              <Link to={"/register"} className="btn btn-secondary mx-2">
                Sign In
              </Link>
              <Link to={"/login"} className="btn btn-secondary">
                Log In{" "}
              </Link>
            </>
          ) : (
              <button className="btn btn-secondary" onClick={logout}>
                Log Out
             </button>
          )}
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
