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
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // function for get all products

  async function fetchProducts() {
    try {
      const response = await axios.get("http://localhost:8080/items");
      setProducts(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // function for get all categories
  async function fetchCategories() {
    try {
      const response = await axios.get("http://localhost:8080/categories");

      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);
  useEffect(() => {
    fetchProducts();
  }, products);
  // function for delete product
  const [selectedId, setSelectedId] = useState();
  async function deleteProduct(id) {
    try {
      if (id == null) return;
      const response = await axios.delete(`http://localhost:8080/items/${id}`);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const handleEditButton = (id) => {
    Navigate(`/products/edit-product/${id}`); // Navigate to the edit page
  };
  const handleDetailsButton = (id) => {
    Navigate(`/products/product-details/${id}`); // Navigate to the details page
  };

  return (
    <>
      <CCardHeader>
      <small>جدول</small>  <strong>المنتجات</strong> 
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
              Actions
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on Products */}
          {products &&
            products.map((product) => {
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
    </>
  );
};
export default Products;
