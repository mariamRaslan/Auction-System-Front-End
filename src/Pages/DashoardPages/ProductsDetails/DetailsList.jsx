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

const ProductsDetails = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [visible, setVisible] = useState(false);
  const [selectedId, setSelectedId] = useState();
  const [activePage, setActivePage] = useState(1);
  const pageSize = 7;

  // Function to get all products
  async function fetchProductsDetails() {
    try {
      const response = await axiosInstance.get("/itemDetails");
      setProducts(response.data.data);
      console.log(response.data.data);
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
        <strong>Products</strong> Table
      </CCardHeader>
      <CTable>
        <CTableHead style={{ backgroundColor: '#4f5d73' , color:"#fff"}}>
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">Product Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Auction Name</CTableHeaderCell>
            <CTableHeaderCell scope="col">Bidding Gap</CTableHeaderCell>
            <CTableHeaderCell scope="col">Starting Bid</CTableHeaderCell>
            <CTableHeaderCell scope="col">Maximum Price</CTableHeaderCell>
            <CTableHeaderCell scope="col">Auction End Time</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* Map over products */}
          {products &&
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
                      Details
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
                      Edit
                    </CButton>
                  </CTableHeaderCell>
                  {/* Button for deleting */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => {
                        setSelectedId(product._id);
                        setVisible(!visible);
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
            })}
        </CTableBody>
      </CTable>

      {/* Modal for deleting */}
      <CModal
        show={visible}
        onClose={() => setVisible(!visible)}
        color="danger"
      >
        <CModalHeader closeButton>
          <CModalTitle>Are you sure?</CModalTitle>
        </CModalHeader>
        <CModalBody>
         Are you sure you want to delete this product?
        </CModalBody>
        <CModalFooter>
          <CButton
            color="danger"
            onClick={() => {
              deleteProduct(selectedId);
              setVisible(!visible);
            }}
          >
            Delete
          </CButton>{" "}
          <CButton color="secondary" onClick={() => setVisible(!visible)}>
            Cancel
          </CButton>
        </CModalFooter>
      </CModal>

      {/* Pagination */}
      {renderPagination()}
    </div>
  );
};

export default ProductsDetails;