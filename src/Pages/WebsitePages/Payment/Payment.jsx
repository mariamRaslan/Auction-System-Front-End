import React from "react";
import img from "./../../../assets/images/stop-watch-.jpg";
import "./Payment.css";
import FizzyButton from '../../../SharedUi/FizzyButton/FizzyButton';

const Payment = () => {
  return (
    <div className="App ">
    <div className="">
      <div className="container mt-5 mb-5 p-5 flex display-content-center ">
        <table className="table">
          <tbody>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$10.00</td>
              <td>
              <FizzyButton text={"تأكيد عملية الشراء"}  href={'#'}  />
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$15.00</td>
              <td>
                <FizzyButton text={"تأكيد عملية الشراء"}  href={'#'}  />
              </td>
            </tr>
            <tr>
              <td>
                <img src="https://via.placeholder.com/100" alt="Item" />
              </td>
              <td>Item Name</td>
              <td>$20.00</td>
              <td>
              <FizzyButton text={"تأكيد عملية الشراء"}  href={'#'}  />
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
