let dom_post_list;

let dom_room;
let dom_beauty;
let dom_boy_girl;
let dom_c_chat;
let dom_gossiping;
let dom_joke;
let dom_lifeismoney;
let dom_stock;
let dom_stupidclown;

let dom_room_next;
let dom_beauty_next;
let dom_boy_girl_next;
let dom_c_chat_next;
let dom_gossiping_next;
let dom_joke_next;
let dom_lifeismoney_next;
let dom_stock_next;
let dom_stupidclown_next;

function room_rwd() {
  if (document.body.clientWidth < 1024) {
    dom_room.style.display = "none";
    dom_room_next.style.display = "flex";

    dom_beauty.id = "beauty_next";
    dom_boy_girl.id = "boy_girl_next";
    dom_c_chat.id = "c_chat_next";
    dom_gossiping.id = "gossiping_next";
    dom_joke.id = "joke_next";
    dom_lifeismoney.id = "lifeismoney_next";
    dom_stock.id = "stock_next";
    dom_stupidclown.id = "stupidclown_next";

    dom_beauty_next.id = "beauty";
    dom_boy_girl_next.id = "boy_girl";
    dom_c_chat_next.id = "c_chat";
    dom_gossiping_next.id = "gossiping";
    dom_joke_next.id = "joke";
    dom_lifeismoney_next.id = "lifeismoney";
    dom_stock_next.id = "stock";
    dom_stupidclown_next.id = "stupidclown";
  } else {
    dom_room.style.display = "flex";
    dom_room_next.style.display = "none";

    dom_beauty.id = "beauty";
    dom_boy_girl.id = "boy_girl";
    dom_c_chat.id = "c_chat";
    dom_gossiping.id = "gossiping";
    dom_joke.id = "joke";
    dom_lifeismoney.id = "lifeismoney";
    dom_stock.id = "stock";
    dom_stupidclown.id = "stupidclown";

    dom_beauty_next.id = "beauty_next";
    dom_boy_girl_next.id = "boy_girl_next";
    dom_c_chat_next.id = "c_chat_next";
    dom_gossiping_next.id = "gossiping_next";
    dom_joke_next.id = "joke_next";
    dom_lifeismoney_next.id = "lifeismoney_next";
    dom_stock_next.id = "stock_next";
    dom_stupidclown_next.id = "stupidclown_next";
  }
}

function post_list(action) {
  switch (action) {
    case "clear":
      dom_post_list.innerHTML = "";
      break;

    case "listen":
      firebase
        .database()
        .ref(cur_room)
        .on("value", snapshot => {
          dom_post_list.innerHTML = "";

          snapshot.forEach(child => {
            dom_post_list.innerHTML +=
              "<a class='mb-2 rounded list-group-item list-group-item-action' id='" +
              child.key +
              "' href='#'>[ " +
              child.val().type +
              " ] - " +
              child.val().title +
              " - ( " +
              child.val().user +
              " )</a>\n";
          });
        });
      break;

    case "hide":
      dom_post_list.style.display = "none";
      break;

    case "show":
      dom_post_list.style.display = "flex";
      break;
  }
}
