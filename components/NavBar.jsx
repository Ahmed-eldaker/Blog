import React from "react";
import { Link } from "react-router-dom";

export const NavBar = (props) => {
  let { isLoggedIn } = props;
  // console.log(isLoggedIn);
  return (
    <>
      <div>
        <nav className="shadow mb-2 border-bottom border-secondary-subtle navbar navbar-expand-lg bg-primary-subtle">
          <div className="container-fluid d-flex justify-content-evenly">
            <Link className="navbar-brand" to="/home">
              Quotefy
            </Link>

            <div className="border-1 d-flex justify-content-between align-items-center">
              {isLoggedIn ? (
                <Link className="nav-link " aria-current="page" to="/myProfile">
                  My Profile
                </Link>
              ) : (
                <Link className="nav-link " aria-current="page" to="/logIn">
                  LogIn
                </Link>
              )}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
