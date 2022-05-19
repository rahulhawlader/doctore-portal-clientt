import React from 'react';
import Footer from '../Shared/Footer';
import Benner from './Benner';
import BennerTwo from './BennerTwo';
import Contact from './Contact';
import Info from './Info';
import MakeApporment from './MakeApporment';
import Services from './Services';
import Testimonials from './Testimonials';


const Home = () => {
    return (
        <div>

            <Benner></Benner>
            <Info></Info>
            <Services></Services>
            <BennerTwo></BennerTwo>
            <MakeApporment></MakeApporment>
            <Testimonials></Testimonials>

            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;