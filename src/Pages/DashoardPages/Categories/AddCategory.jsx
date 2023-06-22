import React from "react";
import { useState } from "react";
import axios from "../../../Axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "src/SharedUi/Alert/Alert";
import { useNavigate } from "react-router-dom";

const AddCategory = () => {
  const [alertVisible, setAlertVisible] = useState(false);

  const navigate = useNavigate();
  // Get token from local storage
  const token = localStorage.getItem("token");

  // Set result message
  const [result_message, setResult_message] = useState("");
  // Set error flag
  const [error_flag, setError_flag] = useState(false);
  // Set load
  const [load, setLoad] = useState(false);

  // Add function
  const addCategory = (e) => {
    e.preventDefault();
    // set load to true
    setLoad(true);
    axios
      .post(
        "/categories",
        {
          name: document.getElementById("name").value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setResult_message("Added successfully");
        document.getElementById("name").value = "";
        setLoad(false);
        setError_flag(false);
        navigate("/dashboard/dashboard/category/list");
      })
      // Catch error
      .catch((error) => {
        setResult_message(error.message);
        setLoad(false);
        setError_flag(true);
        setAlertVisible(true);
      });
  };

  return (
    <div className="container">
      <h1>إضافه فئة</h1>
      <form method="post" onSubmit={addCategory}>
        <div className="form-group">
          <label htmlFor="name">الاسم</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="الاسم"
            required
          />
        </div>
        {/* If load is true, show preloader */}
        {load && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
        <button type="submit" className="btn btn-primary mt-5">
          إضافه
        </button>
      </form>
      <Alert
        type="error-alert"
        visible={alertVisible}
        color="warning"
        message="اسم الفئة موجود بالفعل"
        // message={error_message}
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
    </div>
  );
};

export default AddCategory;
