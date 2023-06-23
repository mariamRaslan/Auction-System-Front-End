import React, { useState, useEffect } from "react";
import Axios from "./../../../Axios";
import './productdetails.css'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProductDetails = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = window.location.href;
        const id = url.split("/")[4];
        const response = await Axios.get(`/itemDetails/${id}`);
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  if (!product) {
    return(
        
        <div className="container" style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center'}}>
            <div className="row mt-5">
                <div className="col-md-12">
                    <div className="d-flex justify-content-center">
                        <h1>سيتم عرض التفاصيل فور وضعها </h1>
                    </div>    
                </div>
            </div>
        </div>

        
        );
  }

  return (
    <>
      <div className="container">
      <div className=" mt-5 item-name">
      <Link className="text-dark d-flex align-items-center" to={`/auction/${product.auction_id._id}/items`} >
      <FontAwesomeIcon icon={faArrowRight} />
  <p className="d-block m-0 me-2">{product.auction_id.name}</p>
  
</Link>
            
            <h3 className="d-block">{product.item_id.name}</h3>
      </div>
        <div className="row my-5">
        <div className="col-md-6">
            <img src={product.item_id.image} alt="product" className="img-fluid item-img" />
          </div>
          <div className="col-md-6 my-5 ">
            <div className="bg-light rounded-2 d-flex justify-content-between align-items-center px-5 item-img">
            <p className="mt-3"><span className="item-details">أقصى سعر: </span><span > {product.max_price} ج.م</span> </p>
            <p className="mt-3"> <span className="item-details">مدة العرض:</span>   <span className=""> {product.duration}دقيقة</span></p>
            </div>
            <div className="mt-5 bg-light rounded-2 d-flex justify-content-between align-items-center px-5 item-img">
            <p className="mt-3"><span className="item-details">سعر البداية:</span>   <span className=""> {product.start_bidding} ج.م</span></p>
            <p className="mt-3"><span className="item-details">اقل مبلغ للمزايده:</span>   <span className=""> {product.bidding_gap} ج.م</span></p>
            </div>
          </div>  
                 
        </div>
        <hr />
        {/* product detials */}
        

      </div>
    </>
  );
};

export default ProductDetails;
