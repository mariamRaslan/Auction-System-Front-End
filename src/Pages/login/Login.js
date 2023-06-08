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

  //set error_message
  const [error_message, setError_message] = useState('')

  //login function to redirect to dashboard
  const log_in = () => {
    const username = document.getElementById('username').value
    const password = document.getElementById('password').value
    if (username === 'admin' && password === 'admin@123') {
      //redirect to dashboard
      window.location.href = '#/reports/yearly-reports'
    } else {
      //set error message
      setError_message('Invalid username or password')
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
                      <CFormInput placeholder="Username" 
                      id="username"
                      autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CCol xs={6} className="">
                        <p className="text-danger">{error_message}</p>
                      </CCol>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" 
                        onClick={log_in}
                        className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      

                      {/**show username , password */}
                      <CCol xs={6} className="text-end">
                        <p className="lead">username: admin</p>
                        <p className="lead">password: admin@123</p>
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
