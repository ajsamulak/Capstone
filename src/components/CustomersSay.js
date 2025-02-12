import React from 'react';
import stars from "../assets/stars.png"
const CustomersSay = () => {

        return (
            <section>
                <div className="reviews-header">
              <h2>Customer Reviews</h2>
            </div>
          <div className="reviews-container">
            <div className="reviews">
                  <img src={stars} alt="Five stars" />
                      <h5>name</h5>
                    <p>quote</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>name</h5>
                    <p>quote</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>name</h5>
                    <p>quote</p>
            </div>
            <div className="reviews">
            <img src={stars} alt="Five stars" />
                      <h5>name</h5>
                    <p>quote</p>
            </div>
            </div>
            </section>
        );
      };
      
export default CustomersSay;