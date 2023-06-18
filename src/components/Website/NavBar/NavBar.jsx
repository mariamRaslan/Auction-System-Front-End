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
import "./NavBar.css";
import logo from "../../../assets/images/logo.svg";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [visible, setVisible] = useState(false);

  //logout remove token & redirct to login
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="nav mb-4">
        <CContainer fluid>
          <CNavbarBrand href="#">
            <img className="logo-img" alt="logo" src={logo} />
            iBid
          </CNavbarBrand>
          <CNavbarToggler onClick={() => setVisible(!visible)} />
          <CCollapse
            className="navbar-collapse row"
            style={{ marginRight: "30px" }}
            visible={visible}
          >
            <CNavbarNav className="col justify-content-md-right justify-content-sm-center">
              <div className="col-md-6 col-sm-12 d-flex justify-content-around">
                <CNavItem className="nav-item">
                  <CNavLink href="/home">الرئيسية</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/auctions">المزادات</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/products">المنتجات</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/bidding">المزايدات </CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="/payment">الشراء</CNavLink>
                </CNavItem>
              </div>
              <div className="col-md-6 col-sm-12 d-flex justify-content-around">
                <CForm className="d-flex col-5">
                  <CFormInput
                    type="search"
                    className="search-input mx-2"
                    placeholder="بحث"
                  />
                  <CButton type="submit" className="search-submit" color="secondary" variant="outline">
                    <p className=" d-inline">بحث</p>
                  </CButton>
                </CForm>
                <CDropdown variant="nav-item" className="col-1">
                  <CDropdownToggle>المزيد</CDropdownToggle>
                  <CDropdownMenu style={{ marginTop: "17px" }}>
                    <CDropdownItem className="drop-item ">
                      <Link
                        to="/profile"
                        className="text-dark text-decoration-none"
                      >
                        حسابي
                      </Link>
                    </CDropdownItem>
                    <CDropdownDivider />
                    <CDropdownItem
                      className="drop-item"
                      href="#"
                      onClick={logout}
                    >
                      تسجيل الخروج
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
export default NavBar;
