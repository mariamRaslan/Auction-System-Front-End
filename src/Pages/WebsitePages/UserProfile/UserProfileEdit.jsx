import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//import Axios
import axiosInstance from "../../../Axios";
import "./UserProfile.css";

//UserProfile
const UserProfileEdit = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");

//   useEffect(() => {
//     // Fetch user data using Axios and the user ID from useParams
//     axiosInstance.get(`/users/${params.userId}`).then((response) => {
//       setName(response.data.name);
//       setEmail(response.data.email);
//       setPhone(response.data.phone);
//       setCity(response.data.address.city);
//       setStreet(response.data.address.street);
//       setBuildingNumber(response.data.address.buildingNumber);
//     });
//   }, [params.userId]);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Update user data using Axios and the user ID from useParams
//     axiosInstance.put(`/users/${params.userId}`, {
//       name,
//       email,
//       phone,
//       address: { city, street, buildingNumber }
//     }).then((response) => {
//       // Handle successful update
//     }).catch((error) => {
//       // Handle error
//     });
//   };

  return (
    <div className="container" dir='rtl'>
      <section className="mt-5" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row d-felx align-items-center ">
          <h3 className="text-center">تعديل بيانات المستخدم</h3>
            <div className="col m-4">
              <div className="card">
                <div className="card-body">
                  <form >
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="name" className="form-label">الاسم</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="email" className="form-label">البريد الالكتروني</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="tel" className="form-control" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="city" className="form-label">المدينة</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="street" className="form-label">الشارع</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="street" value={street} onChange={(event) => setStreet(event.target.value)} />
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="building-number" className="form-label">رقم المبنى</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="building-number" value={buildingNumber} onChange={(event) => setBuildingNumber(event.target.value)} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary submit-button">حفظ التعديلات</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserProfileEdit;