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
    to: '/',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Auctions Items',
        to: '/auctions/items',
      },
      {
        component: CNavItem,
        name: 'Add New Auction',
        to: '/auctions/add-auction',
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
        to: '/users/list',
      },
      {
        component: CNavItem,
        name: 'Add New User',
        to: '/users/add-user',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Products',
    to: '/',
    icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Products',
        to: '/products/list',
      },
      {
        component: CNavItem,
        name: 'Add New Product',
        to: '/products/add-product',
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
        to: '/category/list',
      },
      {
        component: CNavItem,
        name: 'Add New Category',
        to: '/category/add-category',
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
