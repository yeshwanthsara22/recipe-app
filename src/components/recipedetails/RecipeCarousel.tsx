// src/components/RecipeCarousel.tsx

import React from "react";
import { Carousel } from "react-bootstrap"; // Import Carousel

interface RecipeCarouselProps {
  recipes: { id: number; title: string; description: string; image: string }[];
  activeIndex: number;
  onSelect: (selectedIndex: number, e: unknown) => void;
}

const RecipeCarousel: React.FC<RecipeCarouselProps> = ({
  recipes,
  activeIndex,
  onSelect,
}) => {
  return (
    <Carousel activeIndex={activeIndex} onSelect={onSelect}>
      {recipes.map((recipe) => (
        <Carousel.Item
          key={recipe.id}
          style={{ backgroundImage: `url(${recipe.image})` }} // Set the background image
        >
          <div className="carousel-caption">
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default RecipeCarousel;
