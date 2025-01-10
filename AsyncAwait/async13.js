function delay(ms){
    return new Promise((_,reject)=>
    setTimeout(()=> reject(new Error('Timeout')),ms));
}
async function fetchDataWithTimeout(url, timeout){
    try{
        const result = await Promise.race([
            fetch(url).then((response)=> response.json()),
            delay(timeout),
        ])
        console.log('Data fetched', result)
    }catch(error){
        console.error("error : ",error.message);
    }
}

fetchDataWithTimeout('https://api.example.com/data', 2000);
