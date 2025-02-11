import React from 'react';
import bannerImg from  '../assets/restaurant.jpg'
const About = () => {
    return (
    <header className="about">
        <section>
            <div className="banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </div>
            <div className='banner-img'>
                <img src={bannerImg} alt='bruchetta platter'/>
            </div>
        </section>
    </header>
)
}

export default About;