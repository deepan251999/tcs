import React from 'react';
import Home from "../Components/Home/Home"
import About from '../Components/Home/About';
import Service from '../Components/Home/Service';
import Team from '../Components/Home/Team';
import Footer from '../Components/Commen/Footer';
import Customers from '../Components/Home/Customers';
import Project from '../Components/Home/Project';

const Homepage = () => {
    return (
        <>
            <Home />
            <About />
            <Service />
            <Team />
            <Project />
            <Customers />
            <Footer />
        </>
    )
}

export default Homepage;