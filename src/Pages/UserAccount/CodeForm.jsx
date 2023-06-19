import { Formik, Form, Field, ErrorMessage } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Img from "../../assets/images/13015.jpg"
import './UserAccount.css';
import axiosInstance from "../../Axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo2.png";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CodeForm = () => {
  const token = useParams().token;
  const verifycode = useParams().verifycode;
  const navigate = useNavigate();

  const validateCode = (value) => {
    if (!value) {
      return "يرجى إدخال الرمز";
    } else if (!/^\d{1}$/i.test(value)) {
      return "يرجى إدخال الرمز بشكل صحيح";
    }
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const { code1, code2, code3, code4, code5 } = values;
    const verificationCode = `${code1}${code2}${code3}${code4}${code5}`;

    axiosInstance
      .post(`/reset-password/${token}/${verifycode}`, {
        numberOne:code1,
        numberTwo:code2,
        numberThree:code3,
        numberFour:code4,
        numberFive:code5
      })
      .then((response) => {
        //console.log(response);
        navigate(`/new-password/${token}`);
      })
      .catch((error) => {
       // console.log(error);
       toast.error('عذراً، حدث خطأ ما. يرجى المحاولة مرة أخرى');
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

            <h3 className="text-center text-white">قم بإدخال الرمز المرسل إليك</h3>

            <Formik
              initialValues={{
                code1: "",
                code2: "",
                code3: "",
                code4: "",
                code5: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="login-form">
                  <div className="form-group d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center">
                      <Field
                        name="code5"
                        type="text"
                        className="form-field-small mx-2"
                        validate={validateCode}
                      />
                      <Field
                        name="code4"
                        type="text"
                        className="form-field-small mx-2"
                        validate={validateCode}
                      />
                      <Field
                        name="code3"
                        type="text"
                        className="form-field-small mx-2"
                        validate={validateCode}
                      />
                      <Field
                        name="code2"
                        type="text"
                        className="form-field-small mx-2"
                        validate={validateCode}
                      />
                      <Field
                        name="code1"
                        type="text"
                        className="form-field-small mx-2"
                        validate={validateCode}
                      />
                    </div>
                    <div className="d-flex justify-content-center">
                      <ErrorMessage
                        component="span"
                        name="code5"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="code4"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="code3"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="code2"
                        className="form-error"
                      />
                      <ErrorMessage
                        component="span"
                        name="code1"
                        className="form-error"
                      />
                    </div>
                  </div>

                  <button className="button" type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "جاري الإرسال..." : "تأكيد"}
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

export default CodeForm;