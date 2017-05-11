$(document).ready(function () {
    $(".js-sidebar").click(function () {
        console.log($(".sidebar").width());
        if ($(".sidebar").width() > 1){
        	$(".sidebar").animate({ width:"0"}, 1500).hide(50);
        	$(".content").animate({ width:"100%"}, 1500);
        }else{
        	$(".sidebar").animate({ width:"30%"}, 1500).show();
        	$(".content").animate({ width:"70%"}, 1500);
        }
    });
});