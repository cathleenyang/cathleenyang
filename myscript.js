function setup() {
  $("#button_ok").click(write_user_name_in_div);
}

function write_user_name_in_div() {
  var user_name = $("#name_txt").val();
  $("#text_display").text(user_name);
}

$(document).ready(setup);
