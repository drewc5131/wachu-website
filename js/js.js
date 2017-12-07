$(document).on('scroll', function (e) {
    if ($(document).scrollTop() > 12) {
        $('.navbar').addClass("scrolled");
    }
    else {
        $('.navbar').removeClass("scrolled");
    }
});
