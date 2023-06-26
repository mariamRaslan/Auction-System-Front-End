import React, { useState, useEffect } from "react";
import axiosInstance from "../../../Axios";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import "./UserProfile.css";
import Card from "../../../SharedUi/Card/card";
import Auth from '../../../components/IsLogin';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [auctions, setAuctions] = useState([]);
  const [boughtItems, setBoughtItems] = useState([]);
  const decoded = jwt_decode(localStorage.getItem("token"));
  const id = decoded.id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/users/${id}`);
        setUser(response.data.data);
        console.log(response.data.data.name);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();

    const fetchAuctions = async () => {
      try {
        const response = await axiosInstance.get("/joinAuction");
        if (response.data.success) {
          setAuctions(response.data.data);
          console.log(response.data.data)
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchAuctions();

    const fetchBoughtItems = async () => {
      try {
        const response = await axiosInstance.get("/getPayedItems");        
          setBoughtItems(response.data.data);
          //log
          console.log("BoughtItems=>",boughtItems)
          console.log("item=>",response)
      } catch (error) {
        console.error(error);
      }
    };
    fetchBoughtItems();
  }, [id]);

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

  return (
    <div className="container" dir="rtl">
      {user && (
        <section className="mt-3">
          <div className="container mt-5">
            <div
              className="row d-flex align-items-center p-5 div-container"
              
            >
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      className="rounded-circle mb-3"
                      width="160"
                      height="160"
                      src={user?.image}
                      alt="avatar"
                    />
                    <h5 className="my-3">{user?.name}</h5>
                    <Link
                      to={`/edit-profile/${id}`}
                      className="btn btn-dark submit-button"
                    >
                      تعديل
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="card mb-4">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">الاسم</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريد الالكتروني</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user?.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          <span>{user?.address.city}</span>,
                          <span>{user?.address.street}</span>,
                          <span>{user?.address.building_number}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row my-5 text-center">
              <div className="col-lg-12 text-shadow text-light">
                <h3>المزادات التي شاركت بها </h3>
                <div className="lg-hr mb-3"></div>
              </div>
            </div>
            <div className="row p-5 mt-5 div-container" >
              {auctions.length > 0 ? (
                auctions.map((auction) => (
                  <div className="col-lg-4 mb-4" key={auction._id}>
                    <Card
                      image={null}
                      title={auction?.auction_id?.name}
                      startdate={formatStartDate(auction?.auction_id?.start_date)}
                      href={`/auction/${auction?.auction_id?._id}/items`}
                    />
                  </div>
                ))
              ) : (
                <div className="col-lg-12">
                  <h5 className="text-center">لم تشارك في أي مزاد حتى الآن.</h5>
                </div>
              )}
            </div>

            <div className="row my-5 text-center">
  <div className="col-lg-12 text-shadow text-light">
    <h3>المنتجات التي  تم شرائها </h3>
    <div className="lg-hr mb-3"></div>
  </div>
</div>
<div className="row p-5 mt-5 div-container" >
  {boughtItems.length > 0 ? (
    boughtItems.map((item) => (
      <div className="col-lg-4 mb-4" key={item._id}>
        <Card
          image={item?.items?.images}
          title={item?.items?.name}
          startdate={formatStartDate(item?.auctions?.start_date)}
          href={`/itemdetails/${item?.itemDetails_id}`}
        />
      </div>
    ))
  ) : (
    <div className="col-lg-12">
      <h5 className="text-center">لم تشتري أي منتج حتى الآن.</h5>
    </div>
  )}
</div>
          </div>
        </section>
      )}
    </div>
  );
};

export default Auth(UserProfile);