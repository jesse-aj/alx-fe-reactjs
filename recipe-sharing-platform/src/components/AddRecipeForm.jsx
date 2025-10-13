import { useState } from "react";

function AddRecipeForm() {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({}); 



  // Validation function 
  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required";
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";
    setErrors(newErrors);

    // return true if no errors
    return Object.keys(newErrors).length === 0;
  };
 // this handles submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      // success (you can log or show message)
      alert("Recipe added successfully!");
      // reset fields
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (



    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg md:5"
      >

        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                     ➕ Add a New Recipe
              </h1>
        

        {/* Title */}
        <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Spaghetti Carbonara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
      />
        {errors.title && <p className="text-red-500 text-sm mb-2">{errors.title}</p>}

        {/* Ingredients */}
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        ></textarea>
        {errors.ingredients && (
          <p className="text-red-500 text-sm mb-2">{errors.ingredients}</p>
        )}

        {/* Instructions */}
        <textarea
          placeholder="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          className="w-full border p-2 rounded mb-2"
        ></textarea>
        {errors.instructions && (
          <p className="text-red-500 text-sm mb-2">{errors.instructions}</p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;

//     <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
//       <form
//         onSubmit={handleSubmit}
//         className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
//       >
//         

//         {/* Title Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Recipe Title
//           </label>
//           
//         </div>

//         {/* Ingredients Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Ingredients (comma-separated)
//           </label>
//           <textarea
//             className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             rows="3"
//             placeholder="e.g. pasta, eggs, cheese, bacon"
//             value={ingredients}
//             onChange={(e) => setIngredients(e.target.value)}
//           ></textarea>
//         </div>

//         {/* Steps Field */}
//         <div className="mb-4">
//           <label className="block text-gray-700 font-medium mb-2">
//             Preparation Steps
//           </label>
//           <textarea
//             className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
//             rows="4"
//             placeholder="Write each step on a new line"
//             value={steps}
//             onChange={(e) => setSteps(e.target.value)}
//           ></textarea>
//         </div>

//         {/* Error + Success Messages */}
//         {error && <p className="text-red-600 mb-4">{error}</p>}
//         {success && <p className="text-green-600 mb-4">{success}</p>}

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
//         >
//           Submit Recipe
//         </button>
//       </form>
//     </div>
//   );
// }

// export default AddRecipeForm;