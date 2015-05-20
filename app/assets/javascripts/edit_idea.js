$(document).ready(function() {
  var replaceWith = $('<input name="temp" type="text" />');
  var connectWith = $('input[name="hiddenField"]');

  $('body').on('dblclick', 'p#ideaBody', function() {
    var $ideaBody = $(this);

    $ideaBody.hide();
    $ideaBody.after(replaceWith.val(''));
    replaceWith.focus();

    replaceWith.blur(function() {
      if ($(this).val().length) {
        connectWith.val($(this).val()).change();
        $ideaBody.text($(this).val());

        var ideaId = $ideaBody.siblings('button').data().id;

        $.ajax({
          method: "PUT",
          url: '/ideas/' + ideaId,
          data: { idea: { body: $(this).val() } },
        });
      }

      $(this).remove();
      $ideaBody.show();
    });
  });
});
