import React, { useState } from "react";
import {
  CButton,
  CCollapse,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CForm,
  CNavbar,
  CNavbarBrand,
  CNavbarNav,
  CNavLink,
  CContainer,
  CNavItem,
  CNavbarToggler,
  CFormInput,
  CDropdownDivider,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilAccountLogout, cilHome } from "@coreui/icons";
import "./NavBar.css";
import logo from "../../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "../../../Axios";
const NavBar = () => {
  const [visible, setVisible] = useState(false);

  //logout remove token & redirct to login
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  //get user image
  const [user, setUserImage] = useState({
    image: "",
  });

  //get token
  const token = localStorage.getItem("token");

  //decode token
  const decoded = jwt_decode(token);

  // get id from token
  const id = decoded.id;
  // get role from token
  const role = decoded.role;
  //call api /users/:id
  axios.get(`/users/${id}`).then((res) => {
    setUserImage({
      image: res.data.data.image,
    });
  });
  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="nav mb-0">
        <CContainer fluid>
          <CNavbarBrand href="#" className="text-light">
            <img className="logo-img" alt="logo" src={logo} />
            iBid
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse
            className="navbar-collapse row justify-content-center d-flex align-items-center"
            style={{ marginRight: "30px" }}
            visible={visible}
          >
            <CNavbarNav className="col justify-content-lg-right justify-content-sm-center">
              <div className="col-md-7 col-sm-12 d-flex justify-content-around">
                <CNavItem className="nav-item">
                  <CNavLink href="/home">الرئيسية</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/auctions">المزادات</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/bidding">المزايدات </CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/payment">المشتريات</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/about">عن الموقع</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/contact">تواصل معنا</CNavLink>
                </CNavItem>
              </div>
              <div className="col-md-5 col-sm-12 d-flex justify-content-center">
                <CForm className="d-flex col-5">
                  <CFormInput
                    type="search"
                    className="search-input mx-2"
                    placeholder="البحث عن المنتجات"
                  />
                  <CButton
                    type="submit"
                    className="search-submit"
                    color="secondary"
                    variant="outline"
                  >
                    <p className=" d-inline">بحث</p>
                  </CButton>
                </CForm>
                <div className="col-1 d-flex justify-content-between ms-3">
                  {role === "user" && (
                    <CNavItem className="user-item">
                      <CNavLink href="/profile" title="حسابي">
                        <img
                          className="user-img"
                          alt="صوره المستخدم"
                          src={user.image}
                        />
                      </CNavLink>
                    </CNavItem>
                  )}
                  {role === "admin" && (
                    <CNavItem className="user-item ms-2">
                      <CNavLink
                        // className="ml-2"
                        href="/dashboard"
                        title="لوحه التحكم"
                      >
                        <CIcon
                          className="dashboard-icon"
                          icon={cilHome}
                          size="lg"
                        />
                      </CNavLink>
                    </CNavItem>
                  )}
                  <CNavItem className="user-item ms-2">
                    <CNavLink onClick={logout} href="#" title="تسجيل الخروج">
                      {/**logout icon  */}
                      <CIcon icon={cilAccountLogout} size="lg" />
                    </CNavLink>
                  </CNavItem>
                </div>
              </div>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
export default NavBar;
