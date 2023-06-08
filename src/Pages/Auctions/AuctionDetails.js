import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../Axios";
import { Link } from "react-router-dom";
import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CCardImg,
  CCardTitle,
  CButton,
} from '@coreui/react';

const AuctionDetails = () => {

  const auctionId = useParams().auctionId;
//  console.log("id", auctionId);
//   console.log(useParams());

  const [auctionDetails, setAuctionDetails] = useState(null);

  useEffect(() => {
    getAuctionDetails();
  }, []);

  const getAuctionDetails = async () => {
    await axiosInstance
      .get(`/auctions/${auctionId}`)
      .then((res) => {
        console.log(res.data);
        setAuctionDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  };





  return auctionDetails ? (
    <div className="container my-4">
    <div className="row">
      <div className="col-12">
        <h1 className="text-center ">{auctionDetails.name}</h1>
        <p className="text-center mb-4">الحالة {auctionDetails.status}</p>
        <div className="d-flex justify-content-between ps-5 pe-5">
          <div>
            <p><strong>الرقم التعريفي </strong> {auctionDetails.reference_number}</p>
            <p> <strong>تاريخ البدء </strong> {auctionDetails.start_date}</p>
            <p> <strong>الوقت </strong> {auctionDetails.time}</p>
          </div>
          <div>
            <p> <strong>الرقم المرجعي </strong> {auctionDetails.reference_number}</p>
            <p><strong> قيمه التأمين </strong> ${auctionDetails.fees}</p>
          </div>
        </div>
      </div>
    </div>
      <div className='ms-5'>
              <CButton color="primary">تعديل المزاد</CButton>
            </div>
      <div className="row mt-4 border-top">
      <h3 className="text-center mb-4 mt-4">منتجات المزاد</h3>
          <div className="col-md-4 mb-4">
            <CCard>
              <img
                src="https://via.placeholder.com/150"
                top
                alt="Auction Item"
              />
              <CCardBody>
                <CCardTitle>اسم المنتج</CCardTitle>
                <div className="d-flex justify-content-between">
                  <p>Category: Art</p>
                  <CButton color="primary">View Details</CButton>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="col-md-4 mb-4">
            <CCard>
              <img
                src="https://via.placeholder.com/150"
                top
                alt="Auction Item"
              />
              <CCardBody>
                <CCardTitle>Item Name</CCardTitle>
                <div className="d-flex justify-content-between">
                  <p>Category: Art</p>
                  <CButton color="primary">View Details</CButton>
                </div>
              </CCardBody>
            </CCard>
          </div>

          <div className="col-md-4 mb-4">
            <CCard>
              <img
                src="https://via.placeholder.com/150"
                top
                alt="Auction Item"
              />
              <CCardBody>
                <CCardTitle>Item Name</CCardTitle>
                <div className="d-flex justify-content-between">
                  <p>Category: Art</p>
                  <CButton color="primary">View Details</CButton>
                </div>
              </CCardBody>
            </CCard>
          </div>

      </div>
    </div>
  ) : (
    <p>تحميل..</p>
  );
};

export default AuctionDetails
