import React, { useState, useEffect } from "react";
import Card from "../../../SharedUi/Card/card";
import Axios from "./../../../Axios";

const Auctions = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  const getProducts = async () => {
    try {
      const response = await Axios.get("/auctions");
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
            "url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)",
          width: "100%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="text-white">
            <h1 className="mb-3">صفحة المزادات</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-md-3">
                <Card
                  image={null}
                  title={product.name}
                  startdate={formatStartDate(product.start_date)}
                  href={`/product/${product.id}/items`}
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
                    Previous
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
                    Next
                  </button>
                </li>
              )}
            </ul>

            <p className="text-center mt-2">
              Showing {currentPage} of {products.length}
            </p>
          </nav>
        )}
      </div>
    </>
  );
};

export default Auctions;
