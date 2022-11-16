const button=document.querySelector("button");
const text=document.getElementById("text");
const ul=document.querySelector("ul");

button.onclick=function(){
    if(text.value==""){
        alert("无内容");
        return false;
    }
    else{
        const li=document.createElement("li");
        li.innerHTML=text.value;
ul.insertBefore(li,ul.children[0]);
    }
    text.value="";
}