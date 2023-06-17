import React from "react";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="text-center bg-image" style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)', width: '100%' , height: '80vh', backgroundSize: 'cover'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
          <h1 className="mb-3">Welcome to the Auction Platform</h1>
          <h4 className="mb-3">Bid, Win, and Experience the Thrill of Auctions</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Read more details abut us</a>
          </div>
        </div>
      </div>

      {/* New Product Section */}
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>New Products</h2>
          </div>
        </div>
        <div className="row">
          {/* Product 1 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 1</div>
          </div>
          {/* Product 2 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 2</div>
          </div>
          {/* Product 3 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 3</div>
          </div>
          {/* Product 4 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 4</div>
          </div>
          {/* Product 5 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 5</div>
          </div>
          {/* Product 6 */}
          <div className="col-md-4">
            {/* Display your product here */}
            <div>Product 6</div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container">
        <div className="row">
          {/* Contact Image */}
          <div className="col-md-6">
            {/* Display your contact image here */}
            <img src="contact-image.jpg" alt="Contact" />
          </div>
          {/* Contact Form */}
          <div className="col-md-6">
            {/* Add your contact form here */}
            <h2>Contact Form</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
