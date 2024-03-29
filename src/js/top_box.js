let dom_top_box;

function top_box_init() {
  dom_top_box = document.getElementById("top_box");
}

function top_box_show() {
  dom_top_box.style.display = "flex";
}

function top_box_hide() {
  dom_top_box.style.display = "none";
}

function top_box_update(pos) {
  dom_top_box.innerHTML = "";

  switch (pos) {
    case "station":
      dom_top_box.innerHTML =
        "<div class='list-group-item list-group-item-action h-100 my-3 rounded overflow-auto'>" +
        "<h2>站規</h2>" +
        "<h3>違規行為</h3>" +
        "<ul>" +
        "<li>未經作者同意，於看板轉載他人任何形式或內容之文章。</li>" +
        "<li>於文章中有挑釁他人之語詞或刻意製造紛爭者。</li>" +
        "</ul>" +
        "<h3>認定處理</h3>" +
        "<ul>" +
        "<li>由版主認定。關於板主不當行為，由小組長認定。小組長管理群組不當，由站長認定。</li>" +
        "<li>無人擔任板主之看板，由小組長認定之。無人擔任小組長之群組，由本站認定之。</li>" +
        "</ul>" +
        "<h3>申訴程序</h3>" +
        "<ul>" +
        "<li>對於板主之建議，於該看板提出。對於小組長之建議，於該群組事務看板提出。</li>" +
        "</ul>" +
        "<h3>特別條例</h3>" +
        "<ul>" +
        "<li>站長兼任小組長兼任各版版主。</li>" +
        "</ul>" +
        "</div>";
      break;

    case "board":
      dom_top_box.innerHTML =
        "<div class='list-group-item list-group-item-action h-100 my-3 rounded overflow-auto'>" +
        "<h4>板規</h4>" +
        "<ul>" +
        "<li>由版主自行決定。</li>" +
        "<li>版主休假中、小組長休假中。</li>" +
        "</ul>" +
        "</div>";

      dom_top_box.classList.remove("h-100");
      dom_top_box.classList.add("h-25");
      break;

    case "post":
      firebase
        .database()
        .ref(cur_room + "/" + cur_post)
        .once("value", snapshot => {
          dom_top_box.innerHTML =
            "<div class='h-100 my-3 rounded list-group-item list-group-item-action overflow-auto'>" + snapshot.val().content + "</div>\n";
        });
      break;

    case "account":
      firebase
        .database()
        .ref("user/" + firebase.auth().currentUser.uid)
        .once("value", snapshot => {
          dom_top_box.innerHTML =
            "<div class='list-group-item list-group-item-action h-100 my-3 rounded overflow-auto'>" +
            "<h2>帳號</h2>" +
            "<ul>" +
            "<li>" +
            snapshot.val().email +
            "</li>" +
            "</ul>" +
            "<h2>登入次數</h2>" +
            "<ul>" +
            "<li>" +
            snapshot.val().login +
            "</li>" +
            "</ul>" +
            "</div>";
        });

      dom_top_box.classList.remove("h-25");
      dom_top_box.classList.add("h-100");
      break;
  }
}
