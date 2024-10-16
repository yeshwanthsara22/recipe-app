import React, { useRef } from "react";
import spaghettiAudio from "../data/audio.mp3"; // Make sure the path is correct

const RecipeDetail: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null); // Create a reference for the audio element

  // const handlePlayAudio = () => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((error) => {
  //       console.error("Error trying to play audio:", error);
  //     });
  //   }
  // };

  return (
    <div className="recipe-detail">
      <h1>Spaghetti Carbonara</h1>
      <p>
        A classic Italian pasta dish made with eggs, cheese, pancetta, and
        pepper.
      </p>
      <audio ref={audioRef} controls>
        <source src={spaghettiAudio} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      {/* <button onClick={handlePlayAudio}>Play Audio</button>{" "} */}
      {/* Optional Play Button */}
    </div>
  );
};

export default RecipeDetail;
