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

$(".accordian").on('click',function(){
    //alert(1);
    var accordian = $(this).children('i').attr('class');
    console.log(accordian);
    if(accordian == "bi bi-caret-down-fill color-tia pr-2")
    {
        $(this).children('i').removeClass('bi-caret-down-fill');
        $(this).children('i').addClass('bi-caret-right-fill');

        $("#"+$(this).attr('data-id')).hide();
    }
    else
    {
        if(accordian == "bi color-tia pr-2 bi-caret-right-fill")
        {
            $(this).children('i').removeClass('bi-caret-right-fill');
            $(this).children('i').addClass('bi-caret-down-fill');
            $("#"+$(this).attr('data-id')).show();
        }
        else
        {
            if(accordian == "bi color-tia pr-2 bi-caret-down-fill")
            {
                $(this).children('i').removeClass('bi-caret-down-fill');
                $(this).children('i').addClass('bi-caret-right-fill');
                $("#"+$(this).attr('data-id')).hide();
            }
            else
            {
                $(this).children('i').removeClass('bi-caret-right-fill');
                $(this).children('i').addClass('bi-caret-down-fill');
                $("#"+$(this).attr('data-id')).show();
            }
        }
    
        
    }


});