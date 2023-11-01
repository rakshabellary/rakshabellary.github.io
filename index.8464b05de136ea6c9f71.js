console.log("Hello from index.js!");

$(document).ready(function () {
    setTimeout(function () {
        $('html, body').animate({
            scrollTop: $('#second').offset().top
        }, 300);
    }, 5000);
});