let dom_push_list;

function push_list(action) {
  switch (action) {
    case "clear":
      dom_push_list.innerHTML = "";
      break;

    case "listen":
      firebase
        .database()
        .ref(cur_room + "/" + cur_post)
        .on("value", snapshot => {
          dom_push_list.innerHTML = "";

          snapshot.forEach(child => {
            if (child.key != "user" && child.key != "type" && child.key != "title" && child.key != "content") {
              dom_push_list.innerHTML +=
                "<a class='my-1 rounded list-group-item list-group-item-action' id='" +
                child.key +
                "' href='#'>[ " +
                child.val().type +
                " ] - " +
                child.val().content +
                " - (" +
                child.val().user +
                " )</a>\n";
            }
          });
        });
      break;

    case "hide":
      dom_push_list.style.display = "none";
      break;

    case "show":
      dom_push_list.style.display = "flex";
      break;
  }
}
