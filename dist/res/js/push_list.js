let dom_push_list,dom_push_edit,dom_push_summit;function push_list(e){switch(e){case"clear":dom_push_list.innerHTML="";break;case"listen":firebase.database().ref(cur_room+"/"+cur_post).on("value",e=>{dom_push_list.innerHTML="",e.forEach(e=>{"user"!=e.key&&"type"!=e.key&&"title"!=e.key&&"content"!=e.key&&(dom_push_list.innerHTML+="<a class='my-1 rounded list-group-item list-group-item-action' id='"+e.key+"' href='#'>[ "+e.val().type+" ] - "+e.val().content+" - ("+e.val().user+" )</a>\n")})});break;case"hide":dom_push_list.style.display="none";break;case"show":dom_push_list.style.display="flex"}}