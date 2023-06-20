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
} from "@coreui/react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../Axios";
import Alert from "../../../SharedUi/Alert/Alert";
import ConfirmationModal from "../../../SharedUi/Modal/Modal";

const ProductsDetails = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [activePage, setActivePage] = useState(1);
  const pageSize = 7;

  // Function to get all products
  async function fetchProductsDetails() {
    try {
      const response = await axiosInstance.get("/itemDetails");
      setProducts(response.data.data);
      // console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  // Function to delete a product
  async function deleteProduct(id) {
    try {
      if (id == null) return;
      const response = await axiosInstance.delete(`/itemDetails/${id}`);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
      setAlertVisible(true);
    }
  }

  // Navigate to the edit page
  const handleEditButton = (id) => {
    Navigate(`/dashboard/productsDetails/edit-details/${id}`);
  };

  // Navigate to the details page
  const handleDetailsButton = (id) => {
    Navigate(`/dashboard/productsDetails/product-details/${id}`);
  };

  useEffect(() => {
    fetchProductsDetails();
  }, []);

  useEffect(() => {
    fetchProductsDetails();
  }, [products]);

  // Pagination
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
        <strong>تفاصيل المنتجات</strong>
      </CCardHeader>
      <CTable>
        <CTableHead style={{ backgroundColor: "#4f5d73", color: "#fff" }}>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">اسم المنتج</CTableHeaderCell>
            <CTableHeaderCell scope="col">اسم المزاد</CTableHeaderCell>
            <CTableHeaderCell scope="col">قيمه الزياده</CTableHeaderCell>
            <CTableHeaderCell scope="col">سعر بداية المزاد</CTableHeaderCell>
            <CTableHeaderCell scope="col">
              السعر الاقصى للمزايدة
            </CTableHeaderCell>
            <CTableHeaderCell scope="col">وقت انتهاء المزاد</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* Map over products */}
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
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>{product.item_id?.name}</CTableDataCell>
                  <CTableDataCell>{product.auction_id?.name}</CTableDataCell>
                  <CTableDataCell>{product.bidding_gap}</CTableDataCell>
                  <CTableDataCell>{product.start_bidding}</CTableDataCell>
                  <CTableDataCell>{product.max_price}</CTableDataCell>
                  <CTableDataCell>{product.end_time}</CTableDataCell>
                  {/* Button for details */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => handleDetailsButton(product._id)}
                      className="btntext"
                      color="primary"
                      variant="outline"
                    >
                      تفاصيل
                    </CButton>
                  </CTableHeaderCell>
                  {/* Button for editing */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => handleEditButton(product._id)}
                      className="btntext"
                      color="warning"
                      variant="outline"
                    >
                      تعديل
                    </CButton>
                  </CTableHeaderCell>
                  {/* Button for deleting */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => {
                        setSelectedId(product._id);
                        setShowConfirmationModal(true);
                      }}
                      className="btntext"
                      color="danger"
                      variant="outline"
                    >
                      حذف
                    </CButton>
                  </CTableHeaderCell>
                </CTableRow>
              );
            })
          )}
        </CTableBody>
      </CTable>

      {/* Pagination */}
      {renderPagination()}
      {/* Modal for deleting */}
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
    </div>
  );
};

export default ProductsDetails;
