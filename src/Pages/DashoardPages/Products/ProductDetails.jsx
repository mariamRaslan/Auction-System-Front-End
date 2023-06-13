import React, { useEffect, useState } from "react";
import { CRow, CCol } from "@coreui/react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [categories, setCategories] = useState([]);
  
  // function for getting all categories
  async function fetchCategories() {
    try {
      const response = await axiosInstance.get("/categories");
      console.log(response.data.data);
      setCategories(response.data.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function fetchProduct(id) {
    try {
      const response = await axiosInstance.get(`/items/${id}`);
      console.log(response.data);
      setProduct(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {
    fetchProduct(id);
    fetchCategories();
  }, []);
  
  function getProductCategory() {
    product.category
      .map((categoryId) => {
        const category = categories.find(
          (category) => category._id === categoryId
        );
        return category ? category.name : "";
      })
      .join(", ");
  }
  
  return (
    <CRow dir="ltr" className="detailsContainer">
      <CCol sm={12} md={12} lg={12} className="card detailsContainer">
        <img
          className="product-img"
          alt="Product image"
          src={product.image}
        ></img>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>Name:</span> <br></br>
              {product.name}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>Category:</span> <br></br>
              {product.category &&
                product.category
                  .map((categoryId) => {
                    const category = categories.find(
                      (category) => category._id === categoryId
                    );
                    return category ? category.name : "";
                  })
                  .join(", ")}
            </p>
          </div>
        </div>
        <hr></hr>
        <div className="d-flex m-auto justify-content-center">
          <div className="details col-12">
            <p>
              <span>Material:</span> <br></br>
              {product.material}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>Size:</span> <br></br>
              {product.size}
            </p>
          </div>
          <div className="details col-12">
            <p>
              <span>Color:</span> <br></br>
              {product.color}
            </p>
          </div>
        </div>
      </CCol>
    </CRow>
  );
};

export default ProductDetails;