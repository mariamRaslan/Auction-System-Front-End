import React, { useState, useEffect } from "react";
import backgroundImage from "../../../assets/images/ground.png";
import aboutUsImage from "../../../assets/images/aboutUs.jpg";
import "./About.css";

const About = () => {
  return (
    <>
      <div
        className="text-center bg-image"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          width: "100%",
          height: "50vh",
          backgroundSize: "cover",
        }}
      >
        <div className="d-flex justify-content-center align-items-center h-100 mb-5">
          <div className="text-white">
            <h1 className="mb-3 head-title"> معلومات عنا </h1>
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
                  نحن نهدف في موقع المزادات إلى توفير تجربة شراء مريحة وممتعة
                  لجميع المستخدمين، من خلال توفير مجموعة واسعة من المنتجات
                  المتنوعة التي تلبي احتياجات جميع الفئات العمرية والاجتماعية،
                  وتوفير نظام موثوق وآمن للدفع والشحن والتوصيل، وتحديث الموقع
                  بشكل مستمر لتلبية المتطلبات المتغيرة للمستخدمين.{" "}
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
                  نحن في موقع المزادات نحرص على توفير منصة موثوقة وآمنة لجميع
                  المستخدمين، حيث نتأكد من جودة المنتجات وصحة المعلومات الواردة
                  عنها، ونوفر خدمة عملاء متميزة وسريعة الاستجابة لتلبية احتياجات
                  المستخدمين، ونحرص على الالتزام بالمعايير الأخلاقية والقوانين
                  المحلية والدولية.
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
                  في موقع المزادات، نسعى دائمًا لتوفير منصة موثوقة وآمنة للشراء
                  والبيع، وتوفير مجموعة كبيرة من المنتجات والسلع المتنوعة،
                  وتقديم خدمة عملاء مميزة وسريعة الاستجابة. نحن نؤمن بأن
                  المصداقية والشفافية هما الأساس في علاقتنا مع المستخدمين، ونسعى
                  دائمًا لتقديم أفضل الخدمات والمنتجات لتحقيق رضاهم وتوفير تجربة
                  شراء مميزة.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-6 d-flex justify-content-center align-items-center">
            {/* image */}
            <img src={aboutUsImage} className="img-fluid" alt="" />
          </div>

          <div className="col-6 d-flex text-center align-items-center">
            <div>
              <h1 style={{ color: "#265270" }}>من نحن</h1>
              <p>
                نحن في موقع المزادات نؤمن بأن التجارة الإلكترونية والمزادات
                العلنية هي أحد أفضل الطرق للتعامل التجاري في العصر الحديث. لذلك،
                قررنا تأسيس هذا الموقع لتوفير منصة موثوقة وآمنة للتجارة
                الإلكترونية والمزادات العلنية. تهدف منصتنا إلى توفير فرصة
                للمستخدمين لشراء وبيع السلع والمنتجات بأسعار مناسبة ومنافسة، مع
                ضمان جودة المنتجات وصحة المعلومات المتعلقة بها. كما نسعى لتوفير
                تجربة شراء مريحة وآمنة للمستخدمين، من خلال توفير نظام دفع وشحن
                وتوصيل موثوق وسريع. نحن نضع في اعتبارنا دائمًا مصلحة المستخدمين،
                ونسعى لتحقيق رضاهم من خلال توفير خدمة عملاء مميزة وسريعة
                الاستجابة، والالتزام بالمعايير الأخلاقية والقوانين المحلية
                والدولية. كما نحرص على تحديث الموقع بشكل مستمر لتلبية المتطلبات
                المتغيرة للمستخدمين، وتقديم خدمات متميزة تلبي احتياجاتهم وتفوق
                توقعاتهم.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
