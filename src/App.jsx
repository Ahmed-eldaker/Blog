import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import { Home } from "../components/Home";
import InsertPosts from "../components/InsertPosts";
import { NavBar } from "../components/NavBar";
import { MyProfile } from "../components/MyProfile";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  isLoggedIn = localStorage.getItem("userToken");
  console.log(isLoggedIn);
  return (
    <>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/insertPosts" element={<InsertPosts />} />
          <Route path="/myProfile" element={<MyProfile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
