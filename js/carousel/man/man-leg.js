$(document).ready(function () {

    var owlMLeg = $('#mLegs');
    var allDataMLeg = owlMLeg.children().length;
    var thisDataMLeg = 1;
    $("#allDataMLegs").text(allDataMLeg);
    $("#thisDataMLegs").text(thisDataMLeg);
    owlMLeg.owlCarousel({
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
        owlMLeg.trigger('next.owl.carousel');
    });
    $('.customPrevBtnMBody').click(function () {
        owlMLeg.trigger('prev.owl.carousel', [300]);
    });

    owlMLeg.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlMLeg.trigger('next.owl');
        } else {
            owlMLeg.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlMLeg.on('changed.owl.carousel', function (event) {

        var pageMLeg = event.page.index; // Position of the current page
        $("#thisDataMLegs").text(pageMLeg+1);

    });

});