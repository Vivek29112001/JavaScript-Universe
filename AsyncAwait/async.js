// Question: Why does the above code handle the requests sequentially, and how can you refactor it to handle them concurrently?

// Explanation:
// Sequential execution can slow down the process because the await pauses execution for each request to complete before moving to the next. You can refactor this to execute all requests concurrently using Promise.all.


async function fetchData() { //you have made a async function for fatching the data
    const urls = ['https://api1.com/data', 'https://api2.com/data', 'https://api3.com/data'];  //here urls contain 3 arrays 
    const results = [];  // it is an empty array

    for (const url of urls) {   // this is a for...it loop which iterates over each URL in the urls array
        const response = await fetch(url);   //here the fetch function is called with the current url. The await keyword pauses the execution of the loop until the fetch request is completed and a response is received.
        const data = await response.json();  //once the response is received now again await keyword pause the execution until the JSON parsing is completed , resulting is the daa variable containing the parsed JSON data.
        results.push(data);  //the parsed data is then pushed into the result array
    }
    return results; //after the loop finished it will return a result array which now contain the data from all three API
}
fetchData()
    .then(data => console.log(data)) // it handle the resolve value of fatch data
    .catch(err => console.error(err)); // it will handle the error of the fatch data