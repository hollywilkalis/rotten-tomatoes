$(document).ready(function() {
  $("form#contact-info").submit(function(event) {
  event.preventDefault();
    debugger;
    var inputtedMovieTitle = $("input#movie-title").val();
    var inputtedMovieYear = $("input#movie-year").val();
    var inputtedMovieScore = $("input#movie-score").val();

    $("#movie-table").append("<tr><td>" + inputtedMovieTitle + "</td><td>" + inputtedMovieYear + "</td><td>" + inputtedMovieScore + "</td></tr>");
  });

});
