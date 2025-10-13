import { useState } from "react";

function AddRecipeForm() {
  // This Define state for the form fields
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");

  //  The State to show errors or success
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // This now Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    // Just a Simple validation
    if (!title || !ingredients || !steps) {
      setError("Please fill in all fields!");
      setSuccess("");
      return;
    }

    const ingredientList = ingredients.split(",").map((item) => item.trim());
    if (ingredientList.length < 2) {
      setError("Please add at least two ingredients (comma-separated).");
      setSuccess("");
      return;
    }

    //  This Create the recipe object
    const newRecipe = {
      title,
      ingredients: ingredientList,
      instructions: steps.split("\n"), // split by new lines
    };

    console.log("✅ Recipe added:", newRecipe);

    // Success message
    setSuccess("Recipe added successfully!");
    setError("");

    // Clear fields
    setTitle("");
    setIngredients("");
    setSteps("");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50 p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ➕ Add a New Recipe
        </h1>

        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            placeholder="e.g. Spaghetti Carbonara"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        {/* Ingredients Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients 
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            rows="3"
            placeholder="e.g. pasta, eggs, cheese, bacon"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          ></textarea>
        </div>

        {/* Steps Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps 
          </label>
          <textarea
            className="w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none"
            rows="4"
            placeholder="Write each step on a new line"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          ></textarea>
        </div>

        {/* Error  and  Success Messages */}
        {error && <p className="text-red-600 mb-4">{error}</p>}
        {success && <p className="text-green-600 mb-4">{success}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
