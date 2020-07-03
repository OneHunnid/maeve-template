
/**
 * This script wrapped in a Immediately-Invoked Function Expression (IIFE) to
 * prevent variables from leaking onto the global scope. For more information
 * on IIFE visit the link below.
 * @see http://en.wikipedia.org/wiki/Immediately-invoked_function_expression
 */

(function() {
  'use strict';

  // Load all images via Squarespace's Responsive ImageLoader
  function loadAllImages() {
    var images = document.querySelectorAll('img[data-src]' );
    for (var i = 0; i < images.length; i++) {
      ImageLoader.load(images[i], {load: true});
    }
  }

  // The event subscription that loads images when the page is ready
  document.addEventListener('DOMContentLoaded', loadAllImages);

  // The event subscription that reloads images on resize
  window.addEventListener('resize', loadAllImages);

}());


window.onscroll = function() {headerScroll()};

// Get the header
const header = document.getElementById("siteHeader");

// Get the offset position of the navbar
const sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function headerScroll() {
  if (window.pageYOffset > sticky) {
    header.classList.add("site-header-on-scroll");
  } else {
    header.classList.remove("site-header-on-scroll");
  }
}
