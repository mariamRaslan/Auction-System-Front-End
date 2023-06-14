import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../assets/images/13015.jpg"
import './UserAccount.css';


const EmailForm = () => {
  return (
    < >
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
        <h1>.iBid</h1>
      </div>

      <h3 className="text-center text-white">إعادة ضبط كلمةالمرور</h3>

      <Formik initialValues={{}}>
        {({ setFieldValue }) => (
          <Form className="login-form">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="email"> بريدك الالكتروني</label>
                  <Field name="email" type="email" className="form-field" />
                  <small>سوف نرسل لك رمز على هذا البريد الالكتروني</small>
                  <ErrorMessage
                    component="span"
                    name="email"
                    className="form-error"
                  />
                </div>
              </div>  
            </div>

            <button className="button" type="submit">
              إرسال
            </button>
          </Form>
        )}
      </Formik>
    </div>
  </div>
</div>
      </>
  );
}

export default EmailForm;