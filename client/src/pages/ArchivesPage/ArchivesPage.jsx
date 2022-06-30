import React, { useEffect } from "react";
import { Archives, Footer } from "../../container";
import { Navbar } from "../../components";
const ArchivesPage = () => {
  //fix for react-router-dom to scroll to the top of the page when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Archives />
      <Footer />
    </div>
  );
};

export default ArchivesPage;
