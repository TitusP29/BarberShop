import React from 'react';
import Header from './components/Header';
import Hero from './sections/Hero';
import WhyChoose from './sections/WhyChoose';
import Pricing from './sections/Pricing';
import Services from './sections/Services';
import Gallary from './sections/Gallary';
import Testimony from './sections/Testimony';
import Contact from './sections/Contact';
import Footer from './components/Footer';

const App = () => {
    return (
        <>
        <Header />
        <Hero />
        <WhyChoose />
        <Pricing />
        <Services />
        <Gallary />
        <Testimony />
        <Contact />
        <Footer />
        </>
    )
}

export default App;