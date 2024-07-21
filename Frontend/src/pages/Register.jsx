import { useState } from "react";
import { useDispatch } from "react-redux";
import { getResiter } from "../features/userSlice";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
     setFormData((prev) => {
       return {
         ...prev,
         [e.target.name]: e.target.value,
       };
     });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== password2){
      return toast.error("Passwords not Matched")
    }
    dispatch(getResiter(formData));
    setFormData({
      name: "",
      email: "",
      password: "",
      password2: "",
    });
  };

  return (
    <div className="container p-5">
      <form className="px-5" onSubmit={(event) => handleSubmit(event)}>
        <div className="mb-1">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            value={name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => handleChange(e)}
          />
          <div id="emailHelp" className="form-text">
            We never share your email with anyone else.
          </div>
        </div>
        <div className="mb-1">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="mb-2">
          <label htmlFor="password2" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            name="password2"
            className="form-control"
            id="password2"
            value={password2}
            onChange={(e) => handleChange(e)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Register;
