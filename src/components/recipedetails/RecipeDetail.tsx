import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import "./RecipeDetail.css";
import spaghettiAudio from "../../data/audio.mp3";
// import spaghettiAudio from "../data/audio.mp3"; // Adjust the path as necessary

// import React, { useRef } from "react";
// import { useParams } from "react-router-dom";
// import spaghettiAudio from "../assets/audio/spaghetti-audio.mp3"; // Adjust the path as necessary

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const audioRef = useRef<HTMLAudioElement>(null); // Create a reference for the audio element

  // Dummy recipe data (you could replace this with actual data retrieval)
  const recipes = [
    {
      id: "1",
      title: "Spaghetti Carbonara",
      audio: "", // Use the imported audio
      description:
        "A classic Italian pasta dish made with eggs, cheese, pancetta, and pepper.",
    },
    // Add more recipes as needed
  ];

  // Find the selected recipe based on the ID from the URL
  const recipe = recipes.find((recipe) => recipe.id === id);

  if (!recipe) {
    return <div>Recipe not found!</div>;
  }

  const handleSpeakDescription = () => {
    const utterance = new SpeechSynthesisUtterance(recipe.description);
    speechSynthesis.speak(utterance);
  };

  const handleAudioPlay = () => {
    // Stop speaking if the audio is played
    speechSynthesis.cancel();
  };

  return (
    <React.Fragment>
      <div className="recipe-detail">
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>

        <audio ref={audioRef} controls>
          <source src={spaghettiAudio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetail;
