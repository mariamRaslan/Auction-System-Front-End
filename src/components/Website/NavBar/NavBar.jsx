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
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  
    //logout remove token & redirct to login
    const logout = () => {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

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
            <CNavbarNav className="col justify-content-end">
              <CForm className="d-flex col-3">
                <CFormInput
                  type="search"
                  className="mx-2"
                  placeholder="بحث"
                />
                <CButton type="submit" color="secondary" variant="outline">
                  <p className="btn-text d-inline">بحث</p>
                </CButton>
              </CForm>
              <div className="col-6 d-flex justify-content-around">
                <CNavItem className="nav-item">
                  <CNavLink href="#">الرئيسية</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CNavItem className="nav-item">
                  <CNavLink href="#">Link</CNavLink>
                </CNavItem>
                <CDropdown

                variant="nav-item"
              >
                <CDropdownToggle>
                  المزيد
                </CDropdownToggle>
                <CDropdownMenu style={{ marginTop: "17px" }}>
                  <CDropdownItem className="drop-item" href="#">
                    تسجيل الدخول
                  </CDropdownItem>
                  <CDropdownItem className="drop-item" href="#">
                    تسجيل جديد
                  </CDropdownItem>
                  <CDropdownItem className="drop-item ">
                     <Link to="/profile" className="text-dark text-decoration-none" >حسابي</Link>
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem className="drop-item" href="#" onClick={logout}>
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
