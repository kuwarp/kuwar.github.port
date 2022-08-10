import React from 'react'
// import { Routes, Route } from "react-router-dom";
import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import Footer from './components/footer/footer'
import { ThemeContext } from "./Context";
const Main = () => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    return (
      <div
        style={{
          backgroundColor: darkMode ? "#222" : "white",
          color: darkMode ? "#f9f3f3" : "black",
        }}
      >
        <Toggle />  
        <Intro />
        <About />
        <ProductList />
        <Contact />
        <Footer/>
      </div>
    );

}

export default Main