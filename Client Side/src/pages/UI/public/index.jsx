import React from 'react';

import "preline/preline";
import NavBarHome from './components/navBarHome';
import HomeHero from './components/homeHero';
import Hero from './components/hero';
import Section from './components/section';
import AboutServices from './components/aboutServices';
import Services from './components/services';
import Pricing from './components/pricing';
import Contact from './components/contact';
import Footer from './components/footer';
const Index = () => {
    return (
        <>
            <NavBarHome />
            <HomeHero />
            <Hero />
            <AboutServices />
            <Services />
            <Section />
            <Pricing />
            <Contact />
            <Footer />
        </>
    );
}

export default Index;