import React, { useState, useEffect } from "react";
import Card from "../../../SharedUi/Card/card";
import Axios from "./../../../Axios";
import auctionImg from "../../../assets/images/wooden-gavel3.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './Auctionitems.css'
import {
  CModal,
  CModalHeader,
  CModalTitle,
  CModalBody,
  CModalFooter,
  CButton,
} from "@coreui/react";
import { loadStripe } from "@stripe/stripe-js";
const stripePromise = loadStripe(
  "pk_test_51NJxO3AiIlGBZDTmQuU9P2yICAMtBfzYAZd5gQKmyliiYvt8S5mAbwcr1LBaR4R9NYmX9LYD8dhx0nbVkFAbS23G00EAECX6j9"
);

console.log(stripePromise);
const AuctionItems = () => {
  const [products, setProducts] = useState([]);
  const [auction, setAuction] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckout = async () => {
    try {
      const response = await Axios.post(`/fees-session/${auction._id}`);
      const sessionId = response.data.session.id;
      console.log(sessionId);
      // Redirect the user to the Stripe checkout page
      const stripe = await stripePromise;
      const result = await stripe.redirectToCheckout({
        sessionId: sessionId,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    numberingSystem: "arab",
  };

  const JoinAuction = async (e) => {
    e.preventDefault();
    console.log("auction", auction._id);
    try {
      const response = await Axios.post("/joinAuction", {
        auction_id: auction._id,
      });
      console.log("data", response.data);
      toast.success("تم الانضمام للمزاد بنجاح");
    } catch (error) {
      console.log(error);
      console.log(error.response.data.message);
      if (
        error.response.data.message === "You already joined this auction..."
      ) {
        toast.error("لقد انضممت لهذا المزاد من قبل");
      } else if (error.response.data.message === "NOT authenticated") {
        toast.error("يجب عليك تسجيل الدخول اولا");
      } else if (
        error.response.data.message ===
        "لا يمكنك الانضمام للمزاد لانه يحتاج تامين"
      ) {
        setModalVisible(true);
      } else {
        toast.error(error.response.data.message);
      }
    }
  };
  useEffect(() => {
    getProducts();
    getAuction();
  }, [currentPage]);

  //get id from url
  const url = window.location.href;
  //the url look like host/auction/id/items
  //so we split the url by / and get id
  const id = url.split("/")[4];

  const getAuction = async () => {
    try {
      const response = await Axios.get(`website/auctions/${id}`);
      console.log(response.data.data);
      setAuction(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const startDate = new Date(auction.start_date).toLocaleDateString(
    "ar-EG",
    options
  );
  const endDate = new Date(auction.end_date).toLocaleDateString(
    "ar-EG",
    options
  );

  const getProducts = async () => {
    try {
      const response = await Axios.get(`website/auction/${id}/items`);
      //console.log(response.data);
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
  const endPageNumber = Math.min(
    startPageNumber + maxPageNumbers - 1,
    totalPages
  );

  return (
    <>
      <ToastContainer />
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: `url(${auctionImg})`,
          width: "100%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100">
          <div style={{ color: "#4f89b0" }}>
            <h1 className="mb-3 ">{auction.name}</h1>
            <div className="d-flex justify-content-between align-items-center text-dark">
              <p className="ms-3">تاريخ البدء: {startDate}</p>
              <p className="me-3">تاريخ النهاية:{endDate}</p>
            </div>
            <div className="text-dark">
              <p className="ms-3 text-center "> قيمة التأمين: {auction.fees}</p>
            </div>
            <div className="d-flex justify-content-center align-items-center px-4">
              <form onSubmit={JoinAuction}>
                <CButton
                  color="info"
                  variant="outline"
                  className="auction-btn btn-lg mr-2 btntext"
                  type="submit"
                >
                  انضم للمزاد
                </CButton>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="h2 mt-5 text-center">منتجات المزاد</div>
      <div className="container mt-5 px-5 pb-5 bg-light rounded-3">
        <div className="row">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <div key={product.id} className="col-md-3">
                <Card
                  image={product.item_id.image}
                  title={product.item_id.name}
                  href={`/itemdetails/${product._id}`}
                />
              </div>
            ))
          ) : (
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <div
                  className="spinner-border text-primary"
                  role="status"
                ></div>
                <h2 className="mt-5 mb-5">لم يتم إضافة منتجات بعد</h2>
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

              {Array.from(
                { length: endPageNumber - startPageNumber + 1 },
                (_, index) => {
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
                }
              )}

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
              صفحة {currentPage} من {products.length}
            </p>
          </nav>
        )}
        <CModal
        //
          className=" middle-modal"
          // backdrop={false}
          keyboard={false}
          portal={false}
          alignment="center"
          visible={modalVisible}
          onDismiss={() => setModalVisible(false)}
          dir="rtl"
        >
          <CModalHeader>
            {/* <CModalTitle>تأمين المزاد {auction.fees} ج.م</CModalTitle> */}
          </CModalHeader>
          <CModalBody>
            يجب دفع التأمين قبل الانضمام تأمين المزاد {auction.fees} ج.م{" "}
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary"  className="btn-modal-primary btntext" onClick={()=>setModalVisible(false)}>إلغاء</CButton>
            <CButton color="success" className="btn-modal-success btntext" onClick={handleCheckout}>
              دفع{" "}
            </CButton>
          </CModalFooter>
        </CModal>
      </div>
    </>
  );
};

export default AuctionItems;
