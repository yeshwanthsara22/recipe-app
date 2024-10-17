import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import ContactUs from "../contactus/ContactUs";
import "./RecipeDetail.css";

const RecipeDetail: React.FC = () => {
  const location = useLocation();
  const { recipe } = location.state || {};
  // const { recipe } = location.state || {};

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  return (
    <div className="recipe-detail-page1">
      <NavBar />
      <div className="recipe-detail-content1">
        <div className="recipe-detail-container1">
          <div className="recipe-image-container1">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="recipe-image1"
            />
          </div>
          <div className="recipe-details-container1">
            <h1>{recipe.title}</h1>
            <p>{recipe.description}</p>
            <audio controls className="recipe-audio1">
              <source src={recipe.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default RecipeDetail;
