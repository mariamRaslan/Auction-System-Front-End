import React from "react";
//import card
import Card from "../../../SharedUi/Card/card";
//import blobbutton
import BlobButton from "../../../SharedUi/BlobButton/BlobButton";

//import axios
import Axios from "./../../../Axios";
//usesate
import { useState,useEffect } from "react";
import homeImg from "../../../assets/images/background.png"
import img1 from "../../../assets/images/img1.png"
import img2 from "../../../assets/images/img2.png"
import img3 from "../../../assets/images/img3.png"
import img4 from "../../../assets/images/img4.png"
import bid from "../../../assets/images/homebidding.png"
//card

//use home.css
import "./Home.css";

const Home = () => {


  //get new arival
  const [newArrival, setNewArrival] = useState([]);
  const [newArrivalitems, setnewArrivalitems] = useState([]);
  const date=Date.now();

  useEffect(() => {
    Axios.get("website/newArrivalAuction")
      .then((res) => {
        setNewArrival(res.data.data);
        //log   
        console.log("new arrival=>",res.data.data);
        console.log(date)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get new arival items
  useEffect(() => {
    Axios.get("website/newArrivalItem")
      .then((res) => {
        setnewArrivalitems(res.data);
        //log
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);




 const [message, setmessage] = useState("");

    // handel submit
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // validate email
        const email = e.target.email.value;
        if (!email.includes("@")) {
            alert("please enter a valid email");
            return;
        }

        // validate phone 12 number 
        const phone = e.target.phone.value;
        if ( phone.length !== 11 ) {
            alert("please enter a valid phone number");
            return;
        }
        //get data from form
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            phone: e.target.phone.value,
            subject:e.target.phone.value,
            message: e.target.message.value,
        };
        //post data to /contact
        Axios.post("/contact", data)
            .then((res) => {
                setmessage("تم الارسال بنجاح")
                e.target.name.value = "";
                e.target.email.value = "";
                e.target.phone.value = "";
                e.target.subject.value = "";
                e.target.message.value = "";

            })
            .catch((error) => {
                console.log(error);
                // set message 
                setmessage("حدث خطأ ما")
            });
    };
  

  return (

    <div >

<div class=" text-center bg-image header">
  <div class="col-md-6 order-md-1 align-self-center">
    <div class="row">
      <div class="col-md-12">
        <h1 class="mb-3 text-white">اهلا بيك في موقعنا</h1>
        <h4 class="mb-3 text-white">زايد واربح افضل المنتجات التي تحلم بها</h4>
      </div>
      <div class="col-md-12 mt-4">
        <BlobButton buttonText=" تعرف اكثر عن خدماتنا" href="/about" />
      </div>
    </div>
  </div>
  <div class="col-md-6 order-md-2">
    <img src={homeImg} class="mt-5" alt="" />
  </div>
</div>


      {/* how it work section  */}
      <div className="section-bg-white" >
        <div className="container">
          <div className="row mb-3">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center mt-4">
                <h1 className="text-center"> خطوات الشراء</h1> 
              </div>
            </div>
          </div>
          <div className="lg-hr mb-3"></div>
          <div className="row">
          
                <div className="col text-center">
                  <div className="circle" >
                    <img src={img2} />
                  </div>
                  <h3>اشترك</h3>
                  <div className="sm-hr"></div>
                    <p>
                    تريد التسجيل في موقعنا؟ اشترك الآن حتى تتمكن من الانضمام للمزاد.
                    </p>
                </div>
               
                <div className="col text-center">
                  <div className="circle" >
                  <img src={img1} />
                  </div>

                  <h3>انضم</h3>
                  <div className="sm-hr"></div>
                    <p>
                      
انضم إلى المزادات التي ترغب في المشاركة فيها واحصل على فرصة للفوز بالمنتج المطروح للمزاد.
                    </p>
                </div>
                <div className="col text-center">
                  <div className="circle" >
                  <img src={img4} />
                  </div>

                  <h3>زايد</h3>
                  <div className="sm-hr"></div>
                    <p>
                    زد المبلغ الذي تقدمه في المزايدة واحصل على فرصة أكبر للفوز.
                    </p>
                </div>
                <div className="col text-center">
                  <div className="circle" >
                    <img src={img3} />
                  </div>

                  <h3>اكسب</h3>
                  <div className="sm-hr"></div>
                    <p>
                    إذا كنت الأعلى مزايد في نهاية المزاد، فستكسب المنتج المطروح للمزاد وستفوز به.
                    </p>
                </div>
              </div>
   
        </div>
        
      </div>








     

      {/** product section header  */}
   <div className="section-bg-grey py-5">
        <div className="container" >
          <div className="row ">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center">
                <h3 className="section-title"> أحدث المزادات</h3>
              </div>
            <div className="lg-hr"></div>
            </div>
          </div> 
        </div>

    <div className="container">
      <div className="row ">
      {newArrival.length > 0 ? (
            newArrival.map((product) => (
                <div key={product.id} className="col-md-4">
                  <Card
                    title={product.name}
                    startdate={product.start_date}
                    //href = /product/:id
                    href={`/auction/${product._id}/items`}
                  />
                </div>
                ))
        ) : (
            <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>
    </div>

    {/** product section header  */}
    {/* <div className="container" >
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4 mb-3">
              <h3 className="section-title "> أحدث المنتجات</h3>
              
              
            </div>
            <div className="lg-hr"></div>

          </div>
        </div> 
      </div> */}

    {/* <div className="container  mb-5">

      <div className="row">
      {newArrivalitems.length > 0 ? (
            newArrivalitems.map((product) => (
                <div key={product.id} className="col-md-4">
                  <Card
                    title={product.name}
                    startdate={product.startdate}
                    image={product.image}
                    //href = /product/:id
                    href={`/itemdetails/${product._id}`}
                  />
                </div>
                ))
        ) : (
            <div className="col-md-12">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="spinner-border text-primary" role="status">
                    </div>
                </div>
            </div>
        )}
      </div>
    </div>   */}

          
    

    {/** about us   */}
    <div className="">
    
    <div className="container ">
      <div className="row">
        <div className="col-md-6">
          <div className="">
            <div className="image">
              <img
                src={bid}
                className=""
                alt="product"
                width={'90%'}
                
              />
            </div>
            
          </div>
        </div>
        <div className="col-md-6 text-center d-flex align-items-center">
          
          <p className="text-justify align-items-center fs-5">
            {/* about Auction system description by arabic */}
            هل ترغب في الحصول على منتجات عالية الجودة بأسعار مناسبة؟ جرب موقع المزادات عبر الإنترنت! يقوم المشترين بتقديم المزايدات للحصول على المنتجات المعروضة، ويتم بيعها لأعلى مزايد. الموقع يوفر آلية دفع آمنة وسهلة، وشحن موثوق به للمنتجات. كما يمكن تتبع المزايدات والإعلانات الخاصة بالمنتجات المفضلة لديك. جربه الآن!

          </p>
        </div>
      </div>
    </div>
  </div>

    {/* hr */}
      
    {/** services section  */}
    <div className="section-bg-grey px-5 mt-5">
    <div className="">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title">خدماتنا</h3>
            </div>
          </div>
    <div className="lg-hr"></div>

        </div>
      </div>
    </div>
      <div className="row mt-5">
        <div className="col-md-4">
          <div className="">
            <div className="image " >
              <img
                src="./products.png"
                className="service-img  thumbnail-image"
                alt="product"
                />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">افضل المنتجات</h5>
              <p className="text-center ">
                  نوفر لك افضل المنتجات حول العالم 
               </p>
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="">
              <img
                src="./payment.png"
                className="service-img  "
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body ">
              <h5 className="card-title text-center"> الدفع بامان </h5>
              <p className="text-justify text-center">
                نوفر لك طرق سهله وامنة للدفع
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="image">
              <img
                src="./support.png"
                className="service-img  thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body text-center">
              <h5 className="card-title text-center">الدعم </h5>
              <p className="text-justify text-center">
                  نوفر لك فريق مسئول عن الدعم لمساعدتك والرد علي استفساراتك
                </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>

                  
            
    {/** contact us   */}
    <div className="mt-5">
          <div className="container " >
              <div className="row">
                <div className="col-md-12">
                  <div className="d-flex justify-content-center align-items-center mt-4">
                    <h3 className="section-title">تواصل معنا</h3>
                  </div>
                </div>
                {/* hr */}
                <div className="lg-hr">
                  </div>
                  
              </div>
          </div>
          
        {/* form name , email , phone , subject , message  */}
        <div className="container ">
              <div className="row mt-5">
                  <div className="col-md-12">
                      {/* show message */}
                      <div className="text-center">
                      {message && (
                          <div className="alert alert-success" role="alert">
                              {message}
                          </div>
                      )}                      
                      <p>
                          يمكنك التواصل معنا عن طريق ملئ النموذج ادناه وسوف نقوم بالرد عليك في اقرب وقت ممكن
                      </p>
                      </div>
                      <div className="form-shadow section-bg-grey">
                      <form     
                          onSubmit={handleSubmit}
                          className="m-5"
                      >
                          <div className="form-group ">
                              <label htmlFor="exampleFormControlInput1">الاسم</label>
                              <input type="text" 
                              name="name"
                              className="formcontrol section-bg-grey" id="exampleFormControlInput1"  />
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">البريد الالكتروني</label>
                              <input type="email" 
                              name="email"
                              className="formcontrol section-bg-grey" id="exampleFormControlInput1"  />
                          </div>
                          
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">رقم الهاتف</label>
                              <input type="text" 
                              name="phone"
                              className="formcontrol section-bg-grey" id="exampleFormControlInput1"/>
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">الموضوع</label>
                              <input type="text"
                              name="subject"
                              className="formcontrol section-bg-grey" id="exampleFormControlInput1"  />
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">الرسالة</label>
                              <textarea 
                              name="message"
                              className="form-control-text-area section-bg-grey" id="exampleFormControlTextarea1" rows="10"></textarea>
                          </div>
                          <div className="text-center">
                          <button type="submit" className="btn btn-custom btn-lg mt-5 align-self-center">ارسال</button>

                          </div>
                      </form>
                      </div>
                  </div>
              </div>
          </div>
    </div>
  
         

    </div>
  );
};

export default Home;

