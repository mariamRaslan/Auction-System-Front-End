import React from "react";
import logo from "../../../assets/images/logo.svg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer container-fluid w-100">
        <div className="footer-top row w-100">
          <div className="col-lg-3 col-md-6 justify-content-lg-start">
            <div className="footer-logo widget-title">
              <img src={logo} alt="logo" className="logo-img" />
              iBid
            </div>
            <br></br>
            <div className="footer-left-text d-block">
              <p>
                Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
            <div className="footer-item">
              <div id="nav_menu-3" className="footer-widget widget_nav_menu">
                <div className="widget-title">
                  <h5>Navigation</h5>
                </div>
                <div className="menu-navigation-container">
                  <ul id="menu-navigation" className="menu">
                    <li id="menu-item" className="menu-item">
                      <a href="#">All Products</a>
                    </li>
                    <li id="menu-item" className="menu-item ">
                      <a href="#">How It Works</a>
                    </li>
                    <li id="menu-item-" className="menu-item">
                      <a href="#">About Company</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">Our News Feed</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-lg-center">
            <div className="footer-item">
              <div id="nav_menu-3" className="footer-widget widget_nav_menu">
                <div className="widget-title">
                  <h5>Help & FAQs</h5>
                </div>
                <div className="menu-navigation-container">
                  <ul id="menu-navigation" className="menu">
                    <li id="menu-item" className="menu-item">
                      <a href="#">Help Center</a>
                    </li>
                    <li id="menu-item" className="menu-item ">
                      <a href="#">Customer FAQs</a>
                    </li>
                    <li id="menu-item-" className="menu-item">
                      <a href="">Terms and Conditions</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">Security Information</a>
                    </li>
                    <li id="menu-item" className="menu-item">
                      <a href="#">Merchant Add Policy</a>
                    </li>
                  </ul>
                </div>
              </div>{" "}
            </div>
          </div>
          <div className="col-lg-3 col-md-6 d-flex justify-content-lg-end">
            <div className="footer-item">
              <div className="widget-title">
                <h5>Latest Feed</h5>
              </div>
              <div
                id="block-26"
                className="footer-widget-blog widget_block widget_recent_entries"
              >
                <ul>
                  <li>
                    <div className="alignleft">
                      <img
                        width="150"
                        height="150"
                        className="post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-150x150.jpg 150w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-600x600.jpg 600w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-22-1-100x100.jpg 100w"
                        // sizes="(max-width: 150px) 100vw, 150px"
                      />
                    </div>
                    <p className="mb-0">
                      10 Productivity Strategies Backed By Science .
                    </p>
                    <time
                      dateTime="2022-10-29T05:43:06+00:00"
                      className="post-date"
                    >
                      October 29, 2022
                    </time>
                    <div className="clearfix"></div>
                  </li>
                  <li>
                    <div className="alignleft">
                      <img
                        width="150"
                        height="150"
                        className="post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/09/aaron-burden-AXqMy8MSSdk-unsplash-1-150x150.jpg 150w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/09/aaron-burden-AXqMy8MSSdk-unsplash-1-600x600.jpg 600w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/09/aaron-burden-AXqMy8MSSdk-unsplash-1-100x100.jpg 100w"
                      />
                    </div>
                    <p className="mb-0">
                      A brand for a company is like for a person.
                    </p>
                    <time
                      dateTime="2022-09-21T05:22:59+00:00"
                      className="post-date"
                    >
                      November 11, 2023
                    </time>
                    <div className="clearfix"></div>
                  </li>
                  <li>
                    <div className="alignleft">
                      <img
                        width="150"
                        height="150"
                        className="post-image"
                        alt=""
                        decoding="async"
                        loading="lazy"
                        srcSet="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/scott-webb-GQD3Av_9A88-unsplash-1-150x150.jpg 150w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/scott-webb-GQD3Av_9A88-unsplash-1-600x600.jpg 600w, https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/scott-webb-GQD3Av_9A88-unsplash-1-100x100.jpg 100w"
                      />
                    </div>
                    <p className="mb-0">
                      An Introvert’s Guide to Be Successful at Work
                    </p>
                    <time
                      dateTime="2022-11-03T04:40:57+00:00"
                      className="post-date"
                    >
                      November 5, 2023
                    </time>
                    <div className="clearfix"></div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom row w-100 d-flex align-items-center p-3 pb-0">
          <div className="col-lg-6 d-flex justify-content-center justify-content-lg-start">
            <p>
              Copyright 2022 iBid | Design By
              {"ITI-OS-MANS-43"} | All Rights Reserved.
            </p>
          </div>
          <div className="col-lg-6  d-flex justify-content-lg-end justify-content-md-end justify-content-center align-items-center flex-sm-nowrap flex-wrap">
            <p className="d-sm-flex d-none">We Accepts:</p>
            <ul className="footer-logo-list">
              <li>
                <img
                  src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/11/payment-5.svg"
                  alt="pay-icons"
                />
              </li>
              <li>
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
              </li>
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
