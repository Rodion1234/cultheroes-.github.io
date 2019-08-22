$(document).ready(function () {

    var owlABody = $('#abody');
    var allDataABody = owlABody.children().length;
    var thisDataABody = 1;
    $("#allDataABody").text(allDataABody);
    $("#thisDataABody").text(thisDataABody);
    owlABody.owlCarousel({
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
    $('.customNextBtnABody').click(function () {
        owlABody.trigger('next.owl.carousel');
    });
    $('.customPrevBtnABody').click(function () {
        owlABody.trigger('prev.owl.carousel', [300]);
    });

    owlABody.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlABody.trigger('next.owl');
        } else {
            owlABody.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlABody.on('changed.owl.carousel', function (event) {

        var pageABody = event.page.index; // Position of the current page
        $("#thisDataABody").text(pageABody+1);

    });
    
});
