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
import logo from "../../assets/images/logo.svg";
const NavBar = () => {
  const [visible, setVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  function handleHover() {
    setIsDropdownOpen(true);
  }

  function handleMouseLeave() {
    setIsDropdownOpen(false);
  }

  return (
    <>
      <CNavbar expand="lg" colorScheme="light" className="nav">
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
                  className="me-2"
                  placeholder="Search"
                />
                <CButton type="submit" color="secondary" variant="outline">
                  <p className="btn-text d-inline">Search</p>
                </CButton>
              </CForm>
              <div className="col-4 d-flex justify-content-around">
                <CNavItem className="nav-item">
                  <CNavLink href="#">Home</CNavLink>
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
              </div>

              <CDropdown
                className="col-2"
                variant="nav-item"
                onMouseEnter={() => handleHover}
                onMouseLeave={() => handleMouseLeave}
              >
                <CDropdownToggle color="secondary">Account</CDropdownToggle>
                <CDropdownMenu style={{ width: "100%", marginTop: "17px" }}>
                  <CDropdownItem className="drop-item" href="#">
                    Login
                  </CDropdownItem>
                  <CDropdownItem className="drop-item" href="#">
                    Register
                  </CDropdownItem>
                  <CDropdownItem className="drop-item" href="#">
                    Profile
                  </CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem className="drop-item" href="#">
                    Logout
                  </CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CContainer>
      </CNavbar>
    </>
  );
};
export default NavBar;
