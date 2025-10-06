import React, { useEffect } from "react";
import useRecipeStore from "./recipeStore";


// this components displays the recommended recipes
const RecommendationsList = () => {

    // this gets the list of recommendations from Zustand Store
    const recommendations = useRecipeStore ((state) => state.recommendations);

    // Function to generate recommendations based on Favorite 
    const generateRecommendations = useRecipeStore (
        (state) => state.generateRecommendations
    );


    // when components first mounts , generate recommendations
    useEffect(() => {
        generateRecommendations();
    }, []);



return (
    <div>
        <h2> Recommended Recipes </h2>
        {/* {if there are no recommendations, prompt the user to add favorites} */}
        {recommendations.length === 0 ? (
            <p>No recommendations yet. Add some favorites</p>
        ) : (
            //otherwise, show recommended recipes

            recommendations.map((recipe) => (
                <div key = {recipe.id}>
                    <h3>{recipe.title}</h3>
                    <p>{recipe.description}</p>
                    </div>
            ))
        )}
    </div>
);
};
  export default RecommendationsList;