import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const InsertPosts = ({ displayData, isLoggedIn }) => {
  const [flagStatus, setFlagStatus] = useState(true);
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("flagStatus", flagStatus);

    formData.append("description", description);

    try {
      const response = await axios.post(
        "http://localhost:3005/posts",
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      clearForm();
      displayData();
      navigate("/home");
      toast.success("Your Quote has been post successfully!");
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const clearForm = () => {
    setFlagStatus("");
    setDescription("");
  };

  return (
    <div className="container w-75 m-auto">
      <form onSubmit={handleSubmit}>
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
        <button
          className="btn btn-primary bg-primary"
          type="submit"
          disabled={loading}
        >
          Add your Quote
        </button>
        {loading && <div className="loader"></div>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default InsertPosts;
