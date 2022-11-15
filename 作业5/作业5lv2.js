function checkall(){
    const items=document.getElementsByName("items");
    for(let i=0;i<items.length;i++){
        items[i].checked=true;
    }
}
function checknone(){
    const items=document.getElementsByName("items");
    for(let i=0;i<items.length;i++){
        items[i].checked=false;
    }
}
function checkinvert(){
    const items=document.getElementsByName("items");
    for(let i=0;i<items.length;i++){
        if(items[i].checked){
            items[i].checked=false;
        }
        else{
            items[i].checked=true;
        }
    }
}