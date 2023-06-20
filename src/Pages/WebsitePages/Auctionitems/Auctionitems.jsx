import React, { useState, useEffect } from "react";
import Card from "../../../SharedUi/Card/card";
import Axios from "./../../../Axios";

const AuctionItems = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(1);

  useEffect(() => {
    getProducts();
  }, [currentPage]);

  //get id from url
    const url = window.location.href;
  //the url look like host/auction/id/items
    //so we split the url by / and get id 
    const id = url.split("/")[4];
    
    const getProducts = async () => {
    try {
      const response = await Axios.get(`/auctions/${id}/items`);
      console.log(response.data);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
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
            <h1 className="mb-3">items page</h1>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-md-3">
                <Card
                  image={product.item_id.image}
                  title={product.item_id.name}
                  href={`/product/${product.id}`}
                />
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <div className="spinner-border text-primary" role="status"></div>
                <h2 className="mt-5 mb-5">No thing exist yet</h2>
                
                

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

export default AuctionItems;
