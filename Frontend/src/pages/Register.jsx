import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { isSignInbtn, signInUser } from "../features/userSlice";
import { register } from "../features/authServices";


const Register = () => {
  const dispatch = useDispatch()  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  })


  const handleSubmit = (event) => {
    event.preventDefault();
    setFormData((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
    dispatch(signInUser(formData));
    register(formData);
    console.log(formData);
  };

    useEffect(() => {
      dispatch(isSignInbtn(false));
      return () => dispatch(isSignInbtn(true))
    }, []);
  
    return (
      <div className="container p-5">
        <form className="px-5" onSubmit={(event) => handleSubmit(event)}>
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Name
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-1">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" className="form-text">
              We never share your email with anyone else.
            </div>
          </div>
          <div className="mb-1">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-2">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              name="password2"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Sign In
          </button>
        </form>
      </div>
    );
  }


export default Register
