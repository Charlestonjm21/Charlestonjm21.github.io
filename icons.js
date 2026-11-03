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
        // $(this) is the one icon the mouse just entered.
        // .data("name") reads its data-name attribute from the HTML.
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

});