// //memorization solution
// function createMemo(){
//     let memo ={};
//     return function fabMemo(n){
//         if(n===0 || n===1){
//             return 1;
//         }
//         if(memo[n]){
//             return memo[n]
//         }
//         memo[n] = n*fabMemo(n-1);
//         return memo[n];
//     }
// }
// const memoor = createMemo();;
// console.log(memoor(1000000))

//iterative approach

function createIterativeFactorial() {
    let result = BigInt(1);
    return function factorial(n) {
        
        for (let i = BigInt(2); i <= n; i++) {
            result *= i;
        }
        return result;
    }
}

const iterativeFactorial = createIterativeFactorial();
console.log(iterativeFactorial(300000000)); // Output: 265252859812191058636308480000000
