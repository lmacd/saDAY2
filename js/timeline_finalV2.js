
$(document).ready(function() {
    $('#mainMenu').hide();
    $('#year').hide();
    $('.date').hide();
    $('#mainMenu').slideDown();
    hi = $(window).height();
    wi = $(window).width();

    $(' .wrapper, #intro').css({'height': hi + 'px'});
    $('#end,#endM').css({'height': hi / 4 + 'px'});
    var scale= (hi/680);
    
    //should re-sizing be set for phone too?
    $('#skrollr-body2, #skrollr-body').css({'font-size':16*scale+'px'});

    $("#top,#topM").click(function() {
        $(window).scrollTo('0%', 1000);
        $('#year').css({'top': 0 + '%'});

    });
 
    $(window).scroll(function() {
        var st = $(this).scrollTop();
        if ((st / hi) < 1)
        {
            $('#year').hide();
            $('.date').hide();
            $('#year').css({'margin-top': 0 + '%'});

        }
        
        if ((st / hi) >= 1)
        {
            $('#year').show();
            $('.date').show();
        }
        
        if ((st / hi) === 1)
        {

            $('#year').animate({'top': 6.7 + '%'}, 700);
        }

        else if ((st / hi) === 2)
        {
            $('#year').animate({'top': 26.9 + '%'}, 700);
        }

        else if ((st / hi) === 3)
        {
            $('#year').animate({'top': 39 + '%'}, 700);
        }

        else if ((st / hi) === 4)
        {
            $('#year').animate({'top': 49.3 + '%'}, 700);
        }

        else if ((st / hi) === 5)
        {
            $('#year').animate({'top': 52 + '%'}, 700);
        }

        else if ((st / hi) === 6)
        {
            $('#year').animate({'top': 56.5 + '%'}, 700);
        }

        else if ((st / hi) === 7)
        {
            $('#year').animate({'top': 67.1 + '%'}, 700);
        }

        else if ((st / hi) === 8)
        {
            $('#year').animate({'top': 79.8 + '%'}, 700);
        }

        else if ((st / hi) === 9)
        {
            $('#year').animate({'top': 93.3 + '%'}, 700);
        }
    });

    $('#divs').snapscroll();

    skrollr.init({
        forceHeight: false
    });
});