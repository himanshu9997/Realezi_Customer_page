$(document).ready(function() {
    // Example: Smooth scroll to sections
    $('a[href^="#"]').on('click', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, 500, 'swing', function() {
            window.location.hash = target;
        });
    });
});
