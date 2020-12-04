$(document).ready(function(){

    // Efecto Rebote
    $("nav a").on('click', function(){
        var target = $(this).attr('href');
        $(target).animate({paddingTop: '4rem'},1000);
    });
    // Fin Efecto Rebote
   
})

