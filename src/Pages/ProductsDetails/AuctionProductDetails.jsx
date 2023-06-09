import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Axios";

const AuctionProductDetails = () => {
  const { id } = useParams();
  const [auction, setAuction] = useState({});
  const [auctionId, setAuctionId] = useState();
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState();
  const [productDetails, setProductDetails] = useState({});

  // function for get product details
  async function fetchProductDetails(id) {
    try {
      const response = await axiosInstance.get(`/itemDetails/${id}`);
      console.log(response.data);
      setProductDetails(response.data);
      setAuctionId(response.data.auction_id);
      setProductId(response.data.item_id);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchProductDetails(id);
  }, []);
  // function for get product
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
    fetchProduct(productId);
  }, [productId]);
  // function for get auction
  async function fetchAuction(id) {
    try {
      const response = await axiosInstance.get(`/auctions/${id}`);
      console.log(response.data);
      setAuction(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchAuction(auctionId);
  }, [auctionId]);

  return (
    <CRow dir="rtl" className="detailsContainer">
      <CCol sm={12} md={12} lg={12} className="card detailsContainer">
        <img
          className="product-img"
          alt="صوره المنتج"
          src={product.image}
        ></img>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>المنتج</span> <br></br>
              {product.name}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>المزاد</span> <br></br>
              {auction.name}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex m-2 justify-content-center">
          <div className="details col-8">
            <p>
              <span>مقدار الزياده</span> <br></br>
              {productDetails.bidding_gap}
            </p>
          </div>
          <div className="details col-8">
            <p>
              <span>سعر البدايه</span> <br></br>
              {productDetails.start_bidding}
            </p>
          </div>
          <div className="details col-8">
            <p>
              <span>أعلي سعر</span> <br></br>
              {productDetails.max_price}
            </p>
          </div>
          <div className="details col-8">
            <p>
              <span>نهايه المزاد</span> <br></br>
              {productDetails.end_time}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>الخامه</span> <br></br>
              {product.material}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>المقاس</span> <br></br>
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

export default AuctionProductDetails;
