import "./App.css";
import "./contact.css";
import "./footer.css";
import { Extreme } from "./components/Extremetop";
import { Navbar } from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function scrollFunction() {
  if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    document.getElementById("navbar").style.backgroundColor =
      "rgba(255,255,255,0.98)";
    document.getElementById("navbar").style.boxShadow =
      "0px 0px 10px rgba(0,0,0,0.6)";
    document.getElementById("title").style.color = "black";
    document.getElementsByClassName("mid-js")[0].style.color = "black";
    document.getElementsByClassName("mid-js")[1].style.color = "black";
    document.getElementsByClassName("mid-js")[2].style.color = "black";
    document.getElementsByClassName("mid-js")[3].style.color = "black";
    document.getElementsByClassName("mid-js")[4].style.color = "black";
    document.getElementById("title-name").style.marginLeft = "-210px";
    document.getElementById("title-name").style.transition = "0.5s";
    document.getElementById("title-name").style.opacity = "0";
    document.getElementById("title-name").style.color = "black";
  } else {
    document.getElementById("navbar").style.backgroundColor = "transparent";
    document.getElementById("navbar").style.boxShadow = "none";
    document.getElementById("title").style.color = "white";
    document.getElementsByClassName("mid-js")[0].style.color = "white";
    document.getElementsByClassName("mid-js")[1].style.color = "white";
    document.getElementsByClassName("mid-js")[2].style.color = "white";
    document.getElementsByClassName("mid-js")[3].style.color = "white";
    document.getElementsByClassName("mid-js")[4].style.color = "white";
    document.getElementById("title-name").style.transition = "0.5s";
    document.getElementById("title-name").style.marginLeft = "85px";
    document.getElementById("title-name").style.opacity = "1";
    document.getElementById("title-name").style.color = "white";
  }
}

window.onscroll = function() {
  scrollFunction();
};

function App() {
  return (
    <>
      <Router>
          {/* extreme top nav bar */}
          <Extreme />

          {/* nav bar */}
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>

          {/* footer developer details */}
          <Footer/>
      </Router>
    </>
  );
}

export default App;
