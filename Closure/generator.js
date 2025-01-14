function predefine(n){
    let a =0 , b=1;
    while(n --> 0){
        [a,b] = [b, a+b];
    }
    return a;
}
console.log(predefine(12))