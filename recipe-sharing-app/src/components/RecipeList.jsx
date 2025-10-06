import { Link } from "react-router-dom";
import useRecipeStore from './recipeStore';
import FavoriteButton from "./FavoriteButton";

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div>
      {filteredRecipes.length === 0 ? (
        <p>No Recipes found</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>
                {recipe.title}
              </Link>
                <FavoriteButton recipeId={recipe.id} />
            </h3>
            <p>{recipe.description}</p>
          
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
