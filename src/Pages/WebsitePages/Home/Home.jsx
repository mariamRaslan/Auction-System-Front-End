import React from "react";

const products = [
  {
    id: 1,
    title: "White traditional long dress",
    oldPrice: 5.99,
    price: 3.99,
    isNew: false,
    image: "https://i.imgur.com/8JIWpnw.jpg",
  },
  {
    id: 2,
    title: "Long sleeve denim jacket",
    oldPrice: 5.99,
    price: 3.99,
    isNew: false,
    image: "https://i.imgur.com/PtepOpe.jpg",
  },
  {
    id: 3,
    title: "Hush Puppies",
    oldPrice: 5.99,
    price: 3.99,
    isNew: false,
    image: "https://i.imgur.com/ePJKs8Q.jpg",
  },
  {
    id: 4,
    title: "Athens skirt",
    oldPrice: null,
    price: 19.99,
    isNew: true,
    image: "https://i.imgur.com/snffLH3.jpg",
  },
];

const Home = () => {
  return (


    <>
      <div className="text-center bg-image" style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)', width: '100%' , height: '80vh', backgroundSize: 'cover'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
          <h1 className="mb-3">Welcome to the Auction Platform</h1>
          <h4 className="mb-3">Bid, Win, and Experience the Thrill of Auctions</h4>
            <a className="btn btn-outline-light btn-lg" href="#!" role="button">Read more details abut us</a>
          </div>
        </div>
      </div>

      {/** product section header  */}
      <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title">New Arrivals</h3>
              
            </div>
          </div>
        </div> 
      </div>

    <div className="container mt-5">

      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-3">
            <div className="card">
              <div className="image-container">
                
                <img
                  src={product.image}
                  className="img-fluid rounded thumbnail-image"
                  alt="product"
                />
              </div>
              <div className="product-detail-container p-2">
                <div className="d-flex justify-content-between align-items-center">
                  <h5 className="dress-name">{product.title}</h5>
                  <div className="d-flex flex-column mb-2">
                    <span className="new-price">${product.price}</span>
                    
                  </div>
                </div>
                <div className="d-flex justify-content-between align-items-center pt-1">
                  <div className="color-select d-flex ">
                    <input type="button" name="grey" className="btn creme" />
                    {product.id === 2 && (
                      <input type="button" name="darkblue" className="btn darkblue ml-2" />
                    )}
                  </div>
                  <div className="d-flex">
                    <span className="item-size mr-2 btn" type="button">
                      S
                    </span>
                    <span className="item-size mr-2 btn" type="button">
                      M
                    </span>
                    <span className="item-size btn" type="button">
                      L
                    </span>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center pt-1">
                  
                  <button className="btn btn-primary add-to-cart">read more</button>
                </div>
                {product.isNew && (
                  <div className="new-badge">
                    <span className="badge badge-primary">New</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/** about us   */}
    <div className="container" >
        <div className="row"> 
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title">About Us</h3>
            </div>
          </div>
        </div>
    </div>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="card">
            <div className="image">
              <img
                src="https://i.imgur.com/8JIWpnw.jpg"
                className="img rounded thumbnail-image"
                alt="product"
                width={'100%'}
                
              />
            </div>
            
          </div>
        </div>
        <div className="col-md-6 text-center d-flex align-items-center">
          
          <p className="text-justify align-items-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            voluptatum, quibusdam, quia, quae voluptate voluptas quod
            reprehenderit quos voluptatibus quas dolorum. Quisquam voluptatum,
            quibusdam, quia, quae voluptate voluptas quod reprehenderit quos
            voluptatibus quas dolorum. Quisquam voluptatum, quibusdam, quia,
            quae voluptate voluptas quod reprehenderit quos voluptatibus quas
            dolorum. Quisquam voluptatum, quibusdam, quia, quae voluptate
            voluptas quod reprehenderit quos voluptatibus quas dolorum.
          </p>
        </div>
      </div>
    </div>
{/** fixed background section  */}
    <div className="fixed-background">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title">Our Services</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
      
    {/** services section  */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="image">
              <img
                src="https://i.imgur.com/8JIWpnw.jpg"
                className="img rounded thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quibusdam, quia, quae voluptate voluptas quod
                </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="image">
              <img
                src="https://i.imgur.com/8JIWpnw.jpg"
                className="img rounded thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quibusdam, quia, quae voluptate voluptas quod
                </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card">
            <div className="image">
              <img
                src="https://i.imgur.com/8JIWpnw.jpg"
                className="img rounded thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quibusdam, quia, quae voluptate voluptas quod
                </p>
              <a href="#" className="btn btn-primary">
                Go somewhere
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>

                  
            
    {/** contact us   */}
    <div className="container" >
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title">Contact Us</h3>
            </div>
          </div>
        </div>
    </div>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-center d-flex align-items-center">
            {/** contact form with fields name , email , subject , message */}  
            <form className="w-100">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Your Email"

                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  placeholder="Subject"

                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="image">
              <img
                src="https://i.imgur.com/8JIWpnw.jpg"
                className="img rounded thumbnail-image"
                alt="product"
                width={'100%'}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  
         

    </>
  );
};

export default Home;

