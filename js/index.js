function generateQuote(){
  $.ajax({
    url: "http://api.forismatic.com/api/1.0/?", // API method calls are implemented in the form of HTTP requests to the URL http://api.forismatic.com/api/1.0/
    dataType: "jsonp",
    data: "method=getQuote&format=jsonp&lang=en&jsonp=?",
    success: function(data) {
      var author = "";
      if (data.quoteAuthor.length === 0) {
        author = "Unknown";
      }
      else {
        author = data.quoteAuthor;
      }
      $("#quote").html(data.quoteText);
      $("#author").html("- " + author);
       $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quote&text=" + "\"" + data.quoteText + "\" - " + author);
      }
  });
}

$(document).ready(function() {
  generateQuote();
});

$("#getQuote").on("click", function() {
    generateQuote();
});