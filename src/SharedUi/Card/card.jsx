import React, { useState } from 'react';
import BlobButton from '../BlobButton/BlobButton';
import img1 from  '../../assets/images/22060.jpg';
import img2 from  '../../assets/images/6212119.jpg';
import './card.css'

const Card = ({ image, title, startdate, href }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseOver = () => {
    setHovered(true);
  };

  const handleMouseOut = () => {
    setHovered(false);
  };

  // Format the startdate prop to appear in a suitable format
  const formattedStartDate = new Date(startdate).toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  });

  return (
    <div className="card mt-5"
      style={{
        boxShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)',
        textAlign: 'right', // Set the text direction to right-to-left
      }}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="image-container">
        <img
          src={image ? image : (hovered ? img2 : img1)}
          className="img-fluid rounded thumbnail-image"
          alt="product"
          style={{ width: '100%', height: '200px' }}
        />
      </div>
      <div className="product-detail-container p-2 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center align-items-center">
          <span className="new-price">{formattedStartDate}</span>
        </div>
        <h5 className="dress-name mb-0">{title}</h5>
        
        <div className="d-flex justify-content-center align-items-center mt-3">
          <BlobButton buttonText="التفاصيل" href={href} />
        </div>
      </div>
    </div>
  );
};

export default Card;