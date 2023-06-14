import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import axios from '../../Axios';
import jwt_decode from 'jwt-decode';
import 'bootstrap/dist/css/bootstrap.min.css';
import './UserAccount.css';
import Img from '../../assets/images/13015.jpg';
import { FaGoogle, FaFacebook, FaApple } from 'react-icons/fa';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (values) => {
    try {
      const res = await axios.post('/login', {
        email: values.email,
        password: values.password,
      });
      const decoded = jwt_decode(res.data.token);
      localStorage.setItem('token', res.data.token);
      if (decoded.role === 'admin') {
        window.location.href = '#/dashboard/dashboard/reports/yearly-reports';
      } else if (decoded.role === 'user') {
        window.location.href = '/';
      } else {
        setErrorMessage('البريد الإلكتروني أو كلمة المرور التي أدخلتها غير صحيحة. حاول مرة اخرى');
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const res = await axios.get('/google');
      console.log(res.data); // replace with desired code
    } catch (err) {
      console.log(err.message); // replace with desired error handling
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const res = await axios.get('/facebook');
      console.log(res.data); // replace with desired code
    } catch (err) {
      console.log(err.message); // replace with desired error handling
    }
  };

  return (
    <>
      
      <div className="body">
    
        <div className="left-login">
          <img src={Img} alt="auction image" className="chart" />
        </div>

        <div className="right-login" dir="rtl">
          <div className="card-login">
            <div className="d-flex justify-content-center mb-4">
              <h1>.iBid</h1>
            </div>
            <h3 className="text-center text-white">تسجيل الدخول</h3>
            <Formik initialValues={{}} onSubmit={handleLogin}>
              {() => (
                <Form className="login-form">
                  <div className="form-group ">
                    <label htmlFor="email">البريد الالكتروني</label>
                    <Field
                      name="email"
                      id="email"
                      type="email"
                      className="form-field text-dark"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>

                  <div className="form-group ">
                    <label htmlFor="password">كلمة المرور</label>
                    <Field
                      name="password"
                      id="password"
                      type="password"
                      className="form-field text-dark"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                  </div>

                  <button className="button" type="submit">
                    تسجيل الدخول
                  </button>

                  <div className="text-center mt-3">
                    <p>
                      ليس لديك حساب؟{' '}
                      <Link to="/signup" className="text-white">
                        انشئ حساب جديد
                      </Link>
                    </p>
                  </div>

                  <div className="text-center mt-3 ">
                    <p>أو قم بتسجيل الدخول باستخدام:</p>
                    <div className="d-flex justify-content-center text-white">
                      <button className="btn btn-outline-light mx-2" onClick={handleGoogleLogin}>
                        <FaGoogle size={24} />
                      </button>
                      <button className="btn btn-outline-light mx-2" onClick={handleFacebookLogin}>
                        <FaFacebook size={24} />
                      </button>
                      <a href="/" className="btn btn-outline-light mx-2">
                        <FaApple size={24} />
                      </a>
                    </div>
                  </div>

                  <div className="text-center mt-3">
                    <Link to="/reset-password/email" className="text-white">
                      نسيت كلمة المرور
                    </Link>
                    <p className="lead">email: newAdmin@gmail.com</p>
                     <p className="lead">password: Admin@12345</p>
                  </div>
                </Form>
              )}
            </Formik>
            {errorMessage && (
              <div className="text-center mt-3">
                <span className="form-error text-danger fw-bold">{errorMessage}</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Login;