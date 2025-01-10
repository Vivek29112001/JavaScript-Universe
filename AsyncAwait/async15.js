// Question 15: Dynamic Parallelism with Async/Await
// Question: How does batch processing with Promise.all improve efficiency while maintaining control over parallelism?
//  Modify the code to handle failures gracefully by retrying failed requests in the next batch.

// Explanation:
// Batch processing allows controlled parallelism, avoiding overloading the server. 
// Handling failures requires retrying specific requests within new batches while maintaining the current results.

async function fetchDataInBatches(urls, batchSize, maxRetries = 3) {
    const results = [];
    const failedRequests = [];
  
    for (let i = 0; i < urls.length; i += batchSize) {
      const batch = urls.slice(i, i + batchSize);
      const batchResults = await Promise.all(
        batch.map((url) =>
          fetch(url)
            .then((response) => response.json())
            .catch((err) => {
              if (failedRequests.includes(url)) {
                // If the request has already failed maxRetries times, reject it
                throw err;
              } else {
                // Add the failed request to the list of failed requests
                failedRequests.push(url);
                // Return a placeholder value to indicate failure
                return null;
              }
            })
        )
      );
  
      // Filter out failed requests from the batch results
      const successfulResults = batchResults.filter((result) => result !== null);
      results.push(...successfulResults);
  
      // If there are failed requests, add them to the next batch
      if (failedRequests.length > 0) {
        const nextBatch = failedRequests.slice(0, batchSize);
        failedRequests.splice(0, batchSize);
        // Recursively call the function with the next batch of failed requests
        const retryResults = await fetchDataInBatches(nextBatch, batchSize, maxRetries - 1);
        results.push(...retryResults);
      }
    }
  
    return results;
  }