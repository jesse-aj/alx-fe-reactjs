import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";




const Search = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    Githubusername: "",
    location: "",
   minRepos: "",
  });
    
  const [users,setUsers] = useState([]); // this stores the git hub users data in an array
  const [loading,setLoading] = useState(false);
  const [error,setError] = useState("");


 // this handles change 
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


 // this handles submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

     try {
        // this calls the service function to fetch Github user
        const results = await searchUsers
         ({
          Githubusername: formData.Githubusername,
          location: formData.location,
         minRepos: formData.minRepos,
         });

 
        setUsers(results);
     } catch (error) {
        setError("Looks like we cant find the user");
     }  finally {
        setLoading(false);
     }
  };



  return (
   <div className ="max-w-md mx-auto mt-10 p-4 bg-blue-200 rounded-lg shadow">

    <form
      onSubmit={handleSubmit}
      className="p-4 bg-white rounded-lg shadow"
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

       <label className="block">
          Location:
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-1"
            placeholder="e.g. Ghana"
          />
        </label>

        <label className="block">
          Minimum Repositories:
          <input
            type="number"
            name= "minRepos"
            value={formData.minRepos}
            onChange={handleChange}
            className="block w-full p-2 border rounded mt-1"
            placeholder="e.g 10"
            min="5"
          />
        </label>


      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </form>
   


    <div className = "mt-6"> 
        {/* Checks if loading is true  and diplay the loading... text, after it checks for errors , if there are no errors it 
        checks if the data or github name is true and dispalty it */}
        {loading && <p className="text-green-600">loading...</p>}

        {error && <p className="text-red-500"> {error} </p>}
         {/* this displays the list of github profiles in a style */}

         { users.length > 0 && (
          <div className="grid gap-4">
            {users.map ((user) => (
             <div
             key= {user.id}
             className="bg-white p-4 rounded-lg shadow flex items-center gap-4">
               
             <img
            src={user.avatar_url}
            alt={user.login}
            className="w-16 h-16 rounded-full border-2 border-blue-500"
          />
          <div>
            <h3 className="font-semibold text-lg">{user.login}</h3>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline text-sm"
            >
              View Profile
            </a>
          </div>
        </div>
      ))}
    </div>
  )}
</div>
</div>


  )};
export default Search;