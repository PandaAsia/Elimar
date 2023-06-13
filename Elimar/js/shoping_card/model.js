var modal_compra=document.getElementById("view_modal_compra");
var btn_modal=document.getElementById("open_modal_compra");
var btn_modal_close=document.getElementsByClassName("close")[0];

btn_modal.onclick=function(){
    modal_compra.style.display="block";
}
btn_modal_close.onclick=function(){
    modal_compra.style.display="none";
}
window.onclick=function(evento){
    if(evento.target==modal_compra){
        modal_compra.style.display="none";
    }
}