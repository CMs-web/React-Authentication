import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AppLayout from "./pages/AppLayout";
import Register from "./pages/Register";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" exect element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LogIn />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
