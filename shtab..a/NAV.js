$(document).ready(function () {
    $(window).scroll(function () {
        var scrollPosition = $(this).scrollTop();
        var targetElement = $('#scorol');
        if (scrollPosition > 15) {
            targetElement.addClass('bg-body-tertiary');
        } else {
            targetElement.removeClass('bg-body-tertiary');
        }
    });
});