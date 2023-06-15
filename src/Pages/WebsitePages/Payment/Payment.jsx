import React from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="payment">
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="payment-card d-flex col-md-6 col-sm-12 ">
            <div className="row w-100 p-0 m-0">
              <div className="payment-left col-md-6 col-sm-12">
                <div>
                  <img src={img} className="payment-image" alt="product" />
                </div>
              </div>
              <div className="payment-right d-flex justify-content-center col-md-6 col-sm-12">
                <div className="payment-content">
                  <h1>prodName</h1>
                  <p>prodDesc</p>
                  <div className="payment-price d-flex justify-content-around my-3">
                    <div>Price $</div>
                  </div>
                  <div className="payment-button">
                    <form>
                      <button className="btn btn-success">Confirm</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
