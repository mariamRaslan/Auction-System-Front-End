import React, { useState, useEffect } from "react";
import axiosInstance from "../../../Axios";
import jwt_decode from 'jwt-decode';
import { Link } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const decoded = jwt_decode(localStorage.getItem('token'));
  const id = decoded.id;

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosInstance.get(`/users/${id}`);
        setUser(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [id]);

  const fakeAuctions = [
    {
      id: 1,
      image: "https://picsum.photos/id/237/200/300",
      name: "Auction 1",
      date: "2023-06-20",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget faucibus ex."
    },
    {
      id: 2,
      image: "https://picsum.photos/id/238/200/300",
      name: "Auction 2",
      date: "2023-06-25",
      details: "Sed quis sapien euismod, fermentum metus vel, efficitur velit."
    },
    {
      id: 3,
      image: "https://picsum.photos/id/239/200/300",
      name: "Auction 3",
      date: "2023-06-30",
      details: "Fusce vehicula nisl ac lacinia commodo. Nam sit amet semper nisi."
    }
  ];

  return (
    <div className="container" dir="rtl">
      {user && (
        <section className="mt-3" >
          <div className="container mt-5">
            <div className="row d-flex align-items-center p-5" style={{ backgroundColor: "#eee" }}>
              <div className="col-lg-4">
                <div className="card mb-4">
                  <div className="card-body text-center">
                    <img
                      className="rounded-circle mb-3"
                      width="160"
                      height="160"
                      src={user.image}
                      alt="avatar"
                    />
                    <h5 className="my-3">{user.name}</h5>
                    <Link to={`/edit-profile/${id}`} className="btn btn-dark submit-button">Edit</Link>
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
                        <p className="text-muted mb-0">{user.name}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">البريد الالكتروني</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.email}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">رقم الهاتف</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">{user.phone}</p>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-sm-3">
                        <p className="mb-0">العنوان</p>
                      </div>
                      <div className="col-sm-9">
                        <p className="text-muted mb-0">
                          <span>{user.address.city}</span>,
                          <span>{user.address.street}</span>,
                          <span>{user.address.building_number}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5 text-center">
              <div className="col-lg-12 ">
                <h3>المزادات التي شاركت بها </h3>
              </div>
            </div>
            <div className="row p-5 mt-5" style={{ backgroundColor: "#eee" }}>
              {fakeAuctions.map((auction) => (
                <div className="col-lg-4 mb-4" key={auction.id}>
                  <div className="card text-center" style={{ height: "450px" }} >
<img className="card-img-top" src={auction.image} alt="Auction" style={{ height: "200px" }} />
<div className="card-body">
<h4 className="card-title">{auction.name}</h4>
<p className="card-text">{auction.date}</p>
<p className="card-text">{auction.details}</p>
<button className="btn btn-primary submit-button">تفاصيل</button>
</div>
</div>
</div>
))}
</div>
</div>
</section>
)}
</div>
);
};

export default UserProfile;