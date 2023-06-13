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
        to: '/dashboard/',
      },
      {
        component: CNavItem,
        name: 'سنوي',
        to: '/dashboard/dashboard/reports/yearly-reports',
      },
      {
        component: CNavItem,
        name: 'تقويم',
        to: '/dashboard/dashboard/Reports/Calender',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المزادات',
    to: '/dashboard/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المزادات',
        to: '/dashboard/dashboard/auctions',
      },
      {
        component: CNavItem,
        name: 'إضافة مزاد جديد',
        to: '/dashboard/dashboard/auctions/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المستخدمين',
    to: '/dashboard/buttons',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المستخدمين',
        to: '/dashboard/dashboard/users/list',
      },
      {
        component: CNavItem,
        name: 'إضافة مستخدم جديد',
        to: '/dashboard/dashboard/users/add-user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المنتجات',
    to: '/dashboard/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المنتجات',
        to: '/dashboard/dashboard/products/list',
      },
      {
        component: CNavItem,
        name: 'إضافة منتج جديد',
        to: '/dashboard/dashboard/products/add-product',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'تفاصيل المنتجات',
    to: '/dashboard/',
    //description icon
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'تفاصيل المنتجات',
        to: '/dashboard/dashboard/productsDetails/list',
      },
      {
        component: CNavItem,
        name: 'إضافة تفاصيل منتج جديد',
        to: '/dashboard/dashboard/productsDetails/add-details',

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
        to: '/dashboard/dashboard/category/list',
      },
      {
        component: CNavItem,
        name: 'إضافة فئة جديدة',
        to: '/dashboard/dashboard/category/add-category',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المزايدات',
    to: 'dashboard/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المزايدات',
        to: '/dashboard/dashboard/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'إضافة مزايدة جديدة',
        to: '/dashboard/dashboard/notifications/badges',
      },
    ],
  },
]

export default _nav
