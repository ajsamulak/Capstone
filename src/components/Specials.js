import React from "react";
import recipes from "../recipes";
import delivery from  '../assets/basket .svg'

const Specials = () => {

  return (
    <div className="menu-container">
      <div className="menu-header">
        <h2>This weeks specials!</h2>
        <button>Online Menu</button>
      </div>
      <div className="cards">
        {recipes.map((recipe) => (
          <div key={recipe.id} className="menu-items">
            <img src={recipe.image} alt="" />
            <div className="menu-content">
              <div className="heading">
                <h5>{recipe.title}</h5>
                <p>${recipe.price}</p>
              </div>
              <p>{recipe.description}</p>
              <div className="delivery heading">
              <h5>Order a delivery</h5> 
              <p><img src={delivery} alt='basket add icon'/></p>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specials;