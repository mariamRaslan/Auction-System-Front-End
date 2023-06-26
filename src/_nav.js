import React from "react";
import CIcon from "@coreui/icons-react";
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilUser,
  cilUserPlus,
  cilMediaPlay,
} from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavTitle,
    name: "الصفحات",
  },
  {
    component: CNavItem,
    name: "تقويم",
    to: "/dashboard/dashboard/Reports/Calender",
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  },
  // {
  //   component: CNavGroup,
  //   name: "تقارير",
  //   to: "/",
  //   icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: "شهري",
  //       to: "/dashboard/dashboard/reports/monthly-reports",
  //     },
  //     {
  //       component: CNavItem,
  //       name: "سنوي",
  //       to: "/dashboard/dashboard/reports/yearly-reports",
  //     },
  //   ],
  // },
  {
    component: CNavGroup,
    name: "مزادات",
    to: "/",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "مزادات",
        to: "/dashboard/dashboard/auctions",
      },
      {
        component: CNavItem,
        name: "اضافة مزاد",
        to: "/dashboard/dashboard/auctions/add",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "العملاء",
    to: "/",
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "العملاء",
        to: "/dashboard/dashboard/users/list",
      },
      {
        component: CNavItem,
        name: "اضافة عميل",
        to: "/dashboard/dashboard/users/add-user",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "منتجات",
    to: "/",
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "منتجات",
        to: "/dashboard/dashboard/products/list",
      },
      {
        component: CNavItem,
        name: "اضافة منتج",
        to: "/dashboard/dashboard/products/add-product",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "منتجات المزادات",
    to: "/",
    //description icon
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "منتجات المزادات",
        to: "/dashboard/dashboard/productsDetails/list",
      },
      {
        component: CNavItem,
        name: " اضافة منتج لمزاد",
        to: "/dashboard/dashboard/productsDetails/add-details",
      },
    ],
  },
  {
    component: CNavGroup,
    name: "الفئات",
    to: "/",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: "الفئات",
        to: "/dashboard/dashboard/category/list",
      },
      {
        component: CNavItem,
        name: "  اضافة فئة ",
        to: "/dashboard/dashboard/category/add-category",
      },
    ],
  },
  {
    component: CNavItem,
    name: "الفائزين",
    to: "/dashboard/dashboard/winners",
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  },

  {
    component: CNavGroup,
    name: " بث مباشر",
    to: "/",
    icon: <CIcon icon={cilMediaPlay} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: " بث مباشر",
        to: "/dashboard/dashboard/live-stream/list",
      },
      {
        component: CNavItem,
        name: "إنشاء بث مباشر",
        to: "/dashboard/dashboard/live-stream/create",
      },
    ],
  },
];

export default _nav;
