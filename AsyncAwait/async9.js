async function getUser(){
    console.log("fetching user...");
    const user = await new Promise(resolve => setTimeout(()=> resolve({id:1, name:'apple'}),2000));
    console.log("User fetching: " + user);
    return user;
}

async function getUserOrder(userId){
    console.log("fetching order for user: ", userId);
    const order = await new Promise(resolve=> setTimeout(()=> resolve([101,102,103]),2000));
    console.log('Order detched: ' + order);
    return order;
}

async function getOrderDetails(orderId){
    console.log("fetching order details", orderId);
    const details = await new Promise(resolve => setTimeout(() => resolve({ orderId, item: 'Laptop' }), 2000));
    console.log('Order details fetched: ' + details);
    return details;
}

async function fetchCompleteOrderDetails(){
    const user = await getUser();
    const orders = await getUserOrder(user.id);
    const orderDetails = [];
    for ( const order of orders){
        orderDetails.push(await getOrderDetails(order))
    }
    return orderDetails;
}

fetchCompleteOrderDetails()
.then(console.log)
.catch(console.error);