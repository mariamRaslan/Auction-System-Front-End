import React, { useState, useEffect } from "react";
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
import { cilAccountLogout, cilLockLocked, cilHome } from "@coreui/icons";
import "./NavBar.css";
import logo from "../../../assets/images/logo2.png";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "../../../Axios";
//import navigate
import { useNavigate } from "react-router-dom";


const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [user, setUserImage] = useState({ image: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decoded = jwt_decode(token);
      const id = decoded.id;
      setRole(decoded.role);

      axios.get(`/users/${id}`).then((res) => {
        setUserImage({ image: res.data.data.image });
      });

      setLoggedIn(true);
    } else {
      setLoggedIn(false);
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };


  const search = (e) => {
    //prevent defualt 
    e.preventDefault()
    //get search value
    const searchValue = e.target[0].value
    // search value is required
    if (searchValue === "") {
      return
    }
    
    navigate(`/search/${searchValue}`)
  }

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
                  <Link to="/home" style={{ textDecoration: "none" }}>الرئيسية</Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/auctions" style={{ textDecoration: "none" }}>المزادات</Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/bidding" style={{ textDecoration: "none" }}>المزايدات </Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/live-stream/show" style={{ textDecoration: "none" }}>البث المباشر</Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/payment" style={{ textDecoration: "none" }}>المشتريات</Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/about" style={{ textDecoration: "none" }}>عن الموقع</Link>
                </CNavItem>
                <CNavItem className="nav-item">
                  <Link to="/contact" style={{ textDecoration: "none" }}>تواصل معنا</Link>
                </CNavItem>
              </div>
              <div className="col-md-5 col-sm-12 d-flex justify-content-end pe-5">
                <form 
                onSubmit={search}
                className="d-flex col-5">
                  <input
                    type="text"
                    className="search-input mx-2"
                    placeholder="البحث عن مزادات"
                    name="search"
                    required="true"
                  />
                  <button
                    type="submit"
                    className="search-submit"
                    color="secondary"
                    variant="outline"
                  >
                    <p className=" d-inline">بحث</p>
                  </button>
                </form>
                <div className="col-1 d-flex justify-content-between ms-3 ">
                  {loggedIn && (
                    <>
                      {user.image && role === "user" && (
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
                          <CNavLink href="/dashboard" title="لوحه التحكم">
                            <CIcon
                              className="dashboard-icon"
                              icon={cilHome}
                              size="lg"
                            />
                          </CNavLink>
                        </CNavItem>
                      )}
                    </>
                  )}
                  {!loggedIn && (
                    <CNavItem className="user-item ms-2">
                      <CNavLink href="/login" title="تسجيل الدخول">
                        <CIcon icon={cilLockLocked} size="lg" />
                      </CNavLink>
                    </CNavItem>
                  )}
                  {loggedIn && (
                    <CNavItem className="user-item ms-2">
                      <CNavLink onClick={logout} href="#" title="تسجيل الخروج">
                        <CIcon icon={cilAccountLogout} size="lg" />
                      </CNavLink>
                    </CNavItem>
                  )}
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
