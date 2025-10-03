import {create} from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  searchTerm:  "",
  setSearchTerm: (term) => set ({searchTerm: term}),


  filteredRecipes: [],
filteredRecipes : () => set ( state => ({
  filteredRecipes:state.recipes.filter(recipe => 
    recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
  )
})),



  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),



  deleteRecipe: (id) => 
    set((state) => ({
    recipes: state.recipes.filter((recipe) => recipe.id !== id),
  })),

updateRecipe : (updatedRecipe) => set((state) => ({
  recipes: state.recipes.map((recipe) => 
    recipe.id === updatedRecipe.id ? updateRecipe: recipe),
})),




  setRecipes: (recipes) => set({ recipes })
}));


export default useRecipeStore;
