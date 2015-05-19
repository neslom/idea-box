$(document).ready(function() {
  var $showIdeas = $('#showIdeas');
  var $ideasIndex = $('.ideasIndex');
  var $newIdea = $('#newIdea');

  $showIdeas.click(function() {
    $.ajax({
      method: "GET",
      url: '/ideas.json',
      success: function(data) {
        ideasIndex(data, $ideasIndex);
      }
    });
    $showIdeas.toggle();
  });

  function ideasIndex(data, cssId) {
    data.forEach(function(idea) {
      return cssId.append('<h2>Idea: ' + idea.title + '</h2>' +
                          '<h4>Quality: ' + idea.quality + '</h4>' + "\n" + '' + idea.body +
                          '<br><button href=\'#\' class=\'btnStyled\' id=\'editIdea\'>Edit</a>' );
    });
  };
});

