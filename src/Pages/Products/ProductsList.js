import React, { useState } from "react";
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

const Products = () => {
  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const handleEditButton = () => {
    Navigate("/products/edit-product"); // Navigate to the edit page
  };
  const handleDetailsButton = () => {
    Navigate("/products/product-details"); // Navigate to the details page
  };
  return (
    <>
      <CCardHeader>
        <strong>Auctions Products</strong> <small>Table</small>
      </CCardHeader>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Image</CTableHeaderCell>
            <CTableHeaderCell scope="col">Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Quantity</CTableHeaderCell>
            <CTableHeaderCell scope="col">Category</CTableHeaderCell>
            <CTableHeaderCell scope="col">Material</CTableHeaderCell>
            <CTableHeaderCell scope="col">Size</CTableHeaderCell>
            <CTableHeaderCell scope="col">Color</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on Products */}
          <CTableRow>
            <CTableHeaderCell scope="row">1</CTableHeaderCell>
            <CTableDataCell>img</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>10</CTableDataCell>
            <CTableDataCell>Mark</CTableDataCell>
            <CTableDataCell>Otto</CTableDataCell>
            <CTableDataCell>XL</CTableDataCell>
            <CTableDataCell>red</CTableDataCell>
            {/* button for details */}
            <CTableHeaderCell scope="col">
              <CButton
                onClick={handleDetailsButton}
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
                onClick={handleEditButton}
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
                onClick={() => setVisible(!visible)}
                className="btntext"
                color="danger"
                variant="outline"
              >
                Delete
              </CButton>
            </CTableHeaderCell>
          </CTableRow>
        </CTableBody>
      </CTable>
      <CModal alignment="center" visible={visible} onClose={() => setVisible(false)}>
        <CModalHeader>
          <CModalTitle>Confirmation</CModalTitle>
        </CModalHeader>
        <CModalBody>
          Are you sure you want to delete this product?
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <CButton color="danger">Delete</CButton>
        </CModalFooter>
      </CModal>
    </>
  );
};
export default Products;
