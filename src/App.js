import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/common/Header";
import About from "./pages/About";
import Products from "./pages/Products";
import Gallery from "./pages/Gallery";
import Prices from "./pages/Prices";
import Home from "./pages/Home";
import Footer from "./component/common/Footer";
import ScrollToTop from "./component/common/ScrollToTop";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    // <button
    //   className="p-2 rounded-full hover:bg-gray-200 transition"
    //   aria-label="Close"
    // >
    //   <AiOutlineClose className="w-5 h-5 text-gray-700 hover:text-red-600" />
    // </button>
    <>
      <BrowserRouter>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Prices" element={<Prices />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
