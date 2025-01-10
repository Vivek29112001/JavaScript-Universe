// Question 12: Nested Async Calls with Dependencies
// Question: Explain the role of Promise.all in fetching the children data. How can this design be extended to handle multiple parent IDs with nested async/await?

// Explanation:
// Promise.all is used here to fetch all child data concurrently for a given parent. Extending this design to handle multiple parents would require nested Promise.all calls or recursive async/await logic.

async function fetchHierarchy(parentId){
    // fetchHierarchy is a async function having a paramenter of parentId
    console.log(`Fetching data for parent ${parentId}`)
    // printing the parentId in console

    const parentData = await new Promise(resolve => setTimeout(()=> resolve({id: parentId, name : `Parent ${parentId}`}),1000));
    //parentData is a variable and await promise is asigned to it and will wait till the promise is completed or loop is completed

    const childData = await Promise.all(
        // childData is a variable which will wait till all promise will not resolve
        [1, 2, 3].map(childId =>
          new Promise(resolve =>
            setTimeout(() => resolve({ id: childId, parentId, name: `Child ${childId}` }), 1000)
          )
        )
      );
    
      return { parent: parentData, children: childData };
    }
    
    fetchHierarchy(1)
      .then(console.log)
      .catch(console.error);