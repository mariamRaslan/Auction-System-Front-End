import React, { useState } from "react";
import image from "../../../assets/images/credit-card-image.png";
import "./CreditCardForm.css";

const CreditCardForm = () => {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    email: "",
    month: "",
    year: "",
    securityCode: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(cardData); // or send the data to a server or perform some other action
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  return (
    <div className="credit-card">
      <div className="container">
        <div className="row d-flex">
          <div className="credit-card-image d-flex justify-content-center align-items-center col-md-6 col-sm-12">
            <img className="image" src={image} alt="credit card" />
          </div>

          <div className="credit-card-form  col-md-6 col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name on Card</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={cardData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="number">Card Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="number"
                  name="number"
                  value={cardData.number}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Card Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={cardData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="month">Expiration Month</label>
                <input
                  type="text"
                  className="form-control"
                  id="month"
                  name="month"
                  value={cardData.month}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="year">Expiration Year</label>
                <input
                  type="text"
                  className="form-control"
                  id="year"
                  name="year"
                  value={cardData.year}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="securityCode">Security Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="securityCode"
                  name="securityCode"
                  value={cardData.securityCode}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="button">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCardForm;
