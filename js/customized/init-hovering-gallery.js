function padDigits(number, digits) {
  return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
}
//Test
//console.log(padDigits(1,2));

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function initImageObjects() {
  var imageObjects = [];
  for (i = 1; i <= 5; i++) {
    var f = "images/set1/" + padDigits(i, 2) + ".jpeg";
    imageObjects.push({
      "id": i,
      "file": f
    });
  }

  return imageObjects;
}

function initHoveringGallery() {
  var imageObjects = initImageObjects();
  var imagesElement = document.getElementById('gallery');

  imagesElement.innerHTML = '';
  var newImage;
  for (i = 0; i < imageObjects.length; i++) {
    var left = getRandomInt(0, 400);
    var top = getRandomInt(0, 400);
    var rot = getRandomInt(-40, 40);
    var style = "top:" + top + "px;left:" +
      left + "px;background:url(" +
      imageObjects[i].file + ") no-repeat 50% 50%; -moz-transform:rotate(" +
      rot + "deg); -webkit-transform:rotate(" + rot + "deg);";
    var div = document.createElement('div');
    div.setAttribute('id', "pic-" + imageObjects[i].id);
    div.setAttribute('class', "pic");
    div.setAttribute('style', style);


    var link = document.createElement('a');
    link.setAttribute('class', "fancybox");
    link.setAttribute('rel', "fncbx");
    link.setAttribute('href', imageObjects[i].file);
    link.setAttribute('target', "_blank");

    div.appendChild(link);

    imagesElement.appendChild(div);
  }
}



function initHovering() {

  var preventClick = false;
  $(".pic a").bind("click", function(e) {

    /* This function stops the drag from firing a click event and showing the lightbox */
    if (preventClick) {
      e.stopImmediatePropagation();
      e.preventDefault();
    }
  });

  $(".pic").draggable({

    /* Converting the images into draggable objects */
    containment: 'parent',
    start: function(e, ui) {
      /* This will stop clicks from occuring while dragging */
      preventClick = true;
    },
    stop: function(e, ui) {
      /* Wait for 250 milliseconds before re-enabling the clicks */
      setTimeout(function() {
        preventClick = false;
      }, 250);
    }
  });

  $('.pic').mousedown(function(e) {
    /* Executed on image click */
    var maxZ = 0;

    /* Find the max z-index property: */
    $('.pic').each(function() {
      var thisZ = parseInt($(this).css('zIndex'))
      if (thisZ > maxZ) maxZ = thisZ;
    });

    /* Clicks can occur in the picture container (with class pic) and in the link inside it */
    if ($(e.target).hasClass("pic")) {
      /* Show the clicked image on top of all the others: */
      $(e.target).css({
        zIndex: maxZ + 1
      });
    } else $(e.target).closest('.pic').css({
      zIndex: maxZ + 1
    });
  });

  /* Converting all the links to a fancybox gallery */
  $("a.fancybox").fancybox({
    zoomSpeedIn: 300,
    zoomSpeedOut: 300,
    overlayShow: false
  });

  /* Converting the share box into a droppable: */
  $('.drop-box').droppable({
    hoverClass: 'active',
    drop: function(event, ui) {

      /* Fill the URL text field with the URL of the image. */
      /* The id of the image is appended as a hash #pic-123 */
      $('#url').val(location.href.replace(location.hash, '') + '#' + ui.draggable.attr('id'));
      $('#modal').dialog('open');
    }
  });

  /* Converts the div with id="modal" into a modal window  */
  $("#modal").dialog({
    bgiframe: true,
    modal: true,
    autoOpen: false,

    buttons: {
      Ok: function() {
        $(this).dialog('close');
      }
    }
  });

  if (location.hash.indexOf('#pic-') != -1) {
    /* Checks whether a hash is present in the URL */
    /* and shows the respective image */
    $(location.hash + ' a.fancybox').click();
  }
}
