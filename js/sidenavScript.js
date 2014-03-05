$(document).ready(function () {
    $('.planet-text').click(function () {
        var planetName = $(this).children("a").text();
        $('.infoText').each(function () {
            if ($(this).is("#" + planetName.toLowerCase() + "Info") && $(this).css("opacity") == 1) {
                $(this).animate({ opacity: 0, 'marginTop': +100 }, 500);
            }
            else if ($(this).is("#" + planetName.toLowerCase() + "Info")) {
                $(this).animate({ opacity: 1, 'marginTop': -100 }, 500);
            }
            else {
                $(this).animate({ opacity: 0, 'marginTop': +100 }, 500);
            }
        });
    });
});