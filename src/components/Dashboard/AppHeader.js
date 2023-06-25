import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
  CAvatar,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilAccountLogout,
  cilEnvelopeOpen,
  cilMenu,
  cilHome,
} from "@coreui/icons";

import { AppBreadcrumb } from "./index";
import { AppHeaderDropdown } from "./header/index";
import { logo } from "src/assets/brand/logo";
import axios from "../../Axios";
import jwt_decode from "jwt-decode";

const AppHeader = () => {
  const dispatch = useDispatch();
  const sidebarShow = useSelector((state) => state.sidebarShow);

  //logout remove token & redirct to login
  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };
  //view website
  const viewWebsite = () => {
    window.location.href = "/home";
  };

  //get admin image
  const [admin, setAdminImage] = useState({
    image: "",
  });

  //get token
  const token = localStorage.getItem("token");

  //decode token
  const decoded = jwt_decode(token);

  // get id from token
  const id = decoded.id;

  //call api /users/:id
  axios.get(`/users/${id}`).then((res) => {
    setAdminImage({
      image: res.data.data.image,
    });
  });

  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler>
          <CNavLink href="/profile">
            {" "}
            <img
              style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              src={admin.image}
              size="md"
            />{" "}
          </CNavLink>
          {/* <CAvatar src={admin.image} size="md" /> */}
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        {/* <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/Reports/Calender">
              تقويم
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/auctions">مزادات</CNavLink>
          </CNavItem>{" "}
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/users/list">مستخدمين</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/products/list">
              منتجات
            </CNavLink>
          </CNavItem>{" "}
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/live-stream/list">
              {" "}
              بث مباشر
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/category/list">
              {" "}
              الفئات
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/productsDetails/list">
              منتجات مزادات
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="/dashboard/dashboard/winners">الفائزين</CNavLink>
          </CNavItem>
        </CHeaderNav> */}
        <CHeaderNav>
          <CNavItem>
            <CNavLink onClick={viewWebsite} href="#">
              {/**hoem icon  */}
              <CIcon icon={cilHome} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink onClick={logout} href="#">
              {/**logout icon  */}
              <CIcon icon={cilAccountLogout} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
    </CHeader>
  );
};

export default AppHeader;
