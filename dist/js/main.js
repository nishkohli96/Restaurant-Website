$(document).ready(function(){$("#myCarousel").carousel({interval:2e3}),$("#carouselButton").click(function(){$("#carouselButton").children("span").hasClass("fa-pause")?($("#myCarousel").carousel("pause"),$("#carouselButton").children("span").removeClass("fa-pause"),$("#carouselButton").children("span").addClass("fa-play")):$("#carouselButton").children("span").hasClass("fa-play")&&($("#myCarousel").carousel("cycle"),$("#carouselButton").children("span").removeClass("fa-play"),$("#carouselButton").children("span").addClass("fa-pause"))}),$("#loginLink").click(function(){$("#loginModal").modal("show")}),$("#reserveTableLink").click(function(){$("#reserveTableModal").modal("show")})});