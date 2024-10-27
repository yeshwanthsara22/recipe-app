import React, { useState } from "react";
import NavBar from "../navbar/NavBar";
import ContactUs from "../contactus/ContactUs";
import { Carousel } from "react-bootstrap";
import "./Recipes.css";
import { useLocation, useNavigate } from "react-router-dom";
import Recipe from "../recipe/Recipe";
import americanpancake from "../../images/images/American_Pancakes.jpg";
import chickencurry from "../../images/images/chicken_curry.jpg";
import butterchicken from "../../images/images/Butter_Chicken.jpeg";
import sandwich from "../../images/images/sandwich.jpg";
import chicken_caprese_salad from "../../images/images/chicken-caprese-salad.jpg";
import smoothie from "../../images/images/smoothie.jpg";
import noodles from "../../images/images/Veggie_Stir-Fry_with_Noodles.webp";
import chiaPudding from "../../images/images/chiaPudding.webp";
import avacadotoast from "../../images/images/avacado_toast.jpg";
import burrito from "../../images/images/burrito.jpg";

// import spaghettiAudio from "../../data/audio.mp3";
import pancakeaudio from "../../images/mp3/pancake.mp3";
import chickencurryaudio from "../../images/mp3/chicken_curry.mp3";
import butterchickenaudio from "../../images/mp3/butter_chicken.mp3";
import sandwichaudio from "../../images/mp3/sandwich.mp3";
import chicken_caprese_salad_audio from "../../images/mp3/caprese_salad_with_grilled_chicken.mp3";
import smoothieAuido from "../../images/mp3/smoothie.mp3";
import noodlesAudio from "../../images/mp3/veggie_stri_fry_with_noodles.mp3";
import chiaPuddingAudio from "../../images/mp3/chia_pudding.mp3";
import avacadotoastAudio from "../../images/mp3/avacado_toast.mp3";
import BurritoAudio from "../../images/mp3/burrito.mp3";

const Recipes: React.FC = () => {
  const recipes = [
    {
      id: 1,
      title: "chicken caprese salad",
      image: chicken_caprese_salad,
      description:
        "Chicken Caprese salad combines grilled chicken, tomatoes, mozzarella, and basil.",
      carousel: "yes",
      audio: chicken_caprese_salad_audio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 2,
      title: "Chicken Curry",
      image: chickencurry,
      description:
        "A flavorful and spicy dish made with chicken, spices, and coconut milk.",
      carousel: "no",
      audio: chickencurryaudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 3,
      title: "Sandwich",
      image: sandwich,
      description: "A quick and healthy dish made with mixed vegetables.",
      carousel: "yes",
      audio: sandwichaudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
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
      ingredients: [],
    },
    {
      id: 5,
      title: "Butter Chicken",
      image: butterchicken,
      description:
        "Butter chicken is a creamy, spiced tomato curry made with tender chicken pieces.",
      carousel: "no",
      audio: butterchickenaudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 6,
      title: "burrito",
      image: burrito,
      description:
        "A burrito is a tortilla wrapped around a filling of beans, meat, and other ingredients.",
      carousel: "no",
      audio: BurritoAudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 7,
      title: "ChiaPudding",
      image: chiaPudding,
      description:
        "Chia pudding is a thick dessert made by soaking chia seeds in milk.",
      carousel: "yes",
      audio: chiaPuddingAudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 8,
      title: "smoothie",
      image: smoothie,
      description:
        "A smoothie is a blended drink made from fruits, vegetables, and often yogurt or milk.",
      carousel: "no",
      audio: smoothieAuido,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 9,
      title: "Viggie Noodles",
      image: noodles,
      description:
        "Veggie noodles are stir-fried noodles mixed with a variety of fresh vegetables.",
      carousel: "no",
      audio: noodlesAudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
    },
    {
      id: 10,
      title: "Avacado Toast",
      image: avacadotoast,
      description:
        "Avocado toast is toasted bread topped with mashed avocado and seasonings.",
      carousel: "no",
      audio: avacadotoastAudio,
      instructions: [], // Initialize instructions as an empty array
      ingredients: [],
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
    1: "/txt/caprese_salad_with_grill_chicken.txt",
    2: "/txt/chicken_curry.txt",
    3: "/txt/Sandwich.txt",
    4: "/txt/Pancake.txt",
    5: "/txt/Butter_chicken.txt",
    6: "/txt/Burrito.txt",
    7: "/txt/chiapudding.txt",
    8: "/txt/smoothie.txt",
    9: "/txt/veggie_noodles.txt",
    10: "txt/avacado_toast.txt",
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
      // const response = await fetch(
      //   "/Users/yeshwanth/Documents/education/courses/HCI/project_design/recipe-app/src/images/txt/Sandwich.txt"
      // );
      if (!response.ok) {
        throw new Error("Instructions not found");
      }
      const text = await response.text();
      const [instructionsText, ingredientsText] = text
        .split("=== INGREDIENTS ===")
        .map((part) => part.trim());

      const instructions = instructionsText.split("\n").filter((step) => step);
      const ingredients = ingredientsText.split("\n").filter((item) => item);

      console.log("Instructions:", instructions);
      console.log("Ingredients:", ingredients);

      navigate(`/recipes/${recipe.id}`, {
        state: { recipe: { ...recipe, instructions, ingredients } },
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
