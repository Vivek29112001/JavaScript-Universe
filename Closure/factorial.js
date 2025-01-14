// Basic approach with closure
function createfb(){
    return function factorial(n){
        if(n===0 || n===1){
            return 1;
        }
        return n*factorial(n-1);
    }
}

const ff = createfb();
console.log(ff(30))

