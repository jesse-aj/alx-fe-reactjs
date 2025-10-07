import { useState } from "react";
import { fetchUserData } from "../services/githubService";



const Search = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Githubusername: ""
  });
    
  const [user,setUser] = useState(null); // this stores the git hub user data
  const [loading,setloading] = useState(false);
  const [error,setError] = useState("");



  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setloading(true);
    setError("");
    setUser(null);

     try {
        // this calls the service function to fetch Github user
        const data = await fetchUserData (formData.Githubusername);
        setUser(data);
     } catch (error) {
        setError("Looks like we cant find the user");
     }  finally {
        setLoading(false);
     }
  };



  return (
   <div className ="max-w-md mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow">

    <form
      onSubmit={handleSubmit}
      className="p-4 bg-gray-100 rounded-lg shadow"
    >
      <h2 className="text-xl font-semibold mb-3"> Search for GitHub Usernames </h2>

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

    <div> 
        
        {loading && <p>loading...</p>}

        {error && <p>{error} </p>}
        {user && (
        <div  className="mt-4 p-4 bg-white rounded-lg shadow text-center">
            <img 
            src = {user.avatar_url}
            alt = {user.login}
            className = "w-24 h-24 mx-auto rounded-full mb-3 border-2 border-blue-500" 
            />

            <h3 className = "text-lg font-semibold"> {user.name || user.login } </h3>

           <a
           href = {user.html_url}
            target = "_blank"
            rel = "nonreferrer"
            className = "text-blue-600 underline"
            >  View the Gitub Profile
            </a>
          </div>
        )}
    </div>
    </div>
  );
};


export default Search;