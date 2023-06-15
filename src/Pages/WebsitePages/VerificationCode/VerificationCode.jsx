import React, { useState } from "react";
import image from "../../../assets/images/enter-code.png";
import "./VerificationCode.css";

const VerificationCode = () => {
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

          <div className="credit-card-form  d-flex justify-content-center align-items-center col-md-6 col-sm-12">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="securityCode">Security Code</label>

                <div className="verification-code-inputs d-flex">
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode1"
                    name="verificationCode1"
                    value={cardData.verificationCode1}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode2"
                    name="verificationCode2"
                    value={cardData.verificationCode2}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode3"
                    name="verificationCode3"
                    value={cardData.verificationCode3}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode4"
                    name="verificationCode4"
                    value={cardData.verificationCode4}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode5"
                    name="verificationCode5"
                    value={cardData.verificationCode5}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                  <input
                    type="text"
                    className="form-control"
                    id="verificationCode6"
                    name="verificationCode6"
                    value={cardData.verificationCode6}
                    onChange={handleChange}
                    maxLength={1}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <button className="button">Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCode;
