$(document).on("scroll", function(){
    if($(document).scrollTop() > 86){
      $("#banner").addClass("shrink");
      $("#banner").addClass("opacity-1");
      $("#banner").removeClass("bg-light");
    }
    else
    {
        $("#banner").removeClass("shrink");
        $("#banner").removeClass("opacity-1");
        $("#banner").addClass("bg-light");
        
    }
});