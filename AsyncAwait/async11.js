// Question 11: Retry Logic with Async/Await
// Question: How does the retry logic handle failures, and what happens when all attempts fail? How would you modify this code to implement exponential backoff?

// Explanation:
// The retry mechanism ensures multiple attempts before failing completely. Exponential backoff introduces increasing delays between retries to avoid overwhelming the server or network.

async function fetchwithRetry(url, retries = 3) { // Defines an async function with parameters url and retries, where retries defaults to 3
    let lastError;  // Initializes a variable to store the last error 

    for (let i = 0; i < retries; i++) { // Starts a for loop that runs as long as i is less than retries
        try {  // Begins a try block to handle potential errors
            console.log(`Attempt ${i + 1} to fetch ${url}`);  // Logs the current attempt number and URL
            const response = await fetch(url);  // Awaits the fetch call, pausing the function until the promise is resolved
            if (!response.ok) throw new Error(`HTTP Error: ${response.status}`); // If the response is not ok, throws an error with the status code
            return await response.json(); // Awaits the JSON parsing and returns the result if successful
        } catch (error) { 
            lastError = error; // Assigns the caught error to lastError
            console.error(`Attempt ${i + 1} failed: `, error.message); // Logs the failure message and the error
        }
    }
    throw new Error(`Failed to fetch ${url} after ${retries} retries. Last error: ${lastError}`); // Throws an error after all retries fail
}

fetchwithRetry('https://api.example.com/data')
  .then(console.log)  // Logs the result if the fetch is successful
  .catch(console.error);  // Logs the error if all attempts fail
