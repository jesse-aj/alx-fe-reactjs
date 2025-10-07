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
        console.error("Error fetching user data", error) ;
        throw err; // Rethrow the error so that the components handle it
    }
}
