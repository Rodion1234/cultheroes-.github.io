$(document).ready(function () {

    var owlWLegs = $('#wLegs');
    var allDataWLegs = owlWLegs.children().length;
    var thisDataWLegs = 1;
    $("#allDataWLegs").text(allDataWLegs);
    $("#thisDataWLegs").text(thisDataWLegs);
    owlWLegs.owlCarousel({
        center: true,
        margin: 10,
        loop: true,
        autoWidth: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1200: {
                items: 4
            }
        }

    });
    $('.customNextBtnWLegs').click(function () {
        owlWLegs.trigger('next.owl.carousel');
    });
    $('.customPrevBtnWLegs').click(function () {
        owlWLegs.trigger('prev.owl.carousel', [300]);
    });

    owlWLegs.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlWLegs.trigger('next.owl');
        } else {
            owlWLegs.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlWLegs.on('changed.owl.carousel', function (event) {

        var pageWLegs = event.page.index; // Position of the current page
        $("#thisDataWLegs").text(pageWLegs+1);

    });

});