import React from "react";

export const MyProfile = () => {
  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center">
      <h1>My Profile</h1>
      <img
        width={"150px"}
        height={"150px"}
        className="bg-primary-subtle shadow my-3 rounded-circle"
        src="/src/assets/logo_blog.png"
        alt=""
      />
    </div>
  );
};
