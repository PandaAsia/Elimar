
    var imgbig=document.getElementById('big');
    var imgsub=document.getElementById('sub').getElementsByTagName('img');

    for(var i=0; i<imgsub.length; i++){
        imgsub[i].addEventListener('click', full_imagen);
    }
    function full_imagen(){
        var imgsrc=this.getAttribute('src');
        imgbig.innerHTML="<img src="+imgsrc+">";
    }
    