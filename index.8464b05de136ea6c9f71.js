console.log("Hello from index.js!");

$(window).load(function () {
    $('body').delay(5000)
        .animate({
            'scrollTop': $('#second').offset().top
        }, 300);
});