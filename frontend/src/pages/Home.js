import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Card from '../components/card/Card';
import Productlist from '../components/productlist/Productlist';
import Footer from '../components/footer/Footer';
import  Test from '../components/Test/Test';
import CarouselRow from '../components/carousel/CarouselRow';
import Categories from '../components/categories/Categories';
import Slide from '../components/carousel/Carousel';
import Hero from '../components/heroSection/Hero';


function Home() {
    return(
        <section>
            <div><Navbar /></div>
            
    
                 <Hero/>      
                <Productlist/>
                <Categories/>     
            <Footer />

        </section>
       
    );
}

export default Home;