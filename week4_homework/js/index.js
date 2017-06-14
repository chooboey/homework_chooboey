var show = true;

$('#doSomething').click(function(){
    if(show) {
        $('#circle').hide();
        show = false;
    } else {
        $('#circle').show();
        show = true;
    }
});

$('#doSomething2').click(function(){
    if(show) {
        $('#circle2').fadeOut();
        show = false;
    } else {
        $('#circle2').fadeIn();
        show = true;
    }
});

$('#doSomething3').click(function(){
    if(show) {
        $('#circle2').slideUp();
        show = false;
    } else {
        $('#circle2').slideDown();
        show = true;
    }
});


/*
$('#circle').animate({
    marginLeft: "10%"
}, 500);
*/
