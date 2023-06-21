import React, { useState, useEffect } from "react";
import Card from "../../../SharedUi/Card/card";
import Axios from "./../../../Axios";
import { CModal } from '@coreui/react';

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
        if ( phone.length !== 11 ) {
            alert("please enter a valid phone number");
            return;
        }
        //get data from form
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject:e.target.phone.value,
            message: e.target.message.value,
        };
        //post data to /contact
        Axios.post("/contact", data)
            .then((res) => {
                setmessage("تم الارسال بنجاح")
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.phone.value = "";
                e.target.subject.value = "";
                e.target.message.value = "";

            })
            .catch((error) => {
                console.log(error);
                // set message 
                setmessage("حدث خطأ ما")
            });
    };
    

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
            <h1 className="mb-3">تواصل معنا </h1>
          </div>
        </div>
      </div>
      <div className="contanier">
        <div className="row">
            <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="text-white">
                        <h1 className="mb-3">تواصل معنا </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* phone , email , facebook  */}
    <div className="container">
        <div className="row">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">رقم الهاتف</h5>
                        <p className="card-text">+962 79 000 0000</p>   
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">البريد الالكتروني</h5>   
                        <p className="card-text">
                            <a href="mailto:suport@gmail.com">
                                support@gmail.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body"> 
                        <h5 className="card-title">فيسبوك</h5>
                        <p className="card-text">
                            <a href="https://www.facebook.com/">
                                facebook.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* form name , email , phone , subject , message  */}
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-12">
                {/* show message */}
                <div className="text-center">
                {message && (
                    <div className="alert alert-success" role="alert">
                        {message}
                    </div>
                )}
                <h1 className="mb-3">تواصل معنا </h1>
                <p>
                    يمكنك التواصل معنا عن طريق ملئ النموذج ادناه وسوف نقوم بالرد عليك في اقرب وقت ممكن
                </p>
                </div>
                <form
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">الاسم</label>
                        <input type="text" 
                        name="name"
                        className="form-control" id="exampleFormControlInput1" placeholder="الاسم" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">البريد الالكتروني</label> 
                        <input type="email"
                        name="email"
                        className="form-control" id="exampleFormControlInput1" placeholder="البريد الالكتروني" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">رقم الهاتف</label>
                        <input type="text" 
                        name="phone"
                        className="form-control" id="exampleFormControlInput1" placeholder="رقم الهاتف" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">الموضوع</label>
                        <input type="text"
                        name="subject"
                        className="form-control" id="exampleFormControlInput1" placeholder="الموضوع" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">الرسالة</label>
                        <textarea 
                        name="message"
                        className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-lg mt-5 align-self-center">ارسال</button>
                </form>
            </div>
        </div>
    </div>

    </>
  );
};

export default Contact;
