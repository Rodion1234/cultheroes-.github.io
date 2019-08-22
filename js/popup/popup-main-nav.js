$(document).ready(function () {
    $("#man").hide();
    $("#woman").hide();
    $("#children").hide();
    
    var man = $("#manButton");
    var woman = $("#womanButton");
    var children = $("#childrenButton");
    var all = $("#allButton");

    man.click(function () {
        $("#man").show();
        $("#woman").hide();
        $("#children").hide();
        $("#all").hide();
        man.css('backgroundColor','#aa9b77');
        woman.css('backgroundColor','#f5f6f7');
        children.css('backgroundColor','#f5f6f7');
    });

    woman.click(function () {
        $("#woman").show();
        $("#man").hide();
        $("#children").hide();
        $("#all").hide();
        man.css('backgroundColor','#f5f6f7');
        woman.css('backgroundColor','#aa9b77');
        children.css('backgroundColor','#f5f6f7');
    });
    children.click(function () {
        $("#children").show();
        $("#man").hide();
        $("#woman").hide();
        $("#all").hide();
        man.css('backgroundColor','#f5f6f7');
        woman.css('backgroundColor','#f5f6f7');
        children.css('backgroundColor','#aa9b77');
    });
    all.click(function () {
        $("#all").show();
        $("#man").hide();
        $("#woman").hide();
        $("#children").hide();
        man.css('backgroundColor','#f5f6f7');
        woman.css('backgroundColor','#f5f6f7');
        children.css('backgroundColor','#f5f6f7');
    });
});
