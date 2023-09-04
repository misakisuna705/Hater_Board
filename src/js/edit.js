let dom_edit_button;
let dom_edit_icon;

let dom_post_edit_box;
let dom_post_summit;

let dom_post_type;
let dom_post_title;
let dom_post_content;

let dom_push_edit_box;
let dom_push_summit;

let dom_push_content;

function edit_select() {
  if (cur_pos == "board") {
    if (dom_post_edit_box.style.display == "none") {
      top_box_hide();
      post_list("hide");
      post_edit_box("show");

      dom_edit_icon.classList.remove("fa-pen");
      dom_edit_icon.classList.add("fa-times");
    } else {
      top_box_show();
      post_list("show");
      post_edit_box("hide");

      dom_edit_icon.classList.remove("fa-times");
      dom_edit_icon.classList.add("fa-pen");
    }
  } else if (cur_pos == "post") {
    if (dom_push_edit_box.style.display == "none") {
      top_box_hide();
      push_list("hide");
      push_edit_box("show");

      dom_edit_icon.classList.remove("fa-pen");
      dom_edit_icon.classList.add("fa-times");
    } else {
      top_box_show();
      push_list("show");
      push_edit_box("hide");

      dom_edit_icon.classList.remove("fa-times");
      dom_edit_icon.classList.add("fa-pen");
    }
  }
}

function post_edit_box(action) {
  switch (action) {
    case "hide":
      dom_post_edit_box.style.display = "none";
      dom_post_type.value = "";
      dom_post_title.value = "";
      dom_post_content.value = "";
      break;

    case "show":
      dom_post_edit_box.style.display = "block";
      break;
  }
}

function push_edit_box(action) {
  switch (action) {
    case "hide":
      dom_push_edit_box.style.display = "none";
      dom_push_content.value = "";
      break;

    case "show":
      dom_push_edit_box.style.display = "block";
      break;
  }
}

function edit_post_summit() {
  if (dom_post_type.value != "" && dom_post_title.value != "" && dom_post_content.value != "") {
    let post = {
      user: user_email,
      type: dom_post_type.value,
      title: dom_post_title.value,
      content: dom_post_content.value
    };

    firebase
      .database()
      .ref(cur_room)
      .push(post);

    top_box_show();
    post_list("show");
    post_edit_box("hide");

    dom_edit_icon.classList.remove("fa-times");
    dom_edit_icon.classList.add("fa-pen");
  } else {
    alert("Cannot be blank!");
  }
}

function edit_push_summit() {
  if (event.target.id != "push_summit") {
    if (dom_push_content.value != "") {
      let push_type = "平";

      switch (event.target.id) {
        case "push_good":
          push_type = "推";
          break;

        case "push_bad":
          push_type = "噓";
          break;

        case "push_soso":
          push_type = "平";
          break;
      }

      let push = {
        user: user_email,
        type: push_type,
        content: dom_push_content.value
      };

      firebase
        .database()
        .ref(cur_room + "/" + cur_post)
        .push(push);

      top_box_show();
      push_list("show");
      push_edit_box("hide");

      dom_edit_icon.classList.remove("fa-times");
      dom_edit_icon.classList.add("fa-pen");
    } else {
      alert("Cannot be blank!");
    }
  }
}
