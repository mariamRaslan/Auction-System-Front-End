import React from 'react';

const Card = ({ image, title, startdate, href }) => {
  return (
    <div className="card mt-5">
    <div className="image-container">
      
     {/**check image */}
      {image ? (
         <img
         src={image}
         className="img-fluid rounded thumbnail-image"
         alt="product"
         //style to set width , hieght
         style={{ width: '100%', height: '250px' }} 
       />
      ) : (
        <img
        src="https://i.imgur.com/8JIWpnw.jpg"
        className="img-fluid rounded thumbnail-image"
        alt="product"
        //style to set width , hieght
        style={{ width: '100%', height: '250px' }}
      />
      )
      }
    </div>
    <div className="product-detail-container p-2">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="dress-name">{title}</h5>
        <div className="d-flex flex-column mb-2">
          <span className="new-price">{startdate}</span>
          
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center pt-1">
        
        <a href={href} className="btn btn-primary add-to-cart"> التفاصيل</a>
      </div>
    </div>
  </div>
  );
};

export default Card;