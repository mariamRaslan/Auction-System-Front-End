import React, { useState, useEffect } from "react";
import axios from "../../../Axios";
import { useNavigate } from "react-router-dom";
import Alert from "../../../SharedUi/Alert/Alert";
import ConfirmationModal from "../../../SharedUi/Modal/Modal";

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
  const Navigate = useNavigate();
  const [selectedId, setSelectedId] = useState();
  const [activePage, setActivePage] = useState(1);
  const [alertVisible, setAlertVisible] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const pageSize = 6;
  //get data from /user
  const [data, setData] = useState([]);
  //set error_message
  const [error_message, setError_message] = useState("");

  useEffect(() => {
    //get token from localstorag
    const fetchData = async () => {
      const result = await axios.get("/users");

      setData(result.data.data);
      console.log(result.data.data);
    };
    fetchData();
  }, []);
  //delete user

  const deleteUser = (_id) => {
    //confirmation message
    // if (window.confirm("Are you sure you want to delete this user?")) {
    //delete data from /user/id
    axios
      .delete(`/users/${_id}`)
      .then((res) => {
        const del = data.filter((item) => _id !== item._id);
        setData(del);
        console.log(res);
      })
      //catch error
      .catch((error) => {
        setError_message(error.message);
        setAlertVisible(true);
      });
    // }
  };

  //viewUser
  const viewUser = (_id) => {
    //view user
    window.location.href = `/dashboard/dashboard/users/view-user/${_id}`;
  };
  //add user
  const addUser = () => {
    //add user
    window.location.href = `/dashboard/dashboard/users/add-user`;
  };
  //set permission
  const setPermission = (_id) => {
    //set permission
    window.location.href = `/dashboard/dashboard/users/set-permission/${_id}`;
  };

  // pagination
  const getPageData = () => {
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return data.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  const renderPagination = () => {
    const pageCount = Math.ceil(data.length / pageSize);
    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
      pages.push(
        <li key={i} className={`page-item ${activePage === i ? "active" : ""}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }
    return (
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center">{pages}</ul>
      </nav>
    );
  };
  return (
    <div>
      <h1>Users List</h1>
      {/**error message */}
      {/* {error_message && (
        <CModal show={true} onClose={() => setError_message("")}>
          <CModalHeader closeButton>
            <CModalTitle>Error</CModalTitle>
          </CModalHeader>
          <CModalBody>{error_message}</CModalBody>
          <CModalFooter>
            <CButton color="primary"  onClick={() => setError_message("")}>
              Ok
            </CButton>
          </CModalFooter>
        </CModal>
      )} */}
      {/* <CCardHeader> */}
      {/* <button className="btn btn-primary" onClick={() => addUser()}> */}
      {/* إضافة مستخدم */}
      {/* </button> */}
      {/* </CCardHeader> */}
      <CTable>
        <CTableHead style={{ backgroundColor: "#4f5d73", color: "#fff" }}>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">الصورة</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col">البريد الإالكتلروني</CTableHeaderCell>
            <CTableHeaderCell scope="col">موبايل</CTableHeaderCell>
            <CTableHeaderCell scope="col">المدينه</CTableHeaderCell>
            <CTableHeaderCell scope="col">الشارع</CTableHeaderCell>
            <CTableHeaderCell scope="col" colSpan={2}>
              العمليات
            </CTableHeaderCell>
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
            pageData.map((item, index) =>
              item.role === "admin" ? null : (
                <CTableRow key={item._id}>
                  <CTableDataCell>{index }</CTableDataCell>
                  <CTableDataCell>
                    <img
                      src={item.image}
                      alt="user"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                      }}
                    />
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.name ? item.name : "--"}
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.email ? item.email : "--"}
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.phone ? item.phone : "--"}
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.address ? item.address.city : "--"}
                  </CTableDataCell>
                  <CTableDataCell>
                    {item.address ? item.address.street : "--"}
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="primary"
                      variant="outline"
                      className="btntext w-100"
                      onClick={() => viewUser(item._id)}
                    >
                      عرض
                    </CButton>
                  </CTableDataCell>
                  <CTableDataCell>
                    <CButton
                      color="danger"
                      variant="outline"
                      className="btntext w-100"
                      onClick={() => {
                        setSelectedId(item._id);
                        setShowConfirmationModal(true);
                      }}
                    >
                      حذف
                    </CButton>
                  </CTableDataCell>
                  {/* <CTableDataCell>
                  <CButton
                    color="primary"
                    variant="outline"
                    onClick={() => setPermission(item._id)}
                  >
                    Set Permission
                  </CButton>
                </CTableDataCell> */}
                </CTableRow>
              )
            )
          )}
        </CTableBody>
      </CTable>

      {renderPagination()}
      <ConfirmationModal
        message="هل انت متأكد من حذف هذا العنصر؟"
        confirmButtonText="حذف"
        cancelButtonText="الغاء"
        onConfirm={() => {
          deleteUser(selectedId);
          setShowConfirmationModal(false);
        }}
        onCancel={() => setShowConfirmationModal(false)}
        visible={showConfirmationModal}
        setVisible={setShowConfirmationModal}
      />
      <Alert
        type="error-alert"
        visible={alertVisible}
        color="warning"
        message={error_message}
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
    </div>
  );
};
export default UsersList;
