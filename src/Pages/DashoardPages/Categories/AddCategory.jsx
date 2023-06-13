import React from 'react';
import { useState } from 'react';
import axios from '../../../Axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddCategory = () => {
  // Get token from local storage
  const token = localStorage.getItem('token');

  // Set result message
  const [result_message, setResult_message] = useState('');
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
        '/categories',
        {
          name: document.getElementById('name').value,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setResult_message('Added successfully');
        document.getElementById('name').value = '';
        setLoad(false);
        setError_flag(false);
      })
      // Catch error
      .catch((error) => {
        setResult_message(error.message);
        setLoad(false);
        setError_flag(true);
      });
  };

  return (
    <div >
      <h1>Add Category</h1>

      <form method="post" action="/categories" onSubmit={addCategory}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter name"
            required
          />
        </div>
        {/* If load is true, show preloader */}
        {load && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status"></div>
          </div>
        )}
        {/* Message */}
        <div className="form-group">
          <label
            htmlFor="result_message"
            className={error_flag ? 'text-danger' : 'text-success'}
          >
            {result_message}
          </label>
        </div>
        <button type="submit" className="btn btn-primary mt-5">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;