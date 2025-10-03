import { useParams } from "react-router-dom";
import  useRecipeStore  from './recipeStore';
import EditRecipeForm from "./EditRecipeForm";
import DeleteRecipeButton from "./DeleteRecipeButton";

  const RecipeDetails = ({ recipeId }) => {
    const {id} = useParams();
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    if (!recipe) {
      return <p>Recipe Not Found</p>
    }

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        <EditRecipeForm recipeId={recipeId} />
        <DeleteRecipeButton recipeId={recipeId} />
      </div>
    );
  };


  export default RecipeDetails;