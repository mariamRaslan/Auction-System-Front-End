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
    name: 'الصفحات',
  },
  {
    component: CNavGroup,
    name: 'تقارير',
    to: '/',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'شهري',
        to: '/dashboard/reports/monthly-reports',
      },
      {
        component: CNavItem,
        name: 'سنوي',
        to: '/dashboard/reports/yearly-reports',
      },
      {
        component: CNavItem,
        name: 'تقويم',
        to: '/dashboard/Reports/Calender',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'مزادات',
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'مزادات',
        to: '/dashboard/auctions',
      },
      {
        component: CNavItem,
        name: 'اضافة مزاد',
        to: '/dashboard/auctions/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المستخدمين',
    to: '/',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المستخدمين',
        to: '/dashboard/users/list',
      },
      {
        component: CNavItem,
        name: 'اضافة مستخدم',
        to: '/dashboard/users/add-user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'منتجات',
    to: '/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'منتجات',
        to: '/dashboard/products/list',
      },
      {
        component: CNavItem,
        name: 'اضافة منتج',
        to: '/dashboard/products/add-product',
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
        name: ' تفاصيل المنتجات',
        to: '/dashboard/productsDetails/list',
      },
      {
        component: CNavItem,
        name: 'اضافة تفاصيل منتج جديد ',
        to: '/dashboard/productsDetails/add-details',

      },
    ],
  },
  {
    component: CNavGroup,
    name: 'التصنيف',
    to: '/',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'التصنيف',
        to: '/dashboard/category/list',
      },
      {
        component: CNavItem,
        name: '  اضافة تصنيف ',
        to: '/dashboard/category/add-category',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'المزايدات',
    to: '/',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'المزايدات',
        to: '/dashboard/notifications/alerts',
      },
   
    ],
  },
]

export default _nav
