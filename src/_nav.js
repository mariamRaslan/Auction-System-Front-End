import React from 'react'
import CIcon from '@coreui/icons-react'
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
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'العناصر',
  },
  {
    component: CNavGroup,
    name: 'التقارير',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'شهري',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'سنوي',
        to: '/',
      },
      {
        component: CNavItem,
        name: 'تقويم',
        to: '/Reports/Calender',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المزادات',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المزادات',
        to: '/auctions',
      },
      {
        component: CNavItem,
        name: 'إضافة مزاد جديد',
        to: '/auctions/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المستخدمين',
    to: '/buttons',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المستخدمين',
        to: '/users/list',
      },
      {
        component: CNavItem,
        name: 'إضافة مستخدم جديد',
        to: '/users/add-user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المنتجات',
    to: '/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المنتجات',
        to: '/products/list',
      },
      {
        component: CNavItem,
        name: 'إضافة منتج جديد',
        to: '/products/add-product',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'تفاصيل المنتجات',
    to: '/',
    //description icon
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'تفاصيل المنتجات',
        to: '/productsdetails/list',
      },
      {
        component: CNavItem,
        name: 'إضافة تفاصيل منتج جديد',
        to: '/productsdetails/add-productdetails',

      },
    ],
  },
  {
    component: CNavGroup,
    name: 'الفئات',
    to: '/',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'الفئات',
        to: '/category/list',
      },
      {
        component: CNavItem,
        name: 'إضافة فئة جديدة',
        to: '/category/add-category',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المزايدات',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المزايدات',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'إضافة مزايدة جديدة',
        to: '/notifications/badges',
      },
    ],
  },
]

export default _nav
