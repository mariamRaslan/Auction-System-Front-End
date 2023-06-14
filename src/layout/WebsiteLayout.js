import React from 'react'
import NavBar from '../components/WesiteNavBar/NavBar'
import Home from '../Pages/WebsitePages/UserProfile/UserProfile'
import  AppContent from '../components/WebsiteAppContent'

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
