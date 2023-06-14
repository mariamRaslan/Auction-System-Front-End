import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Axios
import axiosInstance from "../../../Axios";


//UserProfile
const UserProfile = () => {


    return (

      <div className="container" dir="rtl">

        <section className="mt-5" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row d-felx align-items-center">
            <div className="col-lg-4">
              <div className="card mb-4">
                <div className="card-body text-center">
                  <img  className="rounded-circle mb-3" width="160" height="160" alt="avatar" />
                  <h5 className="my-3">user name </h5>
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
                      <p className="text-muted mb-0">user name</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">البريد الالكتروني</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">useremail</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">رقم الهاتف</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0">userphone</p>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <p className="mb-0">العنوان</p>
                    </div>
                    <div className="col-sm-9">
                      <p className="text-muted mb-0"><span>useraddresscity</span>,<span>useraddressstreet</span>, <span>useraddressbuilding_number</span></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>   
      </div>


    );

}


export default UserProfile;
