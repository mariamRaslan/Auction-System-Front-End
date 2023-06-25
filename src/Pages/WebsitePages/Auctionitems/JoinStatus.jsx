import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import axiosInstance from "../../../Axios";
import successImg from '../../../assets/images/animation_640_ljalizxx.gif'
import failImg from '../../../assets/images/fail.gif'

const JoinStatus = () => {
  const [success, setSuccess] = useState(false);
  const successParam = useParams().status;
  const id = useParams().id;
  console.log("id", id)
  // const [checkJoin, setCheckJoin] = useState([]);

  useEffect(() => {

    setSuccess(successParam == "success");

    const getCheckJoin = async () => {
      try {
        const response = await axiosInstance.patch(`/fees-checkout-session/${successParam}/${id}`);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    getCheckJoin();

  }, [location.search]);



  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 text-center">
          {success ? (
            <>
              <img src={successImg} alt="Success" style={{width:"300px",height:"auto"}} />
              <h2>تم الانضمام بنجاح</h2>
              <p>سوف يصلك بريد الكتروني قبل ميعاد المزاد بيوم </p>
            </>
          ) : (
            <>
              <img   src={failImg} alt="Failure" style={{width:"400px",height:"auto"}}  />
              <h2>عذراً، حدث خطأ أثناء الدفع</h2>
              <p>يرجى المحاولة مرة أخرى</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default JoinStatus;
