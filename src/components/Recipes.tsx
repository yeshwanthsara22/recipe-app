import React from "react";
import Recipe from "./Recipe";
import NavBar from "./NavBar";

const Recipes: React.FC = () => {
  // Static recipe data
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "./../../public/bg3.jpg",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: "../../public/chicken-curry-recipe.webp",
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    {
      id: 3,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 4,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 5,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 6,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 7,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    // Add more recipes as needed
  ];

  return (
    <>
      <NavBar></NavBar>
      <div></div>
      <div className="recipes-container">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.id}
            title={recipe.title}
            image={recipe.image}
            description={recipe.description}
          />
        ))}
      </div>
    </>
  );
};

export default Recipes;
