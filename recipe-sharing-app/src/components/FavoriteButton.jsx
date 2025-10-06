import React from "react";
import useRecipeStore from "./recipeStore";


//This component uses zustand to allow a user to favourie or unfavorite a recipe
const FavoriteButton = ({recipeId}) => {
    //this gets the list of favorite from the zustand store
    const favorites = useRecipeStore((state) => state.favorites);

    //funtion to add arecipe to favorite 
    const addFavorites = useRecipeStore ((state) => state.addFavorites);

    // the function that removes a recipe from favorite
    const removeFavorite = useRecipeStore((state) => state.removeFavorite);

    //this checks if the specific recipe is already in Favorite List 
    const isFavorite = favorites.includes(recipeId)

   return (
    <button
    //this toggles between adding and removing a recipe from Favorite dependin on current state
    onClick = {() => 
        isFavorite ? removeFavorite(recipeId) : addFavorites(recipeId)
    }
    >

    {isFavorite ? "💔 Remove Favorite" : "❤️ Add Favorite"}
      </button>
   );
};

export default FavoriteButton;