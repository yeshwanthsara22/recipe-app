import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage"; // Adjust the path as necessary
import HomePage from "./components/HomePage"; // Import your HomePage component
import Recipes from "./components/Recipes"; // Import Recipes component
import RecipeDetail from "./components/RecipeDetail"; // Import RecipeDetail component
import AudioPlayer from "./components/test/AudioPlayer";
import Page from "./components/Page";
import ContactUs from "./components/ContactUs";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />{" "}
        {/* Add recipe detail route */}
      </Routes>
    </Router>
    // <>
    //   <Page></Page>
    // </>
  );
};

export default App;
