// Question: What would happen if you replace await with Promise.all in the loop to execute all promises concurrently? Write the modified code.

// Explanation:
// Replacing await with Promise.all removes sequential execution, making all promises start simultaneously, and only logs results after all are resolved. This is more efficient when independent promises are involved.

async function printNumber(){ // creating a async function
    for( let i=0; i<=3; i++){ // used for loop to get  value of i
        const result = await new Promise(resolve => setTimeout(()=> resolve(i),1000)); // inside this a new promise is create . setTimeout is called with delay of 1sec, afte delay the resolve function is called with the current value of i
        console.log(result);
    }
}
printNumber(); // function call

