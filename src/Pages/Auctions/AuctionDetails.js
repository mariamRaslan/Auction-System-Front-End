import React from 'react';
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
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center ">Auction Name</h1>
          <p className="text-center mb-4">Status: Open</p>
          <div className="d-flex justify-content-between ps-5 pe-5">
            <div>
              <p><strong>ID:</strong>  123456</p>
              <p> <strong>Starting Date:</strong> 01/06/2023</p>
              <p> <strong>Time:</strong> 10:00 AM</p> 
            </div>
            <div>
            <p> <strong>Reference Number:</strong>  REF123</p>
            <p><strong> Reference Number:</strong>  REF123</p>
            <p> <strong>Fees:</strong> $10</p>
            </div>
          </div>
        </div>
      </div>
      <div className='ms-5'>
              <CButton color="primary">Edit Auction</CButton>
            </div>
      <div className="row mt-4 border-top">
      <h3 className="text-center mb-4 mt-4">Auction Items</h3>
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
  );
};

export default AuctionDetails
