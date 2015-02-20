/**
 * Created by thordurth on 18.2.2015.
 */
$( document ).ready(function(){

    $(".notes div").hover(function(){
        $("#"+$(this).attr('id')+"Text").fadeIn();
    }, function(){
        $("#"+$(this).attr('id')+"Text").fadeOut();
    });

});