import React from 'react';
import About from './About';
import Banner from './Banner';
import Footer from './Footer';
import Things from './Things';
import Websites from './Websites';

const Home = () => {
    return (
        <section className='space-y-32'>
            <Banner></Banner>
            <About></About>
            <Things></Things>
            <Websites></Websites>
            <Footer></Footer>
        </section>
    );
};

export default Home;