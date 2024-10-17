import React from "react";
import "./Recipe.css";
import { useNavigate } from "react-router-dom";
import audioFile from "../../data/audio.mp3";

interface RecipeProps {
  id: number;
  title: string;
  image: string;
  description: string;
  audio: string; // Added audio prop
}

const Recipe: React.FC<RecipeProps> = ({
  id,
  title,
  image,
  description,
  audio,
}) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/recipes/${id}`);
  };

  return (
    <div
      className="recipe-card"
      onClick={handleCardClick}
      style={{ cursor: "pointer" }}
    >
      <img src={image} alt={title} className="recipe-image" />
      <h5 className="recipe-title">{title}</h5>
      <p className="recipe-description">{description}</p>
      {/* Adding audio player inside the card */}
      <audio controls className="recipe-audio">
        <source src={audioFile} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default Recipe;
