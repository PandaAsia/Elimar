var modal= document.getElementById("openModal");
var btn = document.getElementById("modal_open");
var btn_close=document.getElementsByClassName("close")[0];

btn.onclick=function(){
    modal.style.display="block";
   
}

btn_close.onclick=function(){
    modal.style.display="none";
}

window.onclick=function(event){
    if(event.target==modal){
        modal.style.display="none";
    }
}