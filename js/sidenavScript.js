$(document).ready(function () {
    $('.planet-text').click(function () {
        var planetName = $(this).children("a").text();
        $('#planetInfo li p').each(function () {
            if ($(this).is("#" + planetName.toLowerCase() + "Info") && $(this).css('opacity') == 1) {
                $(this).animate({ opacity: 0 }, 1000);
            }
            else if ($(this).is("#" + planetName.toLowerCase() + "Info")) {
                $(this).animate({ opacity: 1 }, 1000);
            }
            else {
                $(this).animate({ opacity: 0 }, 1000);
            }
        });
    });
});