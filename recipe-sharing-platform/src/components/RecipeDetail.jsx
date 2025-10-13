import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import recipeData from "../data.json"; 

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const found = recipeData.find((item) => item.id === parseInt(id));
    setRecipe(found);
  }, [id]);

  if (!recipe) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading recipe...</p>
    );
  }

  return (
    <div className="p-8 bg-gray-50 min-h-screen flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-2xl w-full p-6">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-6">{recipe.summary}</p>
      </div>
    </div>
  );
}

export default RecipeDetail;
