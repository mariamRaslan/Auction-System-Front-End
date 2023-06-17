import React from 'react';
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/Dashboard/index';

const DefaultLayout = () => {
  return (
    <div dir='rtl' className="d-flex">
      <AppSidebar/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light flex-grow-1">
        <AppHeader />
        <div className="body flex-grow-1 align-item-center justfiy-content-center">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default DefaultLayout;
