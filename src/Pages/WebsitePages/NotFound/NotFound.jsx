import React from "react";
import image from "../../../assets/images/404 Error with a cute animal-bro.png";

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="container">
        <div className="row">
          <div className="not-found-card d-flex col-12">
            <div className="not-found-image d-flex justify-content-center align-items-center col-12">
              <img src={image} style={{ height: "500px" }} alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
