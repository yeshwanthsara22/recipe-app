import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import ContactUs from "../contactus/ContactUs";
import { Carousel } from "react-bootstrap";
import "./Recipes.css";
import { useLocation, useNavigate } from "react-router-dom";
import Recipe from "../recipe/Recipe";
import americanpancake from "../../images/images/American_Pancakes.jpeg";
import chickencurry from "../../images/images/Chicken_Curry.jpeg";
import butterchicken from "../../images/images/Butter_Chicken.jpeg";
import sandwich from "../../images/images/sandwich.jpeg";
import spaghettiAudio from "../../data/audio.mp3";

const Recipes: React.FC = () => {
  const recipes = [
    {
      id: 1,
      title: "Spaghetti Carbonara",
      image: chickencurry,
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
      carousel: "yes",
      audio: spaghettiAudio,
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: chickencurry,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
      carousel: "yes",
      audio: spaghettiAudio,
    },
    {
      id: 3,
      title: "Sandwich",
      image: sandwich,
      description: "A quick and healthy dish made with mixed vegetables.",
      carousel: "no",
      audio: spaghettiAudio,
    },
    {
      id: 4,
      title: "American Pancakes",
      image: americanpancake,
      description:
        "Delicious American pancakes served with maple syrup and fresh berries.",
      carousel: "yes",
      audio: spaghettiAudio,
    },
    {
      id: 5,
      title: "Butter Chicken",
      image: butterchicken,
      description:
        "A creamy and delicious Indian dish made with butter, cream, and spices.",
      carousel: "no",
      audio: spaghettiAudio,
    },
  ];

  const location = useLocation();
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get("search") || "";

  const filteredRecipes = recipes.filter((recipe) => {
    const searchWords = searchQuery.toLowerCase().split(" ");
    return searchWords.every((word) =>
      recipe.title.toLowerCase().includes(word)
    );
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex: number, e: unknown) => {
    setActiveIndex(selectedIndex);
  };

  const handleCarouselClick = (recipe: (typeof recipes)[number]) => {
    console.log("Navigating with recipe:", recipe);
    navigate(`/recipes/${recipe.id}`, { state: { recipe } }); // Pass the entire recipe object
  };
  const handleGridClick = (recipe: (typeof recipes)[number]) => {
    console.log("Navigating with recipe from grid:", recipe);
    navigate(`/recipes/${recipe.id}`, { state: { recipe } });
  };

  return (
    <>
      <NavBar />
      <div className="recipes-container">
        {filteredRecipes.length > 0 ? (
          <table className="costum-table">
            <tbody>
              <tr>
                <td>
                  <div className="carousel-container">
                    <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
                      {filteredRecipes
                        .filter((recipe) => recipe.carousel === "yes")
                        .map((recipe) => (
                          <Carousel.Item
                            key={recipe.id}
                            style={{
                              backgroundImage: `url(${recipe.image})`,
                              cursor: "pointer",
                            }}
                            onClick={() => handleCarouselClick(recipe)}
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
              <tr>
                <td>
                  <div className="recipe-grid-container">
                    <table className="table transparent-recipe-table">
                      <tbody>
                        {filteredRecipes
                          .reduce((rows, recipe, index) => {
                            if (index % 4 === 0) {
                              rows.push([]);
                            }
                            rows[rows.length - 1].push(recipe);
                            return rows;
                          }, [] as Array<Array<(typeof recipes)[0]>>)
                          .map((row, rowIndex) => (
                            <tr key={rowIndex}>
                              {row.map((recipe) => (
                                <td
                                  key={recipe.id}
                                  onClick={() => handleGridClick(recipe)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <Recipe
                                    id={recipe.id}
                                    title={recipe.title}
                                    description={recipe.description}
                                    image={recipe.image}
                                    audio={recipe.audio} // Pass the audio field
                                  />
                                </td>
                              ))}
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
