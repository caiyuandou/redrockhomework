const a=async()=>{



    const res= await fetch('https://taskapi.chovrio.club/chatroom',{
    method:"get",
    headers:{
        'Content-type':'application/json',
        'Authorization':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NTgsInVzZXJuYW1lIjoi5ZOIIiwiYXZhdGFyIjoiIiwiaWF0IjoxNjY5NjIyMDQ0LCJleHAiOjE2NzIyMTQwNDR9.tFPWSWWW4l8lZmHBX2G4SY95aiVpM7cyux8L2l1f6Cg',
        
    }
    
    
    
    })
    const data=await res.text()
    console.log(data);
    }
    a()
    