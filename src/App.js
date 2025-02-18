import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./GlobalStyles";
import { theme } from "./theme";
import Register from "./components/Register";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import SearchPlants from "./components/SearchPlants";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import PlantDetails from "./components/PlantDetails";
import ForgotPassword from "./components/ForgotPassword";
import LandingPage from "./components/LandingPage";
// import AdminHome from "./components/AdminHome";
import PlantManager from './components/PlantManager';



const Layout = ({ children, isLoggedIn, setIsLoggedIn }) => {
    const location = useLocation();
    
    // Hide Navbar on PlantManager page
    const hideNavbar = location.pathname === "/plantManager";

    return (
        <>
            {!hideNavbar && <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />}
            {children}
            <Footer />
        </>
    );
};

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");
        if (loggedIn) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Router>
                <Layout isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
                    <Routes>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
                        <Route path="/users" element={<UserList />} />
                        <Route path="/search-plants" element={<SearchPlants />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/plant/:id" element={<PlantDetails />} />
                        <Route path="/forgot-password" element={<ForgotPassword />} />
                        <Route path="/plantManager" element={<PlantManager />} />
                        {/* <Route path="/adminhome" element={<AdminHome />} /> */}
                    </Routes>
                </Layout>
            </Router>
        </ThemeProvider>
    );
}

export default App;
