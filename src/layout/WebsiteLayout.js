import React from "react";
import NavBar from "../components/Website/NavBar/NavBar";
import Footer from "../components/Website/Footer/Footer";
import Home from "../Pages/WebsitePages/UserProfile/UserProfile";
import AppContent from "../components/Website/WebsiteAppContent";

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <div>
        <AppContent />
      </div>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
