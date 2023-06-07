import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

const Login = () => {

  //satus error_message
  const [error_message, seterror_message] = useState('')


  const login_in = () => {
    if (document.getElementById("name").value === "admin" && document.getElementById("password").value === "admin@123") {
      window.location.href = "#/reports/calender"
    }
    else {
      seterror_message("Invalid Username or Password")
    }
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Login</h1>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" name='name' id='name' />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        name='password'
                        id='password'
                      />
                    </CInputGroup>
                    {/**show error message */}
                    <p className="text-danger">{error_message}</p>
                    

                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary"
                          onClick={login_in}
                        className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className='d-flex'>
                        <p >User Name : </p>
                        <p class="text-primary"> admin</p>
                        <p>Password : </p>
                        <p class="text-primary"> admin@123</p>
                    
                      </CCol>

                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login