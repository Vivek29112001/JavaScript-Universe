// increment ++, decrement --; reset ===0
function counter(){
    let count =0;
    return {
        increment : ()=>{
            if(count ==100){
                console.log('stop counting....')
            }else{
                count++;
                return count;
            }
        },
        decrement : ()=>{
            if(count == 0){
                console.log('incremnt to  1 first...')
            }else{
                count --;
                return count;
            }
        },
        reset : ()=>{
            count = 0;
            return count;
        }
    }
}
const ABC = counter();
console.log(ABC.increment());
console.log(ABC.increment());
console.log(ABC.increment());
console.log(ABC.increment());
console.log(ABC.decrement());
console.log(ABC.reset());