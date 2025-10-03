import { Routes, Route } from "react-router-dom";
import RecipeList from "./components/RecipeList";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeDetails from "./components/RecipeDetails";

function App() {
  return (
    <div>
      <h1> Recipe Add</h1>
      <Routes>
        <Route path = "/" element = {
         <>
         <RecipeList />
         <AddRecipeForm/>
         </>
        } />



<Route path = "/recipes/:id" element = {<RecipeDetails />} />
</Routes>
    
    </div>
  );

}

export default App;
