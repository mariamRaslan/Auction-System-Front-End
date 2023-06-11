import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Axios
import axiosInstance from "./../../Axios";


//viewuser
const ViewUser = () => {
    //get id from url
    const { id } = useParams();

    //userdata
    const [user, setUser] = useState([]);
    //get user data
    async function fetchUser() {
        try {
            const response = await axiosInstance.get(`/users/${id}`);
            setUser(response.data.data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchUser();
    },[]);

    return (

      <>
      {/**check if not user display preload */}
      {user.length === 0 ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border text-primary" role="status">
          </div>
        </div>
      ) : (
        <section style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row d-felx align-items-center">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img src={user.image} className="rounded-circle mb-3" width="160" height="160" alt="avatar" />
                  <h5 className="my-3">{user.name} </h5>

                  <div className="d-flex justify-content-center mb-2">
                    {/**check  if blocked */}
                    {user.blocked === 0 ? (
                      <button className="btn btn-success btn-lg mr-2">Unblock</button>
                    ) : (
                      <button className="btn btn-danger btn-lg mr-2">Block</button>
                    )} 

                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="card mb-4">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Full Name</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.name}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Email</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.email}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Phone</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.phone}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Role</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">{user.role}</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">Address</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0"><span>{user.address.city}</span>,<span>{user.address.street}</span>, <span>{user.address.building_number}</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )
      }
      </>


    );

}


export default ViewUser;
