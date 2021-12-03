$(document).ready(function () {

  $('.parallax').parallax();

  // SIDE MENU
  $('.button-collapse').sideNav({
    edge: 'right', // Choose the horizontal origin
    closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
  });

  // CONTACT MODAL
  $('.modal-trigger').leanModal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200 // Transition out duration
  });

  // SUBMIT
  $('#contact-form').submit(function (event) {
    let formData = {
      'name': $('input[name=name]').val(),
      'replyto': $('input[name=replyto]').val(),
      'subject': $('input[name=subject]').val(),
      'message': $('textarea[name=message]').val(),
    };
    $.ajax({
      url: '',
      method: "POST",
      data: formData,
      dataType: "json"
    });
    event.preventDefault();
    $('#modal-contact').closeModal();
    Materialize.toast('Благодарю за уделённое внимание!', 5000);
    return false;
  });

  $('#form-cancel').on('click', function (event) {
    event.onEnd.preventDefault();
  });

  // SCROLLING ACTIONS
  window.onscroll = function () {

    // cat
    let position = $("body").scrollTop() || $(window).scrollTop();
    catRotate(-position % 360);
    
    function catRotate(num) {
      $('#cat1').css("transform", "rotate(" + num + "deg)");
      $('#cat2').css("transform", "rotate(" + (num - (Math.sin(num / 2 * (Math.PI / 180)) * 25)) + "deg)");
      $('#cat3').css("transform", "rotate(" + (num - (Math.sin(num / 2 * (Math.PI / 180)) * 30)) + "deg)");
    };

    // pencil
    let pencil = document.querySelector('.pencil');
    let pencilBottom = pencil.offsetTop + pencil.offsetHeight;
    let windowBottom = window.innerHeight + window.scrollY;

    if (windowBottom >= pencilBottom) {
      let pencilMod = (windowBottom - pencilBottom) / (document.body.offsetHeight - pencilBottom);

      $('#pencil1').css("transform", "translate(" + pencilMod * 2000 + "px," + (Math.cos(pencilMod * 20 * Math.PI) * 32 + 32) + "px)");
      $('#pencil2').css("stroke-dashoffset", 2200 - pencilMod * 2200);
    } else {
      $('#pencil1').css("transform", "translate(0,64px)");
      $('#pencil2').css("stroke-dashoffset", 2200);
    }

  };

});
