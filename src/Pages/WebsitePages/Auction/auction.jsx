import React from "react";
//import card
import Card from "../../../SharedUi/Card/card";
//import usestate , useeffect
import { useState, useEffect } from "react";
//import Axios
import Axios from "./../../../Axios";



const Auctions = () => {

    const [products, setProducts] = React.useState([]);
    //get product from /products
    const getProducts = async () => {
        try {
            const response = await Axios.get("/auctions");
            console.log(response.data);
            setProducts(response.data);
        } catch (error) {
            console.log(error);
        }
    };
    //useEffect
    React.useEffect(() => {
        getProducts();
    }, []);

  return (


    <>
      <div className="text-center bg-image" style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)', width: '100%' , height: '50vh', backgroundSize: 'cover'}}>
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
          <h1 className="mb-3"> صفحة المزادات</h1>
          </div>
        </div>
      </div>


    <div className="container mt-5">

      <div className="row">
        
       
        {/**check product.length>0 dipslay card else display preload */}
        {products.length > 0 ? (
            products.map((product) => (
                <div key={product.id} className="col-md-3">
                  <Card
                    image={product.image}
                    title={product.name}
                    startdate={product.start_date}
                    //href = /product/:id
                    href={`/product/${product.id}`}
                  />
                </div>
                ))
        ) : (
            <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                </div>
            </div>
        )}
            



      </div>
    </div>

   
                  
            

    

  
         

    </>
  );
};

export default Auctions;

