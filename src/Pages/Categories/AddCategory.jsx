import React from 'react'
import { useState, useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import axios from 'axios'
import CIcon from '@coreui/icons-react'

const AddCategory = () => {
  
  //get token from localstorage
  // const token = localStorage.getItem("token");
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODYxNzQ0MjksImV4cCI6MTY4NjE4NTIyOX0.VbVTT1E5YyZwtlt1Zj3VINrPkYRi9YlwMnOclocPqT4";

  //set result_message 
  const [result_message, setResult_message] = useState("");
  
  //add function
  const addCategory = (e) => {
    e.preventDefault();      
    axios.post("http://localhost:8080/categories", {
      name: document.getElementById('name').value,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setResult_message(res.message);
    })
    //catch error
    .catch((error) => {
      setResult_message(error.message);
      //log
      console.log(error.message);
    }
    );
  };
  return (
    //caregory fields with fields id , name , button add
    <div>
      <h1>Add Category</h1>

      <form method="post" action="http://localhost:8080/categories"
      onSubmit={addCategory}
      >
        <div className="form-group">
          <label for="name">Name</label>
          <input type="text" className="form-control " id="name" placeholder="Enter Name" required/>
        </div>
        {/**message */}
        <div className="form-group">
          <label for="result_message">{result_message} </label>
        </div>
        <button type="submit"
        className="btn btn-primary mt-5">Add</button>
      </form>
    </div>
  )
}
export default AddCategory
