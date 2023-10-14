import "./App.css";
import { Route, Routes } from "react-router-dom";
import Login from "./components/LogIn/Login";
import Signup from "./components/Signup/Signup";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
