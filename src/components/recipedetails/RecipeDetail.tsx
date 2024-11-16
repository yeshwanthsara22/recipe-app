import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "../navbar/NavBar";
import ContactUs from "../contactus/ContactUs";
import "./RecipeDetail.css";

// Define a type for the Recipe object
interface Recipe {
  id: number;
  title: string;
  image: string;
  description: string;
  audio: string;
  ingredients: string[];
  instructions: string[];
  calories: number;
}

const RecipeDetail: React.FC = () => {
  const location = useLocation();
  const recipe = (location.state as { recipe: Recipe })?.recipe;

  if (!recipe) {
    return <div>Recipe not found!</div>; // Handle the case when recipe is not provided
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
            <p>calories : {recipe.calories}</p>
            <p>{recipe.description}</p>

            {/* Audio Section */}
            <audio controls className="recipe-audio1">
              <source src={recipe.audio} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>

            {/* Section for Ingredients */}
            <h2>Ingredients:</h2>
            <ul className="recipe-ingredients">
              {recipe.ingredients.map((ingredient: string, index: number) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>

            {/* Section for Instructions */}
            <h2>Instructions:</h2>
            <ul className="recipe-instructions">
              {recipe.instructions
                .filter(
                  (instruction) => instruction.trim() !== "=== INSTRUCTIONS ==="
                ) // Filter out the header
                .map((instruction: string, index: number) => (
                  <li key={index}>{instruction}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
      <ContactUs />
    </div>
  );
};

export default RecipeDetail;
