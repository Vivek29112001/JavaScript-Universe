// Question: Why does combining await with .then() work here, and is it a good practice?

// Explanation:
// await pauses until the promise resolves, and .then() processes the resolved value. This works but may add unnecessary complexity. It's generally better to keep consistent usage of await for readability.


async function processNumber(){ //function async declares
    const result = await new Promise((resolve,reject)=>{ //await will pause the function until promise is resolved
        setTimeout(()=> resolve(42), 10000)// setTime out is called to delay the execution for 10 second after the delay is done the resolve function is called with the value of 42
    }).then(value => value *2); //once the promise is resolved the resolved value is multiplied by 2 
    console.log(result); // provide the result of 84
}

processNumber(); // function called