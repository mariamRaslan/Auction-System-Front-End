import React from "react";
import logo from "../../../assets/images/logo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer container-fluid w-100">
        <div className="w-100 d-flex row footer-top">
          <div className="col-lg-4 col-md-6 col-sm-12 justify-content-lg-start">
            <div className="footer-logo widget-title">
              <img src={logo} alt="logo" className="logo-img" />
              .iBid
            </div>
            <br></br>
            <div className="footer-left-text d-block">
              <p>
                لوريم إيبسوم دولور سيت أميت، كونسيكتيور أدفيبايسينغ إليت، سيد دو
                إيوسمود تيمبور إنكيديدونت أوت لابوري.
              </p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-lg-center">
            <div className="footer-item">
              <div id="nav_menu-3" className="footer-widget widget_nav_menu">
                <div className="widget-title">
                  <h5>التنقل</h5>
                </div>
                <div className="menu-navigation-container">
                  <ul id="menu-navigation" className="menu">
                    <li id="menu-item" className="menu-item">
                      <a href="#">جميع المنتجات</a>
                    </li>
                    <li id="menu-item" className="menu-item ">
                      <a href="#">كيف يعمل الموقع</a>
                    </li>
                    <li id="menu-item-" className="menu-item">
                      <a href="#">عن الشركة</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">أخبارنا</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-lg-center">
            <div className="footer-item">
              <div id="nav_menu-3" className="footer-widget widget_nav_menu">
                <div className="widget-title">
                  <h5>المساعدة والأسئلة الشائعة</h5>
                </div>
                <div className="menu-navigation-container">
                  <ul id="menu-navigation" className="menu">
                    <li id="menu-item" className="menu-item">
                      <a href="#">مركز المساعدة</a>
                    </li>
                    <li id="menu-item" className="menu-item ">
                      <a href="#">الأسئلة الشائعة للعملاء</a>
                    </li>
                    <li id="menu-item-" className="menu-item">
                      <a href="">الشروط والأحكام</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">معلومات الأمان</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">سياسة إضافة التجار</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
          {/* <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-lg-center">
            <div className="footer-item">
              <div className="widget-title">
                <h5>أحدث المقالات</h5>
              </div>
              <div
                id="block-26"
                className="footer-widget-blog widget_block widget_recent_entries"
              >
                <ul>
                  <li>
                    <img
                      width="150"
                      height="150"
                      className="post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-150x150.jpg 150w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-600x600.jpg 600w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-300x300.jpg 300w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-1024x1024.jpg 1024w"
                      sizes="(max-width: 150px) 100vw, 150px"
                      src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-150x150.jpg"
                    />
                    <div className="d-inline-block px-3">
                      <p className="post-title">عنوان المقال الأحدث</p>

                      <span className="post-date">21 يونيو، 2023</span>
                    </div>
                  </li>
                  <li>
                    <img
                      width="150"
                      height="150"
                      className="post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                      srcSet="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-150x150.jpg 150w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-600x600.jpg 600w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-300x300.jpg 300w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-1024x1024.jpg 1024w"
                      sizes="(max-width: 150px) 100vw, 150px"
                      src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-150x150.jpg"
                    />
                    <div className="d-inline-block px-3">
                      <p className="post-title">عنوان المقال الثاني</p>
                      <br />
                      <span className="post-date">20 يونيو، 2023</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div> */}
        </div>
        <hr className="m-0" />
        <div className="footer-bottom row w-100 d-flex align-items-center p-3 pb-0">
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
            <p>جميع الحقوق محفوظة © 2023 </p>
          </div>
          <div className="col-lg-6  d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
            <p className="d-sm-flex d-none">الدفع عن طريق:</p>
            <ul className="footer-logo-list">
              <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-5.svg"
                  alt="pay-icons"
                />
              </li>
              {/* <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-4.svg"
                  alt="pay-icons"
                />
              </li>
              <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-3.svg"
                  alt="pay-icons"
                />
              </li>
              <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-2.svg"
                  alt="pay-icons"
                />
              </li> */}
              <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-1.svg"
                  alt="pay-icons"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
