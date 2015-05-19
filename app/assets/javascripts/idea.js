$(document).ready(function() {
  var $showIdeas = $('#showIdeas');
  var $ideasIndex = $('.ideasIndex');
  var $newIdea = $('#newIdea');
  var $submit = $('#submit');
  var $flash = $('.flash');
  var $ideaInput = $('.ideaInput');

  $showIdeas.on('click', function() {
    //$ideasIndex.show();
    $ideaInput.hide();
    $.ajax({
      method: "GET",
      url: '/ideas.json',
      success: function(data) {
        ideasIndex(data, $ideasIndex);
        $ideasIndex.show();
      }
    });
  });

  $submit.on('click', function() {
    var title = $('#ideaTitleText').val();
    var body = $('#ideaBodyText').val();
    console.log(title);
    $.ajax({
      method: 'POST',
      url: '/ideas.json',
      data: { idea: { title: title, body: body } },
      success: function(data) {
        flashMessage(data);
      }
    });
  });

  $newIdea.on('click', function() {
    $ideasIndex.hide();
    $ideaInput.show();
  });

  function ideasIndex(data, cssId) {
    data.forEach(function(idea) {
      return cssId.append('<h2>Idea: ' + idea.title + '</h2>' +
          '<h4>Quality: ' + idea.quality + '</h4>' + "\n"
          + '<p id=\'ideaBody\'>' + idea.body + '</p>' +
          '<br><button href=\'#\' class=\'btnStyled\' id=\'editIdea\'>Edit</a>' );
    });
  };

  function flashMessage(data) {
    $flash.append('<p>' + data.title + ' added to the box!</p>');
    $flash.fadeOut(3000);
  }
});

