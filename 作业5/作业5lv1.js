let span=document.querySelectorAll("span");
console.log(span)
function changecolor(){
   span.forEach((item)=>{
    item.style.backgroundColor="white"
   
});
}
function returncolor(){
    span.forEach((item)=>{
    item.style.backgroundColor="black";
})
}