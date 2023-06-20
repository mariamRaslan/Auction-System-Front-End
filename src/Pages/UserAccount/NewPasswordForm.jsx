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


const NewPasswordForm = () => {
  const token = useParams().token;
  const navigate = useNavigate();

  const validatePassword = (value) => {
    if (!value) {
      return "يرجى إدخال كلمة المرور";
    } else if (value.length < 8) {
      return "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل";
    } else if (!/[A-Z]/.test(value)) {
      return "يجب أن تحتوي كلمة المرور على حرف كبير واحد على الأقل";
    } else if (!/[a-z]/.test(value)) {
      return "يجب أن تحتوي كلمة المرور على حرف صغير واحد على الأقل";
    } else if (!/[^a-zA-Z\d]/.test(value)) {
      return "يجب أن تحتوي كلمة المرور على حرف خاص واحد على الأقل";
    }
  };

// const validateConfirmPassword = (value, { formik }) => {
//   if (!value) {
//     return "يرجى تأكيد كلمة المرور";
//   } else if (value !== formik.values.password) {
//     return "يجب أن تتطابق كلمة المرور المؤكدة مع كلمة المرور الجديدة";
//   }
// };

  const handleSubmit = (values, { setSubmitting }) => {
    const { password, confirmPassword } = values;

    axiosInstance
      .patch(`/reset-password/${token}`, {
        password: password,
        confirmPassword: confirmPassword,
      })
      .then((response) => {
       // console.log(response);
        navigate("/login");
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

            <h3 className="text-center text-white">إعادة ضبط كلمة المرور</h3>

            <Formik
              initialValues={{
                password: "",
                confirmPassword: "",
              }}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="login-form">
                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="password">كلمة المرور الجديدة</label>
                        <Field
                          name="password"
                          type="password"
                          className="form-field text-dark"
                          validate={validatePassword}
                        />
                        <ErrorMessage
                          component="span"
                          name="password"
                          className="form-error"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-12">
                      <div className="form-group">
                        <label htmlFor="confirmPassword">تأكيد كلمة المرور الجديدة</label>
                        <Field
                          name="confirmPassword"
                          type="password"
                          className="form-field text-dark"
                          
                        />
                        <ErrorMessage
                          component="span"
                          name="confirmPassword"
                          className="form-error"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    className="button"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "جاري الإرسال..." : "إعادة ضبط كلمة المرور"}
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

export default NewPasswordForm;