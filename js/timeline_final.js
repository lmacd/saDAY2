
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
    $('#skrollr-body').css({'font-size':16*scale+'px'});

    var year1 = $("#wrapper1").attr("title");
    var year2 = $("#wrapper2").attr("title");
    var year3 = $("#wrapper3").attr("title");
    var year4 = $("#wrapper4").attr("title");
    var year5 = $("#wrapper5").attr("title");
    var year6 = $("#wrapper6").attr("title");
    var year7 = $("#wrapper7").attr("title");
    var year8 = $("#wrapper8").attr("title");
    var year9 = $("#wrapper9").attr("title");
    var year10=$("#end").attr("title");


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
        
     /*  else if((st / hi)==9.3)
             {
            var p = (year10 - 1970) / 45;
            $('#year').animate({'top': (p * 101) - 3 + '%'}, 700);
        }*/

    });

    $('#divs').snapscroll();

    skrollr.init({
        forceHeight: false
    });
});