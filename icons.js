/* ============================================================
   COMP 322 - Assignment 5
   icons.js
   Author: Charlestone Mayenga
   Purpose: jQuery mouse events and effects for the six icons.
   ============================================================ */

// Wait until the page has finished loading so every icon and
// text element exists before we attach handlers to them.
$(document).ready(function () {

    /* --------------------------------------------------------
       mouseenter: fires once when the pointer moves onto an icon
       -------------------------------------------------------- */
    $(".icon").on("mouseenter", function () {
        let name = $(this).data("name");

        // Show the icon's name in the "In: " line
        $("#inText").text("In: " + name);

        // Fade the icon to half opacity
        $(this).css("opacity", 0.5);
    });

    /* --------------------------------------------------------
       mouseleave: fires once when the pointer moves off an icon
       -------------------------------------------------------- */
    $(".icon").on("mouseleave", function () {
        let name = $(this).data("name");

        // Show the icon's name in the "Out: " line
        $("#outText").text("Out: " + name);

        // Restore full opacity
        $(this).css("opacity", 1.0);
    });

    /* --------------------------------------------------------
       dblclick: open the icon's website in a new tab
       -------------------------------------------------------- */
    $(".icon").on("dblclick", function () {
        let url = $(this).data("url");
        window.open(url, "_blank");
    });

        /* --------------------------------------------------------
       click: show an enlarged copy of the icon after the
       current mouse position
       -------------------------------------------------------- */
    $(".icon").on("click", function (event) {
        // Remove any enlarged icon from an earlier click so only
        // one is on screen at a time
        $("#enlarged").remove();

        // Build a new image using the clicked icon's source file
        let big = $("<img>")
            .attr("id", "enlarged")
            .attr("src", $(this).attr("src"))
            .css({
                // event.pageX / pageY are the mouse coordinates on the
                // page. The +15 offset places the image just after the
                // pointer instead of directly under it.
                left: event.pageX + 15,
                top: event.pageY + 15
            });

        $("body").append(big);
    });

});