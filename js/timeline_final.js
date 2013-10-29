
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

    var year1 = $("#1973").attr("id");
    var year2 = $("#1983").attr("id");
    var year3 = $("#1987").attr("id");
    var year4 = $("#1994").attr("id");
    var year5 = $("#1995").attr("id");
    var year6 = $("#1997").attr("id");
    var year7 = $("#2002").attr("id");
    var year8 = $("#2009").attr("id");
    var year9 = $("#2013").attr("id");
    var year10=$("#end").attr("class");


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
            var p = (year1 - 1970) / 45;
            $('#year').animate({'top': (p * 100) + 0 + '%'}, 700);
        }

        else if ((st / hi) === 2)
        {
            var p = (year2 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 2 + '%'}, 700);
        }

        else if ((st / hi) === 3)
        {
            var p = (year3 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 3 + '%'}, 700);
        }

        else if ((st / hi) === 4)
        {
            var p = (year4 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 4 + '%'}, 700);
        }

        else if ((st / hi) === 5)
        {
            var p = (year5 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 3 + '%'}, 700);
        }

        else if ((st / hi) === 6)
        {
            var p = (year6 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 3.5 + '%'}, 700);
        }

        else if ((st / hi) === 7)
        {
            var p = (year7 - 1970) / 45;
            $('#year').animate({'top': (p * 100) - 4 + '%'}, 700);
        }

        else if ((st / hi) === 8)
        {
            var p = (year8 - 1970) / 45;
            $('#year').animate({'top': (p * 101) - 7 + '%'}, 700);
        }

        else if ((st / hi) === 9)
        {
            var p = (year9 - 1970) / 45;
            $('#year').animate({'top': (p * 101) - 3 + '%'}, 700);
        }
    });

    $('#divs').snapscroll();

    skrollr.init({
        forceHeight: false
    });
});