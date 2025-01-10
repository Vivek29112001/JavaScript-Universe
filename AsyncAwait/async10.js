// Question 10: Conditional Await
// Question: How does conditional await affect the execution flow? Modify the code so that the promise is only created if shouldFetch is true without altering its behavior.

// Explanation:
// The current implementation creates a promise regardless of the shouldFetch value. Optimizing it ensures no unnecessary promise creation or execution when shouldFetch is false.


async function fetchData(shouldFetch) { //fetch data is the function which has a parameter name shouldFetch
    const data = shouldFetch
        ? await new Promise(resolve => setTimeout(() => resolve('Fetched data'), 1000))
        : 'Default Data';

    console.log(data);
    return data;
}

fetchData(true).then(console.log).catch(console.error);