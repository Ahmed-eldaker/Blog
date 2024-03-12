import React, { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const InsertPosts = ({ display, displayData, isLoggedIn }) => {
  const [flagStatus, setFlagStatus] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const mode = id === "add" ? "add" : "edit";
  const product = display.find((p) => +p.id === +id);
  const [description, setDescription] = useState(
    mode === "add" ? "" : product.description
  );

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
  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData();
    formData.append("flagStatus", flagStatus);
    formData.append("description", description);

    try {
      const response = await axios.put(
        `http://localhost:3005/posts/${product.id}`,
        formData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      clearForm();
      displayData();
      navigate("/home");
      toast.success("Your Quote has been edited successfully!");
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
      <form onSubmit={mode === "add" ? handleSubmit : handleEdit}>
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
          {mode == "add" ? "Add your Quote" : "Update the Quote"}
        </button>
        {loading && <div className="loader"></div>}
        {error && <p>Error: {error}</p>}
      </form>
    </div>
  );
};

export default InsertPosts;
