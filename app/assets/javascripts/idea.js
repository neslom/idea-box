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
      return ('<div class=\'singleIdea\'><h2>Idea: ' + idea.title + '</h2>' +
          '<h4>Quality: ' + idea.quality + '</h4>' + "\n"
          + '<p id=\'ideaBody\'>' + idea.body + '</p>' +
          '<br><button href=\'#\' class=\'btnStyled\' data-id=' + idea.id + ' id=\'editIdea\'>Edit</a>' +
          '<button href=\'#\' class=\'btnStyled\' data-id=' + idea.id + ' id=\'deleteIdea\'>Delete</a></div>' );
    });

    $.when(cssId.html(ideas)).then($('body').on('click', '#deleteIdea', function() {
      var id = $(this).data().id;
      $.ajax({
        method: 'DELETE',
        url: '/ideas/' + id + '.json',
        success: function() {
          $(this).parent().remove();
        }.bind(this)
      });
    }));
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

