import React from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import "./Payment.css";

const Payment = () => {
  return (
    <div className="App ">
    <div className="">
      <div className="container mt-5 mb-5 p-5">
        <table className="table ">
          <tbody>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$10.00</td>
              <td>
                <a href="#" className="btn btn-primary">قم بالشراء الأن</a>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$15.00</td>
              <td>
                <a href="#" className="btn btn-primary">قم بالشراء الأن</a>
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$20.00</td>
              <td>
                <a href="#" className="btn btn-primary">قم بالشراء الأن</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  );
};
export default Payment;
