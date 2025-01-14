function multiple(factor){
    return function(number){
        return number*factor;
    }
}
const double = multiple(2);
const triple = multiple(20000000000000000000000000000000000);
console.log(double(2))
console.log(triple(10))