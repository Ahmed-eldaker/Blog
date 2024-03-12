import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import ErrorPage from "../Pages/Error/ErrorPage";
import { Home } from "../components/Home";
import InsertPosts from "../components/InsertPosts";
import { NavBar } from "../components/NavBar";
import { MyProfile } from "../components/MyProfile";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function App() {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  isLoggedIn = localStorage.getItem("userToken");
  // const [render, setRender] = useState(second);
  let [display, setDisplay] = useState([]);

  // Function to fetch data from the json
  async function displayData() {
    try {
      const response = await axios.get("http://localhost:3005/posts");
      setDisplay(response.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  }
  useEffect(() => {
    displayData();
  }, []);
  // console.log(display);

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
        <ToastContainer />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar isLoggedIn={isLoggedIn} />{" "}
                <Home
                  isLoggedIn={isLoggedIn}
                  handleDelete={handleDelete}
                  display={display}
                />
              </>
            }
          />
          <Route
            path="/home"
            element={
              <>
                <NavBar isLoggedIn={isLoggedIn} />
                <Home
                  isLoggedIn={isLoggedIn}
                  handleDelete={handleDelete}
                  display={display}
                />
              </>
            }
          />
          <Route path="/login" element={<Login displayData={displayData} />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/*" element={<ErrorPage />} />
          <Route
            path="/insertPosts"
            element={
              <>
                <NavBar isLoggedIn={isLoggedIn} />
                <InsertPosts
                  isLoggedIn={isLoggedIn}
                  displayData={displayData}
                />
              </>
            }
          />
          <Route
            path="/myProfile"
            element={
              !isLoggedIn ? (
                <Navigate to="/login" />
              ) : (
                <>
                  <NavBar isLoggedIn={isLoggedIn} />
                  <MyProfile display={display} handleDelete={handleDelete} />
                </>
              )
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
