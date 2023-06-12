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
import axiosInstance from "../../Axios";

const Products = () => {
  const Navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [visible, setVisible] = useState(false);
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

  // function for delete product
  async function deleteProduct(id) {
    try {
      if (id == null) return;
      const response = await axiosInstance.delete(`/items/${id}`);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
    }
  }

  // Navigate to the edit page
  const handleEditButton = (id) => {
    parseInt(id);
    Navigate(`/products/edit-product/${id}`);
  };

  // Navigate to the details page
  const handleDetailsButton = (id) => {
    parseInt(id);
    Navigate(`/products/product-details/${id}`);
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
    <div dir="rtl">
      <CCardHeader>
        <small>جدول</small> <strong>المنتجات</strong>
      </CCardHeader>
      <CTable>
        <CTableHead color="dark">
          <CTableRow>
            <CTableHeaderCell scope="col">#</CTableHeaderCell>
            <CTableHeaderCell scope="col">الصور</CTableHeaderCell>
            <CTableHeaderCell scope="col">الاسم</CTableHeaderCell>
            <CTableHeaderCell scope="col">الكمية</CTableHeaderCell>
            <CTableHeaderCell scope="col">الفئات</CTableHeaderCell>
            <CTableHeaderCell scope="col">الخامه</CTableHeaderCell>
            <CTableHeaderCell scope="col">المقاس</CTableHeaderCell>
            <CTableHeaderCell scope="col">اللون</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on Products */}
          {products &&
            pageData.map((product, index) => {
              return (
                <CTableRow key={product._id}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
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
                      تفاصيل
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
                      تعديل
                    </CButton>
                  </CTableHeaderCell>
                  {/* button for delete */}
                  <CTableHeaderCell scope="col">
                    <CButton
                      onClick={() => {
                        setVisible(!visible);
                        setSelectedId(product._id);
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
            })}
        </CTableBody>
      </CTable>
      {renderPagination()}
      <CModal
        alignment="center"
        visible={visible}
        onClose={() => setVisible(false)}
      >
        <CModalHeader>
          <CModalTitle>تأكيد</CModalTitle>
        </CModalHeader>
        <CModalBody>هل أنت متأكد أنك تريد حذف هذا العنصر؟</CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            إلغاء
          </CButton>
          <CButton
            onClick={() => {
              deleteProduct(selectedId);
              setVisible(false);
            }}
            color="danger"
          >
            حذف
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  );
};
export default Products;
