$(document).ready(function() {
  var $showIdeas = $('#showIdeas');
  var $ideasIndex = $('.ideasIndex');
  var $newIdea = $('#newIdea');
  var $submit = $('#submit');
  var $flash = $('.flash');
  var $ideaInput = $('.ideaInput');

  $showIdeas.on('click', function() {
    $ideaInput.hide();
    $.ajax({
      method: "GET",
      url: '/ideas.json',
      success: function(data) {
        addIdeasIndexToPage(data, $ideasIndex);
        $ideasIndex.show();
      }
    });
  });

  $submit.on('click', function() {
    var title = $('#ideaTitleText').val();
    var body = $('#ideaBodyText').val();
    $.ajax({
      method: 'POST',
      url: '/ideas.json',
      data: { idea: { title: title, body: body } },
      success: flashMessage,
    });
  });

  $newIdea.on('click', function() {
    $ideasIndex.hide();
    $ideaInput.show();
  });

  function addIdeasIndexToPage(data, cssId) {
    var ideas = data.map(function(idea) {
      return ('<h2>Idea: ' + idea.title + '</h2>' +
          '<h4>Quality: ' + idea.quality + '</h4>' + "\n"
          + '<p id=\'ideaBody\'>' + idea.body + '</p>' +
          '<br><button href=\'#\' class=\'btnStyled\' id=\'editIdea\'>Edit</a>' );
    });
    cssId.html(ideas);
  };

  function flashMessage(data) {
    $('input').each(function() {
      $(this).val('');
    });
    $flash.show();
    $flash.append('<p>' + data.title + ' added to the box!</p>');
    $flash.fadeOut(3000, function() {
      $flash.children().remove();
    });
  };

});

function truthy() {
  return true;
};
