import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";
import { Link } from "react-router-dom";
import {
  CCard,
  CCardBody,
  CCardTitle,
  CButton,
} from "@coreui/react";

const AuctionDetails = () => {
  const auctionId = useParams().auctionId;
  const [auctionDetails, setAuctionDetails] = useState(null);
  const [auctionItems, setAuctionItems] = useState([]);

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

  return auctionDetails ? (
    <div className="container my-4" dir="rtl">
      <div className="row">
        <div className="col-12">
          <h1 className="text-center ">{auctionDetails.name}</h1>
          <p className="text-center mb-4">الحالة {auctionDetails.status}</p>
          <div className="d-flex justify-content-between ps-5 pe-5">
            <div>
              <p>
                <strong>الرقم التعريفي </strong>{" "}
                {auctionDetails.reference_number}
              </p>
              <p> <strong>تاريخ البدء </strong> {auctionDetails.start_date}</p>
              <p> <strong>الوقت </strong> {auctionDetails.time}</p>
            </div>
            <div>
              <p>
                {" "}
                <strong>الرقم المرجعي </strong>{" "}
                {auctionDetails.reference_number}
              </p>
              <p>
                <strong> قيمه التأمين </strong> ${auctionDetails.fees}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to={`/auctions/edit/${auctionDetails._id}`}>
  <CButton color="primary me-5">تعديل المزاد</CButton>
</Link>
      <div className="row mt-4 border-top">
        <h3 className="text-center mb-4 mt-4">منتجات المزاد</h3>
        {auctionItems.length > 0 ? (
          auctionItems.map((item) => (
            <div className="col-md-4 mb-4" key={item._id}>
              <CCard>
                <img src={item.item_id?.image || "https://via.placeholder.com/150"} alt="Auction Item" style={{ height: "200px" }} />
                <CCardBody>
                  <CCardTitle>{item.item_id?.name || "لا يوجد اسم"}</CCardTitle>
                  <div className="d-flex justify-content-between">
                    <p>القيمة المبدأية: {item.start_bidding +'$'|| "لا يوجد سعر"}</p>
                    <Link to={`/products/product-details/${item.item_id._id}`}>
                    <CButton color="primary">التفاصيل</CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </div>
          ))
        ) : (
          <p className="text-center">لم يتم إضافة منتجات بعد</p>
        )}
      </div>
    </div>
  ) : (
    <p>تحميل..</p>
  );
};

export default AuctionDetails;