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
const UsersList = () => {

  //get data from /user
  const [data, setData] = useState([]);
  //set error_message
  const [error_message, setError_message] = useState("");
  
  useEffect(() => {
    
    //get token from localstorag
    const fetchData = async () => {
      
      const result = await axios.get('/users');

      setData(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, []);
  //delete user
  
  const deleteUser = (_id) => {
    //confirmation message
    if (window.confirm("Are you sure you want to delete this user?")) {
      //delete data from /user/id
    axios.delete(`/users/${_id}`)
    .then((res) => {
      const del = data.filter((item) => _id !== item._id);
      setData(del);
      console.log(res);
    })
    //catch error
    .catch((error) => { 
      setError_message(error.message);
    });
    }
  };
  //edit user
  const editUser = (_id) => {
    //get data from /user/id
    axios.get(`/users/${_id}`)
    .then((res) => {
      console.log(res);
    })
    //catch error
    .catch((error) => {
      setError_message(error.message);  
    });
  };

  return (
    <div>
      <h1>Users List</h1>
      <CCardHeader>
        <CButton to="/users/add" color="primary">
          Add User
        </CButton>
      </CCardHeader>
      <CTable>
        <CTableHead>
          <CTableRow>
            <CTableHeaderCell scope="col">image</CTableHeaderCell>
            <CTableHeaderCell scope="col">ID</CTableHeaderCell>
            <CTableHeaderCell scope="col">name</CTableHeaderCell>
            <CTableHeaderCell scope="col">email</CTableHeaderCell>
            <CTableHeaderCell scope="col">phone</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address(city)</CTableHeaderCell>
            <CTableHeaderCell scope="col">Address(street)</CTableHeaderCell>
            <CTableHeaderCell scope="col">Delete</CTableHeaderCell>
            <CTableHeaderCell scope="col">Edit</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/**check if data.lenght == 0 display load else loop and display user data  */}
          {data.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : (
            data.map((item) => (
              <CTableRow key={item._id}>
                <CTableDataCell>
                  <img
                    src={item.image}
                    alt="user"
                    style={{ width: "50px", height: "50px" }}
                  />
                </CTableDataCell>
                <CTableDataCell>{item._id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>{item.email}</CTableDataCell>
                <CTableDataCell>{item.phone}</CTableDataCell>
                <CTableDataCell>{item.address.city}</CTableDataCell>
                <CTableDataCell>{item.address.street}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="danger"
                    onClick={() => deleteUser(item._id)}
                  >
                    Delete
                  </CButton>
                </CTableDataCell>
                <CTableDataCell>
                  <CButton
                    color="primary"
                    onClick={() => editUser(item._id)}
                  >
                    Edit
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))
          )}
        </CTableBody>
      </CTable>
      {/**error message */}
      {error_message && (
        <CModal show={true} onClose={() => setError_message("")}>
          <CModalHeader closeButton>
            <CModalTitle>Error</CModalTitle>
          </CModalHeader>
          <CModalBody>{error_message}</CModalBody>
          <CModalFooter>
            <CButton color="primary" onClick={() => setError_message("")}>
              Ok
            </CButton>
          </CModalFooter>
        </CModal>
      )}
    </div>
  )
}
export default UsersList
