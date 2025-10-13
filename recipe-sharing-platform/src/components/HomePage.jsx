import { useState, useEffect } from "react";
import  { Link } from "react-router-dom";
import recipeData from "../data.json";

function HomePage () {
    const [recipes, setRecipes] = useState([]);
   
   useEffect(() => {
// this will load the data when the components mounts
   
   setRecipes(recipeData)
}, 
[]); // this is just an empty dependency array that runs once on mount 

return (
     <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🍽️ Our Delicious Recipes
      </h1>

      
        <div className="grid gap-6 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {recipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-6"
            >
              {/* Image (optional placeholder if no image in JSON) */}
              <img
                src={recipe.image}
                alt={recipe.title}
                className="rounded-lg w-full h-48 object-cover mb-4"
              />

              {/* Recipe title */}
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {recipe.title}
              </h2>

          
              <p className="text-gray-600 text-s mb-3">{recipe.summary}</p>


              {/* Action button */}
              <Link to = {`recipe/${recipe.id}`}>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                View Recipe
              </button>
              </Link>
            </div>
          ))}
        </div>
    </div>
  );
}

export default HomePage;