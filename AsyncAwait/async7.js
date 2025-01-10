// Question: What happens when you run the above code, and why? Rewrite it to ensure that an infinite loop does not occur.

// Explanation:
// This creates a recursion with no base case, resulting in a stack overflow. Understanding recursive async functions is critical to avoid such pitfalls.

// Avoide infinite await

async function infiniteawait(){
    const result = await infiniteawait();
    return result;
}
infiniteawait().catch(console.error);


// to solve this problem add a basic case in the recursion

async function infiniteAwait(counter = 0) {
    // Base case to prevent infinite recursion
    if (counter >= 5) {
      return "Done!";
    }
  
    console.log(`Call number: ${counter}`);
    const result = await infiniteAwait(counter + 1);
    return result;
  }
  
  infiniteAwait().then(console.log).catch(console.error);
  