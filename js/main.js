$(document).ready(function(){
    var imgintens=$('.slider li').length;
    var imgpos=1;

    for(i=1; i<=imgintens; i++){
        $('.paginacion').append('<li><span class="fas fa-circle"></span></li>');
    }

    $('.slider li').hide();
    $('.slider li:first').show();
    // $('.paginacion li:first').css({'color': '#CD6E2E'});
    $('.paginacion li').click(paginacion);

    function paginacion(){
        var paginacionpos=$(this).index() +1;
        $('.slider li').hide();
        $('.slider li:nth-child('+ paginacionpos+')').fadeIn();
        $('.paginacion li').css({'color': '#858585'});
        $(this).css({'color': '#E6156F'});
        imgpos=paginacionpos;
    }

    setInterval(function(){
        nexslider()
    }, 4000);

    function nexslider(){
        if(imgpos>=imgintens){
            imgpos=1;
        }else{
            imgpos++;
        }
        $('.paginacion li').css({'color': '#858585'});
        $('.paginacion li:nth-child('+ imgpos+')').css({'color': '#E6156F'});
        $('.slider li').hide();
        $('.slider li:nth-child('+ imgpos+')').fadeIn();

    }
});