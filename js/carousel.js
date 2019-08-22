$(document).ready(function () {

    var owl = $('.owl-carousel');
    var allData = owl.children().length;
    var thisData = 1;
    $("#allData").text(allData);
    $("#thisData").text(thisData);
    owl.owlCarousel({
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
    // Go to the next item
    $('.customNextBtn').click(function () {
        owl.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.customPrevBtn').click(function () {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    });

    owl.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });

    owl.on('changed.owl.carousel', function (event) {

        var page = event.page.index; // Position of the current page
        $("#thisData").text(page+1);

    });

});

//function callback(event) {
//    console.log("hello");
//}

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
