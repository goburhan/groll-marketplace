import React, { useEffect, useState, Suspense, lazy } from "react";
import Slide from "./pages/home/Slider";
import GlobalStyle from "./styles/Globalstyle";
import Navbar from "./components/Navbar";
import AccountInformation from "./pages/signup/components/StepOneButton";
import SignUpPage from "./pages/signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { ThemeProvider } from "styled-components";
import Cookie from "./components/Cookie";
import styled from "styled-components";
import ConnectWallet from "./pages/connectwallet";
import { useCookies } from "react-cookie";
import Collection from "./pages/collection";
import CardDetails from "./pages/collection/CardDetails";
import Footer from "./components/Footer";
import useThemeMode from "./hooks/useThemeMode";
import Homerr from "./pages/homerr";

const App: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState("dark");

  // const [cookies, setCookie] = useCookies()
  const [cookies, setCookie, removeCookie] = useCookies(["CookieConsent"]);

  const setCurrentThemeAndSavePref = (theme) => {
    setCurrentTheme(theme);
    setCookie("CookieConsent", theme, {
      path: "/",
      expires: new Date(new Date().setFullYear(new Date().getFullYear() + 1)),
    });
  };

  const { theme, themeToggler } = useThemeMode();

  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/collection" element={<Collection />}></Route>
            <Route path="/carddetails" element={<CardDetails />}></Route>
            <Route path="/homer" element={<Homerr />}></Route>
          </Routes>
        </Router>
        <Navbar />
        <GlobalStyle />
        <Cookie />
      </ThemeProvider>
    </>
  );
};

export default App;
