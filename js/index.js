$(document).ready(function ($) {
  var granimInstance = new Granim({
      element: '#canvas-image',
      direction: 'diagonal',
      opacity: [1, 1],
      // opacity: [1, .5, 1],
      isPausedWhenNotInView: true,
      states : {
          "default-state": {
              gradients: [
                  // ["#F44336", "#E91E63"],
                  // ["#9C27B0", "#673AB7"],
                  // ["#3F51B5", "#2196F3"],
                  // ["#03A9F4", "#00BCD4"],
                  // ["#009688", "#4CAF50"],
                  // ["#8BC34A", "#CDDC39"],
                  // ["#FFEB3B", "#FFC107"],
                  // ["#FF9800", "#FF5722"]
                  ["#D7FFF1", "#8CD790"],
                  ["#77AF9C", "#285943"]
              ],
              transitionSpeed: 10000
          }
      }
  });

  $('a.nav-item,.densetsu > a').click(function() {
    var speed = 0.8 * 1000;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset();
    var nav = $(".nav");
    if (position && nav) {
      $('body,html').animate({scrollTop:position.top - nav.innerHeight()}, speed, 'swing');
    }
    return false;
  });
});
