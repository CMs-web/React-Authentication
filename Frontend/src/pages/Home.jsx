import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.user);
  console.log(user)

  return (
    <div>
      <h1 className="text-center my-5">
        {user ? `Welcome, ${user.name} to` : "Get logged in to access"}{" "}
        <br /> Auth app
      </h1>
    </div>
  );
};

export default Home;
