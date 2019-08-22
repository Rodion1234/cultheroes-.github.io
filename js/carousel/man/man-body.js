$(document).ready(function () {

    var owlMBody = $('#mbody');
    var allDataMBody = owlMBody.children().length;
    var thisDataMBody = 1;
    $("#allDataMBody").text(allDataMBody);
    $("#thisDataMBody").text(thisDataMBody);
    owlMBody.owlCarousel({
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
    $('.customNextBtnMBody').click(function () {
        owlMBody.trigger('next.owl.carousel');
    });
    $('.customPrevBtnMBody').click(function () {
        owlMBody.trigger('prev.owl.carousel', [300]);
    });

    owlMBody.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlMBody.trigger('next.owl');
        } else {
            owlMBody.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlMBody.on('changed.owl.carousel', function (event) {

        var pageMBody = event.page.index; // Position of the current page
        $("#thisDataMBody").text(pageMBody+1);

    });
    
});


