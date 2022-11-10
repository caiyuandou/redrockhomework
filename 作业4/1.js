const stu = {
    name: 'MING',
    hobby: ['play', 'run', 'sing'],
    address: {
        school: 'ChongQing',
        home: 'HENAN'
    },
    title: ['student',{year:2022}],
    skills: {
        speak() {
            this.name = 'JACK';
        }
    }
}
const fn=function(obj){
   Function.prototype.fn=function(speak){
    if(speak===null||speak===undefined){
        speak=window

    }else{
        speak=Object(speak);
    }
   }
    const arg=[...arguments].slice(1);
    speak[fn]=this;
    let result =speak[fn]();
    delete speak[fn];
    return result;







    
}
fn(stu)
console.log(stu.name);
