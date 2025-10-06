import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [], // All recipes
  favorites: [], // Array of favorite recipe IDs
  recommendations: [], // Personalized suggestions

  // Search functionality
  searchTerm: "",
  setSearchTerm: (term) => set({ searchTerm: term }),
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

  // Add a new recipe
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  // Delete a recipe by ID
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((recipe) => recipe.id !== id),
    })),

  // Update an existing recipe
  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((recipe) =>
        recipe.id === updatedRecipe.id ? updatedRecipe : recipe
      ),
    })),

  // Replace entire recipes list
  setRecipes: (recipes) => set({ recipes }),

  // Add to favorites (avoids duplicates using Set)
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...new Set([...state.favorites, recipeId])],
    })),

  // Remove from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Generate personalized recommendations
  generateRecommendations: () => {
    const { recipes, favorites } = get(); // 

    // Get favorite recipe objects
    const favRecipes = recipes.filter((r) => favorites.includes(r.id));

    // Recommend recipes that share ingredients with favorite recipes
    let recommended = recipes.filter((recipe) =>
      favRecipes.some((fav) =>
        fav.ingredients.some((ing) =>
          recipe.ingredients.includes(ing) 
        )
      )
    );

    // Exclude already favorited ones
    recommended = recommended.filter(
      (recipe) => !favorites.includes(recipe.id)
    );

    // Save to store
    set({ recommendations: recommended });
  },
}));

export default useRecipeStore;
