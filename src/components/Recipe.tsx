import React from "react";
import "./Recipe.css";
interface RecipeProps {
  title: string;
  image: string;
  description: string;
}

const Recipe: React.FC<RecipeProps> = ({ title, image, description }) => {
  return (
    <div className="recipe-card">
      <img src={"./bg4.jpg"} alt={title} className="recipe-image" />
      <h5>{title}</h5>
      <p className="para">{description}</p>
    </div>
  );
};

export default Recipe;
