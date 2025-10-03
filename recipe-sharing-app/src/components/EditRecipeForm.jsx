import  useRecipeStore  from './recipeStore';
import { useState } from "react";

  const EditRecipeForm = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(r => r.id === reipeId)
    );


    const updateRecipe = useRecipeStore(state => state.updateRecipe);

    const [title, setTitle] = useState (recipe?.tittle || "");
    const[description , setDescription] = useState(recipe?.description || "");


    const handleSubmit = (event) => {
      event.preventDefault();
      updateRecipe ({id : recipeId, title , description });
    };

    return (
             <form onSubmit = {handleSubmit}>
             <input
             type = "text"
             value = {title}
             onChange= {(e) => setTitle(e.target,value)}
             placeholder='Edit title'
             />

             <textarea 
             value= {description}
             onChange = {(e) => setDescription(e.target.value)} 
             placeholder='Edit description'
             />

             <button type = "submit"> Save Changes</button>
</form>

    );

  }
    export default EditRecipeForm;