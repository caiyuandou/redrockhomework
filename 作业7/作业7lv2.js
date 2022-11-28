
/*const a=async()=>{



const res= await fetch('https://taskapi.chovrio.club/users/register',{
method:"post",
headers:{
    'Content-type':'application/json'
},
body:JSON.stringify({
username:"哈",
password:"1"
})



})
const data=await res.json()
console.log(data);
}
a()*/

const a=async()=>{



    const res= await fetch('https://taskapi.chovrio.club/users/login',{
    method:"post",
    headers:{
        'Content-type':'application/json'
    },
    body:JSON.stringify({
    username:"哈",
    password:"1"
    })
    
    
    
    })
    const data=await res.json()
    console.log(data);
    }
    a()
    
    
    
    
    
    
    
    
    
    
    
    
    
    












