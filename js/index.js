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

    let position = $("body").scrollTop() || $(window).scrollTop();
    catRotate(-position % 360);

    // cat
    function catRotate(num) {
      $('#cat1').css("transform", "rotate(" + num + "deg)");
      $('#cat2').css("transform", "rotate(" + (num - (Math.sin(num / 2 * (Math.PI / 180)) * 25)) + "deg)");
      $('#cat3').css("transform", "rotate(" + (num - (Math.sin(num / 2 * (Math.PI / 180)) * 30)) + "deg)");
    };

    // pen
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      $('.pen').css("background-position", "0px");
    } else {
      $('.pen').css("background-position", "325px");
    }

  };

});
