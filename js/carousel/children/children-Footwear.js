$(document).ready(function () {

    var owlCFootwear = $('#cFootwear');
    var allDataCFootwear = owlCFootwear.children().length;
    var thisDataCFootwear = 1;
    $("#allDataCFootwear").text(allDataCFootwear);
    $("#thisDataCFootwear").text(thisDataCFootwear);
    owlCFootwear.owlCarousel({
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
    $('.customNextBtnCFootwear').click(function () {
        owlCFootwear.trigger('next.owl.carousel');
    });
    $('.customPrevBtnCFootwear').click(function () {
        owlCFootwear.trigger('prev.owl.carousel', [300]);
    });

    owlCFootwear.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlCFootwear.trigger('next.owl');
        } else {
            owlCFootwear.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlCFootwear.on('changed.owl.carousel', function (event) {

        var pageCFootwear = event.page.index; // Position of the current page
        $("#thisDataCFootwear").text(pageCFootwear+1);

    });

});
