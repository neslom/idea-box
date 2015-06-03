$(document).ready(function() {
  var $searchBox = $('#ideaSearchText');

  $searchBox.on('keyup', function() {
    var $that = $(this);
    var word = stripSpaces($that.val());

    $(".singleIdea").children('p').each(function(i, e) {
      var $that = $(this);
      var $parentDiv = $that.parent();
      var searchedText = stripSpaces($that.text());

      if ( searchedText.indexOf(word) === -1 ) {
        $parentDiv.hide();
      } else {
        $parentDiv.show();
      }
    });
  });

});

function stripSpaces(text) {
  return text.replace(/ /g, '').toLowerCase();
};

