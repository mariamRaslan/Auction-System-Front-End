import React from 'react'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from '../../Axios'

const AddCategory = () => {
  
  //get token from localstorage
  const token = localStorage.getItem("token");

  //set result_message 
  const [result_message, setResult_message] = useState("");
  //set error_flag
  const [error_flag,setError_flag] = useState(false);
  //set load
  const [load, setLoad] = useState(false);
  
  //add function
  const addCategory = (e) => {
    e.preventDefault(); 
    //load == true
    setLoad(true);
    axios.post("/categories", {
      name: document.getElementById('name').value,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setResult_message("Added succesfuly");
      document.getElementById('name').value=""
      setLoad(false);
      setError_flag(false);
    })
    //catch error
    .catch((error) => {
      setResult_message(error.message);
      setLoad(false);
      setError_flag(true);
      
    }
    );
  };
  return (
    //caregory fields with fields id , name , button add
    <div>
      <h1>Add Category</h1>

      <form method="post" action="/categories"
      onSubmit={addCategory}
      >
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control " id="name" placeholder="Enter Name" required/>
        </div>
        {/**if load true show preload */}
        {load && (
          <div className="d-flex justify-content-center">
            <div className="spinner-border" role="status">
              </div>
            </div>
        )}
        {/**message */}
        <div className="form-group">
          <label for="result_message"
          className={error_flag ? "text-danger" : "text-success"}>{result_message} </label>
        </div>
        <button type="submit"
        className="btn btn-primary mt-5">Add</button>
      </form>
    </div>
  )
}
export default AddCategory
