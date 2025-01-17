/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./styles.css";

/**
 * This object represents your information. The project is set so that you
 * only need to update these here, and values are passed a properties to the
 * components that need that information.
 *
 * Update the values below with your information.
 *
 * If you don't have one of the social sites listed, leave it as an empty string.
 */
const siteProps = {
  name: "Yoonus Arshaan",
  title: "Web Designer & Problem Solver",
  email: "yoonusarshaan@gmail.com",
  gitHub: "yoonusash",
  instagram: "yoonus_ash?igsh=czNiZHN1YWhjeWht&utm_source=qr",
  linkedIn: "yoonus-arshaan-3193a8292/",
  medium: "",
  twitter: "yoonusarshaan?s=11",
  youTube: "@Yonot999?si=6BO6Y3tZE6N9i1BE",
};

const primaryColor = "#2596BE";
const secondaryColor = "#D2F1E4";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} secondaryColor={secondaryColor} />
    </div>
  );
};

export default App;
