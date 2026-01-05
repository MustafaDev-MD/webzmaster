import React from 'react';
import Hero1 from '../Components/Banner/Hero1';
import Features from '../Components/Features/Features';
import About1 from '../Components/About/About1';
import Services1 from '../Components/Services/Services1';
import Project1 from '../Components/Project/Project1';
import Brand from '../Components/Brand/Brand';
import Pricing from '../Components/Pricing/Pricing';
import Faq from '../Components/Faq/Faq';
import Testimonial1 from '../Components/Testimonial/Testimonial1';
import Contact1 from '../Components/Contact/Contact1';
import Blog1 from '../Components/Blog/Blog1';

const Home = () => {
    return (
        <div className='home-page'>
            <Hero1
                bgImg="/assets/images/hero-bg.png"
                SubTitle="WEBZ MASTER IT SERVICES"
                Title="The Beauty Behind<br>IT Services."
                Content="Where your interests international networks intersect provid custom software solutions for any value software."
                BtnText="EXPLORE MORE"
                BtnLink="/about"
                mainImage="/assets/images/hero-thumb.png"
                VideoText="WATCH VIDEO"
            ></Hero1> 
            <Features></Features>
            <About1
                MainImg="/assets/images/about-thumb.png"
                ImgTitle="BEST IT SOLUTION"
                SubTitle="WEBZ MASTER COMPANY"
                Title="Essential IT Solutions For<br> Modern <span>Businesses.</span>"
                Content="Monotonectally repurpose maintainable infrastruct whereas Webz Master in fermentum quis tempo sapien maximus design."
                listTitle="Cloud Based Solution"
                BottomText="Monotonectally repurpose maintainable infrastruct whereas Webz Master in fermentum quis tempo sapien maximus design."
                BtnUrl="/about"
                BtnText="EXPLORE MORE"
            ></About1>
            <Services1></Services1>
            <Project1 
                bgImage="/assets/images/project-bg.png"
                ClassAdd="project-area"
            ></Project1>
            <Brand></Brand>
            <Pricing></Pricing>
            <Faq></Faq>
            <Testimonial1></Testimonial1>
            <Contact1></Contact1>
            <Blog1></Blog1>
        </div>
    );
};

export default Home;