$(document).ready(function() {
  var $searchBox = $('#ideaSearchText');

  $searchBox.on('keyup', function() {
    var word = $(this).val().replace(/ /g, '').toLowerCase();

    $(".singleIdea").children('h2, p').each(function(i, e) {
      var searchedText = $(this).text().replace(/ /g, '').toLowerCase();

      if ( searchedText.indexOf(word) === -1 ) {
        $(this).parent().hide();
      } else {
        $(this).parent().show();
      }
    });
  });

});

