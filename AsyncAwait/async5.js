// Question: How would you optimize the getUserAndPosts function to make both fetchUser and fetchPosts run concurrently when possible, and what would be the impact on the results?

// Explanation:
// The current implementation waits for fetchUser to resolve before calling fetchPosts. You can optimize it using Promise.all, provided fetchPosts does not depend on the user object. This improves performance but requires careful handling of dependencies.



async function fetchUsers(){
    return new Promise((resolve)=> setTimeout(()=> resolve({id:1, name:'John Doe'}),2000));
}

async function fetchPosts(userId){
    return new Promise((resolve)=> setTimeout(()=> resolve([`Post1 by user ${userId}`, `Post1 by user ${userId}`]),1000));
}

async function getUserAndPosts(){
    const user = await fetchUsers();
    const posts = await fetchPosts(user.id);
    return (user, posts)
}
getUserAndPosts().then(console.log).catch(console.error)