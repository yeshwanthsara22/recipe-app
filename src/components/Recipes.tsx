import React from "react";
import Recipe from "./Recipe";
import NavBar from "./NavBar";
import ContactUs from "./ContactUs";
import "./Recipes.css";
import { useLocation } from "react-router-dom";
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
    {
      id: 8,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 9,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    {
      id: 10,
      title: "Vegetable Stir Fry",
      image: "https://example.com/vegetable-stir-fry.jpg",
      description:
        "A quick and healthy dish made with mixed vegetables and soy sauce.",
    },
    // Add more recipes as needed
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || ""; // Get search query

  // Filter recipes based on the search query, if present, otherwise show all recipes
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <Recipe
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              description={recipe.description}
              image={""}
            />
          ))
        ) : (
          <p>No recipes found for "{searchQuery}".</p>
        )}
      </div>
      <ContactUs />
    </>
  );
};

export default Recipes;
