import {create} from 'zustand';

const useRecipeStore = create(set => ({
recipes: [ ], //all Recipes
favorites: [ ], //array of favorite recipe ID
recommendations: [ ], //personalizes Suggestions
    //Function to search for recipes by typing either the first letter, a word or an ingredient in the Recipe list
  searchTerm:  "",
  setSearchTerm: (term) => set ({searchTerm: term}),
  filteredRecipes: [],
filterRecipes: () =>
  set((state) => ({
    filteredRecipes: state.recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
      (Array.isArray(recipe.ingredients) &&
        recipe.ingredients.some((ing) =>
          ing.toLowerCase().includes(state.searchTerm.toLowerCase())
        )) ||
      recipe.time?.toString().includes(state.searchTerm)
    ),
  })),

// This adds a Recipe

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

//This Deletes a Recipe

  deleteRecipe: (id) => 
    set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),
// This updates a recipe
updateRecipe : (updatedRecipe) => set((state) => ({
  recipes: state.recipes.map((recipe) => 
    recipe.id === updatedRecipe.id ? updatedRecipe: recipe),
})),

  setRecipes: (recipes) => set({ recipes }),

  //This adds Favorite
  addFavorite : (recipeId) =>
    set((state)=> ({
      favorites:[...new Set ([...state.favorites, recipeId ])], // this avoids duplicate
    })),


    removeFavorite : (recipeId) => 
      set((state)=> ({
        favorites: state.favorites.filter((id) => id !== recipeId) ,
      })),

         //To Generate Recommendations
         generateRecommendations: () => {
          const state =get();

          // the logic that suggest recipes with at least 1 ingredients overlap with favorite

          const favRecipes = state.recipes.filter((r) =>
          state.favorite.includes(r.id)
        );

        let recommend = state.recipes.filter((recipes) => 
        favRecipes.some((fav) =>
          fav.ingredients.some((ing) =>
            recipe.ingredients.include(ing)
      )
      ));



      //this excludes already Favorited ones
      recommend = recommend.filter (
        (recipe) => !state.favorites.includes (recipe.id)
      );

      set ({recommendations :recommend});
         },
}));


export default useRecipeStore;
