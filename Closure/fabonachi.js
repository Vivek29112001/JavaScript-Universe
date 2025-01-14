// // Fibonacci
// // basic way

// function Fibonacci(n){
//     let arr =[0,1];
//     for(let i=2; i<n; i++){
//         arr[i]= arr[i-1]+ arr[i-2];
//     }
//     return arr;
// }
// console.log(Fibonacci(10));


// recursive approach

// function fibonacci(){
//     let fib = {};
//     return function createFb(n){
//         if(n in fib) {return fib[n]};
//         if(n <=1 ){ return n};
//         fib[n]= createFb(n-1) + createFb(n-2);
//         return fib[n];
//     }
// }

// const fibbbb = fibonacci();
// console.log(fibbbb(10))


//iterative approach

function fabonachi(n){
    let a = BigInt(0), b= BigInt(1);
    for(let i=2; i<=n; i++){
        const temp = a + b;
        a=b;
        b=temp;
    }
    return n===0 ? a:b;
}
const a = fabonachi(10000000);
console.log(a)



// using closure

function fabonachi() {
    let a = BigInt(0), b = BigInt(1);
    return function closurefunc(n) {
        for (let i = 0; i <= n; i++) {
            const temp = a + b;
            a = b;
            b = temp;
        } return n === 0 ? a : b;
    }

}
const fab = fabonachi();
console.log(fab(1000))