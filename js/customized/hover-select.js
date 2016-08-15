function changeHoverEffect(effectId) {

  switch (effectId) {
    case 4:
      $('.view.view-tenth')
        .removeClass('view view-tenth')
        .addClass("view view-fourth");

      $('.view.view-eighth')
        .removeClass('view view-eighth')
        .addClass("view view-fourth");


      break;

    case 8:
      $('.view.view-tenth')
        .removeClass('view view-tenth')
        .addClass("view view-eighth");

      $('.view.view-fourth')
        .removeClass('view view-fourth')
        .addClass("view view-eighth");
      break;
    default:
      $('.view.view-fourth')
        .removeClass('view view-fourth')
        .addClass("view view-tenth");

      $('.view.view-eighth')
        .removeClass('view view-eighth')
        .addClass("view view-tenth");
      break;

  }

}
