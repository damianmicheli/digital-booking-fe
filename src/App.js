import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import TemplateGeneral from "./components/templateGeneralResponsive/TemplateGeneral";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";


const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <TemplateGeneral />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
