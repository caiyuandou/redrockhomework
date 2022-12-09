Function.prototype.mycall=function(abc){
abc=abc||window;
const fn=Symbol();
abc[fn]=this;
const args=[...arguments].splice(1);
let result=abc[fn](...args);
delete abc[fn];
return result;

}


Function.prototype.myapply=function(abcd){
   abcd=abcd||window;
   const fb=Symbol();
   abcd[fb]=this;
   let result;
   if(arguments[1]){
    result=abcd[fb](...arguments[1]);
   }else{
    result=abcd[fb]();
   }
   delete abcd[fb];
   return result;





}