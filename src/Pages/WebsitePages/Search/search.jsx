import React, { useState, useEffect } from "react";
import Card from "../../../SharedUi/Card/card";
import Axios from "./../../../Axios";
import auctionImg from "../../../assets/images/wooden-gavel3.jpg"
import { useParams } from "react-router-dom";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
// get search from parameter
const { search } = useParams();
  useEffect(() => {
    getProducts();
  }, [currentPage]);

  const getProducts = async () => {
    try {    
      const response = await Axios.get(`auctions/:${search}`);
      console.log(response.data.data);
      setProducts(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const formatStartDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  // Calculate pagination variables
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate page numbers to display
  const maxPageNumbers = 5;
  const startPageNumber = Math.max(1, currentPage - maxPageNumbers + 1);
  const endPageNumber = Math.min(startPageNumber + maxPageNumbers - 1, totalPages);

  return (
    <>
      <div
        className="text-center bg-image"
        style={{
          backgroundImage:
            `url(${auctionImg})`,
          width: "100%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3 text-dark"> المزادات</h1>
            <p className="text-secondary">زايد الأن لتربح أفضل المنتجات</p>
          </div>
        </div>
      </div>

      <div className="container mt-5 px-5 pb-5 bg-light rounded-3">
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-md-3">
                <Card
                  image={null}
                  title={product.name}
                  startdate={formatStartDate(product.start_date)}
                  href={`/auction/${product._id}/items`}
                />
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status"></div>
              </div>
            </div>
          )}
        </div>

        {totalPages > 1 && (
          <nav className="mt-4">
            <ul className="pagination justify-content-center">
              {currentPage > 1 && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage - 1)}
                  >
                    السابق
                  </button>
                </li>
              )}

              {Array.from({ length: endPageNumber - startPageNumber + 1 }, (_, index) => {
                const pageNumber = startPageNumber + index;
                return (
                  <li
                    key={pageNumber}
                    className={`page-item ${
                      currentPage === pageNumber ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => handlePageChange(pageNumber)}
                    >
                      {pageNumber}
                    </button>
                  </li>
                );
              })}

              {currentPage < totalPages && (
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => handlePageChange(currentPage + 1)}
                  >
                    التالي
                  </button>
                </li>
              )}
            </ul>

            <p className="text-center mt-2">
              صفحة {currentPage} من {Math.ceil(products.length/8)}
            </p>
          </nav>
        )}
      </div>
    </>
  );
};

export default Search;
