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
import axios from "axios";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  isLoggedIn = localStorage.getItem("userToken");
  // let [Quotes, setQuotes] = useState();
  let [display, setDisplay] = useState([]);

  // Function to fetch data from the json
  (async function displayData() {
    try {
      const response = await axios.get("http://localhost:3005/posts");
      setDisplay(response.data);
      console.log(display);
      console.log("Response data:", response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  });
  console.log(display);

  // Function to handle  dele
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3005/posts/${id}`);
      displayData();
    } catch (error) {
      console.error("Error deleting item:", error.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        <NavBar isLoggedIn={isLoggedIn} />
        <Routes>
          <Route
            path="/"
            element={<Home handleDelete={handleDelete} display={display} />}
          />
          <Route
            path="/home"
            element={<Home handleDelete={handleDelete} display={display} />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route path="/insertPosts" element={<InsertPosts />} />
          <Route
            path="/myProfile"
            element={
              <MyProfile display={display} handleDelete={handleDelete} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
