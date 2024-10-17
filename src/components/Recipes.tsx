import React, { useState } from "react";
import NavBar from "./NavBar";
import ContactUs from "./ContactUs";
import { Carousel } from "react-bootstrap"; // Import Carousel
import "./Recipes.css";
import { useLocation } from "react-router-dom";
import chickenCurryImage from "./chicken.jpg";
import Recipe from "./Recipe"; // Import Recipe component

const Recipes: React.FC = () => {
  // Static recipe data
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: "/bg3.jpg",
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: chickenCurryImage,
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
      title: "Chicken Curry",
      image: chickenCurryImage,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    {
      id: 5,
      title: "Chicken Curry",
      image: chickenCurryImage,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    {
      id: 6,
      title: "Chicken Curry",
      image: chickenCurryImage,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    {
      id: 7,
      title: "Chicken Curry",
      image: chickenCurryImage,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    {
      id: 8,
      title: "Chicken Curry",
      image: chickenCurryImage,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
    },
    // Add more recipes as needed
  ];

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || ""; // Get search query

  // Filter recipes based on the search query
  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // State to track the active index of the carousel
  const [activeIndex, setActiveIndex] = useState(0);

  // Handlers for the carousel controls
  const handleSelect = (selectedIndex: number, e: unknown) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <NavBar />
      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          <table className="table table-bordered">
            <tbody>
              {/* First Row: Carousel */}
              <tr>
                <td>
                  <div className="carousel-container">
                    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                      {filteredRecipes.map((recipe) => (
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
                  </div>
                </td>
              </tr>

              {/* Second Row: Recipe Grid */}
              <tr>
                <td>
                  {/* <div className="recipe-grid-container">
                    {filteredRecipes.map((recipe) => (
                      <Recipe
                        key={recipe.id}
                        id={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        image={recipe.image} // Pass the correct image
                      />
                    ))}
                  </div> */}
                  <div className="recipe-grid-container">
                    <table className="table transparent-recipe-table">
                      <tbody>
                        {filteredRecipes
                          .reduce((rows, recipe, index) => {
                            // Create a new row every 4 recipes
                            if (index % 4 === 0) {
                              rows.push([]);
                            }
                            // Add the recipe to the current row
                            rows[rows.length - 1].push(recipe);
                            return rows;
                          }, [] as Array<Array<(typeof recipes)[0]>>)
                          .map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((recipe) => (
                                <td key={recipe.id}>
                                  <Recipe
                                    id={recipe.id}
                                    title={recipe.title}
                                    description={recipe.description}
                                    image={recipe.image} // Pass the correct image
                                  />
                                </td>
                              ))}
                              {/* Fill the remaining columns with empty cells if necessary */}
                              {row.length < 4 &&
                                Array(4 - row.length)
                                  .fill(null)
                                  .map((_, i) => <td key={`empty-${i}`} />)}
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>No recipes found for "{searchQuery}".</p>
        )}
      </div>
      <ContactUs />
    </>
  );
};

export default Recipes;
