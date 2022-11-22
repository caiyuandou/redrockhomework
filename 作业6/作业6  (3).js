const div=document.querySelector('div');
const step=(time)=>{
return new Promise((resolve)=>{
    setTimeout(()=>{
        resolve(div.style.left=div.offsetLeft+20+'px');
    },time);
});
}
async function change(){
      let time1=await step(150);
      div.style.left=div.offsetLeft+20+'px';
      let time2=await step(150);
      div.style.left=div.offsetLeft+20+'px';
      let time3=await step(150);
      div.style.left=div.offsetLeft+20+'px';
}


    
    
    
    
    










