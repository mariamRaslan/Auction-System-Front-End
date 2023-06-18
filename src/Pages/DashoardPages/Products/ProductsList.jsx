import React, { useState, useEffect } from "react";
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
  CAlert,
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Axios";
import Alert from "../../../SharedUi/Alert/Alert";
import ConfirmationModal from "../../../SharedUi/Modal/Modal";
const Products = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [alertVisible, setAlertVisible] = useState(false);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 4;

  // function for get all products
  async function fetchProducts() {
    try {
      const response = await axiosInstance.get("/items");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // function for get all categories
  async function fetchCategories() {
    try {
      const response = await axiosInstance.get("/categories");

      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  const handleDelete = (id) => {
    setSelectedId(id);
    setShowConfirmationModal(true);
  };
  // function for delete product
  async function deleteProduct(id) {
    try {
      console.log(id);
      const response = await axiosInstance.delete(`/items/${id}`);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
      setAlertVisible(true);
    }
  }

  // Navigate to the edit page
  const handleEditButton = (id) => {
    parseInt(id);
    Navigate(`/dashboard/products/edit-product/${id}`);
  };

  // Navigate to the details page
  const handleDetailsButton = (id) => {
    parseInt(id);
    Navigate(`/dashboard/products/product-details/${id}`);
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, products);

  // pagination
  const getPageData = () => {
    const startIndex = (activePage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    return products.slice(startIndex, endIndex);
  };

  const pageData = getPageData();

  const handlePageChange = (page) => {
    setActivePage(page);
  };
  const renderPagination = () => {
    const pageCount = Math.ceil(products.length / pageSize);
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
      <CCardHeader>
        <strong>المنتجات</strong>
      </CCardHeader>
      <CTable>
        <CTableHead style={{ backgroundColor: "#4f5d73", color: "#fff" }}>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">الصورة</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col">الكمية</CTableHeaderCell>
            <CTableHeaderCell scope="col">الفئات</CTableHeaderCell>
            <CTableHeaderCell scope="col">المادة الخام</CTableHeaderCell>
            <CTableHeaderCell scope="col">الحجم</CTableHeaderCell>
            <CTableHeaderCell scope="col">اللون</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on Products */}
          {pageData.length === 0 ? (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          ) : (
            pageData.map((product, index) => {
              return (
                <CTableRow key={product._id}>
                  <CTableHeaderCell scope="row">{product._id}</CTableHeaderCell>
                  <CTableDataCell>
                    <img
                      className="small-img"
                      alt="Product Image"
                      src={product.image}
                    ></img>
                  </CTableDataCell>
                  <CTableDataCell>{product.name}</CTableDataCell>
                  <CTableDataCell>{product.qty}</CTableDataCell>
                  <CTableDataCell>
                    {product.category
                      .map((categoryId) => {
                        const category = categories.find(
                          (category) => category._id === categoryId
                        );
                        return category ? category.name : "";
                      })
                      .join(", ")}
                  </CTableDataCell>
                  <CTableDataCell>{product.material}</CTableDataCell>
                  <CTableDataCell>{product.size}</CTableDataCell>
                  <CTableDataCell>{product.color}</CTableDataCell>
                  {/* button for details */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => handleDetailsButton(product._id)}
                      className="btntext"
                      color="primary"
                      variant="outline"
                    >
                      Details
                    </CButton>
                  </CTableHeaderCell>
                  {/* button for edit */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => handleEditButton(product._id)}
                      className="btntext"
                      color="warning"
                      variant="outline"
                    >
                      Edit
                    </CButton>
                  </CTableHeaderCell>
                  {/* button for delete */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => {
                        setShowConfirmationModal(true);
                        setSelectedId(product._id);
                      }}
                      className="btntext"
                      color="danger"
                      variant="outline"
                    >
                      Delete
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
              );
            })
          )}
        </CTableBody>
      </CTable>
      {renderPagination()}
      <ConfirmationModal
        title="تأكيد الحذف"
        message="هل انت متأكد من حذف هذا العنصر؟"
        confirmButtonText="حذف"
        cancelButtonText="الغاء"
        onConfirm={() => {
          deleteProduct(selectedId);
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
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
      ;
    </div>
  );
};
export default Products;
