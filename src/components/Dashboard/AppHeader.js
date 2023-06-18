import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilAccountLogout, cilEnvelopeOpen, cilMenu,cilHome  } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)

  //logout remove token & redirct to login
   const logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  }
  //view website
  const viewWebsite = () => {
    window.location.href = '/home';
  }



  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          
          <CNavItem>
            <CNavLink href="#"></CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#"></CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            <CNavLink
            onClick={logout}
            href="#">
              {/**logout icon  */}              
              <CIcon icon={cilAccountLogout}  
              size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink
            onClick={viewWebsite}
            href="#">
              {/**hoem icon  */}
              <CIcon icon={cilHome} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
     
    </CHeader>
  )
}

export default AppHeader
