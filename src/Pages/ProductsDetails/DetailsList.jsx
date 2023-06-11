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

const ProductsDetails = () => {
  const [products, setProducts] = useState([]);
  // function for get all products

  async function fetchProductsDetails() {
    try {
      const response = await axiosInstance.get("/itemDetails");
      setProducts(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProductsDetails();
  }, []);
  useEffect(() => {
    fetchProductsDetails();
  }, [products]);
  // function for delete product
  const [selectedId, setSelectedId] = useState();
  async function deleteProduct(id) {
    try {
      if (id == null) return;
      const response = await axiosInstance.delete(`/itemDetails/${id}`);
      setSelectedId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const [visible, setVisible] = useState(false);
  const Navigate = useNavigate();
  const handleEditButton = (id) => {
    Navigate(`/productsDetails/edit-details/${id}`); // Navigate to the edit page
  };
  const handleDetailsButton = (id) => {
    Navigate(`/productsDetails/product-details/${id}`); // Navigate to the details page
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
            <CTableHeaderCell scope="col">اسم المنتج</CTableHeaderCell>
            <CTableHeaderCell scope="col">اسم المزاد</CTableHeaderCell>
            <CTableHeaderCell scope="col">مقدار الزياده</CTableHeaderCell>
            <CTableHeaderCell scope="col">سعر البدايه</CTableHeaderCell>
            <CTableHeaderCell scope="col">أعلي سعر</CTableHeaderCell>
            <CTableHeaderCell scope="col">نهايه المزاد</CTableHeaderCell>
            <CTableHeaderCell className="textcenter" scope="col" colSpan={3}>
              العمليات
            </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {/* map on Products */}
          {products &&
            products.map((product, index) => {
              return (
                <CTableRow key={product._id}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>{product.item_id.name}</CTableDataCell>
                  <CTableDataCell>{product.auction_id.name}</CTableDataCell>
                  <CTableDataCell>{product.bidding_gap}</CTableDataCell>
                  <CTableDataCell>{product.start_bidding}</CTableDataCell>
                  <CTableDataCell>{product.max_price}</CTableDataCell>
                  <CTableDataCell>{product.end_time}</CTableDataCell>
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
    </div>
  );
};
export default ProductsDetails;
