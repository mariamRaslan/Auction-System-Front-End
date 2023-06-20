import React, { useState, useEffect } from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import jwt_decode from "jwt-decode";
import "./Bidding.css";
import axiosInstance from "../../../Axios";
// import { io } from "socket.io-client";
import Alert from "../../../SharedUi/Alert/Alert";
import Countdown from "react-countdown";

const Bidding = () => {
  const [auction, setAuction] = useState({});
  const [biddingItems, setBiddingItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [error, setError] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const [timeLeft, setTimeLeft] = useState(0);

  // useEffect(() => {
  //   // Set up WebSocket connection
  //   const socket = io('http://localhost:3000');

  //   // Listen for '/winners' updates
  //   socket.on('/winners', (data) => {
  //     // Check if the updated winner is for the current item
  //     const currentItem = biddingItems[currentItemIndex];
  //     if (currentItem && currentItem.item_id._id === data.item_id) {
  //       // Update 'maxPrice' state variable
  //       setMaxPrice(data.current_price);
  //     }
  //   });

  //   // Clean up WebSocket connection
  //   return () => {
  //     socket.disconnect();
  //   };
  // }, [biddingItems, currentItemIndex]);

  const getAuction = async () => {
    try {
      const res = await axiosInstance.get("/auction/started");
      setAuction(res.data.data[0]);
      console.log(res.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getBiddingItems = async () => {
    try {
      console.log(auction._id);
      const res = await axiosInstance.get(`/auctions/${auction._id}/items`);
      setBiddingItems(res.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const token = localStorage.getItem("token");
  const decoded = jwt_decode(token);
  const user_id = decoded.id;
  const [maxPrice, setMaxPrice] = useState(0);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.price.value);
    const price = parseInt(e.target.price.value);
    const data = {
      bide: price,
      itemDetails_id: biddingItems[currentItemIndex]._id,
      user_id: user_id,
    };
    try {
      const res = await axiosInstance.post("/biddings", data);
      console.log(res.data);
    } catch (err) {
      console.log(err.response.data.error);
      setAlertVisible(true);
      setError(err.response.data.error);
    }
    e.target.price.value = "";
  };

  useEffect(() => {
    getAuction();
  }, []);

  useEffect(() => {
    getBiddingItems();
  }, [auction]);

  const getMaxPrice = async () => {
    const data = {
      item_id: biddingItems[currentItemIndex].item_id._id,
      auction_id: auction,
    };
    try {
      const res = await axiosInstance.get("/winners", data);
      console.log(res.data);
      setMaxPrice(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const changeFlag = async () => {
    try {
      const res = await axiosInstance.post(
        `/itemflag/${biddingItems[currentItemIndex]._id}`
      );
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const currentItem = biddingItems[currentItemIndex];
    // Check if the current item is not null
    if (currentItem) {
      const endTimeString = currentItem.end_time;
      const today = new Date().toISOString().slice(0, 10);
      const endTimeDate = new Date(`${today}T${endTimeString}:00`);
      // get the time left until the end of the auction
      const timeLeft = currentItem
        ? new Date(endTimeDate).getTime() - new Date().getTime()
        : 0;
      console.log(timeLeft);
      getMaxPrice();
       // Get the time left until the end of the auction
       const timeLeftMs = endTimeDate.getTime() - new Date().getTime();
       setTimeLeft(timeLeftMs);
      changeFlag();
      setTimeout(() => {
        setCurrentItemIndex((prevIndex) =>
          prevIndex === biddingItems.length - 1 ? 0 : prevIndex + 1
        );
        if (currentItemIndex === biddingItems.length - 1) {
          setAuction(null);
          setBiddingItems([]);
        }
      }, timeLeft);
    }
  }, [currentItemIndex, biddingItems]);

  return (
    <div className="bidding">
      <div className="container">
        {biddingItems.length === 0 ? (
          <div className="d-flex align-items-center justify-content-center">
            <p className="info">"لا يوجد اي مزايدات حاليه"</p>
          </div>
        ) : (
          <>
            <div className="bidding-card row d-flex">
              <div className="bidding-left col-md-6 col-sm-12">
                <div className=" f-left">
                  <img
                    src={biddingItems[currentItemIndex].item_id.image}
                    className="bidding-image"
                    alt="product"
                  />
                </div>
              </div>
              <div className="bidding-right col-md-6 col-sm-12">
                <div className="bidding-content">
                  <h1>{biddingItems[currentItemIndex].item_id.name}</h1>
                  <p>
                    هذا العنصر مصنوع من{" "}
                    {biddingItems[currentItemIndex].item_id.material}
                  </p>
                  <div className="bidding-time d-flex justify-content-around">
                    <h3>
                      <span>الوقت المتبقي </span>
                      <Countdown
                        date={Date.now() + timeLeft}
                        renderer={renderer}
                      />

                    </h3>
                    <h3>
                      <span>وقت الإنتهاء</span>
                      {biddingItems[currentItemIndex].end_time}{" "}
                    </h3>
                  </div>
                  <div className="bidding-price d-flex justify-content-around mx-3">
                    <div>
                      <span>السعر الحالي</span>
                      {maxPrice}
                    </div>
                    <div>
                      <span>مقدار الزياده</span>
                      {biddingItems[currentItemIndex].bidding_gap}
                    </div>
                    <div>
                      <span>سعر البدء</span>
                      {biddingItems[currentItemIndex].start_bidding}
                    </div>
                  </div>
                  <div className="bidding-button">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="number"
                        name="price"
                        placeholder="ادخل سعرك"
                      />
                      <button className="btn btn-primary">إرسال</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="number"
                        name="price"
                        hidden
                        value={biddingItems[currentItemIndex].max_price}
                      />
                      <button className="btn btn-success">
                        أشتري الأن بسعر{" "}
                        {biddingItems[currentItemIndex].max_price}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            <Alert
              type="error-alert"
              visible={alertVisible}
              color="warning"
              message={error}
              dismissible
              alignment="center"
              setVisible={setAlertVisible}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Bidding;
