import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  async function fetchProduct(id) {
    try {
      const response = await axiosInstance.get(`/items/${id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProduct(id);
  }, []);

  return (
    <CRow dir="rtl" className="detailsContainer">
      <CCol sm={12} md={12} lg={12} className="card detailsContainer">
        <img
          className="product-img"
          alt="صورة المنتج"
          src={product.image}
        ></img>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>الاسم</span> <br></br>
              {product.name}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>الفئة</span> <br></br>
              {product.category?.name}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>المادة</span> <br></br>
              {product.material}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>الحجم</span> <br></br>
              {product.size}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>اللون</span> <br></br>
              {product.color}
            </p>
          </div>
        </div>
      </CCol>
    </CRow>
  );
};

export default ProductDetails;
