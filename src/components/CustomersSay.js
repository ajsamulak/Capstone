import React from 'react';
import stars from "../assets/stars.png"
import profile from '../assets/profile.png'
const CustomersSay = () => {

        return (
            <section>
                <div className="reviews-header">
              <h2>Customer Reviews</h2>
            </div>
          <div className="reviews-container">
            <div className="reviews">
                  <img src={stars} alt="Five stars" />
                      <h5>Liam</h5>
                      <img src={profile} alt="Profile avatar" />
                    <p>"The portions are generous and great for a healthy dinner."</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>Sophia</h5>
                      <img src={profile} alt="Profile avatar" />
                    <p>"Loved the vibrant flavors in the bruchetta, a truely refreshing appetizer."</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>Emma</h5>
                      <img src={profile} alt="Profile avatar" />
                    <p>"This restaurant is a hidden gem for authentic Mediterranean cuisine."</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>Olivia</h5>
                      <img src={profile} alt="Profile avatar" />
                    <p>"The salads are a must-try - juicy veggies, fresh lettuce, and a perfect dressing."</p>
            </div>
            </div>
            </section>
        );
      };
      
export default CustomersSay;