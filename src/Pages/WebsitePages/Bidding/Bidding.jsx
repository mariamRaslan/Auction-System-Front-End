import React, { useState, useEffect } from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import jwt_decode from "jwt-decode";
import "./Bidding.css";
import axiosInstance from "../../../Axios";
import Alert from "../../../SharedUi/Alert/Alert";
import ClockLoader from "react-spinners/ClockLoader";

const Bidding = () => {
  const [auction, setAuction] = useState([]);
  const [auctionStartDate, setAuctionStartDate] = useState();
  const [auctionEndDate, setAuctionEndDate] = useState();
  const [items, setItems] = useState([]);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/auction/started");
        setAuction(res.data.data[0]);
        console.log("Auction data =>", res.data.data[0]);
        let auctionTime = res.data.data[0].time.split(":");
        console.log("auctionTime =>", auctionTime);
        const startDate = new Date(res.data.data[0].start_date);
        startDate.setHours(auctionTime[0], auctionTime[1], 0, 0);
        setAuctionStartDate(startDate);
        //log 
        console.log("startDate =>", startDate);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  // get item form /auctions/${auction._id}/items
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(
          `/auctions/${auction._id}/items` 
        );
        setItems(res.data);
        console.log("items =>", res.data);
      } catch (err) {
        console.log(err);
      }
    };
    
    fetchData();
  }, [auction]);
  








  if (auction.length === 0) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="auction-notfound-card">
                <div className="card-body">
                  <div className="d-flex justify-content-center items-align-center">
                    <ClockLoader color="#4f89b0" size={200} />
                  </div>
                  <h3 style={{ color: "black" }} className="text-center">
                    لا يوجد اي مزاد متاح الان
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (auctionStartDate < Date.now()) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="auction-notfound-card">
                <div className="card-body">
                  <div className="d-flex justify-content-center items-align-center">
                    <ClockLoader color="#4f89b0" size={200} />
                  </div>
                  <h3 style={{ color: "black" }} className="text-center">
                    تم انتهاء المزاد السابق يرجي انتظار المزاد القادم
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }






  return <></>;
};

export default Bidding;
