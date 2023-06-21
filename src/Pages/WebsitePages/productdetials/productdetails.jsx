import React, { useState, useEffect } from "react";
import Axios from "./../../../Axios";

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
        <div className="row my-5">
          <div className="col-md-6">
            {/* اسم المنتج : {product.item_id.name} */}
            {/*  تابع مزاد : {product.auction_id.name} */}
            {/* سوف ينتخي الزاد اذا وصل لسعر : {product.max_price} */}
            {/* سوف ينتهي امزاد اذ تعدي الوثت : {product.end_time} */}
            {/* اقل مبلع للمزايده: {product.start_bidding} */}
            <div style={{height:"500px"}}>
            <h1 className="mt-3">اسم المتج :</h1> <span className="h3">{product.item_id.name}</span>
            <h1 className="mt-3">تابع لمزاد :</h1><span className="h3 mt-5"> {product.auction_id.name}</span>
            <h1 className="mt-3">سوف ينتهي المزاد اذا وصل لسعر :</h1><span className="h3"> {product.max_price}</span>
            <h1 className="mt-3">سوف ينتهي المزاد اذ تعدي الوقت :</h1><span className="h3"> {product.end_time}</span>
            <h1 className="mt-3">سوف يبدأ المزاد بمبلغ :</h1><span className="h3"> {product.start_bidding}</span>
            <h1 className="mt-3">اقل مبلغ للمزايده:</h1><span className="h3"> {product.bidding_gap}</span>
            </div>
            
          </div>
          <div className="col-md-6">
            <img style={{height:'600px',width:'100%'}} src={product.item_id.image} alt="product" className="img-fluid" />
          </div>
        </div>
        <hr />
        {/* product detials */}
        

      </div>
    </>
  );
};

export default ProductDetails;
