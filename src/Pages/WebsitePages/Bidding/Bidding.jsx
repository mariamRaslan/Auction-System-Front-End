
import React, { useState, useEffect } from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import "./Bidding.css";
import axiosInstance from "../../../Axios";

const Bidding = () => {
  const [biddingData, setBidding] = useState([]);
  // function to get didding product
  async function fetchBiddingProduct() {
    try {
      const response = await axiosInstance.get("/biddings/");
      console.log(response.data.data);
      setBidding(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchBiddingProduct();
  }, []);



  return (
    <div className="bidding">
      <div className="container">
        <div className="row ">
          <div className="bidding-card d-flex">
            <div className="bidding-left col-md-6 col-sm-12">
              <div className=" f-left">
                <img src={img} className="bidding-image" alt="product" />
              </div>
            </div>
            <div className="bidding-right col-md-6 col-sm-12">
              <div className="bidding-content">
                <h1>prodName</h1>
                <p>prodDesc</p>
                <div className="bidding-time d-flex justify-content-around">
                  <h3>Time Left </h3>
                  <h3>End Time </h3>
                </div>
                <div className="bidding-price d-flex justify-content-around mx-3">
                  <div>Current $</div>
                  <div>Start $</div>
                </div>
                <div className="bidding-button">
                  <form>
                    <input type="number" placeholder="Enter Your Bid" />
                    <button className="btn btn-primary">Bid Now</button>
                    <button className="btn btn-success">Buy Now for $</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Bidding;
