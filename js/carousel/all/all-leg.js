$(document).ready(function () {

    var owlALeg = $('#aLegs');
    var allDataCALegs = owlALeg.children().length;
    var thisDataALegs = 1;
    $("#allDataCALegs").text(allDataCALegs);
    $("#thisDataALegs").text(thisDataALegs);
    owlALeg.owlCarousel({
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
    $('.customNextBtnMLegs').click(function () {
        owlALeg.trigger('next.owl.carousel');
    });
    $('.customPrevBtnMBody').click(function () {
        owlALeg.trigger('prev.owl.carousel', [300]);
    });

    owlALeg.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlALeg.trigger('next.owl');
        } else {
            owlALeg.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlALeg.on('changed.owl.carousel', function (event) {

        var pageALeg = event.page.index; // Position of the current page
        $("#thisDataALegs").text(pageALeg+1);

    });

});