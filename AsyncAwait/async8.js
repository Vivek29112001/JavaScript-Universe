// Question: What is the role of async generators in this code, and how does for await...of handle them differently than a regular for...of loop?

// Explanation:
// async generators allow producing values asynchronously in sequence. for await...of consumes these asynchronous values one at a time, waiting for each promise to resolve before proceeding. This is useful for paginated API calls or streaming data.

async function* fetchPages(){
    let page =1;
    while(page<=3){
        const data = await new Promise((resolve)=>setTimeout(()=>resolve(`Data from page ${page}`),1000));
        yield data;
        page++;
    }
}

async function consumerPages(){
    for await( const pageData of fetchPages()){
        console.log(pageData);
    }
}

consumerPages();