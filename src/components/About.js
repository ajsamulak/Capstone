import React from 'react';
import Image1 from  '../assets/restaurant.jpg'
import Image2 from  '../assets/Mario and Adrian A.jpg'

const About = () => {
    return (
    <header>
        <section className="about">
            <div className="about-banner">
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>Little Lemon is a charming neighborhood bistro that serves simple food and classic cocktails in a lively but casual environment. The restaurant features a locally-sourced menu with daily specials.</p>
            </div>
            <div class="twoImages">
                <img class="image1" src={Image1} alt='Adrian and Mario' />
                <img class="image2" src={Image2} alt='Adrian and Mario' />
            </div>
        </section>
    </header>
)
}

export default About;