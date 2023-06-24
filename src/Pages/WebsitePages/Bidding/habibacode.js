
import React, { useState, useEffect } from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import jwt_decode from "jwt-decode";
import "./Bidding.css";
import axiosInstance from "../../../Axios";
import Alert from "../../../SharedUi/Alert/Alert";
import Pusher from "pusher-js";

const Bidding = () => {
  const [auction, setAuction] = useState({});
  const [biddingItems, setBiddingItems] = useState([]);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);
  const [error, setError] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);

  const getAuction = async () => {
    try {
      const res = await axiosInstance.get("/auction/started");
      setAuction(res.data.data[0]);
      console.log("1-", res.data.data[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const getBiddingItems = async () => {
    try {
      console.log(auction._id);
      if (!auction._id) {
        return;
      }
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
    const price = parseInt(e.target.price.value);
    console.log(price);
    const data = {
      bide: price,
      itemDetails_id: biddingItems[currentItemIndex]._id,
      user_id: user_id,
    };
    try {
      const res = await axiosInstance.post("/biddings", data);
      console.log(res.data.data);
      console.log(res.data.data.amount);
      setMaxPrice(res.data.data.amount);
      //log max price
      console.log("max price", maxPrice);
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
  useEffect(() => {
    // Initialize Pusher with your Pusher app credentials
    const pusher = new Pusher("6674d9bc1d0e463c0241", {
      cluster: "eu",
    });

    // Subscribe to the "Auction_id" channel
    const channel = pusher.subscribe("Auction_id");

    // Bind to the "itemDetails_id" event
    channel.bind("itemDetails_id", (data) => {
      // Update the current item's current price with the data received from Pusher
      setCurrentItem((prevItem) => ({
        ...prevItem,
        current_price: data.current_price,
      }));
    });

    return () => {
      // Unsubscribe from the channel when the component unmounts
      channel.unbind("itemDetails_id");
      pusher.unsubscribe("Auction_id");
    };
  }, []);
  const getCurrentItem = () => {
    const currentItem = biddingItems.find((item) => item.is_open === true);
    if (currentItem) {
      setMaxPrice(biddingItems[currentItemIndex].start_bidding);
      const endTimeString = currentItem.duration;
      const timeLeftMs = parseInt(endTimeString) * 60 * 1000;
      setTimeLeft(timeLeftMs);
      changeFlag();
      setTimeout(() => {
        setCurrentItemIndex((prevIndex) => prevIndex + 1);
      }, timeLeftMs);
      if (currentItemIndex == biddingItems.length) {
        // setCurrentItemIndex(0);
        closeAuction();
        setBiddingItems([]);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft > 0) {
        setTimeLeft((prevTime) => prevTime - 1000);
      } else {
        //
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

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
    getCurrentItem();
    // return () => {
    //   clearInterval(interval);
    // };
  }, [currentItemIndex, biddingItems, auction]);

  const closeAuction = () => {
    try {
      const res = axiosInstance.post(`/endAuction/${auction._id}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bidding">
      <div className="container">
        {biddingItems.length === 0 ? (
          <div className="d-flex align-items-center justify-content-center">
            <p className="info">لا يوجد أي مزايدات حالية</p>
          </div>
        ) : (
          <>
            <div className="bidding-card row d-flex" key={15}>
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
                      {timeLeft / 1000} ثانية
                    </h3>
                  </div>
                  <div className="bidding-price d-flex justify-content-around mx-3">
                    <div>
                      <span>السعر الحالي</span> {maxPrice}
                    </div>
                    <div>
                      <span>مقدار الزيادة</span>{" "}
                      {biddingItems[currentItemIndex].bidding_gap}
                    </div>
                    <div>
                      <span>سعر البدء</span>{" "}
                      {biddingItems[currentItemIndex].start_bidding}
                    </div>
                  </div>
                  <div className="bidding-button">
                    <form onSubmit={handleSubmit}>
                      <input
                        type="number"
                        name="price"
                        placeholder="أدخل سعرك"
                      />
                      <button className="btn btn-primary">إرسال</button>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="number"
                        name="price"
                        hidden
                        value={
                          biddingItems[currentItemIndex].max_price - maxPrice
                        }
                      />
                      <button className="btn btn-success">
                        اشترِ الآن بسعر{" "}
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
