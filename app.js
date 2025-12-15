const firebaseConfig = {
  apiKey: "AIzaSyDDy_Xtsd_4gfJrTyVhNHOJcT4ie9sG43s",
  authDomain: "examloop.firebaseapp.com",
  projectId: "examloop"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// LOGIN
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  auth.signInWithEmailAndPassword(email, password)
    .then(() => {
      window.location.href = "index.html";
    })
    .catch(err => alert(err.message));
}

// LOGOUT (WORKING)
function logout() {
  auth.signOut().then(() => {
    window.location.href = "login.html";
  });
}

// PAGE PROTECTION (SAFE)
auth.onAuthStateChanged(user => {
  const page = window.location.pathname;

  if (!user && page.endsWith("index.html")) {
    window.location.href = "login.html";
  }
});
