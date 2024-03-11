import React from "react";
import { Link } from "react-router-dom";
// import InsertPosts from "./InsertPosts";

export const Home = () => {
  // const isLoged = localStorage.getItem("userToken");
  // console.log(isLoged);
  return (
    <>
      <div>
        <Link to="/insertPosts">Add Post</Link>
      </div>
    </>
  );
};
