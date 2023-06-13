import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
} from "@coreui/react";

const AuctionDetails = () => {
  const auctionId = useParams().auctionId;
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [auctionItems, setAuctionItems] = useState([]);

  useEffect(() => {
    getAuctionDetails();
    getAuctionItems();
  }, []);

  const getAuctionDetails = async () => {
    await axiosInstance
      .get(`/auctions/${auctionId}`)
      .then((res) => {
        setAuctionDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getAuctionItems = async () => {
    await axiosInstance
      .get(`/auctions/${auctionId}/items`)
      .then((res) => {
        setAuctionItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  return auctionDetails ? (
    <div className="container my-4" >
      <div className="row">
        <div className="col-12">
          <h1 className="text-center ">{auctionDetails.name}</h1>
          <p className="text-center mb-4">Status: {auctionDetails.status}</p>
          <div className="d-flex justify-content-between ps-5 pe-5">
            <div>
              <p>
                <strong>Reference Number: </strong>{" "}
                {auctionDetails.reference_number}
              </p>
              <p> <strong>Start Date: </strong> {auctionDetails.start_date}</p>
              <p> <strong>Time: </strong> {auctionDetails.time}</p>
            </div>
            <div>
              <p>
                {" "}
                <strong>Reference Number: </strong>{" "}
                {auctionDetails.reference_number}
              </p>
              <p>
                <strong>Insurance Value: </strong> ${auctionDetails.fees}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/auctions/edit/${auctionDetails._id}`}>
        <CButton color="primary me-5">Edit Auction</CButton>
      </Link>
      <div className="row mt-4 border-top">
        <h3 className="text-center mb-4 mt-4">Auction Items</h3>
        {auctionItems.length > 0 ? (
          auctionItems.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <CCard>
                <img src={item.item_id?.image || "https://via.placeholder.com/150"} alt="Auction Item" style={{ height: "200px" }} />
                <CCardBody>
                  <CCardTitle>{item.item_id?.name || "No Name"}</CCardTitle>
                  <div className="d-flex justify-content-between">
                    <p>Starting Bid: {item.start_bidding +'$'|| "No Price"}</p>
                    <Link to={`/products/product-details/${item.item_id._id}`}>
                      <CButton color="primary">Details</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          ))
        ) : (
          <p className="text-center">No items have been added yet</p>
        )}
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
};

export default AuctionDetails;