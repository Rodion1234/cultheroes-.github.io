$(document).ready(function () {

    var owlWFootwear = $('#wFootwear');
    var allDataWFootwear = owlWFootwear.children().length;
    var thisDataWFootwear = 1;
    $("#allDataWFootwear").text(allDataWFootwear);
    $("#thisDataWFootwear").text(thisDataWFootwear);
    owlWFootwear.owlCarousel({
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
    $('.customNextBtnWFootwear').click(function () {
        owlWFootwear.trigger('next.owl.carousel');
    });
    $('.customPrevBtnWFootwear').click(function () {
        owlWFootwear.trigger('prev.owl.carousel', [300]);
    });

    owlWFootwear.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlWFootwear.trigger('next.owl');
        } else {
            owlWFootwear.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlWFootwear.on('changed.owl.carousel', function (event) {

        var pageWFootwear = event.page.index; // Position of the current page
        $("#thisDataWFootwear").text(pageWFootwear+1);

    });

});
