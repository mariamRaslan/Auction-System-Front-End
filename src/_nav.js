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
    name: 'Components',
  },
  {
    component: CNavGroup,
    name: 'Reports',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Monthly',
        to: '/dashboard/',
      },
      {
        component: CNavItem,
        name: 'Yearly',
        to: '/dashboard/dashboard/reports/yearly-reports',
      },
      {
        component: CNavItem,
        name: 'Calender',
        to: '/dashboard/dashboard/Reports/Calender',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Auctions',
    to: '/dashboard/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Auctions',
        to: '/dashboard/dashboard/auctions',
      },
      {
        component: CNavItem,
        name: 'Add Auction',
        to: '/dashboard/dashboard/auctions/add',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/dashboard/buttons',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/dashboard/dashboard/users/list',
      },
      {
        component: CNavItem,
        name: 'Add User',
        to: '/dashboard/dashboard/users/add-user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/dashboard/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/dashboard/dashboard/products/list',
      },
      {
        component: CNavItem,
        name: 'Add Product',
        to: '/dashboard/dashboard/products/add-product',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products Details',
    to: '/dashboard/',
    //description icon
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: ' Products Details',
        to: '/dashboard/dashboard/productsDetails/list',
      },
      {
        component: CNavItem,
        name: 'Add Product Detail ',
        to: '/dashboard/dashboard/productsDetails/add-details',

      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/dashboard/dashboard/category/list',
      },
      {
        component: CNavItem,
        name: ' Add Category ',
        to: '/dashboard/dashboard/category/add-category',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Bids',
    to: 'dashboard/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bids',
        to: '/dashboard/dashboard/notifications/alerts',
      },
   
    ],
  },
]

export default _nav
