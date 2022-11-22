const div=document.querySelector('div');
const time=new Promise((resolve,reject)=>{
    setTimeout(()=>
     resolve( div.style.left=div.offsetLeft+20+'px'),150);
}).then(result=>{
    div.style.left=div.offsetLeft+20+'px';
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve( div.style.left=div.offsetLeft+20+'px'),150);
    })
}).then(result=>{
    div.style.left=div.offsetLeft+20+'px';
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve( div.style.left=div.offsetLeft+20+'px'),150);
    })   
})
.then(result=>{
    div.style.left=div.offsetLeft+20+'px';
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve( div.style.left=div.offsetLeft+20+'px'),150);
    })
})
.then(result=>{
    div.style.left=div.offsetLeft+20+'px';
    return new Promise((resolve,reject)=>{
        setTimeout(()=>resolve( div.style.left=div.offsetLeft+20+'px'),150);
    })
})
    
