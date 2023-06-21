import React from "react";
//import card
import Card from "../../../SharedUi/Card/card";
//import blobbutton
import BlobButton from "../../../SharedUi/BlobButton/BlobButton";

//import axios
import Axios from "./../../../Axios";
//usesate
import { useState,useEffect } from "react";
//card

//use home.css
import "./Home.css";

const Home = () => {


  //get new arival
  const [newArrival, setNewArrival] = useState([]);
  const [newArrivalitems, setnewArrivalitems] = useState([]);

  useEffect(() => {
    Axios.get("/newArrivalAuction")
      .then((res) => {
        setNewArrival(res.data.data);
        //log   
        console.log(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //get new arival items
  useEffect(() => {
    Axios.get("/newArrivalItem")
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

    <>

      <div className="text-center bg-image" style={{backgroundColor:'#5492bb96', width: '100%' , height: '80vh', backgroundSize: 'cover'}}>
        <div className="h-100">
          <div className="row d-flex   justify-content-center align-items-center">
            <div className="col-sm-12 col-md-7  d-flex  justify-content-center align-items-center ">
             <div className="text-white ">
              <h1 className="mb-3">اهلا بيك في موقعنا </h1>
              <h4 className="mb-3">زايد واربح افضل المنتجات التي تحلم بها </h4>
                {/* button */}
                <BlobButton buttonText=" تعرف اكثر عن خدماتنا" href="/about" />
             </div>
            </div>
            <div className="col-5 mt-5 text-center">
              <img src="./home-img.png" className="home-bg" alt="" />
            </div>
          </div>
         
        </div>
      </div>





      {/* how it work section  */}
      <div className="section-bg-white" >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center mt-4">
                <h1 className="text-center"> خطوات الشراء</h1> 
              </div>
            </div>
          </div>
          <div className="lg-hr"></div>
          <div className="row">
          
                <div className="col-3 text-center">
                  <div className="circle" >
                    <h1>01</h1>
                  </div>
                  <h1>اشترك</h1>
                  <div className="sm-hr"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestias doloribus voluptates ea, perspiciatis quia ullam quam atque iste reiciendis corporis distinctio, assumenda eum illo! Provident a id reiciendis facilis?
                    </p>
                </div>
               
                <div className="col-3 text-center">
                  <div className="circle" >
                    <h1>02</h1>
                  </div>

                  <h1>انضم</h1>
                  <div className="sm-hr"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestias doloribus voluptates ea, perspiciatis quia ullam quam atque iste reiciendis corporis distinctio, assumenda eum illo! Provident a id reiciendis facilis?
                    </p>
                </div>
                <div className="col-3 text-center">
                  <div className="circle" >
                    <h1>03</h1>
                  </div>

                  <h1>زايد</h1>
                  <div className="sm-hr"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestias doloribus voluptates ea, perspiciatis quia ullam quam atque iste reiciendis corporis distinctio, assumenda eum illo! Provident a id reiciendis facilis?
                    </p>
                </div>
                <div className="col-3 text-center">
                  <div className="circle" >
                    <h1>04</h1>
                  </div>

                  <h1>اكسب</h1>
                  <div className="sm-hr"></div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. A molestias doloribus voluptates ea, perspiciatis quia ullam quam atque iste reiciendis corporis distinctio, assumenda eum illo! Provident a id reiciendis facilis?
                    </p>
                </div>
              </div>
   
        </div>
        
      </div>








     

      {/** product section header  */}
  <div className="section-bg-grey">
        <div className="container" >
          <div className="row mb-5">
            <div className="col-md-12">
              <div className="d-flex justify-content-center align-items-center mt-4 mb-5">
                <h3 className="section-title"> احدث المذادات</h3>
              </div>
            <div className="lg-hr"></div>

            </div>
          </div> 
        </div>

    <div className="container">

      <div className="row mb-5">
      {newArrival.length > 0 ? (
            newArrival.map((product) => (
                <div key={product.id} className="col-md-4">
                  <Card
                    title={product.name}
                    startdate={product.startdate}
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
    <div className="container" >
        <div className="row mt-5">
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4 mb-5">
              <h3 className="section-title "> احدث المنتجات</h3>
              {/* hr */}
              
            </div>
            <div className="lg-hr"></div>

          </div>
        </div> 
      </div>

    <div className="container mt-5 mb-5">

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
    </div>  

          
    

    {/** about us   */}
    <div className="section-bg-grey">
      
    <div className="container" >
        <div className="row"> 
          <div className="col-md-12">
            <div className="d-flex justify-content-center align-items-center mt-4">
              <h3 className="section-title"> عن الموقع  </h3>
            </div>
          </div>
        </div>
    </div>
    
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <div className="">
            <div className="image">
              <img
                src="./aboutus.png"
                className=""
                alt="product"
                width={'100%'}
                
              />
            </div>
            
          </div>
        </div>
        <div className="col-md-6 text-center d-flex align-items-center">
          
          <p className="text-justify align-items-center lead">
            {/* about Auction system description by arabic */}
             نقوم ببيع السلع والخدمات القيمة لأعلى سعر معين، ويتم ذلك عن طريق المزايدة، وهي عملية تتم من خلال المزايدين الذين يقدمون عروضهم للحصول على السلعة أو الخدمة المطلوبة، ويتم البيع لأعلى سعر معين، ويتم ذلك عن طريق المزايدة، وهي عملية تتم من خلال المزايدين الذين يقدمون عروضهم للحصول على السلعة أو الخدمة المطلوبة، ويتم البيع لأعلى سعر معين، ويتم ذلك عن طريق المزايدة، وهي عملية تتم من خلال المزايدين الذين يقدمون عروضهم للحصول على السلعة أو الخدمة المطلوبة، ويتم البيع لأعلى سعر معين، ويتم ذلك عن طريق المزايدة، وهي عملية تتم من خلال المزايدين الذين يقدمون عروضهم للحصول على السلعة أو الخدمة المطلوبة، ويتم البيع لأعلى سعر معين، ويتم ذلك عن طريق المزايدة، وهي عملية تتم من خلال المزايدين 

          </p>
        </div>
      </div>
    </div>
  </div>
    <div className="mt-5">
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
    {/* hr */}
      
    {/** services section  */}
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="">
            <div className="image">
              <img
                src="./products.png"
                className="service-img  thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body">
              <h5 className="card-title text-center">افضل المنتجات</h5>
              <p className="text-center text-center ">
                  نوفر لك افضل المنتجات حول العالم 
               </p>
            </div>

          </div>
        </div>
        <div className="col-md-4">
          <div className="">
            <div className="image">
              <img
                src="./payment.png"
                className="service-img  thumbnail-image"
                alt="product"
                width={'100%'}
                />
            </div>
            <div className="card-body">
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
            <div className="card-body">
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
    <div className="section-bg-grey">
          <div className="container" >
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
        <div className="container">
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
                      <div className="form-shadow">
                      <form
                          

                          
                          onSubmit={handleSubmit}
                      >
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">الاسم</label>
                              <input type="text" 
                              name="name"
                              className="form-control" id="exampleFormControlInput1" placeholder="الاسم" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">البريد الالكتروني</label>
                              <input type="email" 
                              name="email"
                              className="form-control" id="exampleFormControlInput1" placeholder="البريد الالكتروني" />
                          </div>
                          
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">رقم الهاتف</label>
                              <input type="text" 
                              name="phone"
                              className="form-control" id="exampleFormControlInput1" placeholder="رقم الهاتف" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlInput1">الموضوع</label>
                              <input type="text"
                              name="subject"
                              className="form-control" id="exampleFormControlInput1" placeholder="الموضوع" />
                          </div>
                          <div className="form-group">
                              <label htmlFor="exampleFormControlTextarea1">الرسالة</label>
                              <textarea 
                              name="message"
                              className="form-control-text-area" id="exampleFormControlTextarea1" rows="10"></textarea>
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
  
         

    </>
  );
};

export default Home;

