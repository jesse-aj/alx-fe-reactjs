import React from "react";
import useRecipeStore from "./recipeStore";

// this component displays all the recipe that the user has marked as favorite

const FavoriteList = () => {

    // Get Raw data from the store
    const recipes = useRecipeStore (state => state.recipes);
    
    const favorites = useRecipeStore ((state) => state.favorites);
 // Derive the favorite recipe objects seperately 

 const favoriteRecipes = favorites
.map (id => state.recipes.find((recipe) => recipe.id === id
))
.filter (Boolean);  // this removes undefined incase a recipe is missing 
 

return (
    <div>
        <h2>My Favorites</h2>
{/* //SHOW A MESSAGE IF THERE ARE NO Favorite */}
{favorites.length === 0 ? (
    <p>No Favorite yet</p>
)   : (
    //Otherwise , show each favorite recipe's details

    favorites.map((recipe) =>
    recipe ? (
        <div key= {recipe.id}>
            <h3>{recipe.title}</h3>
            <p> {recipe.description}</p>
            </div>
            ) : null
    ))
}
 </div>
);

};


export default FavoriteList;