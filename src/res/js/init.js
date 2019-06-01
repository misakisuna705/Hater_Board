let cur_pos;
let cur_room;
let cur_post;

window.addEventListener("DOMContentLoaded", init, false);

function init() {
  sign_init();
  room_init();
  top_box_init();
  post_init();
  edit_init();

  room_rwd();

  window.addEventListener("resize", room_rwd, false);

  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      cur_pos = "station";
      top_box_update(cur_pos);

      dom_user_state.innerText = "Logout";
      user_email = user.email;

      dom_room.addEventListener("click", board_select, false);
      dom_room_next.addEventListener("click", board_select, false);
      dom_post_list.addEventListener("click", post_select, false);
      dom_edit_button.addEventListener("click", edit_select, false);
      dom_post_summit.addEventListener("click", edit_post_summit, false);
      dom_push_summit.addEventListener("click", edit_push_summit, false);
      dom_user_account.addEventListener("click", auth_show, false);
      dom_user_state.addEventListener("click", sign_out, false);
    } else {
      dom_logbox.style.display = "block";
      dom_user_state.innerText = "Login";

      dom_facebook_sign_in.addEventListener("click", sign_facebook, false);
      dom_google_sign_in.addEventListener("click", sign_google, false);
      dom_email_login.addEventListener("click", sign_email, false);
      dom_email_sign_up.addEventListener("click", sign_up, false);
    }
  });
}

function sign_init() {
  dom_user_state = document.getElementById("user_state");
  dom_user_account = document.getElementById("user_account");
  dom_logbox = document.getElementById("logbox");
  dom_facebook_sign_in = document.getElementById("facebook_sign_in");
  dom_google_sign_in = document.getElementById("google_sign_in");
  dom_email_login = document.getElementById("email_login");
  dom_email_sign_up = document.getElementById("email_sign_up");
  dom_email = document.getElementById("email");
  dom_password = document.getElementById("password");
}

function room_init() {
  dom_room = document.getElementsByClassName("room")[0];
  dom_beauty = document.getElementsByClassName("beauty")[0];
  dom_boy_girl = document.getElementsByClassName("boy_girl")[0];
  dom_c_chat = document.getElementsByClassName("c_chat")[0];
  dom_gossiping = document.getElementsByClassName("gossiping")[0];
  dom_joke = document.getElementsByClassName("joke")[0];
  dom_lifeismoney = document.getElementsByClassName("lifeismoney")[0];
  dom_stock = document.getElementsByClassName("stock")[0];
  dom_stupidclown = document.getElementsByClassName("stupidclown")[0];

  dom_room_next = document.getElementsByClassName("room_next")[0];
  dom_beauty_next = document.getElementsByClassName("beauty_next")[0];
  dom_boy_girl_next = document.getElementsByClassName("boy_girl_next")[0];
  dom_c_chat_next = document.getElementsByClassName("c_chat_next")[0];
  dom_gossiping_next = document.getElementsByClassName("gossiping_next")[0];
  dom_joke_next = document.getElementsByClassName("joke_next")[0];
  dom_lifeismoney_next = document.getElementsByClassName("lifeismoney_next")[0];
  dom_stock_next = document.getElementsByClassName("stock_next")[0];
  dom_stupidclown_next = document.getElementsByClassName("stupidclown_next")[0];
}

function post_init() {
  dom_post_list = document.getElementById("post_list");
}

function edit_init() {
  dom_push_list = document.getElementById("push_list");

  dom_edit_button = document.getElementById("edit_button");
  dom_edit_icon = document.getElementById("edit_icon");

  dom_post_edit_box = document.getElementById("post_edit_box");
  dom_push_edit_box = document.getElementById("push_edit_box");

  dom_post_summit = document.getElementById("post_summit");
  dom_push_summit = document.getElementById("push_summit");

  dom_post_type = document.getElementById("post_type");
  dom_post_title = document.getElementById("post_title");
  dom_post_content = document.getElementById("post_content");

  dom_push_content = document.getElementById("push_content");
}
