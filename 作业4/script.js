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
const{name}=stu;
console.log(name);

let[h1,h2,h3]=["play","run","sing"];
console.log(h1,h2,h3);




const{address:{home}}=stu;
console.log(home);

const{title}=stu;
console.log(title);
const[,{year}]=title;
console.log(year);








