$( document ).ready(function() {
    console.log( "ready!" );
    $('.other-links a').first().delay(900).animate({'opacity':'1'},3500);
    $('#logo').delay(800).animate({'opacity':'1'},800);
    $('.navi').delay(1200).animate({'opacity':'1'},1000);
    $('#gate').delay(800).animate({'opacity':'1'},1000);
    $('#construction').delay(800).animate({'opacity':'1'},1000);
    
});