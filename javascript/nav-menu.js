//Menu Open/Close
//On Load
$(document).ready(function() {
    //On Click Display The Nav Menu
    $("#nav-menu-open").click(function() {
        $("#nav-menu-container").show();
    });
    
    //On Click Close The Nav Menu
    $("#nav-menu-close").click(function() {
        $("#nav-menu-container").hide();
    });  

    //On Click Go To Section
    var scrollSpeed = 1000;
    //If About Me Button Is Clicked Scroll To That Section
    $("#nav-menu-aboutme").click(function() {
        $("#nav-menu-container").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#aboutme-section").offset().top
        }, scrollSpeed);
    });

    //If My Projects Button Is Clicked Scroll To That Section
    $("#nav-menu-myprojects").click(function() {
        $("#nav-menu-container").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#myprojects-section").offset().top
        }, scrollSpeed);
    });

    //If Contact Me Button Is Clicked Scroll To That Section
    $("#nav-menu-contactme").click(function() {
        $("#nav-menu-container").hide();
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contactme-section").offset().top
        }, scrollSpeed);
    });
});


