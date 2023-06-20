import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../assets/images/13015.jpg"
import './UserAccount.css';
import axiosInstance from "../../Axios";
import logo from "../../assets/images/logo2.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const validateEmail = (value) => {
  let errorMessage;
  if (!value) {
    errorMessage = "يرجى إدخال البريد الإلكتروني";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    errorMessage = "يرجى إدخال بريد إلكتروني صالح";
  }
  return errorMessage;
};

const EmailForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values.email )
    axiosInstance
      .post("/reset-password", { email: values.email })
      .then((response) => {
       // console.log(response);
      })
      .catch((error) => {
        if (error.response) {
          toast.error('البريد الإلكترونى غير صحيح');
        } else {
          //console.error(error);
          toast.error('عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى');
        }
       
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <>
      <div className="body">
      <ToastContainer />
        <div className="left-login">
          <img src={Img} alt="auction image" className="chart" />
        </div>

        <div className="right-login" dir="rtl">
          <div className="card-login">
            <div className="d-flex justify-content-center mb-4">
            <img className="logo-img" alt="logo" src={logo} />
              <h1>iBid</h1>
            </div>

            <h3 className="text-center text-white">إعادة ضبط كلمة المرور</h3>

            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="login-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="email"> بريدك الإلكتروني</label>
                        <Field
                          name="email"
                          type="email"
                          className="form-field text-dark"

                          validate={validateEmail}
                        />
                        <small>سوف نرسل لك رمز على هذا البريد الإلكتروني</small>
                        <ErrorMessage
                          component="span"
                          name="email"
                          className="form-error text-danger"
                        />
                      </div>
                    </div>
                  </div>

                  <button className="button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "جاري الإرسال..." : "إرسال"}
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailForm;