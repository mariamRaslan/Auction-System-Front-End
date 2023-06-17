import React, { Component, Suspense, useEffect, useState } from 'react'
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom'
import './scss/style.scss'


const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))
const WebsiteLayout=React.lazy(() => import('./layout/WebsiteLayout'))
const Login = React.lazy(() => import('./Pages/UserAccount/Login'))
//sign up
const Signup=React.lazy(()=>import('./Pages/UserAccount/SignUp'))

//Reset Password
const EmailForm=React.lazy(()=>import('./Pages/UserAccount/EmailForm'))
const CodeForm=React.lazy(()=>import('./Pages/UserAccount/CodeForm'))
const NewPasswordForm=React.lazy(()=>import('./Pages/UserAccount/NewPasswordForm'))

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);

  useEffect(() => {
    // Set the timeout for 1 hour (3600000 milliseconds)
    const timeout = setTimeout(() => {
      // Remove the token from local storage
      localStorage.removeItem('token');
      // Update the isLoggedIn state to false
      setIsLoggedIn(false);
      window.location.href = '/#/login'
    }, 3600000);

    // Clean up the timeout when the component unmounts or when isLoggedIn changes to false
    return () => clearTimeout(timeout);
  }, []);

  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

const App = () => {
  return (
    <HashRouter>
      <Suspense fallback={loading}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/reset-password/email" element={<EmailForm />} />
          <Route path="/reset-password/code/:token/:verifycode" element={<CodeForm />} />
          <Route path="/new-password/:token" element={<NewPasswordForm />} />
          <Route path="/dashboard/*" element={<PrivateRoute component={DefaultLayout} />} />
          <Route path="*" element={<PrivateRoute component={WebsiteLayout} />} />
        </Routes>
      </Suspense>
    </HashRouter>
  )
}

export default App
