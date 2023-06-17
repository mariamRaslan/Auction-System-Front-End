import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/Dashboard/index'

const DefaultLayout = () => {
  return (
    <div dir='rtl'>
      <AppSidebar/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
