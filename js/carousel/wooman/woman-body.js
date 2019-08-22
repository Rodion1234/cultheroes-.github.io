$(document).ready(function () {

    var owlWBody = $('#wbody');
    var allDataWBody = owlWBody.children().length;
    var thisDataWBody = 1;
    $("#allDataWBody").text(allDataWBody);
    $("#thisDataWBody").text(thisDataWBody);
    owlWBody.owlCarousel({
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
    $('.customNextBtnWBody').click(function () {
        owlWBody.trigger('next.owl.carousel');
    });
    $('.customPrevBtnWBody').click(function () {
        owlWBody.trigger('prev.owl.carousel', [300]);
    });

    owlWBody.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlWBody.trigger('next.owl');
        } else {
            owlWBody.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlWBody.on('changed.owl.carousel', function (event) {

        var pageWBody = event.page.index; // Position of the current page
        $("#thisDataWBody").text(pageWBody+1);

    });
    
});
