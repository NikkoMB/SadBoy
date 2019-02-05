$( document ).ready(function() {
    console.log( "ready!" );
    $('.other-links a').first().delay(900).animate({'opacity':'1'},3500);
    $('#logo').delay(800).animate({'opacity':'1'},800);
    $('.navi').delay(1200).animate({'opacity':'1'},1000);
    $('#gate').delay(800).animate({'opacity':'1'},1000);
    $('#construction').delay(800).animate({'opacity':'1'},1000);
    $('#world').delay(700).animate({'opacity':'1'},1000);
    $('#bio').delay(1800).animate({'opacity':'1'},1000);
    $('#ig').delay(2800).animate({'opacity':'1'},1000);
    $('#email').delay(3800).animate({'opacity':'1'},1000);
    
});