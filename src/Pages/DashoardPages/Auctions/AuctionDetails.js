import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";
import { Link } from "react-router-dom";
import { CCard, CCardBody, CCardTitle, CButton } from "@coreui/react";
import Alert from "src/SharedUi/Alert/Alert";
const AuctionDetails = () => {
  const auctionId = useParams().auctionId;
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [auctionItems, setAuctionItems] = useState([]);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  useEffect(() => {
    getAuctionDetails();
    getAuctionItems();
  }, []);

  const getAuctionDetails = async () => {
    await axiosInstance
      .get(`/auctions/${auctionId}`)
      .then((res) => {
        setAuctionDetails(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  const getAuctionItems = async () => {
    await axiosInstance
      .get(`/auctions/${auctionId}/items`)
      .then((res) => {
        setAuctionItems(res.data);
      })
      .catch((err) => console.log(err));
  };

  const startAuction = async (e) => {
    e.preventDefault();
    await axiosInstance
      .patch(`/startAuction/${auctionId}`)
      .then((res) => {
        console.log(res.data);
        getAuctionDetails();
      })
      .catch((err) => {
        console.log(err);
        if (
          err.response.data.error ===
          "You can not start more than one auction at the same time"
        ) {
          setAlertMessage("لا يمكنك بدء أكثر من مزاد في نفس الوقت");
        } else {
          setAlertMessage(err.response.data.error);
        }
        setAlertVisible(true);
      });
  };

  return auctionDetails ? (
    <div className="container my-4">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center ">{auctionDetails.name}</h1>
          <p className="text-center mb-4">
            الحالة:{" "}
            {auctionDetails.status === "not started"
              ? "لم يبدأ بعد"
              : auctionDetails.status === "started"
              ? "جاري"
              : "منتهي"}
          </p>
          <div className="d-flex justify-content-between ps-5 pe-5">
            <div>
              <p>
                <strong>رقم المرجع: </strong> {auctionDetails.reference_number}
              </p>
              <p>
                {" "}
                <strong>تاريخ البدء: </strong> {auctionDetails.start_date}
              </p>
              {/* <p>
                {" "}
                <strong>الوقت: </strong> {auctionDetails.time}
              </p> */}
            </div>
            <div>
              {/* <p>
                {" "}
                <strong>رقم المرجع: </strong> {auctionDetails.reference_number}
              </p> */}
              <p>
                <strong>قيمة التأمين: </strong> {auctionDetails.fees} ج.م
              </p>
            </div>
          </div>
          {auctionDetails.status === "not started" ? (
            <div className="d-flex justify-content-center align-items-center px-4">
              <form onSubmit={startAuction}>
                <CButton
                  color="info"
                  variant="outline"
                  className="auction-btn btn-lg mr-2 btntext"
                  type="submit"
                >
                  بدء المزاد
                </CButton>
              </form>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div className="row mt-4 border-top">
        <h3 className="text-center mb-4 mt-4"> المنتجات</h3>
        {auctionItems.length > 0 ? (
          auctionItems.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <CCard>
                <img
                  src={item.item_id?.image || "https://via.placeholder.com/150"}
                  alt="Auction Item"
                  style={{ height: "200px" }}
                />
                <CCardBody>
                  <CCardTitle>{item.item_id?.name || "لايوجد اسم"}</CCardTitle>
                  <div className="d-flex justify-content-between">
                    <p>
                      السعر الابتدائي:{" "}
                      {item.start_bidding + "$" || "لايوجد سعر"}
                    </p>
                    <Link
                      to={`../dashboard/products/product-details/${item.item_id._id}`}
                    >
                      <CButton color="primary">تفاصيل</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          ))
        ) : (
          <p className="text-center">لم يتم إضافة أي منتج حتى الآن</p>
        )}
      </div>
      <Alert
        type="error-alert"
        visible={alertVisible}
        color="warning"
        message={alertMessage}
        dismissible
        alignment="center"
        setVisible={setAlertVisible}
      />
    </div>
  ) : (
    <p>جاري التحميل ...</p>
  );
};

export default AuctionDetails;
