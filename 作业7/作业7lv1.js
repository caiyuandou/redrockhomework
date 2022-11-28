const xhr = new XMLHttpRequest();

xhr.open('get','https://taskapi.chovrio.club/poetry?title=帝京篇十首',true);









xhr.send(
    params



);

xhr.onreadystatechange=()=>{

     if(xhr.readyState==4){
       if(xhr.status==200){
        const data=xhr.responseText;
        return data;
       } 




     }




}