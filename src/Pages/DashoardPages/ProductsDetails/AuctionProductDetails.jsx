import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";

const AuctionProductDetails = () => {
  const id = parseInt(useParams().id);
  const [productDetails, setProductDetails] = useState({});

  async function fetchProductDetails(id) {
    try {
      const response = await axiosInstance.get(`/itemDetails/${id}`);
      setProductDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProductDetails(id);
  }, []);

  return (
    <CRow className="detailsContainer" dir="rtl">
      <CCol sm={12} md={12} lg={12} className="card detailsContainer">
        <img
          className="product-img"
          alt="صورة المنتج"
          src={productDetails.item_id?.image}
        ></img>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>المنتج</span> <br></br>
              {productDetails.item_id?.name}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>المزاد</span> <br></br>
              {productDetails.auction_id?.name}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex m-2 justify-content-center">
          <div className="details col-8">
            <p>
              <span>فارق المزايدة</span> <br></br>
              {productDetails.bidding_gap}
            </p>
          </div>
          <div className="details col-8">
            <p>
              <span>المزايدة الأولى</span> <br></br>
              {productDetails.start_bidding}
            </p>
          </div>
          <div className="details col-8">
            <p>
              <span>السعر الأقصى</span> <br></br>
              {productDetails.max_price}
            </p>
          </div>
          {/* <div className="details col-8">
            <p>
              <span>وقت انتهاء المزاد</span> <br></br>
              {productDetails.end_time}
            </p>
          </div> */}
        </div>
      </CCol>
    </CRow>
  );
};

export default AuctionProductDetails;
