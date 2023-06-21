import React, { useState, useEffect } from "react";

const About = () => {
  return (
    <>
      <div
        className="text-center bg-image"
        style={{
          backgroundImage:
            "url(https://mdbcdn.b-cdn.net/img/new/slides/041.webp)",
          width: "100%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100 mb-5">
          <div className="text-white">
            <h1 className="mb-3"> معلومات عنا </h1>
          </div>
        </div>
      </div>
        <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          {/* Service 1 */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">الرؤية</h5>  
              <p className="card-text">
                تقديم خدمات متميزة للمستخدمين والمؤسسات والشركات والمطاعم والمحلات التجارية والمنظمات الحكومية والخاصة والمتعاملين معها وتوفير الوقت والجهد والتكلفة والمال والمساعدة في تحقيق الأهداف المرجوة من خلال تقديم خدمات متميزة ومتكاملة ومتنوعة ومتوافقة مع الأنظمة واللوائح والتشريعات السارية والمعمول بها في المملكة الأردنية الهاشمية.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Service 2 */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">المصداقية</h5>
              <p className="card-text">
              تقديم خدمات متميزة للمستخدمين والمؤسسات والشركات والمطاعم والمحلات التجارية والمنظمات الحكومية والخاصة والمتعاملين معها وتوفير الوقت والجهد والتكلفة والمال والمساعدة في تحقيق الأهداف المرجوة من خلال تقديم خدمات متميزة ومتكاملة ومتنوعة ومتوافقة مع الأنظمة واللوائح والتشريعات السارية والمعمول بها في المملكة الأردنية الهاشمية.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          {/* Service 3 */}
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center">الرسالة</h5>
              <p className="card-text">
              تقديم خدمات متميزة للمستخدمين والمؤسسات والشركات والمطاعم والمحلات التجارية والمنظمات الحكومية والخاصة والمتعاملين معها وتوفير الوقت والجهد والتكلفة والمال والمساعدة في تحقيق الأهداف المرجوة من خلال تقديم خدمات متميزة ومتكاملة ومتنوعة ومتوافقة مع الأنظمة واللوائح والتشريعات السارية والمعمول بها في المملكة الأردنية الهاشمية.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-6">
          {/* image */}
          <img
            src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%28131%29.jpg"
            className="img-fluid"
            alt=""
          />
          </div>

          <div className="col-6 d-flex text-center align-items-center">
          <div>
          <h1>من نحن</h1>
          <p>
          تقديم خدمات متميزة للمستخدمين والمؤسسات والشركات والمطاعم والمحلات التجارية والمنظمات الحكومية والخاصة والمتعاملين معها وتوفير الوقت والجهد والتكلفة والمال والمساعدة في تحقيق الأهداف المرجوة من خلال تقديم خدمات متميزة ومتكاملة ومتنوعة ومتوافقة مع الأنظمة واللوائح والتشريعات السارية والمعمول بها في المملكة الأردنية الهاشمية.
          </p>
          </div>
          </div>
        </div>
    </div>


    
    </>
  );
};

export default About;
