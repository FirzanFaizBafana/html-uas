$(document).ready(function () {
    $('.banner_slider').owlCarousel({
        loop: true,
        margin: 0,
        item: 1,
        smartSpeed: 2000,
        autoHeight: false,
        autoplay: true,
    });
});

$(document).ready(function () {
    
    var endDate = new Date('2024-02-29T23:59:59').getTime();

    var updateCountdown = function () {
        var now = new Date().getTime();
        var distance = endDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        $('#days').text(days);
        $('#hours').text(hours);
        $('#minutes').text(minutes);
        $('#seconds').text(seconds);

        if (distance < 0) {
            clearInterval(interval);
            $('#countdown').html('EXPIRED')
        }
    };

    var interval = setInterval(updateCountdown, 1000);
});