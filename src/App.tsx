import React from 'react';
import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";
import {Route, Routes} from "react-router-dom";
import {Menu} from "./layout/menu/Menu";
import {BurgerMenu} from "./layout/burgerMenu/BurgerMenu";
import {useViewport} from "./hooks/viewPort";
import {ErrorPage} from "./layout/errorPage/ErrorPage";
import {Contact} from "./layout/contact/Contact";
import {MobileApp} from "./layout/main/sections/mobileApp/MobileApp";
import {AboutPage} from "./layout/aboutPage/AboutPage";

function App() {

    const {width} = useViewport()

    const breakpoint = 1300

    return (
        <div className="App">
            <Header/>
            {width < breakpoint && <BurgerMenu/>}
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/menu/*" element={<Menu/>}/>
                <Route path="/about" element={<AboutPage/>}/>
                <Route path="/mobileApp" element={<MobileApp/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/*" element={<ErrorPage/>}/>
            </Routes>
            <Footer/>
        </div>
    );
}

export default App;
