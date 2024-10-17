import React from "react";
import "./Recipe.css";
import { useNavigate } from "react-router-dom";
import x from "../../images/recipeimages/image0_0.jpg";
interface RecipeProps {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Recipe: React.FC<RecipeProps> = ({ id, title, image, description }) => {
  const navigate = useNavigate(); // Get the navigate function

  // Function to handle card click
  const handleCardClick = () => {
    navigate(`/recipes/${id}`); // Navigate to the recipe detail page
  };
  return (
    <div
      className="recipe-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={x} alt={title} className="recipe-image" />
      <h5>{title}</h5>
      <h6>{description}</h6>
    </div>
  );
};

export default Recipe;
