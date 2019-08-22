$(document).ready(function () {
    var size = $(".size");
    size.hide();
    var flagOpen = false;
    $(".openSize").click(function () {
        if (flagOpen) {
            size.hide();
            flagOpen = false;
        } else {
            size.show();
            flagOpen =true;
        }
    });
});
