function person(name, age){
    let PersonName = name;
    let PersonalAge = age;
    return{
        getName : function(){
            return PersonName;
        },
        getAge: function(){
            return PersonalAge;
        },
        incrementAge : function(){
            PersonalAge++;
        }
    }
}
const jsoss = person("apple", 23);
jsoss.incrementAge();
console.log(jsoss.getName(), jsoss.getAge());