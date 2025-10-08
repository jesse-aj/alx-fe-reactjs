//This will be used to manage API calls 
import axios from "axios";

/**
 * Fetches the user data from the GitHub API.
 * @param {string} username - The GitHub username to search for.
 * @returns {Promise<object>} - The user data from GitHub.
 */

export async function fetchUserData  (username) {
    try {
        // make a grt request to the Gitub api

        const response = await axios.get(` https://api.github.com/users/${username}`) ;

        //Return the data part of the response

        return response.data;
    }
    catch (err) {
        console.error("Error fetching user data", err) ;
        throw err; // Rethrow the error so that the components handle it
    }
}


export async function searchUsers ({Githubusername, location, minimumRepositories}) {
    try {
        // this is where we build the query
        let query =  Githubusername || "";

        if (location) query +=`+location:${location}`; // this gives a condition if the location is filled (add location filter)
        if (minimumRepositories) query +=`+repos:>${minimumRepositories}`; // this gives a condition to check if this feild is filled am meets the minimum requirements ( add repo filter)
          // this the api endpoint that takes the correct endpoint for the query (makes the query safe)
        const url = `https://api.github.com/search/users?q=${encodeURIComponent(query)}`;
    // Normal fetching code and returning a list of users
        const response= await axios.get(url);
        return response.data.items ;

    } // normal catching errors
    catch (error) {
        console.error("Error Searching Github Users", error);
        throw error;
    }

}