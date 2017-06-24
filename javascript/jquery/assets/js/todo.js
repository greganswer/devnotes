// You must add the event listener to the parent element in order to work on user created child elements
$("ul").on("click", "li", function functionName() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
  if (event.which === 13) {
    let todoText = $(this).val();
    $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>");
    $(this).val("");
  }
});

$(".fa-plus").on("click", function functionName() {
  $("input[type='text']").fadeToggle();
});
