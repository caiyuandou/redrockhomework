const button=document.querySelector("button");
const text=document.getElementById("text");
const ul=document.querySelector("ul");
//const  div=document.createElement("div")
button.onclick=function(){
    
    if(text.value==""){
        alert("无内容");
        
        return false;
    }
    else{
        
        const li=document.createElement("li");
        li.innerHTML=text.value+"<div>shanchu</div>";
ul.insertBefore(li,ul.children[0]);
    }
    text.value="";

    const div=this.getElementsByTagName("div")


for(const i=0;i<div.length;i++){
    div[i].onclick=function(){



ul.removeChild(this.parentnode);
count--;



    };
}


    


};