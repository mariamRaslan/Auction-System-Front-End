import React, { useState, useEffect } from "react";
import Axios from "./../../../Axios";
import { CModal } from "@coreui/react";

import "./contact.css";

const Contact = () => {
  //set message
  const [message, setmessage] = useState("");

  // handel submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // validate email
    const email = e.target.email.value;
    if (!email.includes("@")) {
      alert("please enter a valid email");
      return;
    }

    // validate phone 12 number
    const phone = e.target.phone.value;
    if (phone.length !== 11) {
      alert("please enter a valid phone number");
      return;
    }
    //get data from form
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      subject: e.target.phone.value,
      message: e.target.message.value,
    };
    //post data to /contact
    Axios.post("/contact", data)
      .then((res) => {
        setmessage("تم الارسال بنجاح");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.phone.value = "";
        e.target.subject.value = "";
        e.target.message.value = "";
      })
      .catch((error) => {
        console.log(error);
        // set message
        setmessage("حدث خطأ ما");
      });
  };

  return (
    <>
      <div className="text-center bg-image">
        <div className="d-flex justify-content-center align-items-center h-100">
          <div className="row text-center">
            
              <div className="text-dark">
                <h1 className="mb-3">تواصل معنا </h1>
                <p>
                    استخدم الطريقة المناسبه لك للتواصل معنا وسنرد عليك في الحال
                </p>
              
            </div>
            <div className="lg-hr"></div>
           
          </div>
        </div>
      </div>

      {/* phone , email , facebook  */}
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 ">
            <div className="contact-card">
              <div className="card-body ">
                <h5 className="card-title">رقم الهاتف</h5>
                <p className="card-text">+962 79 000 0000</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <div className="card-body">
                <h5 className="card-title">البريد الالكتروني</h5>
                <p className="card-text">
                  <a href="mailto:suport@gmail.com">support@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="contact-card">
              <div className="card-body">
                <h5 className="card-title">فيسبوك</h5>
                <p className="card-text">
                  <a href="https://www.facebook.com/">facebook.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form name , email , phone , subject , message  */}
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-12 p-5">
            {/* show message */}
            <div className="text-center">
              {message && (
                <div className="alert alert-success" role="alert">
                  {message}
                </div>
              )}
             
            </div>

            <form
                className="form-shadow mx-5"
                onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">الاسم</label>
                <input
                  type="text"
                  name="name"
                  className="formcontrol"
                  id="exampleFormControlInput1"
                 
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">
                  البريد الالكتروني
                </label>
                <input
                  type="email"
                  name="email"
                  className="formcontrol"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">رقم الهاتف</label>
                <input
                  type="text"
                  name="phone"
                  className="formcontrol"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlInput1">الموضوع</label>
                <input
                  type="text"
                  name="subject"
                  className="formcontrol"
                  id="exampleFormControlInput1"
                  
                />
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">الرسالة</label>
                <textarea
                  name="message"
                  className="form-control-text-area"
                  id="exampleFormControlTextarea1"
                  rows="10"
                ></textarea>
              </div>
              <div className="text-center">
                    <button
                        type="submit"
                        className="btn btn-custom mt-5 "
                    >
                ارسال
              </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
