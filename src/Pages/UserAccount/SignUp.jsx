import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../assets/images/13015.jpg"
import './UserAccount.css';
import axiosInstance from "../../Axios";
import logo from "../../assets/images/logo2.png";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (values) => {
    try {
      console.log(values)
      const response = await axiosInstance.post('/signup', values);
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        const message = error.response.data.message;
        setErrorMessage(message);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <>
      {/* <div className="websiteLogo body">
    <img src="<logo-url>" alt="logo" className="logo" />
    <h1>iBid.</h1>
  </div> */}
      <div className="body">
        <div className="left-login">
          <img src={Img} alt="auction image" className="chart" />
        </div>

        <div className="right-login" dir="rtl">
          <div className="card-login">
            <div className="d-flex justify-content-center mb-4">
            <img className="logo-img" alt="logo" src={logo} />
              <h1>iBid</h1>
            </div>

            <h3 className="text-center text-white">انشاء حساب</h3>

            <Formik initialValues={{}} onSubmit={handleSubmit}>
              {({ setFieldValue }) => (
                <Form className="login-form">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="email">البريد الالكتروني</label>
                        <Field
                          name="email"
                          type="email"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="email"
                          className="form-error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="password">الرقم السري</label>
                        <Field
                          name="password"
                          type="password"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="password"
                          className="form-error"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">الاسم</label>
                        <Field
                          name="name"
                          type="text"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="name"
                          className="form-error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">رقم الهاتف</label>
                        <Field
                          name="phone"
                          type="text"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="phone"
                          className="form-error"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="city">المدينة</label>
                        <Field
                          name="city"
                          type="text"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="city"
                          className="form-error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="building">المبنى</label>
                        <Field
                          name="building"
                          type="text"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="building"
                          className="form-error"
                        />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="street">الشارع</label>
                        <Field
                          name="street"
                          type="text"
                          className="form-field text-dark"
                        />

                        <ErrorMessage
                          component="span"
                          name="street"
                          className="form-error"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="image">الصورة</label>
                        <input
                          name="image"
                          type="file"
                          accept=".jpg,.jpeg,.png"
                          className="form-field text-dark"
                          onChange={(event) => {
                            setFieldValue(
                              "image",
                              event.currentTarget.files[0]
                            );
                          }}
                        />
                        <ErrorMessage
                          component="span"
                          name="image"
                          className="form-error"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="button" type="submit">
                    تسجيل
                  </button>
                </Form>
              )}
            </Formik>

            {errorMessage && (
              <div className="alert alert-danger mt-3">{errorMessage}</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;