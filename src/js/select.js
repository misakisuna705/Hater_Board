function board_select() {
  cur_pos = "board";

  document.getElementsByClassName("nav_list")[0].classList.remove("show");

  let prev_room;
  if (cur_room) {
    prev_room = cur_room;
  }
  if (prev_room) {
    document.getElementById(prev_room).classList.remove("active");
  }

  cur_room = event.target.id;

  document.getElementById(cur_room).classList.add("active");

  top_box_update(cur_pos);

  post_list("listen");

  post_list("show");
  push_list("hide");

  post_edit_box("hide");
  push_edit_box("hide");

  dom_edit_icon.classList.remove("fa-times");
  dom_edit_icon.classList.add("fa-pen");
  dom_edit_button.style.display = "block";
}

function post_select() {
  if (event.target.id != "post_list" && cur_pos != "post") {
    cur_pos = "post";
    cur_post = event.target.id;

    top_box_update(cur_pos);

    push_list("listen");

    post_list("hide");
    push_list("show");
  }
}
