import React from 'react';
import {Hero} from "./sections/hero/Hero";
import {Favorite} from "./sections/favorite/Favorite";
import {About} from "./sections/about/About";
import {MobileApp} from "./sections/mobileApp/MobileApp";

export const Main = () => {
    return (
        <main>
            <Hero/>
            <Favorite/>
            <About/>
            <MobileApp/>
        </main>
    );
};
