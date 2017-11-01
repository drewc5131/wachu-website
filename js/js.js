$(document).on('scroll', function (e) {
    if ($(document).scrollTop() > 1)
    {
        $('.navbar').addClass("scrolled");
    }
    else
    {
        $('.navbar').removeClass("scrolled");
    }
});