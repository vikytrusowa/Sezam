ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.69, 37.48],
        zoom: 9
    });
    myMap.controls.remove('zoomControl');
    myMap.controls.remove('rulerControl');
    myMap.controls.remove('geolocationControl');
    myMap.controls.remove('routeButtonControl');
    myMap.controls.remove('trafficControl');
    myMap.controls.remove('typeSelector');
    myMap.controls.remove('fullscreenControl');
    myMap.controls.remove('searchControl');
}

$('a[href^="#"]').click(function () {
    var target = $(this).attr('href');
    $('html, body').animate({scrollTop: $(target).offset().top}, 1000);
    return false;
});
$(function () {
    $('.heading__open').on('click', function () {
        $('.heading__pagination').toggleClass('heading__pagination--open');
    });
});
$(function () {
    $('.heading__close').on('click', function () {
        $('.heading__pagination').toggleClass('heading__pagination--open');
    });
});
