import React, { useState,useEffect } from "react";
import axios from "../../Axios";

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CButton,
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
} from "@coreui/react";
//import fontaswome


const CategoryList = () => {
  
  //get data from https://dummyjson.com/products
  const [data, setData] = useState([]);
  //set error_message
  const [error_message, setError_message] = useState("");
  //get token from localstorage
  const token = localStorage.getItem("token");

  useEffect(() => {

    //get token from localstorag  

    const fetchData = async () => {
      //get data from /categories and token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwicm9sZSI6InVzZXIiLCJpYXQiOjE2ODYxNzQ0MjksImV4cCI6MTY4NjE4NTIyOX0.VbVTT1E5YyZwtlt1Zj3VINrPkYRi9YlwMnOclocPqT4"
      const result = await axios.get('/categories');
      //set data
      setData(result.data.data);
      //log
      console.log(result.data.data);
    };
    fetchData();
  }, []);
  
  //delete function
  const deleteCategory = (_id) => {
    //confirmation message
    if (window.confirm("Are you sure you want to delete this category?")) {
      //delete data from https://dummyjson.com/products/id
    axios.delete(`/categories/${_id}`)
    .then((res) => {
      const del = data.filter((item) => _id !== item._id);
      setData(del);
    })
    //catch error
    .catch((error) => {
      setError_message(error.message);
    });
    }
  };

    
  return (
    //table to display id , name , button for edit and button for delete
    <div>
      <CCardHeader >
        <h1>Categories</h1>
      </CCardHeader>
      {/**error_message */}
      {error_message && (
        <div className="alert alert-danger" role="alert">
          {error_message}
        </div>
      )}
      <CTable>
        <CTableHead color="dark"> 
          <CTableRow>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/**check if data.lenght == 0 display load else loop and display id , name  */}
          {data.length === 0 ? (
            <div>
              {/**preload at the center screen */}
              <div className="d-flex justify-content-center align-item-center">
                <div className="spinner-border text-primary" role="status">
                  </div>
                </div>
            </div>
          ) : (
            data.map((item) => (
              <CTableRow key={item._id}>
                <CTableDataCell>{item._id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>
                  <CButton 
                  color="danger"
                  onClick={() => deleteCategory(item._id)}
                  >Delete</CButton>
                </CTableDataCell>
              </CTableRow>
            ))
          )}
        </CTableBody>
      </CTable>
    </div>
            
  )
}
export default CategoryList
