import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../Assets/images/13015.jpg"
import './UserAccount.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <>
      {/* <div className="websiteLogo body">
    <img src="<logo-url>" alt="logo" className="logo" />
    <h1>iBid.</h1>
  </div> */}
      <div className="body ">
        <div className="left-login">
          <img src={Img} alt="auction image" className="chart" />
        </div>

        <div className="right-login" dir="rtl">
          <div className="card-login">
            <div className="d-flex justify-content-center mb-4">
              <h1>.iBid</h1>
              {/* <img src="<logo-url>" alt="logo" className="logo" /> */}
            </div>
            <h3 className="text-center text-white">تسجيل الدخول</h3>
            <Formik initialValues={{}}>
              {() => (
                <Form className="login-form">
                  <div className="form-group">
                    <label form="email">البريد الالكتروني</label>
                    <Field
                      name="email"
                      type="email"
                      className="form-field"
                    />
                    <ErrorMessage
                      component="span"
                      name="email"
                      className="form-error"
                    />
                  </div>

                  {/*Outro campo*/}

                  <div className="form-group">
                    <label form="password">الرقم السري</label>
                    <Field
                      name="password"
                      type="password"
                      className="form-field"
                    />
                    <ErrorMessage
                      component="span"
                      name="password"
                      className="form-error"
                    />
                  </div>

                  <button className="button" type="submit">
                    تسجيل
                  </button>

                  <div className="text-center mt-3">
                    <p>
                      ليس لديك حساب؟{" "}
                      <Link to="/signup" className='text-white'>انشئ حساب جديد</Link>
                    </p>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;