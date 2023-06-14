import React from 'react'
import NavBar from '../components/Website/NavBar'
import Home from '../Pages/WebsitePages/UserProfile/UserProfile'
import  AppContent from '../components/Website/WebsiteAppContent'

const DefaultLayout = () => {
  return (
    <div >
      <NavBar />
      <div >
          <AppContent />
        </div>
     </div>
  )
}

export default DefaultLayout
