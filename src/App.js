import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LogIn/Login";
import Signup from "./components/Signup/Signup";
import UserProfile from "./components/userProfile/UserProfile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
        <Route path="/user" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
