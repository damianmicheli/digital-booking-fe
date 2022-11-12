import React from "react";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import { AuthProvider } from "./context/AuthContext";

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Body />
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
