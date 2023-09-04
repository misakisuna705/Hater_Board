let user_email;
let dom_user_state;
let dom_user_account;
let dom_logbox;
let dom_facebook_sign_in;
let dom_google_sign_in;
let dom_email_login;
let dom_email_sign_up;
let dom_email;
let dom_password;

function sign_up() {
  firebase
    .auth()
    .createUserWithEmailAndPassword(dom_email.value, dom_password.value)
    .then(result => {
      alert("Success!");

      dom_email.value = "";
      dom_password.value = "";

      auth_build(result.user);
    })
    .catch(error => {
      alert(error.message);
      dom_email.value = "";
      dom_password.value = "";
    });
}

function sign_facebook() {
  let provider = new firebase.auth.FacebookAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      auth_build(result.user);
    })
    .catch(error => {
      alert(error.message);
    });
}

function sign_google() {
  let provider = new firebase.auth.GoogleAuthProvider();

  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      auth_build(result.user);
    })
    .catch(error => {
      alert(error.message);
    });
}

function sign_email() {
  firebase
    .auth()
    .signInWithEmailAndPassword(dom_email.value, dom_password.value)
    .then(result => {
      auth_update(result.user);
    })
    .catch(error => {
      alert(error.message);
      dom_email.value = "";
      dom_password.value = "";
    });
}

function sign_out() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      window.location.reload("index.html");
    })
    .catch(error => {
      alert(error.message);
    });
}

function auth_build(user) {
  let count = 1;

  let post = {
    user: user.uid,
    email: user.email,
    login: count
  };

  firebase
    .database()
    .ref("user")
    .child(user.uid)
    .set(post);
}

function auth_update(user) {
  let count;

  firebase
    .database()
    .ref("user/" + user.uid)
    .once("value", snapshot => {
      count = snapshot.val().login + 1;

      let post = {
        user: user.uid,
        email: user.email,
        login: count
      };

      firebase
        .database()
        .ref("user")
        .child(user.uid)
        .set(post);
    });
}

function auth_show() {
  top_box_update("account");

  document.getElementsByClassName("nav_list")[0].classList.remove("show");

  post_list("hide");
  push_list("hide");
  post_edit_box("hide");
  push_edit_box("hide");
}
