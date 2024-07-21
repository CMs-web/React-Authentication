import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLogin } from "../features/userSlice";

const LogIn = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getLogin(formData));
    setFormData({
      email: "",
      password: "",
    });
  };

  return (
    <div className="container p-5">
      <form className="px-5" onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            value={email}
            onChange={(e)=>handleChange(e)}
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
            name="password"
            value={password}
            onChange={(e)=>handleChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LogIn;
