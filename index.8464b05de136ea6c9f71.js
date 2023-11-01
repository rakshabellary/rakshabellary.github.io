console.log("Hello from index.js!");

$(document).ready(function () {
    $('body').delay(5000)
        .animate({
            'scrollTop': $('#second').offset().top
        }, 300);
});