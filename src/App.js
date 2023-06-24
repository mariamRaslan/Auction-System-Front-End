import React, { Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch, Route, Routes, Navigate } from 'react-router-dom';
import './scss/style.scss';
import withAdminAuth from './components/IsAdmin';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));
const WebsiteLayout = React.lazy(() => import('./layout/WebsiteLayout'));
const Login = React.lazy(() => import('./Pages/UserAccount/Login'));
const Signup = React.lazy(() => import('./Pages/UserAccount/SignUp'));

// Reset Password
const EmailForm = React.lazy(() => import('./Pages/UserAccount/EmailForm'));
const CodeForm = React.lazy(() => import('./Pages/UserAccount/CodeForm'));
const NewPasswordForm = React.lazy(() => import('./Pages/UserAccount/NewPasswordForm'));

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  return isLoggedIn ? <Component {...rest} /> : <Navigate to="/login" />;
};

const PublicRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  const [isLoggedIn, setIsLoggedIn] = useState(!!token);
  return !isLoggedIn ? <Component {...rest} /> : <Navigate to="/" />;
};

const App = () => {
  return (
    <Router>
      <Suspense fallback={loading}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/reset-password/email" element={<EmailForm />} />
            <Route path="/reset-password/code/:token/:verifycode" element={<CodeForm />} />
            <Route path="/new-password/:token" element={<NewPasswordForm />} />
            <Route path="/dashboard/*" element={<PrivateRoute component={withAdminAuth(DefaultLayout)} />} />
            <Route path="/*" element={< WebsiteLayout />} />
          </Routes>
      </Suspense>
    </Router>
  );
};
export default App;
