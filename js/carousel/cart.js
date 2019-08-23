$(document).ready(function () {

    var owlY = $("#y");
    var allDataY = owlY.children().length;
    var thisData = 1;
    $("#allDataY").text(allDataY);
    $("#thisData").text(thisData);
    owlY.owlCarousel({
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
    $('.customNextBtnY').click(function () {
        owlY.trigger('next.owl.carousel');
    });
    $('.customPrevBtnY').click(function () {
        owlY.trigger('prev.owl.carousel', [300]);
    });

    owlY.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlY.trigger('next.owl');
        } else {
            owlY.trigger('prev.owl');
        }
        e.preventDefault();
    });

//    owlY.on('changed.owl.carousel', function (event) {
//
//        var pageY = event.page.index; // Position of the current page
//        $("#thisData").text(pageY + 1);
//        owlY.trigger('refresh.owl.carousel');
//        console.log("insert");
//        allDataY = owlY.children().length;
//        $("#allDataY").text(allDataY); /**/
//    });

    $(".insert").on('click', function () {
        owlY.trigger('refresh.owl.carousel');
        console.log("insert");
        allDataY = owlY.children().length;
        $("#allDataY").text(allDataY);
    });

});
