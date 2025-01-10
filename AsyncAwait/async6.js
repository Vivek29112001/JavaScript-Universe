// Question: What will be the order of execution of logs, and why? Modify the code to demonstrate a deadlock scenario using await.

// Explanation:
// The logs Start and Do something else while waiting... appear immediately, as fetchData starts asynchronously. Understanding this flow is crucial to avoid blocking or deadlocks caused by misplaced await calls or circular dependencies.

//async/await deadlock

async function fetchData(){
    console.log("fetch data...");
    const data =await new Promise((resolve)=> setTimeout(()=> resolve('Data fetched')))
    console.log(data);
    return data;
}

async function main(){
    console.log('starting')
    const result = fetchData(); // if you will not use awit in this line it will go in pending state 
    console.log("Do something else while waiting")
    console.log(result);
}

main();