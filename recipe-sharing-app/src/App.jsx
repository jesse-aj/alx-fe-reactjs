import {  BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import FavoriteList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <h1> Recipe Sharing App</h1>
      <Routes>
        <Route path = "/"
         element = {
         <>
         <SearchBar />
         <RecipeList />
         <AddRecipeForm/>
         <FavoriteList />
         <RecommendationsList />
         </>
        } />

     {/* Individual recipe page - uses recipe ID from URL */}

<Route path = "/recipes/:id" element = {<RecipeDetails />} />
</Routes>
    
    </Router>
  );

}

export default App;
