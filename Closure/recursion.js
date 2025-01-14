function createFactorial(){
    let arr ={};
    return function fib(n){
        if(n in arr){
            return arr[n];
        }
        if (n<=1){
            return n
        }
        arr[n]= fib(n-1)+ fib(n-2);
        return arr[n];
    }
}
const fibb = createFactorial();
console.log(fibb(1000))