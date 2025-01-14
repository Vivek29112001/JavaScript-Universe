function level1(a){
    return (b)=>{
        return (c)=>{
            return (d)=>{
                return a+b+c+d;
            }
        }
    }
}
const level2 = level1(1)(2)(3)(4)
console.log(level2)