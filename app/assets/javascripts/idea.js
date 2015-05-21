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
      error: flashMessage
    });
  });

  $newIdea.on('click', function() {
    $ideasIndex.hide();
    $ideaInput.show();
  });

  function addIdeasIndexToPage(data, cssId) {
    var ideas = data.map(function(idea) {
      return ('<div class=\'singleIdea\'><h2>Idea: ' + idea.title + '</h2>' +
          '<h4><i class="fa fa-thumbs-up" data-id=' + idea.id + '></i>  ' +
          '<p class="ideaQuality">' + idea.quality + '</p> <i class="fa fa-thumbs-down" data-id=' + idea.id + '></i></h4>' + "\n" +
          '<p id=\'ideaBody\'>' + idea.body + '</p>' +
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

  $('body').on('click', '.fa-thumbs-up', function() {
    var id = $(this).data().id;
    $.ajax({
      method: 'GET',
      url: '/ideas/' + id + '/upvote',
      success: function(quality) {
        $(this).siblings('.ideaQuality').text('' + quality);
      }.bind(this)
    });
  });

  $('body').on('click', '.fa-thumbs-down', function() {
    var id = $(this).data().id;
    $.ajax({
      method: 'GET',
      url: '/ideas/' + id + '/downvote',
      success: function(quality) {
        $(this).siblings('.ideaQuality').text('' + quality);
      }.bind(this)
    });
  });

  function flashMessage(data) {
    $('input').each(function() {
      $(this).val('');
    });
    $flash.show();
    if (data.title === undefined) {
      $flash.append('<p>You"re gonna need a better idea than that</p>');
    } else {
      $flash.append('<p>' + data.title + ' added to the box!</p>');
    }
    $flash.fadeOut(3000, function() {
      $flash.children().remove();
    });
  };

});

