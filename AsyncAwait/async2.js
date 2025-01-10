// Question: What happens if the fetch call fails (e.g., network error)? How does the try...catch block ensure proper error handling here?

// Explanation:
// Errors in async functions, whether from the fetch call or response.ok check, are caught by the catch block. This ensures no unhandled rejection occurs, and you can log or handle the error appropriately.


async function getUserData() {  // Declares an asynchronous function named getUserData
    try {  // Begins a try block to handle potential errors
        const response = await fetch('https://api.example.com/user');  // Awaits the completion of the fetch call to the specified URL
        if (!response.ok) {  // Checks if the response status is not OK (i.e., status code is not in the range 200-299)
            throw Error(`Http Error: ${response.status}`);  // Throws an error with the HTTP status code if the response is not OK
        }
        const data = await response.json();  // Awaits the parsing of the response body as JSON
        console.log(data);  // Logs the parsed JSON data to the console
    } catch (error) {  // Begins a catch block to handle any errors thrown in the try block
        console.error('Failed to fetch user data:', error.message);  // Logs an error message to the console if an error occurs
    }
}

getUserData();  // Calls the asynchronous function getUserData




// explination of this code with call stack
// Execution in the Call Stack and Event Loop:
// Call Stack Initialization: When the script starts, the call stack is empty.

// getUserData Function Invocation: The getUserData() call is placed on the call stack.

// Function Execution: The getUserData function execution begins, and the try block is entered.

// Fetch Call: The fetch function is called with the provided URL, and the await keyword pauses the execution of getUserData. The fetch call returns a promise, and the function is effectively suspended at this point.

// Promise Handling: The event loop handles other tasks while waiting for the fetch promise to resolve.

// Fetch Completion: Once the fetch promise is resolved, the response is received, and the await resumes the function execution.

// Response Check: The response status is checked. If the response is not OK, an error is thrown, and control transfers to the catch block. If the response is OK, execution continues.
// JSON Parsing: The .json() method is called on the response, and await pauses the execution until the JSON parsing is complete.

// Data Logging: Once parsing is complete, the parsed JSON data is logged to the console.

// Return from Function: The function execution is complete, and the getUserData call is removed from the call stack.

// Error Handling: If any error occurs during the fetch or JSON parsing, it is caught in the catch block, and an error message is logged to the console.

// The event loop ensures that the non-blocking asynchronous operations (like fetch and response.json()) do not prevent other operations from being executed. When these asynchronous operations complete, the associated promise is resolved, and the paused execution within the await resumes.