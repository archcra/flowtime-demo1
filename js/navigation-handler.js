function navigationHandler(e) {
  // Docs from here: https://github.com/marcolago/flowtime.js
  // 这个事件用于执行为特定页面执行的脚本-因为直接在页面(slide)中加脚本不被执行
  var page = 's' + e.sectionIndex + 'p' + e.pageIndex;
  console.log('in page: ', page);

  // document.getElementById('c05s160div01').style.display = 'none';
  $(".fancybox-image").hide();
  var e = $(".fancybox-image");
  switch (page) {
    case "s5p1":


      $('#s5p1-link01').addClass('animated flipInX');
      break;

    case "s5p3":
      // $( '#sb-container' ).swatchbook(); // Basic modernizr


      // Style 3 mode:
      $('#sb-container').swatchbook({
        // number of degrees that is between each item
        angleInc: 15,
        neighbor: 15,
        // if it should be closed by default
        initclosed: true,
        // index of the element that when clicked, triggers the open/close function
        // by default there is no such element
        closeIdx: 11
      });
      break;

    case "s5p6":
      console.log('in s5p6');
      initFlipping();
      break;

    case "s5p8": // secion 5 page 8,
      $('#c50s90').addClass('sticky-notes');
      break;

    case "s5p14":
      $('#c50s150ul01').addClass("osx-dock");
      console.log('class osx dock added.')

      break;

    case "s5p15":
      $(".fancybox-overlay fancybox-overlay-fixed").show();

      initHoveringGallery();
      initHovering();
      console.log('hovering gallery')

      break;

    case "s5p17":
      initFallingLeaves();
      console.log('in falling leaves')

      break;
      case "s11p0":
        initMatrixText();
        console.log('in initMatrixText')

        break;

    default:

      break;
  }
}
