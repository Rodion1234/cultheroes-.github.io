$(document).ready(function () {

    var owlCLegs = $('#cLegs');
    var allDataCLegs = owlCLegs.children().length;
    var thisDataCLegs = 1;
    $("#allDataCLegs").text(allDataCLegs);
    $("#thisDataCLegs").text(thisDataCLegs);
    owlCLegs.owlCarousel({
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
    $('.customNextBtnCLegs').click(function () {
        owlCLegs.trigger('next.owl.carousel');
    });
    $('.customPrevBtnCLegs').click(function () {
        owlCLegs.trigger('prev.owl.carousel', [300]);
    });

    owlCLegs.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlCLegs.trigger('next.owl');
        } else {
            owlCLegs.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlCLegs.on('changed.owl.carousel', function (event) {

        var pageCLegs = event.page.index; // Position of the current page
        $("#thisDataCLegs").text(pageCLegs+1);

    });

});