$(document).ready(function () {

    var owlCBody = $('#cbody');
    var allDataCBody = owlCBody.children().length;
    var thisDataCBody = 1;
    $("#allDataCBody").text(allDataCBody);
    $("#thisDataCBody").text(thisDataCBody);
    owlCBody.owlCarousel({
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
    $('.customNextBtnCBody').click(function () {
        owlCBody.trigger('next.owl.carousel');
    });
    $('.customPrevBtnCBody').click(function () {
        owlCBody.trigger('prev.owl.carousel', [300]);
    });

    owlCBody.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlCBody.trigger('next.owl');
        } else {
            owlCBody.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlCBody.on('changed.owl.carousel', function (event) {

        var pageCBody = event.page.index; // Position of the current page
        $("#thisDataCBody").text(pageCBody+1);

    });
    
});
