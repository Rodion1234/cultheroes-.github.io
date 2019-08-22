$(document).ready(function () {

    var owlAFootwear = $('#aFootwear');
    var allDataAFootwear = owlAFootwear.children().length;
    var thisDataAFootwear = 1;
    $("#allDataAFootwear").text(allDataAFootwear);
    $("#thisDataAFootwear").text(thisDataAFootwear);
    owlAFootwear.owlCarousel({
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
    $('.customNextBtnMFootwear').click(function () {
        owlAFootwear.trigger('next.owl.carousel');
    });
    $('.customPrevBtnMFootwear').click(function () {
        owlAFootwear.trigger('prev.owl.carousel', [300]);
    });

    owlAFootwear.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlAFootwear.trigger('next.owl');
        } else {
            owlAFootwear.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlAFootwear.on('changed.owl.carousel', function (event) {

        var pageAFootwear = event.page.index; // Position of the current page
        $("#thisDataAFootwear").text(pageAFootwear+1);

    });

});