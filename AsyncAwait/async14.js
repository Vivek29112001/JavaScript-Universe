// Question 14: Cancellation with Async/Await
// Question: How does the AbortController enable cancellation of the fetch request? Extend the code to allow manual user cancellation before the timeout expires.

// Explanation:
// AbortController provides a signal to communicate abort events to the fetch call. Combining it with user-driven events, like a button click, enables manual cancellation.

function cancellableFetch(url, signal){
    return new Promise((resolve,reject)=>{
        const controller = new AbortController();
        const timeout = setTimeout(()=>{
            controller.abort();
            reject(new Error('Fetch cancelled'));
        },signal);

        fetch(url, { signal: controller.signal})
        .then((response)=>{
            clearTimeout(timeout);
            resolve(response.json);
        })
        .catch((error)=>{
            if(error.name ===' aboutError'){
                reject(new Error('Fetch cancelled'));
            }else{
                reject(error);
            }
        })
    })
}

(async function () {
    try {
      const data = await cancellableFetch('https://javascript.info/currying-partials', 2000);
      console.log('Fetched data:', data);
    } catch (error) {
      console.error(error.message);
    }
  })();