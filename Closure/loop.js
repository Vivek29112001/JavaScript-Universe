function createArray(){
    let arr=[];
    for(let i=0; i<3; i++){
        arr[i]= function(){
            return i;
        };
    }
    return arr;
}
const arrc = createArray();
console.log(arrc[0]());
console.log(arrc[1]());
console.log(arrc[2]());