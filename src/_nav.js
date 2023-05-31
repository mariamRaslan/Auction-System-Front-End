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
    component: CNavGroup,
    name: 'Reports',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Monthly',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Yearly',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Calender',
        to: '/dashboard',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Auctions',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'auctions',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Add New Auction',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Users',
    to: '/buttons',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Users',
        to: '/base/tables',
      },
      {
        component: CNavItem,
        name: 'Add New User',
        to: '/forms/form-control',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/charts',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/charts',
      },
      {
        component: CNavItem,
        name: 'Add New Product',
        to: '/charts',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Categories',
    to: '/icons',
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Categories',
        to: '/icons/coreui-icons',
      },
      {
        component: CNavItem,
        name: 'Add New Category',
        to: '/icons/flags',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Bids',
    to: '/notifications',
    icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Bids',
        to: '/notifications/alerts',
      },
      {
        component: CNavItem,
        name: 'Add New Bid',
        to: '/notifications/badges',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Pages',
    to: '/pages',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
