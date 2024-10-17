// src/components/RecipeGrid.tsx

import React from "react";
import Recipe from "./Recipe"; // Import Recipe component

interface RecipeGridProps {
  recipes: { id: number; title: string; description: string; image: string }[];
}

const RecipeGrid: React.FC<RecipeGridProps> = ({ recipes }) => {
  return (
    <div className="recipe-grid-container">
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            image={""} // Pass the image prop correctly
          />
        ))}
      </div>
    </div>
  );
};

export default RecipeGrid;
