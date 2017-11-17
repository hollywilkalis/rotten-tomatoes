function Movie (title, year, score) {
  this.title = title;
  this.year = year;
  this.score = score;
}

$(document).ready(function() {
  $("form#contact-info").submit(function(event) {
  event.preventDefault();
    debugger;
    var inputtedMovieTitle = $("input#movie-title").val();
    var inputtedMovieYear = $("input#movie-year").val();
    var inputtedMovieScore = $("input#movie-score").val();
    var Movies = [];

    var newMovie = new Movie(inputtedMovieTitle, inputtedMovieYear, inputtedMovieScore);
    // var sortedMovies = Movies.slice().sort()
    // console.log(sortedMovies)

    $("#movie-table").append("<tr><td>" + newMovie.title + "</td><td>" + newMovie.year + "</td><td>" + newMovie.score + "</td></tr>");
  });



});
