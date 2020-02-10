$(document).ready(function() {
    $('a[scroll]').click(function() {
        var scrollTo = $('#' + $(this).attr("scroll"));
        $('html, body').animate({
            scrollTop: scrollTo.offset().top
        }, 'slow');
    });

    $('button[scroll]').click(function() {
        var scrollTo = $('#' + $(this).attr("scroll"));
        $('html, body').animate({
            scrollTop: scrollTo.offset().top
        }, 'slow');
    });
});