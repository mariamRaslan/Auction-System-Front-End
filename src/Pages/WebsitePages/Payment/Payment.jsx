import React, { useState, useEffect } from "react";
import "./Payment.css";
import axiosInstance from "../../../Axios";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe("pk_test_51NJxO3AiIlGBZDTmQuU9P2yICAMtBfzYAZd5gQKmyliiYvt8S5mAbwcr1LBaR4R9NYmX9LYD8dhx0nbVkFAbS23G00EAECX6j9");
import Auth from '../../../components/IsLogin';

const Payment = () => {
  const [winnersItems, setWinnersItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState("");

  useEffect(() => {
    getWinnersItems();
  }, []);

  const getWinnersItems = async () => {
    try {
      const response = await axiosInstance.get("/winners/items");
      setWinnersItems(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleCheckout = async (itemId) => {
    try {
      const response = await axiosInstance.post(
        `/checkout-session/${itemId}`
      );
      const sessionId = response.data.session.id;
     console.log(sessionId)
      // Redirect the user to the Stripe checkout page
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App ">
      <div className="">
        <div className="container mt-5 mb-5 p-5 flex display-content-center ">
          <table className="table">
            <thead>
              <tr>
                <th>صورة المنتج</th>
                <th>اسم المنتج</th>
                <th>السعر</th>
                <th>تأكيد الشراء</th>
              </tr>
            </thead>
            <tbody>
              {winnersItems.map((item) => (
                <tr key={item._id}>
                  <td>
                    <img src={item.items.image} alt="Item" />
                  </td>
                  <td>{item.items.name}</td>
                  <td>{item.price} ج.م</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => handleCheckout(item.itemDetails_id)}
                    >
                      تأكيد عملية الشراء
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Auth(Payment);
