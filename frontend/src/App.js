import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Body from "./components/body/Body"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Body />
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
