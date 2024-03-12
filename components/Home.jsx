import React from "react";
import { Link } from "react-router-dom";
// import InsertPosts from "./InsertPosts";

export const Home = (props) => {
  let { display, handleDelete } = props;
  console.log(display);
  return (
    <>
      <div className="container">
        <div className="m-auto py-2 px-4 bg-primary-subtle btn btn-outline-info  ">
          <Link className="mb-3 text-decoration-none" to="/insertPosts">
            What is happening?!
          </Link>
          {display.map((item, idx) => (
            <div key={idx}>
              {item.firstName} {item.lastName} {item.description}
              <button
                className="btn btn-danger"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
