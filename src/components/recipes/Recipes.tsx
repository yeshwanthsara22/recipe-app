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
import pancakeaudio from "../../images/mp3/American_Pancake.mp3";
import chickencurryaudio from "../../images/mp3/chicken_curry.mp3";
import butterchickenaudio from "../../images/mp3/butter_chicken.mp3";
import sandwichaudio from "../../images/mp3/sandwich.mp3";

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
      instructions: [], // Initialize instructions as an empty array
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: chickencurry,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
      carousel: "yes",
      audio: chickencurryaudio,
      instructions: [], // Initialize instructions as an empty array
    },
    {
      id: 3,
      title: "Sandwich",
      image: sandwich,
      description: "A quick and healthy dish made with mixed vegetables.",
      carousel: "no",
      audio: sandwichaudio,
      instructions: [], // Initialize instructions as an empty array
    },
    {
      id: 4,
      title: "American Pancakes",
      image: americanpancake,
      description:
        "Delicious American pancakes served with maple syrup and fresh berries.",
      carousel: "yes",
      audio: pancakeaudio,
      instructions: [], // Initialize instructions as an empty array
    },
    {
      id: 5,
      title: "Butter Chicken",
      image: butterchicken,
      description:
        "A creamy and delicious Indian dish made with butter, cream, and spices.",
      carousel: "no",
      audio: butterchickenaudio,
      instructions: [], // Initialize instructions as an empty array
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

  const instructionFiles: Record<string, string> = {
    1: "/txt/Sandwich.txt",
    2: "/txt/chicken_curry.txt",
    3: "/txt/Sandwich.txt",
    4: "/txt/Pancake.txt",
    5: "/txt/Butter_chicken.txt",
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSelect = (selectedIndex: number, e: unknown) => {
    setActiveIndex(selectedIndex);
  };

  const fetchInstructions = async (
    recipeId: number,
    recipe: (typeof recipes)[number]
  ) => {
    setLoading(true);
    setError("");
    try {
      const response = await fetch(instructionFiles[recipe.id.toString()]); // Updated line
      // Assuming the naming convention of the instruction files
      if (!response.ok) {
        throw new Error("Instructions not found");
      }
      const text = await response.text();
      // const instructions = text
      //   .split("\n")
      //   .map((step) => step.trim())
      //   .filter((step) => step);
      const instructions = text.split("\n").filter((step) => step);
      // Update the state with fetched instructions
      navigate(`/recipes/${recipe.id}`, {
        state: { recipe: { ...recipe, instructions } },
      });
    } catch (error) {
      console.error("Error fetching instructions:", error);
      setError("Failed to load instructions.");
    } finally {
      setLoading(false);
    }
  };

  const handleCarouselClick = (recipe: (typeof recipes)[number]) => {
    fetchInstructions(recipe.id, recipe);
  };

  const handleGridClick = (recipe: (typeof recipes)[number]) => {
    fetchInstructions(recipe.id, recipe);
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
        {loading && <p>Loading instructions...</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
      <ContactUs />
    </>
  );
};

export default Recipes;
