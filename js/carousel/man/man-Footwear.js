$(document).ready(function () {

    var owlMFootwear = $('#mFootwear');
    var allDataMFootwear = owlMFootwear.children().length;
    var thisDataMFootwear = 1;
    $("#allDataMFootwear").text(allDataMFootwear);
    $("#thisDataMFootwear").text(thisDataMFootwear);
    owlMFootwear.owlCarousel({
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
        owlMFootwear.trigger('next.owl.carousel');
    });
    $('.customPrevBtnMFootwear').click(function () {
        owlMFootwear.trigger('prev.owl.carousel', [300]);
    });

    owlMFootwear.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owlMFootwear.trigger('next.owl');
        } else {
            owlMFootwear.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owlMFootwear.on('changed.owl.carousel', function (event) {

        var pageMFootwear = event.page.index; // Position of the current page
        $("#thisDataMFootwear").text(pageMFootwear+1);

    });

});

function next(thisData, allData) {
    if (thisData < allData) {
        thisData++;
    } else {
        thisData = 1;
    }
    return thisData;
};

function prev(thisData, allData) {
    if (thisData > 1) {
        thisData--;
    } else {
        thisData = allData;
    }
    return thisData;
};