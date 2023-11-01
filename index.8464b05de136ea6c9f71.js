console.log("Hello from index.js!");

$(document).ready(function () {
    setTimeout(function () {
      $('.typewriter-delay').css('display', 'inline-block');
      setTimeout(function () {
        $('html, body').animate({
          scrollTop: $('#second').offset().top
        }, 300);
      }, 3000);
    }, 7000);
  });