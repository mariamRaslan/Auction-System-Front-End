import React, { useState, useEffect } from "react";
import axios from "../../../Axios";
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CCardHeader,
  CButton,
} from "@coreui/react";
import ConfirmationModal from "src/SharedUi/Modal/Modal";
import Alert from "src/SharedUi/Alert/Alert";

const CategoryList = () => {
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
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
      const result = await axios.get("/categories");
      //set data
      setData(result.data.data);
      //log
      console.log(result.data.data);
    };
    fetchData();
  }, []);

  //delete function
  const deleteCategory = (_id) => {
    axios
      .delete(`/categories/${_id}`)
      .then((res) => {
        const del = data.filter((item) => _id !== item._id);
        setData(del);
      })
      //catch error
      .catch((error) => {
        console.log(error);
        setError_message(error.response.data.message);
        setAlertVisible(true);
      });
  };

  return (
    //table to display id , name , button for edit and button for delete
    <div>
      <CCardHeader>
        <h1>الفئات</h1>
      </CCardHeader>
      <CTable>
        <CTableHead style={{ backgroundColor: "#4f5d73", color: "#fff" }}>
          <CTableRow>
            <CTableHeaderCell scope="col">الرقم التعريفي</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col" className="text-align-center">
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/**check if data.lenght == 0 display load else loop and display id , name  */}
          {data.length === 0 ? (
            <div>
              {/**preload at the center screen */}
              <div className="d-flex justify-content-center align-item-center">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
              </div>
            </div>
          ) : (
            data.map((item) => (
              <CTableRow key={item._id}>
                <CTableDataCell>{item._id}</CTableDataCell>
                <CTableDataCell>{item.name}</CTableDataCell>
                <CTableDataCell>
                  <CButton
                    className="btntext w-100"
                    color="danger"
                    variant="outline"
                    onClick={() => {
                      setShowConfirmationModal(true);
                      setSelectedId(item._id);
                    }}
                  >
                    حذف
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))
          )}
        </CTableBody>
      </CTable>
      <ConfirmationModal
        message="هل انت متأكد من حذف هذا العنصر؟"
        confirmButtonText="حذف"
        cancelButtonText="الغاء"
        onConfirm={() => {
          deleteCategory(selectedId);
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
        message="هذا العنصر مرتبط بعناصر اخرى لا يمكن حذفه"
        // message={error_message}
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
    </div>
  );
};
export default CategoryList;
