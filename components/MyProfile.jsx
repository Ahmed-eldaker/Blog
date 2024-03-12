import React from "react";
import { Link } from "react-router-dom";

export const MyProfile = ({ display, handleDelete, isLoggedIn }) => {
  return (
    <div className="d-flex w-100 flex-column justify-content-center align-items-center">
      <img
        width={"150px"}
        height={"150px"}
        className="bg-primary-subtle shadow my-3 rounded-circle"
        src="/src/assets/logo_blog.png"
        alt=""
      />
      <Link
        className="my-3 bg-primary-subtle btn text-decoration-none"
        to="/insertPosts"
      >
        What is happening?!
      </Link>
      <div>
        {display.map((item, idx) =>
          item.flagStatus ? (
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
                  <div className="btn btn-outline-primary">&#9999;</div>
                ) : (
                  ""
                )}
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};
