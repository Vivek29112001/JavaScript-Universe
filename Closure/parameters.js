// return name  and points

function CreateUser(name){
    let points =0;
    return {
        showName: ()=>{ return name },
        showPoints:(num)=>{
            points +=num;
            return points;
        }
    }
}
const User = CreateUser("alexa");
console.log(User.showName());
console.log(User.showPoints(20));