$(document).ready(function() {
  var closed = false;
  $("#AC").click(function() {
    $("#Display").empty();
  });
  $("#CE").click(function() {
    $("#Display").text($("#Display").text().slice(0, -1));
  });
  $(".Number, .Point").click(function() {
    if (closed) {
      $("#Display").empty();
      closed = false;
    }
    $("#Display").append($(this).text());
  });
  $(".Operation").click(function() {
    if ($("#Display").text().length > 0) {
      $("#Display").append($(this).text());
    }
    closed = false;
  });
  $(".Equals").click(function() {
    try {
      $("#Display").text(eval($("#Display").text()));
      closed = true;
    } catch (e) {
      closed = false;
    };
  });
});