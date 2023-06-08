import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
//import axios
import axios from '../../Axios'
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
    //get email and password from inputs
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    //check if email and password are empty
    if (email === '' || password === '') {
      setError_message('Please enter email and password')
    } else {
      //send request to login
      axios
        .post('/login', {
          email: email,
          password: password,
        })
        .then((res) => {
            window.location.href = '#/reports/yearly-reports'
            //set token
            localStorage.setItem('token', res.data.token)
          
        })
        .catch((err) => {
          //show error message
          setError_message(err.message)
        })
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
                      <CFormInput placeholder="Email" 
                      type="email"
                      id="email"
                      autoComplete="email" />
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
                        <p className="lead">email: mariamzayed91@gmail.com</p>
                        <p className="lead">password: Admin@123</p>
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
