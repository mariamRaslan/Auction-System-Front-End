import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../../Axios";
import "./UserProfile.css";

const UserProfileEdit = () => {
  const id = useParams().id;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [buildingNumber, setBuildingNumber] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    axiosInstance.get(`/users/${id}`).then((response) => {
      console.log(response.data.data)
      setName(response.data.data.name);
      setEmail(response.data.data.email);
      setPhone(response.data.data.phone);
      setCity(response.data.data.address?.city);
      setStreet(response.data.data.address?.street);
      setBuildingNumber(response.data.data.address?.building_number);
      setImage(response.data.data.image);
    });
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const errors = {};
    if (!name) {
      errors.name = "يرجى ادخال الاسم";
    }
    if (!email) {
      errors.email = "يرجى ادخال البريد الالكتروني";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "يرجى ادخال بريد الكتروني صحيح";
    }
    if (!phone) {
      errors.phone = "يرجى ادخال رقم الهاتف";
    } else if (!/^[0-9]+$/.test(phone)) {
      errors.phone = "يرجى ادخال رقم هاتف صحيح";
    }
    if (!city) {
      errors.city = "يرجى ادخال اسم المدينة";
    }
    if (!street) {
      errors.street = "يرجى ادخال اسم الشارع";
    }
    if (!buildingNumber) {
      errors.buildingNumber = "يرجى ادخال رقم المبنى";
    }

    if (Object.keys(errors).length === 0) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("city", city);
      formData.append("street", street);
      formData.append("buildingNumber", buildingNumber);
      if (image) {
        formData.append("image", image);
      }
      try {
        await axiosInstance.patch(`/users/${id}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        // Handle successful update
      } catch (error) {
        // Handle error
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <div className="container" dir='rtl'>
      <section className="mt-5" style={{ backgroundColor: '#eee' }}>
        <div className="container py-5">
          <div className="row d-felx align-items-center ">
            <h3 className="text-center">تعديل بيانات المستخدم</h3>
            <div className="col m-4">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={handleSubmit}>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="name" className="form-label">الاسم</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="name" value={name} onChange={(event) => setName(event.target.value)} />
                        {errors.name && <p className="text-danger">{errors.name}</p>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="email" className="form-label">البريد الالكتروني</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="email" className="form-control" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                        {errors.email && <p className="text-danger">{errors.email}</p>}
                      </div>
                   </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="phone" className="form-label">رقم الهاتف</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="phone" value={phone} onChange={(event) => setPhone(event.target.value)} />
                        {errors.phone && <p className="text-danger">{errors.phone}</p>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="city" className="form-label">المدينة</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="city" value={city} onChange={(event) => setCity(event.target.value)} />
                        {errors.city && <p className="text-danger">{errors.city}</p>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="street" className="form-label">الشارع</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="street" value={street} onChange={(event) => setStreet(event.target.value)} />
                        {errors.street && <p className="text-danger">{errors.street}</p>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="buildingNumber" className="form-label">رقم المبنى</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="text" className="form-control" id="buildingNumber" value={buildingNumber} onChange={(event) => setBuildingNumber(event.target.value)} />
                        {errors.buildingNumber && <p className="text-danger">{errors.buildingNumber}</p>}
                      </div>
                    </div>
                    <div className="row mb-3">
                      <div className="col-sm-3">
                        <label htmlFor="image" className="form-label">الصورة الشخصية</label>
                      </div>
                      <div className="col-sm-9">
                        <input type="file" className="form-control" id="image" onChange={(event) => setImage(event.target.files[0])} />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary">تحديث البيانات</button>
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