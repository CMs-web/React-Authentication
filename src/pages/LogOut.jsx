import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {isLogInbtn } from "../features/userSlice";

const LogOut = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(isLogInbtn(false))
        return ()=> dispatch(isLogInbtn(true))
    }, [])
    
    return (
      <div className="container p-5">
        <form className="px-5">
          <div className="mb-2">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />

          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Log In
          </button>
        </form>
      </div>
    );
};

export default LogOut;
