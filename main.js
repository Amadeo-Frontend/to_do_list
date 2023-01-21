//
$(document).ready(function () {
  $(document).ready(function () {
    $("body").hide().fadeIn(2000);
  });
  $("#to_do_input").change(function () {
    let input = $(this).val();
    $("ul")
      .append(
        "<li>" +
          input +
          '<i class="fas fa-check"></i><i class="fas fa-trash"></i> </li>'
      )
      .find("li:last")
      .hide()
      .fadeIn(1500);
    $(this).val("");
  });

  $("ul").on("click", ".fa-trash", function () {
    $(this).parent("li").fadeOut(200);
  });
  $("ul").on("click", ".fa-check", function () {
    $(this).parent("li").toggleClass("checked");
  });
});
