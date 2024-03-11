import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

const InsertPosts = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("description", description);
    formData.append("fileCv", file);
    try {
      const response = await axios.post(
        "http://localhost:3005/tasks",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      console.log(formData);
      console.log(response);
      //   clearForm();
      //   navigate("/home");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setDescription("");
    setFile(null);
  };

  return (
    <div className="container w-75 m-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="form-control mb-2  "
            type="text"
            placeholder="firstname"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control mb-2"
            type="text"
            placeholder="lastname"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <textarea
            className="form-control mb-2"
            typeof="text"
            placeholder="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div>
          <input
            className="form-control mb-2"
            type="file"
            placeholder="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <button
          className="btn btn-success bg-success"
          type="submit"
          disabled={loading}
        >
          Add your Post
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default InsertPosts;
