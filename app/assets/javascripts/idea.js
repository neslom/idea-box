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
  });

  function ideasIndex(data, cssId) {
    data.forEach(function(idea) {
      return cssId.append('<h3>Idea: ' + idea.title + ' Quality: ' +
                          idea.quality + '</h3>' + "\n" + '' + idea.body +
                          ' <a href=\'#\' id=\'edit-idea\'>Edit</a>' );
    });
  };
});

