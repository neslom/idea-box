$(document).ready(function() {
  var $showIdeas = $('#show-ideas');
  var $ideas = $('.ideas');

  $showIdeas.click(function() {
    $.ajax({
      method: "GET",
      url: '/ideas.json',
      success: function(data) {
        ideasIndex(data, $ideas);
      }
    });
    $showIdeas.toggle();
  });

  function ideasIndex(data, cssId) {
    data.forEach(function(idea) {
      return cssId.append('<h2>Idea: ' + idea.title + '</h2>' +
                          '<h4>Quality: ' + idea.quality + '</h4>' + "\n" + '' + idea.body +
                          ' <a href=\'#\' id=\'edit-idea\'>Edit</a>' );
    });
  };
});

