import { useState } from "react";

const Search = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Githubusername: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    alert(`Thanks ${formData.name}, your form has been submitted successfully!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-3">Contact Us</h2>

      <label className="block mb-2">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <label className="block mb-3">
        Github Username:
        <textarea
          name="Githubusername"
          value={formData.Githubusername}
          onChange={handleChange}
          className="block w-full p-2 border rounded mt-1"
          required
        />
      </label>

      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Search;