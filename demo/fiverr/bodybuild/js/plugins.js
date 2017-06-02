var vid = document.getElementById("bg-video");
vid.volume = 0;
vid.playbackRate = 0.5;

// Avoid `console` errors in browsers that lack a console.
(function ($) {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error'
        , 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log'
        , 'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd'
        , 'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
    $(function () {
        $('.smoth a[href*="#"]:not([href="#"])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
}(jQuery));
// Place any jQuery/helper plugins in here.