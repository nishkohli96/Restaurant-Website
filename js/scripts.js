
$(document).ready(function(){
    $("#myCarousel").carousel({ interval : 2000 });  //data-interval="3000" for html part
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("span").hasClass('fa-pause')) {
            $("#myCarousel").carousel('pause');
            $("#carouselButton").children("span").removeClass('fa-pause');
            $("#carouselButton").children("span").addClass('fa-play');
        }
        else if ($("#carouselButton").children("span").hasClass('fa-play')){
            $("#myCarousel").carousel('cycle');
            $("#carouselButton").children("span").removeClass('fa-play');
            $("#carouselButton").children("span").addClass('fa-pause');                    
        } 
    });

    // Javascript code to trigger the modals
    $("#loginLink").click(function(){
        $('#loginModal').modal('show');
    });
    $("#reserveTableLink").click(function(){
        $('#reserveTableModal').modal('show');
    })   
})