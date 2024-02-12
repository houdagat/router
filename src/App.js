import NavBar from "./components/NavBar";
import "./styles.css";
import Home from "./components/Home";
import Profile from "./components/Profile";
import { Route, Routes } from "react-router-dom";
import UserList from "./components/UserList";
export default function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Listuser" element={<UserList />} />
        <Route path="/profile/:iduser" element={<Profile />} />
      </Routes>
    </div>
  );
}
