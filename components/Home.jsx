import React from "react";
import { Link } from "react-router-dom";
// import InsertPosts from "./InsertPosts";

export const Home = (props) => {
  let { display, handleDelete, isLoggedIn } = props;
  // console.log(display);
  return (
    <div className="container d-flex justify-align-content-end align-items-center flex-column">
      <Link
        className="my-3 bg-primary-subtle btn text-decoration-none"
        to="/insertPosts"
      >
        What is happening?!
      </Link>
      <div>
        {display.map((item, idx) => (
          <div
            style={{ maxWidth: "700px" }}
            className="shadow my-3 px-2 py-3 rounded-2"
            key={idx}
          >
            {item.description}
            <div className="text-end">
              {item.flagStatus && isLoggedIn ? (
                <div
                  className="btn me-1 btn-outline-danger"
                  onClick={() => handleDelete(item.id)}
                >
                  &#10060;
                </div>
              ) : (
                ""
              )}
              {item.flagStatus && isLoggedIn ? (
                <Link to={""} className="btn btn-outline-primary">
                  &#9999;
                </Link>
              ) : (
                ""
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
