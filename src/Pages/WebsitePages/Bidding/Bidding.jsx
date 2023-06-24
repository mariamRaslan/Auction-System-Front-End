import React, { useState, useEffect } from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import jwt_decode from "jwt-decode";
import "./Bidding.css";
import axiosInstance from "../../../Axios";
import Alert from "../../../SharedUi/Alert/Alert";
import { ClockLoader, HashLoader } from "react-spinners";
import Pusher from "pusher-js";

const Bidding = () => {
  const [auction, setAuction] = useState([]);
  const [items, setItems] = useState([]);
  const [currentitem, setCurrentItem] = useState({});
  const [itemnotstarted, setItemNotStarted] = useState(false);
  const [itemstarted, setItemStarted] = useState(false);
  const [itemendedtime, setItemEndedTime] = useState(false);
  const [isloading, setIsLoading] = useState(true);
  const [timer, setTimer] = useState(0);
  const [auctionEnded, setAuctionEnded] = useState(false);
  const [error, setError] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get("/auction/started");
        setAuction(res.data.data[0]);
        console.log("auction =>", res.data.data[0]);
        setIsLoading(false);
      } catch (err) {
        setAuction(null);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (auction) {
      const fetchData = async () => {
        try {
          const res = await axiosInstance.get(`/auctions/${auction._id}/items`);
          // sort res.data by start_date in ascending order
          res.data.sort((a, b) => {
            return new Date(a.start_date) - new Date(b.start_date);
          });
          setItems(res.data);
          console.log("items =>", res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
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

  useEffect(() => {
    getNextItem();
  }, [items, currentitem, itemendedtime]);

  // function to get next item when current item ends and set timer if the next item exists
  const getNextItem = () => {
    const item = items.find((item) => item.is_open === true);
    if (item) {
      setCurrentItem(item);

      const itemStartDate = new Date(item.start_date);
      itemStartDate.setHours(itemStartDate.getHours() - 3);

      const durationInMilliseconds = item.duration * 60 * 1000; // Convert duration to milliseconds
      setTimer(itemStartDate.getTime() + durationInMilliseconds - Date.now());

      const itemEndDate = new Date(item.start_date);
      itemEndDate.setHours(itemEndDate.getHours() - 3);
      itemEndDate.setMinutes(itemEndDate.getMinutes() + item.duration);

      if (itemEndDate < Date.now()) {
        setCurrentItem(null);
      } else if (itemStartDate > Date.now()) {
        setItemNotStarted(true);
        const timebetween = itemStartDate.getTime() - Date.now();
        setTimer(timebetween);
      } else {
        setItemStarted(true);
      }
    } else {
      setAuctionEnded(true);
    }
  };


  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 0) {
        setTimer((prevTimer) => prevTimer - 1000);
      //  const timerValue=  timerCounter();
      } else {
        //get next item
        getNextItem();
      }
      // Decrease the timer value by 1000 milliseconds (1 second)
    }, 1000);
    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, [timer]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = parseInt(e.target.price.value);
    console.log(price);
    const data = {
      bide: price,
      itemDetails_id: currentitem._id,
    };
    try {
      const res = await axiosInstance.post("/biddings", data);
      console.log(res.data.data);
      console.log(res.data.data.amount);
    } catch (err) {
      console.log(err.response.data.error);
      setAlertVisible(true);
      setError(err.response.data.error);
    }
    e.target.price.value = "";
  };

  if (!auction || !currentitem || items.length === 0) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="auction-notfound-card">
                <div className="card-body">
                  <div className="d-flex justify-content-center items-align-center mb-5">
                    <HashLoader color="#4f89b0" size={200} />
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

  if (itemnotstarted) {
    const datestr = currentitem.start_date;
    const date = new Date(datestr);
    const adjustedDate = new Date(date.getTime() - 3 * 60 * 60 * 1000);
    const formattedDate = adjustedDate.toLocaleDateString(undefined, {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
    const formattedTime = adjustedDate.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    const formattedDateTime = ` ${formattedTime} -  ${formattedDate}   `;

    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="auction-notfound-card">
                <div className="card-body">
                  <div className="d-flex justify-content-center items-align-center mb-5">
                    <ClockLoader color="#4f89b0" size={200} />
                  </div>
                  <h3 style={{ color: "black" }} className="text-center">
                    ستتم المزايدة علي
                    <span className="mx-1" style={{ color: "red" }}>
                      {" "}
                      {currentitem.item_id.name}{" "}
                    </span>
                    عند الساعه
                  </h3>
                  <h3 style={{ color: "black" }} className="text-center">
                    {formattedDateTime}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (itemstarted) {
    return (
      <div className="bidding">
        <div className="container">
          <>
            <div className="bidding-card row d-flex" key={15}>
              <div className="bidding-left col-md-6 col-sm-12">
                <div className=" f-left">
                  <img
                    src={currentitem.item_id.image}
                    className="bidding-image"
                    alt="product"
                  />
                </div>
              </div>
              <div className="bidding-right col-md-6 col-sm-12">
                <div className="bidding-content">
                  <h1>{currentitem.item_id.name}</h1>
                  <p>هذا العنصر مصنوع من {currentitem.item_id.material}</p>
                  <div className="bidding-time d-flex justify-content-around">
                    <h3>
                      <span>الوقت المتبقي </span>
                      {timer < 60
                        ? `${Math.ceil(timer / 1000)} ثانية`
                        : `${Math.ceil(timer / 1000 / 60)} دقيقة`
                        }
                    </h3>
                  </div>
                  <div className="bidding-price d-flex justify-content-around mx-3">
                    <div>
                      <span>السعر الحالي</span> {currentitem.current_price}
                    </div>
                    <div>
                      <span>مقدار الزيادة</span> {currentitem.bidding_gap}
                    </div>
                    <div>
                      <span>سعر البدء</span> {currentitem.start_bidding}
                    </div>
                  </div>
                  <div className="bidding-button">
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="">
                        <span>أدخل مقدار الزيادة</span>
                      </label>
                      <input
                        type="number"
                        name="price"
                        placeholder="أدخل مقدار الزيادة"
                      />
                      <button type="submit" className="btn btn-primary">
                        إرسال
                      </button>
                    </form>
                    <form onSubmit={handleSubmit}>
                      <input
                        type="number"
                        name="price"
                        hidden
                        value={
                          currentitem.max_price - currentitem.current_price
                        }
                      />
                      <button type="submit" className="btn btn-success">
                        اشترِ الآن بسعر {currentitem.max_price}
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
        </div>
      </div>
    );
  }

  if (isloading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="auction-notfound-card">
              <div className="loading">
                <div className="d-flex justify-content-center items-align-center mb-5">
                  <ClockLoader color="#4f89b0" size={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
};

export default Bidding;
